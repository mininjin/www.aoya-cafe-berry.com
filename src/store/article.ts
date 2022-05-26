import { S3Object } from "./../plugins/api/types";
import { Article } from "@/plugins/api/types";
import { ref, computed } from "vue";
import utils from "@/plugins/utils";
import {
  ARTICLE_LIMIT,
  DATE_SPLITTER,
  ARTICLE_LIMIT_MONTHLY,
} from "@/constants";
import api from "@/plugins/api";
import { Storage } from "aws-amplify";

type ArticlePayload = Omit<Article, "thumbnail"> & {
  thumbnail: S3Object & { image?: string };
};

const state = () => {
  const today = new Date();
  const todayPayload = utils.getDatePayload(today);
  const articles = ref<ArticlePayload[]>([]);
  const article = ref<ArticlePayload>();
  const year = ref(todayPayload[0]);
  const month = ref(todayPayload[1]);
  const yearMonth = computed(() =>
    [year.value, ("0" + month.value).slice(-2)].join(DATE_SPLITTER)
  );
  const nextToken = ref<string>();
  const loading = ref(false);
  const setArticles = async (isMonthly?: boolean, exceptFuture?: boolean) => {
    try {
      loading.value = true;
      const { data } = await api.articleByPublishedAt({
        limit: isMonthly ? ARTICLE_LIMIT_MONTHLY : ARTICLE_LIMIT,
        publishedAt: exceptFuture
          ? {
              le: utils.getTimeStampFromDate(
                utils.getDateString(utils.getDatePayload(new Date()))
              ),
            }
          : undefined,
        filter: {
          publishedYearMonth: isMonthly ? { eq: yearMonth.value } : undefined,
        },
        nextToken: nextToken.value,
      });
      const items: Article[] =
        (data?.ArticleByPublishedAt?.items.filter(
          (v) => v != null
        ) as Article[]) || [];
      if (nextToken.value) {
        await Promise.all(
          items.map(async (v) => {
            const { thumbnail } = v;
            const image = await Storage.get(thumbnail.key);
            articles.value.push({
              ...v,
              thumbnail: { ...thumbnail, image },
            });
          })
        );
      } else {
        articles.value = await Promise.all(
          items.map(async (v) => {
            const { thumbnail } = v;
            const image = await Storage.get(thumbnail.key);
            return {
              ...v,
              thumbnail: { ...thumbnail, image },
            };
          })
        );
      }
      nextToken.value = data?.ArticleByPublishedAt?.nextToken || undefined;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };
  const setArticle = (data?: ArticlePayload) => (article.value = data);
  const init = () => {
    article.value = undefined;
    articles.value = [];
    nextToken.value = undefined;
  };

  return {
    today,
    loading,
    articles,
    year,
    month,
    setArticles,
    article,
    setArticle,
    nextToken,
    init,
  };
};

export default state;

export type ArticleState = ReturnType<typeof state>;
export const ArticleStateKey = "articles";
