<template>
  <div class="py-5 px-3 max-w-2xl mx-auto">
    <form class="flex items-stretch space-x-2 mb-4 text-lg" @submit.prevent="search">
      <LoadingButton type="submit" :loading="loading" :valid="MONTHS.includes(month) && year > 2000"
        class="bg-file text-base mr-2 flex items-center">
        <FontAwesomeIcon icon="arrow-rotate-right" class="w-6 h-6" />
      </LoadingButton>
      <input v-model="year" type="number" inputmode="numeric" class="p-2 border-2 border-input shadow" min="2002"
        max="9999">
      <input v-model="month" type="number" inputmode="numeric" class="p-2 border-2 border-input shadow" max="12"
        min="1">
      <div class="flex-auto"></div>
    </form>
    <!-- create -->
    <div class="text-right mb-4">
      <button class="p-2 bg-sub rounded-xl shadow-bold" @click="goUpdate()">
        <FontAwesomeIcon icon="plus" class="w-8 h-8 text-white" />
      </button>
    </div>
    <!-- table -->
    <table class="mb-4 text-lg w-full">
      <!-- labels -->
      <thead class="mb-4 border-b-2 border-black">
        <th class="p-2">公開日</th>
        <th class="p-2">タイトル</th>
        <th class="flex justify-center p-2">削除</th>
      </thead>
      <!-- site list -->
      <transition enter-active-class="transition-all" enter-from-class="opacity-0" leave-active-class="transition-all"
        leave-to-class="opacity-0">
        <div v-if="loading && nextToken == undefined" class="flex items-center justify-center text-sub w-full py-4">
          <Loading class="flex items-center justify-center" />
        </div>
        <tbody v-else>
          <tr v-for="(data, i) in articles" class="odd:bg-white even:bg-input">
            <td class="p-2">{{ utils.getDateFromDateTime(data.publishedAt) }}</td>
            <td class="p-2 underline" @click="goUpdate(data)">{{ data.title }}</td>
            <td class="flex items-center justify-center p-2">
              <button class="bg-sub py-2 px-5 text-white flex items-center rounded-xl shadow-bold"
                @click="setDelete(data)">
                <FontAwesomeIcon icon="xmark" class="w-6 h-6 text-white" />
              </button>
            </td>
          </tr>
        </tbody>
      </transition>
    </table>
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
    <div v-else-if="articles.length == 0" class="text-xl">お知らせはありません</div>
    <!-- delete modal -->
    <transition enter-active-class="transition-all" enter-from-class="opacity-0" leave-active-class="transition-all"
      leave-to-class="opacity-0">
      <Modal v-if="article && deleteModal">
        <div class="mb-4 text-xl font-bold text-left">項目の削除</div>
        <div class="mb-2">削除する場合はお知らせタイトル({{ article.title }})を入力して削除ボタンを押してください。</div>
        <div class="mb-4">
          <input v-model="deleteName" type="text" :placeholder="article.title"
            class="w-full p-2 rounded bg-white border-input border-2">
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <button class="p-4 bg-tertiary rounded-xl w-full shadow-bold" @click="setDelete()">キャンセル</button>
          </div>
          <LoadingButton :loading="loading" :valid="deleteName == article.title"
            class="bg-submit text-white rounded-xl w-1/2 flex items-center justify-center shadow-bold disabled:opacity-50 text-base"
            @click="deleteArticle">削除</LoadingButton>
        </div>
      </Modal>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ArticleState, ArticleStateKey } from '@/store/article';
import { inject, onMounted, ref } from 'vue';
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
import { useRouter } from 'vue-router';
import { ROUTE } from '@/router';
import utils from '@/plugins/utils';
import api from '@/plugins/api';
import Modal from '@/components/layouts/Modal.vue';
import LoadingButton from '@/components/UI/LoadingButton.vue';
import { MONTHS } from "@/constants"
import Loading from '@/components/UI/Loading.vue';

const router = useRouter()
const { articles, setArticles, setArticle, article, year, month, loading, init, nextToken } = inject(ArticleStateKey) as ArticleState;

const deleteName = ref<string>("");
const deleteModal = ref(false);
const setDelete = (data?: typeof article.value) => {
  setArticle(data)
  deleteModal.value = data != undefined
}
const deleteArticle = async () => {
  try {
    loading.value = true
    if (article.value?.id) {
      await api.deleteArticle({ input: { id: article.value.id } });
    }
    setDelete();
  } catch (error) {
  } finally {
    deleteName.value = ""
    await search();
  }
}
const search = async () => {
  init()
  await setArticles(true)
}

const goUpdate = (data?: typeof article.value) => {
  if (data) setArticle(data);
  router.push(ROUTE.ARTICLE);
}

onMounted(async () => {
  await search();
});

</script>

<style scoped>
</style>