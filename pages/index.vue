<template>
  <div class="bg-primary h-full p-4">
    <!-- Hero Slide -->
    <div id="hero" class="hero grid bg-primary grid-cols-3 flex flex-wrap p-2 shadow shadow-sm place-items-center">
      <div class="md:mx-10">
        <h1 class="md:hidden block text-indigo-500 z-10 font-bold text-center md:text-left  md:text-xl">
          Mobile <span class="text-white">Developer</span>
        </h1>
        <div class="font-bold text-center md:text-left  md:text-xl hidden md:block">
          <h1 class="text-xl text-indigo-500">Hi, Saya </h1>
          <span class="text-white"> Yudha Wahyu Pratama,</span>
        </div>
        <div class="d-flex justify-content-between">
          <button
            class="bg-blue-400 hover:bg-blue-500 text-white  font-bold py-2 px-5 rounded inline-flex items-center mt-2 mr-2">
            <svg class=" w-5 h-5 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#FFFFFF"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round">
                </rect>
              </g>
            </svg>
            <span>Email</span>
          </button>
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-2">
            <svg class=" w-5 h-5 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <span>Download CV</span>
          </button>
        </div>
        <div class="social-media flex flex-wrap my-2">
          <nuxt-link :to="link.url" v-for="link in socialLinks" :key="link.name" target="blank">
            <font-awesome-icon :icon="['fas', link.icon]" />
          </nuxt-link>
        </div>
        <fa :icon="['fas', 'coffee']" />
      </div>
      <div class="z-0 gambar"></div>
      <div class="text1 md:mx-10">
        <h1 class="md:hidden block text-indigo-500 z-10 font-bold text-center md:text-left  md:text-2xl">
          Frontend <span class="text-white">Developer</span>
        </h1>
        <div class="hidden md:block text-indigo-500 z-10 font-bold md:text-left md:text-xl ">
          <span v-if="showText === 1" class="animate-typing">{{ mobile }} <small class="text-white hidden md:block text-2xl
            animate-none">Developer</small></span>
          <p v-else class="animate-typing">{{ web }} <small
              class="text-white hidden md:block text-2xl animate-none">Developer</small>
          </p>
        </div>
        <p class="text-xs text-justify text-white hidden md:block indent-8">
          Saya seorang Front End Developer dengan lebih dari 2 tahun pengalaman, menguasai Vue.js, Nuxt.js, React.js, dan
          Node.js di Front End, serta mahir dalam pengembangan mobile menggunakan Flutter dan React Native. Selama
          perjalanan ini, saya membangun fondasi kuat untuk menciptakan solusi holistik, menggabungkan kecanggihan teknis
          dengan keindahan estetis dan responsivitas. Saya yakin bahwa sinergi antara keahlian Front End dan mobile saya
          dapat memberikan nilai tambah yang signifikan pada setiap proyek. Dengan semangat eksplorasi dan kreativitas
          yang tak pernah surut, saya siap menjelajahi terobosan luar biasa dalam dunia yang terus berkembang ini. 🚀
        </p>
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
          <h3 class="text-white">Frontend Web</h3>
          <div>
            <svg width="64px" height="64px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M0.5 12.5L6.5 2.5L12.5 12.5H0.5Z" stroke="#FFFFFF" stroke-linejoin="round"></path>
                <path d="M4.5 12.5L9.5 4L14.5 12.5H4.5Z" stroke="#FFFFFF" stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "landing",
});
import Slider from '~/components/partial/slider.vue';

export default {
  data() {
    return {
      mobile: "Mobile",
      web: "Frontend",
      showText: 1,
      socialLinks: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/ceceliacreates',
          icon: 'twitter-square'

        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/@ceceliacreates',
          icon: 'youtube-square'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/ceceliacreates',
          icon: 'github-square'
        }

      ]
    };
  },
  components: {
    Slider
  },
  mounted() {
    setInterval(() => {
      this.showText = this.showText === 1 ? 2 : 1;
    }, 5000);
  },
}
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}


.animate-typing {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(24) infinite;
}

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
