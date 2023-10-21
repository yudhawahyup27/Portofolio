
<script >
definePageMeta({
  layout: "landing",

});
import Slider from '~/components/partial/slider.vue';
export default {
  components: {
    Slider
  }
}
</script>
<template>
  <div>
    <!-- Hero Slide -->
    <div id="hero" class="hero grid bg-[#0f172a]  grid-cols-3 flex flex-wrap p-2  shadow shadow-sm  place-items-center">
      <div class="text1  md:mx-10 ">
        <h1 class="text-white md:text-indigo-500 z-10 font-bold text-center md:text-left my-2 md:text-xl">Mobile <span
            class="text-white"> Developer</span></h1>
        <span class="text-xs text-justify text-white  hidden md:block ">Seorang programmer junior mobile developer yang
          mahir dalam Flutter dan Kotlin, berfokus pada pembuatan aplikasi lintas platform dan Android. Saya berdedikasi
          dalam mempelajari dan mengimplementasikan solusi kreatif dalam pengembangan aplikasi. </span>
      </div>
      <div class="z-0 gambar">
      </div>
      <div class="md:mx-10 ">
        <h1 class="text-indigo-500 font-bold  text-center md:text-left my-2 md:text-xl">Front End<span class="text-white">
            Developer</span></h1>
        <span class="text-xs text-white  text-justify hidden md:block">
          Seorang programmer junior frontend developer yang menguasai bahasa Vue/Nuxt, React, Bootstrap, Tailwind, Svelte,
          Angular, dan Ember. Berdedikasi untuk menciptakan antarmuka menarik dan siap belajar lebih dalam untuk
          pengembangan tampilan web yang dinamis.</span>
      </div>

    </div>
    <!-- Service -->
    <div class="text-center  bg-[#333647]  py-2  text-white ">
      <h1 class="text-white  font-bold text-2xl">Services</h1>
      <span>,dkfmafkafmadfmlafmadfmladmfamfla</span>
      <!-- <hr class="border-white  my-1 border-1 mx-96"> -->
    </div>
    <div class="grid grid-cols-2 py-6 bg-[#333647] text-white">
      <div class="">
        <img class="w-72 h-72 md:w-80 md:h-80 mx-auto" src="../src/assets/Img/web-development.png" />
      </div>
      <div class="mx-1 text-white ">
        <h1 class="text-white  font-bold text-2xl">Frontend Developer</h1>
        <p class="text-xs  my-2">Seorang programmer junior frontend developer yang menguasai bahasa Vue/Nuxt, React,
          Bootstrap, Tailwind, Svelte, Angular, dan Ember. Berdedikasi untuk menciptakan antarmuka menarik dan siap
          belajar lebih dalam untuk pengembangan tampilan web yang dinamis.</p>
        <span>Tech Stack Andalan</span>
        <div class="flex flex-wrap my-3 ">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/Vue.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/nuxt.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/React.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/Tailwind.png" alt="" srcset="">
          <img class="w-12 h-12 md:w-16 md:h-16" src="../src/assets/Img/Bootstrap.png" alt="" srcset="">
          <img class="w-12 h-12 md:w-16 md:h-16" src="../src/assets/Img/axios.png" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2  py-6  bg-[#140E26] text-white p-4">
      <div class="mx-1">
        <h1 class="text-white  font-bold text-2xl">Mobile Developer</h1>
        <p class="text-xs my-2  mx-auto">Seorang programmer junior frontend developer yang menguasai bahasa Vue/Nuxt, .
        </p>
        <span>Tech Stack Andalan</span>
        <div class="flex flex-wrap my-2">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/Kotlin.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/flutter.png" alt="" srcset="">
          <img class="w-8 h-8 md:w-12 mx-2 my-1 md:h-12" src="../src/assets/Img/Android_Studio_.png" alt="" srcset="">
        </div>

      </div>
      <div>
        <img class="w-72 h-72 md:w-80 md:h-80 mx-auto" src="../src/assets/Img/mobile-app.png" />
      </div>
    </div>
    <div class="grid grid-cols-2 py-6 bg-[#333647] text-white">
      <div class="">
        <img class="w-72 h-72 md:w-80 md:h-80 mx-auto" src="../src/assets/Img/web-development.png" />
      </div>
      <div class="mx-1 text-white ">
        <h1 class="text-white  font-bold text-2xl">Backend Developer</h1>
        <p class="text-xs  my-2">Seorang programmer junior frontend developer yang menguasai bahasa Vue/Nuxt, React,
          Bootstrap, Tailwind, Svelte, Angular, dan Ember. Berdedikasi untuk menciptakan antarmuka menarik dan siap
          belajar lebih dalam untuk pengembangan tampilan web yang dinamis.</p>
        <span>Tech Stack Andalan</span>
        <div class="flex flex-wrap my-3 ">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/node.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/nuxt.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/React.png" alt="" srcset="">
          <img class="w-10 h-10 md:w-14 md:h-14" src="../src/assets/Img/Tailwind.png" alt="" srcset="">
          <img class="w-12 h-12 md:w-16 md:h-16" src="../src/assets/Img/Bootstrap.png" alt="" srcset="">
          <img class="w-12 h-12 md:w-16 md:h-16" src="../src/assets/Img/axios.png" alt="" srcset="">
        </div>
      </div>
    </div>
    <!-- Slider Portofolio -->
    <div class="bg-[#0f172a] ">
      <h4 class="text-base text-white text-center  p-2">Portofolio</h4>
      <Slider/>
    </div>
  </div>
</template>

<style>
.gambar {
  width: 384px;
  height: 384px;
  background-image: url("../src/assets/Img/heroimg.png");
  background-size: cover;
  transition: background-image 0.3s ease-in-out;
}

.gambar:hover {
  background-image: url("../src/assets/Img/foto.png");
}
</style>
