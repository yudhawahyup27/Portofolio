<template>
  <div class="bg-primary h-full p-4">
    <!-- Hero Slide -->
    <div
      id="hero"
      class="hero grid bg-primary grid-cols-3 flex flex-wrap p-2 shadow shadow-sm place-items-center"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="md:mx-10"
      >
        <h1
          class="md:hidden block text-indigo-500 z-10 font-bold text-center md:text-left md:text-xl"
        >
          Mobile <span class="text-white">Developer</span>
        </h1>
        <div
          class="font-bold text-center md:text-left md:text-xl hidden md:block"
        >
          <h1 class="text-xl text-indigo-500">Hi, I am</h1>
          <span class="text-white">Yudha Wahyu Pratama</span>
        </div>
        <div class="d-flex justify-content-between hidden md:block">
          <a href="mailto:wyudha104@gmail.com">
            <button
              class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded inline-flex items-center mt-2 mr-2"
            >
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
                src="/assets/svg/email.svg"
                alt="email"
              />
              <span>Email</span>
            </button>
          </a>
          <a href="~/publi"></a>
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-2"
          >
            <NuxtImg
              class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
              src="/assets/svg/download.svg"
              alt="download"
            />
            <span>Download CV</span>
          </button>
        </div>
        <div
          class="social-media md:flex flex-wrap my-4 gap-2 cursor-pointer hidden"
        >
          <nuxt-link to="https://www.linkedin.com/in/yudha-wahyu-pratama/">
            <span
              class="opacity-0 bg-black text-white text-center text-xs rounded py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300"
            >
              LinkedIn Profile
            </span>
          </nuxt-link>
          <nuxt-link to="https://www.instagram.com/nairobi.js/"> </nuxt-link>
          <nuxt-link to="https://github.com/yudhawahyup27/"> </nuxt-link>
          <nuxt-link to="https://mastama.my.id"> </nuxt-link>
        </div>
      </div>

      <NuxtImg
        class="w-100 object-cover object-center"
        :src="gambarList[gambarIndex]"
        alt="Gambar"
        width="300"
        height="350"
      />
      <div class="text1 md:mx-10">
        <h1
          class="md:hidden block text-indigo-500 z-10 font-bold text-center md:text-left md:text-2xl"
        >
          Frontend <span class="text-white">Developer</span>
        </h1>
        <div
          class="hidden md:flex md:flex-wrap text-indigo-500 z-10 font-bold md:text-left md:text-xl my-4"
        >
          <span v-if="showText === 1" class="mx-2 text-2xl">{{ mobile }} </span>
          <span v-else-if="showText === 2" class="mx-2 text-2xl">{{
            web
          }}</span>
          <span v-else class="mx-2 text-2xl">{{ qa }}</span>
          <small
            v-if="showText === 1 || showText === 2"
            class="text-white md:block text-2xl animate-none"
          >
            Developer
          </small>
          <small
            v-if="showText === 3"
            class="text-white md:block text-2xl animate-none"
          >
            Atomatic
          </small>
        </div>
        <p class="text-xs text-justify text-white hidden md:block indent-8">
          My name is Yudha. I successfully graduated as Diploma of Informatic
          Management, State Polytechnic of Malang. A skilled Fullstack developer
          with 2+ years in website and android app development using PHP,
          Javascript and Kotlin. I am always willing to learn new technologies
          in full stack development, to provide innovative and efficient
          software development solutions. I am committed to continuously
          improving my skills and knowledge, to provide the best results in
          software development.
        </p>
      </div>
    </div>
    <div class="md:hidden block">
      <div class="h-5 border-b-4 border-white text-2xl mb-5 md:hidden block">
        <span class="bg-primary pr-4 text-3xl text-white">About Me</span>
      </div>

      <div class="text1 md:mx-10">
        <p class="text-xs text-justify text-white md:hidden block indent-8">
          My name is Yudha. I successfully graduated as Diploma of Informatic
          Management, State Polytechnic of Malang. A skilled Fullstack developer
          with 2+ years in website and android app development using PHP,
          Javascript and Kotlin. I am always willing to learn new technologies
          in full stack development, to provide innovative and efficient
          software development solutions. I am committed to continuously
          improving my skills and knowledge, to provide the best results in
          software development.
        </p>
      </div>
      <div class="d-flex justify-content-between md:hidden block">
        <a href="mailto:wyudha104@gmail.com">
          <button
            class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded inline-flex items-center mt-2 mr-2"
          >
            <NuxtImg
              class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
              src="/assets/svg/email.svg"
              alt="email"
            />
            <span>Email</span>
          </button>
        </a>
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-2"
        >
          <NuxtImg
            class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
            src="/assets/svg/download.svg"
            alt="download"
          />
          <span>Download CV</span>
        </button>
      </div>
      <div
        class="social-media flex flex-wrap my-4 gap-2 cursor-pointer md:hidden"
      >
        <nuxt-link to="https://www.linkedin.com/in/yudha-wahyu-pratama/">
          <span
            class="opacity-0 bg-black text-white text-center text-xs rounded py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300"
          >
            LinkedIn Profile
          </span>
        </nuxt-link>
        <nuxt-link to="https://www.instagram.com/nairobi.js/"> </nuxt-link>
        <nuxt-link to="https://github.com/yudhawahyup27/"> </nuxt-link>
        <nuxt-link to="https://mastama.my.id"> </nuxt-link>
      </div>
    </div>
    <!-- Teknologi -->
    <div>
      <div class="h-5 border-b-4 border-white text-2xl mb-5">
        <span data-aos="fade-right" class="bg-primary pr-4 text-3xl text-white"
          >Teknologi</span
        >
      </div>
      <span class="mt-4 text-white"
        >I work with the following technologies and tools:</span
      >
      <div class="grid grid-col-1 md:grid-cols-3 gap-4 text-center my-4 p-4">
        <!-- Mobile Dev -->
        <div>
          <h3 class="text-white font-extrabold text-xl my-3">Mobile</h3>
          <div class="grid grid-cols-4 gap-2 mx-auto justify-center">
            <div class="html group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/flutter.svg"
                alt="flutter"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Flutter</span
              >
            </div>
            \
          </div>
        </div>
        <!-- Front end -->
        <div>
          <h3 class="text-white font-extrabold text-xl my-3">Frontend Web</h3>
          <div class="grid grid-cols-4 gap-2">
            <div class="html group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/html.svg"
                alt="html"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >HTML</span
              >
            </div>
            <div class="css group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/css.svg"
                alt="css"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >CSS</span
              >
            </div>
            <div class="js group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/javascript.svg"
                alt="javascript"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Javascript</span
              >
            </div>
            <div class="bootstrap group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/bootstrap.svg"
                alt="bootstrap"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Bootstraps</span
              >
            </div>

            <div class="tailwind group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 white-svg"
                src="/assets/svg/tailwinds.svg"
                alt="tailwinds"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Tailwinds</span
              >
            </div>
            <div class="nuxt group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/nuxt.svg"
                alt="nuxt"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Nuxt</span
              >
            </div>
            <div class="react group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/react.svg"
                alt="react"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >React</span
              >
            </div>
            <div class="vue group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/vue.svg"
                alt="vue"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Vue</span
              >
            </div>
          </div>
        </div>
        <!-- Other -->
        <div>
          <h3 class="text-white font-extrabold text-xl my-3">Other</h3>
          <div class="grid grid-cols-4">
            <div class="html group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/figma.svg"
                alt="figma"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Figma</span
              >
            </div>
            <div class="css group flex relative">
              <NuxtImg
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                src="/assets/svg/cypress.svg"
                alt="cypress"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >Cypress</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portofolio -->
    <div class="h-5 border-b-4 border-white text-2xl mb-5">
      <span class="bg-primary pr-4 text-3xl text-white">Portofolio</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="p-2 rounded-md border-2 border-white bg-white shadow-md">
        <div class="flex justify-center items-center">
          <NuxtImg
            class="rounded-md hover:scale-75"
            src="/assets/svg/bg.png"
            alt=""
          />
        </div>
        <div class="m-2">
          <div>
            <h2 class="font-bold">Neubeum</h2>
          </div>
        </div>
        <div class="text-sm mx-2">
          <p>Web OpenSource untuk component tailwind</p>
        </div>
        <div class="flex gap-2 m-2">
          <nuxt-link
            class="bg-primary p-2 text-white flex gap-2 rounded-md"
            to=""
          >
            <NuxtImg
              width="15"
              height="10"
              class="white-svg"
              src="/assets/svg/github.svg"
              alt=""
            />
            <span class="md:block hidden text-sm">Code</span>
          </nuxt-link>

          <nuxt-link
            class="bg-primary p-2 text-white flex gap-2 rounded-md"
            to=""
          >
            <NuxtImg
              width="15"
              height="10"
              class="white-svg"
              src="/assets/svg/eye.svg"
              alt=""
            />
            <span class="md:block text-sm hidden">Preview</span>
          </nuxt-link>
        </div>

        <span class="mx-2 font-semibold">#Tech</span>
        <!-- Logo -->
        <div class="mt-2 mx-2 flex gap-2">
          <NuxtImg
            src="/assets/svg/next-js.svg"
            width="24"
            alt="Tech Logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "landing",
});
import Slider from "~/components/partial/slider.vue";

export default {
  data() {
    return {
      mobile: "Mobile",
      web: "Frontend",
      qa: "Quality ",
      showText: 1,
      gambarIndex: 0,
      gambarList: [
        "https://iili.io/J41fVoP.png",
        "https://iili.io/J41KHQ9.png",
      ],
    };
  },

  components: {
    Slider,
  },
  mounted() {
    setInterval(() => {
      this.showText = this.showText === 3 ? 1 : this.showText + 1;
      if (this.showText === 3) {
        return this.showText === 1;
      }
      this.gambarIndex = (this.gambarIndex + 1) % this.gambarList.length;
    }, 5000);
  },
};
</script>
