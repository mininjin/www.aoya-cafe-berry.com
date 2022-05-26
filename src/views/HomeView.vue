<script lang="ts" setup>
import StickyHeader from "@/components/StickyHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import TopImage from "@/components/home/TopImage.vue";
import HomeStart from "@/components/home/HomeStart.vue";
import HomeFoods from "@/components/home/HomeFoods.vue";
import HomeAtmosphere from "@/components/home/HomeAtmosphere.vue";
import HomeOwner from "@/components/home/HomeOwner.vue";
import HomeCalender from "@/components/home/HomeCalender.vue";
import HomeInformation from "@/components/home/HomeInformation.vue";
</script>

<template>
  <div>
    <TopImage />
    <div class="relative z-5 bg-theme left-0 lg:max-w-4xl">
      <StickyHeader />
      <HomeStart />
      <HomeInformation />
      <HomeCalender />
      <HomeFoods />
      <HomeAtmosphere />
      <HomeOwner />
      <CommonFooter />
    </div>
  </div>
</template>
