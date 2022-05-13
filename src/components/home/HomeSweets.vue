<template>
  <div class="mb-3 flex flex-col py-5 overflow-x-hidden md:w-1/2 md:overflow-visible mx-auto" ref="container">
    <div class="flex items-start space-x-2">
      <img src="@/assets/images/home/cake.webp" alt="シフォンケーキ"
        :class="`w-1/2 object-contain rounded-xl ${open ? 'animate-fluffy-br' : ''}`" />
      <img src="@/assets/images/home/coffee.webp" alt="コーヒー"
        :class="`w-1/2 object-contain rounded-xl ${open ? 'animate-fluffy-bl' : ''}`" />
    </div>
    <div class="flex items-end space-x-2">
      <div :class="`w-1/3 flex flex-col flex-shrink-0 space-y-2 ${open ? 'animate-fluffy-tr' : ''
      }`">
        <img src="@/assets/images/home/tee.webp" alt="紅茶" class="w-full object-contain rounded-xl" />
        <img src="@/assets/images/home/pudding.webp" alt="プリン" class="w-full object-contain rounded-xl" />
      </div>
      <div class="flex-auto">
        <img src="@/assets/images/home/cheese.webp" alt="チーズケーキ"
          :class="`w-full object-contain rounded-xl ${open ? 'animate-fluffy-tl' : ''}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const container = ref<HTMLElement>();
const open = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (
      container.value &&
      window.scrollY >
      container.value.offsetTop - container.value.clientHeight / 1.5
    ) {
      open.value = true;
    }
  });
});

</script>

<style scoped>
.animate-fluffy-tl {
  animation: fluffyTL 10s ease-out infinite;
}

.animate-fluffy-tr {
  animation: fluffyTR 10s ease-out infinite;
}

.animate-fluffy-bl {
  animation: fluffyBL 10s ease-out infinite;
}

.animate-fluffy-br {
  animation: fluffyBR 10s ease-out infinite;
}

@keyframes fluffyTL {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(-10px, -10px);
  }

  75% {
    transform: translate(10px, 10px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes fluffyTR {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(10px, -10px);
  }

  75% {
    transform: translate(-10px, 10px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes fluffyBL {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(-10px, 10px);
  }

  75% {
    transform: translate(10px, -10px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes fluffyBR {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(10px, 10px);
  }

  75% {
    transform: translate(-10px, -10px);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>