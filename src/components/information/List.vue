<template>
  <section class="py-10 px-3 max-w-xl mx-auto">
    <div class="flex items-center space-x-4 mb-4 text-lg" @submit.prevent="search">
      <button type="button" class="w-8 h-8 flex items-center justify-center disabled:opacity-25"
        @click="changeMonth(-1)">
        <FontAwesomeIcon icon="caret-left" class="w-full h-full text-sub" />
      </button>
      <h1 class="font-strong text-2xl flex-auto text-center">{{ year }}年{{ month }}月のお知らせ</h1>
      <button type="button" class="w-8 h-8 flex items-center justify-center disabled:opacity-25" :disabled="isFuture()"
        @click="changeMonth(1)">
        <FontAwesomeIcon icon="caret-right" class="w-full h-full text-sub" />
      </button>
    </div>
    <transition enter-active-class="transition-all" enter-from-class="opacity-0" leave-active-class="transition-all"
      leave-to-class="opacity-0" mode="out-in">
      <div v-if="loading && nextToken == undefined" class="flex items-center justify-center text-sub w-full py-4">
        <Loading />
      </div>
      <div v-else>
        <div v-for="article in articles" class="mb-16 pb-4">
          <h2 class="mb-4 text-2xl font-bold">
            {{ article.title }}
          </h2>
          <div class="mb-2 text-center">
            <img :src="article.thumbnail.image" class="w-full">
          </div>
          <p class="mb-4 text-base text-right">
            {{ utils.getDateFromDateTime(article.publishedAt) }}
          </p>
          <p class="mb-8 text-lg whitespace-pre-wrap">
            {{ article.content }}
          </p>
          <div class="h-1 bg-sub opacity-50"></div>
        </div>
      </div>
    </transition>
    <div v-if="nextToken && articles.length > 0" class="text-center">
      <transition enter-active-class="transition-all" enter-from-class="opacity-0" leave-active-class="transition-all"
        leave-to-class="opacity-0" mode="out-in">
        <div v-if="loading" class="flex items-center justify-center text-sub w-full py-4">
          <Loading />
        </div>
        <div v-else class="flex items-center justify-center">
          <FontAwesomeIcon icon="caret-down" class="w-8 h-8 text-sub" @click="setArticles(true)" />
        </div>
      </transition>
    </div>
    <p v-else-if="articles.length == 0 && !loading" class="text-xl">お知らせはありません</p>
  </section>
</template>

<script setup lang="ts">
import { ArticleState, ArticleStateKey } from '@/store/article';
import { inject, onMounted } from 'vue';
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
import Loading from '@/components/UI/Loading.vue';
import utils from '@/plugins/utils';

const DECEMBER = 12;
const [thisYear, thisMonth] = utils.getDatePayload(new Date());
const isFuture = () => {
  const next = new Date(year.value, month.value + 1);
  const today = new Date(thisYear, thisMonth)
  return next.getTime() > today.getTime()
}

const { articles, setArticles, year, month, loading, init, nextToken } = inject(ArticleStateKey) as ArticleState;

const changeMonth = async (direction: 1 | -1) => {
  const nextMonth = month.value + direction;
  if (nextMonth < 0) {
    year.value--;
    month.value = DECEMBER
  } else if (nextMonth > DECEMBER) {
    year.value++;
    month.value = 1
  } else {
    month.value = nextMonth
  }
  await search()
}

const search = async () => {
  init()
  await setArticles(true, true)
}

onMounted(async () => {
  await search();
});

</script>

<style scoped>
</style>