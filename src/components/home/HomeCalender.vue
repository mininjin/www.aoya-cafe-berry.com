<template>
  <section class="py-10">
    <SectionTitle title="カレンダー" />
    <Calender v-slot="{ data }">
      <div v-if="data" :class="`p-2 ${data.data?.isRest ? 'bg-sub' : data.data?.unusualOpening ? 'bg-caution' : ''}`">
        <h2 :class="`flex text-2xl font-strong mb-2 space-x-3 ${data.data?.isRest ? 'text-white-important' : ''}`">
          <span>{{ data.date[0] }}年{{ data.date[1]
          }}月{{ data.date[2] }}日
          </span>
          <span :class="(WEEKEND.includes(data.dateIndex) || data.data?.isHoliday) ? 'text-sub' : ''">({{
              DAY_LABELS[data.dateIndex]
          }})</span>
        </h2>
        <p class="text-xl">
          <span v-if="data.data?.isRest" class="text-white">{{ data.data.description || REST_DAY_DESCRIPTION }}</span>
          <span v-else-if="data.data?.unusualOpening">
            {{ data.data?.description || UNUSUAL_OPENING_DESCRIPTION }}
          </span>
          <span v-else>
            {{ data.data?.description || NORMAL_DAY_DESCRIPTION }}
          </span>
        </p>
        <p v-if="data.data?.unusualOpening" class="text-xl">
          営業時間：{{ data.data.unusualOpening.start }}〜{{ data.data.unusualOpening.end }}
        </p>
      </div>
    </Calender>
  </section>
</template>

<script setup lang="ts">
import Calender from '@/components/Calender.vue';
import SectionTitle from '@/components/UI/SectionTitle.vue';
import { DAY_LABELS, WEEKEND, NORMAL_DAY_DESCRIPTION, REST_DAY_DESCRIPTION, UNUSUAL_OPENING_DESCRIPTION } from "@/constants"
import { ref } from 'vue';

const loading = ref(false);

</script>

<style scoped>
.text-white-important {
  color: white !important;
}
</style>