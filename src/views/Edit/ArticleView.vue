<template>
  <form class="py-5 px-3 text-lg mx-auto max-w-md" @submit.prevent="submit">
    <div class="mb-5">
      <label for="title" class="text-xl mb-4 font-strong">タイトル</label>
      <div class="p-2">
        <input id="title" type="text" v-model="title" class="w-full p-2 rounded-lg"
          :placeholder="TITLE_MAX_LENGTH + '文字以内'" :maxlength="TITLE_MAX_LENGTH">
      </div>
    </div>
    <div class="mb-5">
      <div class="text-xl mb-4 font-strong">サムネイル画像</div>
      <div class="flex items-center justify-center mb-2 text-xl">
        <img v-if="image" :src="image" class="w-full max-w-sm">
        <div v-else class="w-full max-w-sm aspect-4/3 flex items-center justify-center bg-tertiary font-bold">
          画像を選択してください</div>
      </div>
      <div class="flex items-center justify-center">
        <label for="thumbnail" class="w-full max-w-sm bg-file rounded-xl shadow-bold text-center p-2">画像を選択</label>
        <input id="thumbnail" type="file" class="hidden" @input="convertFile">
      </div>
    </div>
    <div class="mb-5">
      <label for="content" class="text-xl mb-4 font-strong">お知らせ内容</label>
      <div class="p-2">
        <textarea id="content" type="text" v-model="content" class="w-full p-2 rounded-lg"
          :placeholder="CONTENT_MAX_LENGTH + '文字以内'" :maxlength="CONTENT_MAX_LENGTH"></textarea>
      </div>
    </div>
    <div class="mb-5">
      <label for="date" class="text-xl mb-4 font-strong">公開日</label>
      <div class="p-2">
        <input id="date" type="date" v-model="date" class="w-full p-2 rounded-lg">
      </div>
    </div>
    <div class="flex items-center flex-wrap">
      <LoadingButton :loading="loading" type="submit" :valid="isValid"
        class="w-full rounded-xl bg-submit shadow-bold text-center font-bold flex items-center justify-center mb-4">{{
            article?.id ? "更新"
              : "作成"
        }}</LoadingButton>
      <button type="button"
        class="w-full p-4 rounded-xl bg-tertiary shadow-bold text-center font-bold flex items-center justify-center"
        @click="goBack">戻る</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue';
import utils from "@/plugins/utils"
import storage from "@/plugins/storage"
import api from "@/plugins/api"
import { TITLE_MAX_LENGTH, CONTENT_MAX_LENGTH, DATE_FORMAT } from "@/constants"
import LoadingButton from '@/components/UI/LoadingButton.vue';
import { ArticleStateKey, ArticleState } from "@/store/article"
import { S3ObjectInput } from '@/plugins/api/types';
import { ROUTE } from '@/router';
import { useRouter } from 'vue-router';

const router = useRouter()

const { article, loading, setArticle } = inject(ArticleStateKey) as ArticleState;

const image = ref<string>();
const file = ref<File>();
const title = ref("");
const content = ref("");
const date = ref(utils.getDateString(utils.getDatePayload(new Date())));
const thumbnail = ref<S3ObjectInput & { image?: string }>();
const convertFile = async (event: Event) => {
  const { files } = event.target as HTMLInputElement
  const data = files?.item(0) || undefined;
  if (data) {
    file.value = data
    image.value = await utils.convertToImage(file.value) || undefined
  }
}
const goBack = () => {
  setArticle()
  router.push(ROUTE.EDIT_INFORMATION)
}
const isValid = computed(() => image.value != undefined && title.value.length > 0 && title.value.length <= TITLE_MAX_LENGTH && content.value.length > 0 && content.value.length <= CONTENT_MAX_LENGTH && DATE_FORMAT.test(date.value))
const submit = async () => {
  try {
    loading.value = true
    if (article.value) {
      delete thumbnail.value?.image
      if (file.value) {
        thumbnail.value = await storage.putItem(file.value);
      }
      else if (thumbnail.value == undefined) throw "image error"
      await api.updateArticle({ id: article.value.id, thumbnail: thumbnail.value, title: title.value, content: content.value, publishDate: date.value, });
    } else {
      if (file.value) {
        thumbnail.value = await storage.putItem(file.value);
        await api.createArticle({ thumbnail: thumbnail.value, title: title.value, content: content.value, publishDate: date.value, });
      } else throw "no file"
    }
    goBack()
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (article.value) {
    title.value = article.value.title;
    thumbnail.value = article.value.thumbnail;
    image.value = article.value.thumbnail.image
    content.value = article.value.content;
    date.value = utils.getDateFromDateTime(article.value.publishedAt);
  }
});

</script>

<style scoped>
</style>