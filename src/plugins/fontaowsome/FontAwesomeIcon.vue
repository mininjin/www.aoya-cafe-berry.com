<template>
  <svg v-if="typeof svgPath == 'string'" xmlns="http://www.w3.org/2000/svg" :class="$props.class"
    :viewBox="`0 0 ${width} ${height}`">
    <path fill="currentColor" :d="svgPath" />
  </svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" :class="$props.class" :viewBox="`0 0 ${width} ${height}`">
    <path v-for="(path, i) in svgPath" :key="i" fill="currentColor" :d="path" />
  </svg>
</template>
 
<script lang="ts" setup>
import {
  findIconDefinition,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-svg-core";
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String as () => IconName,
    required: true,
  },
  type: {
    type: String as () => IconPrefix,
    default: "fas",
    required: false,
  },
  class: String,
});

const definition = computed(() =>
  findIconDefinition({
    prefix: props.type,
    iconName: props.icon,
  })
);

const width = computed(() => definition.value.icon[0]);
const height = computed(() => definition.value.icon[1]);
const svgPath = computed(() => definition.value.icon[4]);
</script>