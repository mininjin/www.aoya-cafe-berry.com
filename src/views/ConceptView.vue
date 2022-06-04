<script lang="ts" setup>
import StickyHeader from "@/components/StickyHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import ConceptStart from "@/components/concept/ConceptStart.vue";
import ConceptFoods from "@/components/concept/ConceptFoods.vue";
import ConceptAtmosphere from "@/components/concept/ConceptAtmosphere.vue";
import ConceptOwner from "@/components/concept/ConceptOwner.vue";
</script>

<template>
  <div class="relative z-5 bg-theme left-0 max-w-4xl">
    <StickyHeader />
    <ConceptStart />
    <ConceptFoods />
    <ConceptAtmosphere />
    <ConceptOwner />
    <CommonFooter />
  </div>
</template>
