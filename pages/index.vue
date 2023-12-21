
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
  <div class="bg-primary h-full p-4">
    <!-- Hero Slide -->
    <div id="hero" class="hero grid bg-primary grid-cols-3 flex flex-wrap p-2  shadow shadow-sm  place-items-center">
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
    <!-- Teknologi -->
    <div>
      <div class="h-5 border-b-4 border-white text-2xl mb-5">
        <span class="bg-primary px-5 text-3xl text-white">Teknologi</span>
      </div>
      <span class="mt-4 text-white">I work with the following technologies and tools:</span>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <h3>Frontend Web</h3>
          <div>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M0.5 12.5L6.5 2.5L12.5 12.5H0.5Z" stroke="#ffffff" stroke-linejoin="round"></path>
                <path d="M4.5 12.5L9.5 4L14.5 12.5H4.5Z" stroke="#ffffff" stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>

        </div>
      </div>
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
}</style>
