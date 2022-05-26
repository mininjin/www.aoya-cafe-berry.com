<template>
  <div class="py-5">
    <Calender :calender-date="calenderDate" v-slot="{ data }">
      <form v-if="data" :class="`p-2 ${data.data?.isRest ? 'bg-sub' : ''}`" @submit.prevent="submit">
        <div :class="`flex text-2xl font-strong mb-2 space-x-3 ${data.data?.isRest ? 'text-white-important' : ''}`">
          <span>{{ data.date[0] }}年{{ data.date[1]
          }}月{{ data.date[2] }}日
          </span>
          <span :class="(WEEKEND.includes(data.dateIndex) || data.data?.isHoliday) ? 'text-sub' : ''">({{
              DAY_LABELS[data.dateIndex]
          }})</span>
        </div>
        <input name="dataId" :value="data.data?.id" type="text" disabled class="hidden">
        <input name="date" :value="utils.getDateString(data.date)" type="text" disabled class="hidden">
        <div class="bg-white">
          <div class="text-xl flex items-center border-2 border-b-0 border-sub">
            <label for="isRest" class="mr-3 flex-auto p-2 bg-input border-r-2 border-sub">休み</label>
            <span class="flex-auto">
              <input name="isRest" id="isRest" type="checkbox" :checked="data.data?.isRest ?? false" />
            </span>
          </div>
          <div class="text-xl flex items-center border-2 border-b-0 border-sub">
            <label for="isHoliday" class="mr-3 flex-auto p-2 bg-input border-r-2 border-sub">祝日</label>
            <span class="flex-auto">
              <input name="isHoliday" id="isHoliday" type="checkbox" :checked="data.data?.isHoliday ?? false" />
            </span>
          </div>
          <div class="text-xl border-2 border-sub">
            <label for="description" class="p-2 bg-input border-b-2 border-sub mb-2 block">コメント</label>
            <div class="p-2">
              <textarea name="description" id="description"
                class="w-full h-full p-1 bg-white shadow rounded-lg border-2">{{ data.data?.description ?? NORMAL_DAY_DESCRIPTION }}</textarea>
            </div>
          </div>
        </div>
        <div class="mt-2 p-2 flex items-center justify-center">
          <LoadingButton :loading="loading" type="submit" :valid="true" class="bg-submit text-white">更新
          </LoadingButton>
        </div>
      </form>
    </Calender>
  </div>
</template>

<script setup lang="ts">
import Calender from '@/components/Calender.vue';
import { DAY_LABELS, WEEKEND, NORMAL_DAY_DESCRIPTION } from "@/constants"
import LoadingButton from '@/components/UI/LoadingButton.vue';
import { ref } from 'vue';
import utils from '@/plugins/utils';
import api from '@/plugins/api';
import { CalenderDate } from '@/plugins/api/types';

const loading = ref(false);
const calenderDate = ref<CalenderDate>();
const submit = async ({ target }: Event) => {
  loading.value = true
  const { isRest, isHoliday, dataId, description, date } = target as HTMLFormElement
  const id = dataId.value || undefined
  const values = {
    date: date.value || undefined, isRest: isRest.checked || false, isHoliday: isHoliday.checked || false, description: description.value
  }
  try {
    if (id != undefined) {
      const { data } = await api.updateCalenderData({ id, ...values });
      calenderDate.value = data?.updateCalenderDate || undefined
    } else {
      const { data } = await api.createCalenderData({ ...values });
      calenderDate.value = data?.createCalenderDate || undefined
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

</script>

<style scoped>
.text-white-important {
  color: white !important;
}
</style>