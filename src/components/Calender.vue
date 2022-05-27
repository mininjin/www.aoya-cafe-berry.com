<template>
  <div class="p-2 max-w-lg mx-auto">
    <div class="flex mb-2 text-xl font-bold">
      <button type="button" class="flex-grow-0 p-2" @click="changeMonth(-1)">
        <FontAwesomeIcon icon="caret-left" class="w-8 h-8 text-sub" />
      </button>
      <div class="flex-1 p-2 font-bold">{{ year }}年{{ month }}月</div>
      <button type="button" class="flex-grow-0 p-2" @click="changeMonth(1)">
        <FontAwesomeIcon icon="caret-right" class="w-8 h-8 text-sub" />
      </button>
    </div>
    <ul class="flex items-center mb-2">
      <li v-for="(day, i) in DAY_LABELS"
        :class="`w-1/7 font-strong text-xl flex items-center justify-center p-2 ${WEEKEND.includes(i) ? 'text-sub' : ''}`">
        {{ day }}</li>
    </ul>
    <div v-if="loading" class="flex items-center justify-center p-5">
      <Loading class="text-sub" />
    </div>
    <div v-else>
      <div class="flex flex-col mb-2">
        <div v-for="(week, weekIndex) in weeks" class="bg-tertiary text-2xl font-bold">
          <ul class="flex flex-wrap">
            <li v-for="(date, dateIndex) in week.dates"
              :class="`p-2 w-1/7 aspect-square  ${isDisplayDate(weekIndex, dateIndex) ? '' : ''} flex items-center justify-center shadow-inner ${date.data?.isRest ? 'bg-sub text-white' : `${isDisplayDate(weekIndex, dateIndex) ? 'bg-white' : 'bg-tertiary'} ${date.data?.isHoliday || WEEKEND.includes(dateIndex) ? 'text-sub' : ''}`}`">
              <FontAwesomeIcon v-if="isDisplayDate(weekIndex, dateIndex)" icon="circle-down" class="w-8 h-8" />
              <span v-else-if="date.month == month" class="cursor-pointer"
                @click="setDisplayDateIndexes({ weekIndex, dateIndex })">{{
                    date.date[2]
                }}</span>
              <span v-else class="opacity-25">{{ date.date[2] }}</span>
            </li>
          </ul>
          <transition enter-active-class="date-open" leave-active-class="transition-max-height"
            leave-from-class="max-h-96" leave-to-class="max-h-0">
            <div v-if="weekIndex == displayDateIndexes?.weekIndex" class="bg-white">
              <slot :data="displayDate"></slot>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, } from 'vue';
import useCalender from "@/composables/useCalender"
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
import { WEEKEND, DAY_LABELS } from "@/constants"
import Loading from './UI/Loading.vue';
import { CalenderDate } from '@/plugins/api/types';

const props = defineProps({
  calenderDate: Object as () => CalenderDate
});
const calenderDate = computed(() => props.calenderDate);

const { year, month, displayDate, setDisplayDateIndexes, setWeeks, displayDateIndexes, changeMonth, weeks, loading, updateDateData } = useCalender();

const isDisplayDate = (weekIndex: number, dateIndex: number) => weekIndex == displayDateIndexes.value?.weekIndex && dateIndex == displayDateIndexes.value?.dateIndex

watch(calenderDate, async () => {
  if (calenderDate.value) {
    await updateDateData(calenderDate.value)
  }
});

onMounted(async () => {
  await setWeeks();
});

</script>

<style scoped>
@keyframes date-open {
  0% {
    max-height: 0;
    color: #fff0;
  }

  90% {
    color: #fff0;
  }

  100% {
    color: currentColor;
    max-height: 1000rem
  }
}

.date-open {
  animation: date-open 100ms ease-in-out;
  max-height: 1000rem
}
</style>