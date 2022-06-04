<script lang="ts" setup>
import { ROUTE } from "@/router"
import { COPYRIGHT } from "@/constants"
const scrollToTop = () => window.scrollTo({ top: 0 });
</script>

<template>
  <footer class="bg-sub text-white">
    <div class="relative">
      <img src="@/assets/images/cactus.webp" alt="サボテン"
        class="w-full object-contain md:max-h-52 md:object-cover md:object-center" />
      <div class="
          absolute
          bottom-2
          left-1/4
          text-3xl
          flex
          items-center
          font-bold font-strong
          animate-bounce
        ">
        <font-awesome-icon icon="circle-down" class="h-8 mr-2" />
        <p>FOLLOW US</p>
      </div>
    </div>
    <div class="px-3 py-10 flex items-center justify-center space-x-20">
      <a href="https://www.instagram.com/aoya.cafe_berry" class="inline-flex items-center flex-col" target="_blank"
        rel="noopener noreferrer">
        <font-awesome-icon type="fab" icon="instagram-square" class="h-20" />
        <p class="inline-block text-xl font-bold">Instagram</p>
      </a>
      <a href="https://www.facebook.com/pages/category/Cafe/cafe-Berry-160911504045503/"
        class="inline-flex items-center flex-col" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon type="fab" icon="facebook" class="h-20" />
        <p class="inline-block text-xl font-bold">facebook</p>
      </a>
    </div>
    <div class="pt-10 text-lg">
      <div class="px-3">
        <div class="text-3xl mb-4 font-bold">営業時間</div>
        <div class="px-3 mb-10">
          <p>１０：００～１７：００</p>
        </div>
        <div class="text-3xl mb-4 font-bold">定休日</div>
        <div class="px-3 mb-10">
          <p>月曜日、年末年始</p>
          <p>
            ※月曜が祝日の場合は次の平日。その他のお休みはInstagram、facebookに掲載
          </p>
        </div>
        <div class="text-3xl mb-4 font-bold">アクセス</div>
        <div class="px-3 mb-10">
          <p>〒６８９ー０５１４</p>
          <p>鳥取県鳥取市青谷町山根３１３</p>
        </div>
      </div>
      <div class="text-center w-full mx-auto max-w-xl mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1148.840771772981!2d134.01562977250657!3d35.46933897034134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3555e9814ed4444f%3A0x1e8449d755300897!2scafe%20Berry!5e0!3m2!1sja!2sjp!4v1616407325995!5m2!1sja!2sjp"
          :style="{ border: 0 }" allowFullScreen="" loading="lazy" class="w-full" title="Google Map"></iframe>
      </div>
      <div class="px-3">
        <div class="text-3xl mb-4 font-bold">お問合せ</div>
        <div class="px-3 mb-10">
          <p class="flex items-center">
            TEL：<a href="tel:0857860515" class="inline-flex items-center underline">
              <font-awesome-icon icon="phone-flip" class="h-5 mr-2" />0857-86-0515
            </a>
          </p>
          <p class="flex items-center">
            FAX：
            <font-awesome-icon icon="fax" class="h-5 mr-2" />0857-86-0515
          </p>
        </div>
      </div>
    </div>
    <p class="text-sm text-right p-2"> {{ COPYRIGHT }} </p>
  </footer>
</template>