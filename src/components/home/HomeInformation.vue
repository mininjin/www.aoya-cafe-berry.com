<template>
  <section class="py-5">
    <SectionTitle title="お知らせ" />
    <div class="mt-10">
      <div v-if="loading" class="flex items-center justify-center p-5">
        <Loading class="text-sub" />
      </div>
      <div v-else class="px-4 max-w-lg mx-auto">
        <div v-for="article in articles" class="mb-4 bg-tertiary p-4 rounded-lg shadow border-sub-0.5 border-2">
          <h2 class="mb-2 text-xl font-bold">{{ article.title }}</h2>
          <div class="flex items-stretch space-x-4 text-left w-full h-32">
            <img :src="article.thumbnail.image"
              class="h-full aspect-square object-cover object-left-top flex-grow-0 flex-shrink-0">
            <div class="text-left flex-shrink flex flex-col h-full overflow-hidden">
              <p class="mb-2">{{ utils.getDateFromDateTime(article.publishedAt) }}</p>
              <p class="text-lg w-full overflow-hidden flex-1">
                <span class="inline-block text-ellipsis break-all break-words h-full w-full">
                  {{ article.content }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8 flex items-center justify-center">
          <router-link :to="ROUTE.INFORMATION" class="w-full p-2 text-center bg-sub text-white shadow-bold rounded-xl"
            @click="scrollToTop">もっと見る
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/UI/SectionTitle.vue';
import { inject, onMounted, ref } from 'vue';
import utils from '@/plugins/utils';
import { ArticleState, ArticleStateKey } from '@/store/article';
import { ROUTE } from "@/router"

const loading = ref(false);
const { articles, setArticles, init } = inject(ArticleStateKey) as ArticleState;

const scrollToTop = () => window.scrollTo({ top: 0 });

onMounted(async () => {
  init()
  await setArticles(false, true)
});

</script>

<style scoped>
.text-white-important {
  color: white !important;
}

::-webkit-scrollbar {
  width: 0.2rem;
}

::-webkit-scrollbar-track {
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: var(--sub-color-5);
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .3);
}
</style>