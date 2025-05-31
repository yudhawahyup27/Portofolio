<template>
  <div class="bg-primary p-4">
    <!-- Hero Section -->
    <div
      id="hero"
      class="hero grid bg-primary grid-cols-3 flex-wrap p-2 shadow-sm place-items-center"
    >
      <div>
        <h1
          class="md:hidden block text-indigo-500 z-10 font-bold text-center md:text-left md:text-xl"
        >
          Mobile <span class="text-white">Developer</span>
        </h1>
        <div
          class="font-bold text-center md:text-left md:text-xl hidden md:block"
        >
          <h1 class="text-xl text-indigo-500">Hi, I am</h1>
          <span class="text-white">{{ personalInfo.name }}</span>
        </div>
        <div class="d-flex justify-content-between hidden md:block">
          <a :href="`mailto:${personalInfo.email}`">
            <button
              class="text-white bg-primary border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer font-bold py-2 px-5 rounded inline-flex items-center mt-2 mr-2"
            >
              <img
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
                src="/assets/svg/email.svg"
                alt="email"
              />
              <span>Email</span>
            </button>
          </a>
          <a :href="personalInfo.cvUrl">
            <button
              class="text-white bg-primary border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer font-bold py-2 px-4 rounded inline-flex items-center mt-2"
            >
              <img
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
                src="/assets/svg/download.svg"
                alt="download"
              />
              <span>Download CV</span>
            </button>
          </a>
        </div>
        <div
          class="social-media md:flex flex-wrap my-4 gap-2 cursor-pointer hidden"
        >
          <nuxt-link 
            v-for="social in personalInfo.socialMedia" 
            :key="social.name"
            :to="social.url"
          >
            <div
              v-if="social.name === 'GitHub'"
              class="text-center flex justify-center bg-white p-1 w-8 h-8 rounded-full"
            >
              <img :src="social.icon" :alt="social.name" />
            </div>
            <img 
              v-else
              :src="social.icon" 
              :alt="social.name" 
              :class="social.class || ''"
            />
          </nuxt-link>
        </div>
      </div>

      <img
        class="h-56"
        :src="currentImage"
        alt="Profile"
        width="300"
        height="300"
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
          <span
            v-if="showText === 1"
            class="mx-2 transition ease-in delay-150 text-2xl"
            data-aos="zoom-in"
          >
            {{ personalInfo.roles[0] }}
          </span>
          <span
            v-else-if="showText === 2"
            class="mx-2 transition ease-in delay-150 text-2xl"
            data-aos="flip-up"
          >
            {{ personalInfo.roles[1] }}
          </span>
          <span
            data-aos="flip-right"
            v-else
            class="mx-2 text-2xl transition ease-in delay-150"
          >
            {{ personalInfo.roles[2] }}
          </span>
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
            Automatic
          </small>
        </div>
        <p
          id="aboutme"
          class="text-xs text-justify text-white hidden md:block indent-8"
        >
          {{ personalInfo.about }}
        </p>
      </div>
    </div>

    <!-- Mobile About Section -->
    <div class="md:hidden block">
      <div class="h-5 border-b-4 border-white text-2xl mb-5 md:hidden block">
        <span id="aboutme" class="bg-primary pr-4 text-3xl text-white">About Me</span>
      </div>

      <div class="text1 md:mx-10">
        <p class="text-xs text-justify text-white md:hidden block indent-8">
          {{ personalInfo.about }}
        </p>
      </div>

      <div class="d-flex justify-content-between md:hidden block">
        <a :href="`mailto:${personalInfo.email}`">
          <button
            class="text-white bg-primary border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] font-bold py-2 px-5 rounded inline-flex items-center mt-2 mr-2"
          >
            <img
              class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
              src="/assets/svg/email.svg"
              alt="email"
            />
            <span>Email</span>
          </button>
        </a>
        <nuxt-link
          :to="personalInfo.cvUrl"
          class="text-white bg-primary border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] font-bold py-2 px-4 rounded inline-flex items-center mt-2"
        >
          <img
            class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6 w-6 mx-2"
            src="/assets/svg/download.svg"
            alt="download"
          />
          <span>Download CV</span>
        </nuxt-link>
      </div>
      
      <div class="social-media flex flex-wrap my-4 gap-2 cursor-pointer md:hidden">
        <nuxt-link 
          v-for="social in personalInfo.socialMedia" 
          :key="social.name"
          :to="social.url"
        >
          <div
            v-if="social.name === 'GitHub'"
            class="text-center flex justify-center bg-white p-1 w-8 h-8 rounded-full"
          >
            <img :src="social.icon" :alt="social.name" />
          </div>
          <img 
            v-else
            :src="social.icon" 
            :alt="social.name" 
            :class="social.class || ''"
          />
        </nuxt-link>
      </div>
    </div>

    <!-- Technologies Section -->
    <div id="tekno">
      <div class="h-5 border-b-4 border-white text-2xl mb-5">
        <span class="bg-primary pr-4 text-3xl text-white">Teknologi</span>
      </div>
      <span class="mt-4 text-white">I work with the following technologies and tools:</span>
      <div class="grid grid-col-1 md:grid-cols-3 gap-4 text-center my-4 p-4">
        
        <!-- Mobile Technologies -->
        <div>
          <h3 class="text-white font-extrabold text-xl my-3">Mobile</h3>
          <div class="grid grid-cols-4 gap-2 mx-auto justify-center">
            <div
              v-for="tech in technologies.mobile"
              :key="tech.name"
              class="html group flex relative"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                :src="tech.icon"
                :alt="tech.alt"
                :class="tech.class || ''"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Frontend Technologies -->
        <div>
          <h3 class="text-white font-extrabold text-xl my-3">Frontend Web</h3>
          <div class="grid grid-cols-4 gap-2">
            <div
              v-for="tech in technologies.frontend"
              :key="tech.name"
              class="html group flex relative"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                :src="tech.icon"
                :alt="tech.alt"
                :class="tech.class || ''"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Other Technologies -->
        <div>
          <h3 class="text-white font-extrabold text-xl my-3">Other</h3>
          <div class="grid grid-cols-4">
            <div
              v-for="tech in technologies.other"
              :key="tech.name"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              class="html group flex relative"
            >
              <img
                class="transform hover:scale-110 hover:rotate-10 hover:skew-y-6"
                :src="tech.icon"
                :alt="tech.alt"
                :class="tech.class || ''"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Section -->
    <div id="porto" class="h-5 border-b-4 border-white text-2xl mb-5">
      <span class="bg-primary pr-4 text-3xl text-white">Portofolio</span>
    </div>

    <!-- Web Projects -->
    <div class="flex text-2xl font-bold my-3">
      <span class="text-indigo-500">&lt;</span>
      <span class="text-white">Web </span>
      <span class="text-indigo-500">/&gt;</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
      <div
        v-for="project in portfolios.web"
        :key="project.id"
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="p-2 rounded-md text-white border-white bg-primary border shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer"
      >
        <div class="flex p-2 justify-center items-center bg-white rounded-lg">
          <img
            class="rounded-lg hover:scale-75 hover:transition-all hover:duration-200 hover:ease-in-out h-40"
            :src="project.image"
            :alt="project.title"
          />
        </div>
        <div class="m-2">
          <div>
            <h2 class="font-bold">{{ project.title }}</h2>
          </div>
        </div>
        <div class="text-sm mx-2 truncate">
          <p class="truncate">{{ project.description }}</p>
        </div>
        <div class="flex gap-2 m-2">
          <nuxt-link
            v-if="project.github"
            class="border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer bg-primary p-2 font-semibold text-white flex gap-2 rounded-md"
            :to="project.github"
          >
            <img
              width="15"
              height="10"
              class="white-svg"
              src="/assets/svg/github.svg"
              alt=""
            />
            <span class="md:block hidden text-sm">Code</span>
          </nuxt-link>

          <nuxt-link
            v-if="project.preview"
            :to="project.preview"
            class="bg-primary border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer p-2 text-white font-semibold flex gap-2 rounded-md"
          >
            <img
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
        <div class="mt-2 mx-2 flex gap-2">
          <img
            v-for="tech in project.technologies"
            :key="tech.name"
            :class="tech.class || ''"
            :src="tech.icon"
            width="24"
            :alt="tech.name"
          />
        </div>
      </div>
    </div>

    <!-- API Projects -->
    <div class="flex text-2xl font-bold my-3 gap-1">
      <span class="text-indigo-500">{</span>
      <span class="text-white">"type:" </span>
      <span class="text-white">"API" </span>
      <span class="text-indigo-500">}</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
      <div
        v-for="project in portfolios.api"
        :key="project.id"
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="p-2 rounded-md text-white border-white bg-primary border shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer"
      >
        <div class="flex p-2 justify-center items-center bg-white rounded-lg">
          <img
            class="rounded-lg hover:scale-75 hover:transition-all hover:duration-200 hover:ease-in-out h-40"
            :src="project.image"
            :alt="project.title"
          />
        </div>
        <div class="m-2">
          <div>
            <h2 class="font-bold">{{ project.title }}</h2>
          </div>
        </div>
        <div class="text-sm mx-2 truncate">
          <p class="truncate">{{ project.description }}</p>
        </div>
        <div class="flex gap-2 m-2">
          <nuxt-link
            v-if="project.github"
            class="border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer bg-primary p-2 font-semibold text-white flex gap-2 rounded-md"
            :to="project.github"
          >
            <img
              width="15"
              height="10"
              class="white-svg"
              src="/assets/svg/github.svg"
              alt=""
            />
            <span class="md:block hidden text-sm">Code</span>
          </nuxt-link>
        </div>

        <span class="mx-2 font-semibold">#Tech</span>
        <div class="mt-2 mx-2 flex gap-2">
          <img
            v-for="tech in project.technologies"
            :key="tech.name"
            :class="tech.class || ''"
            :src="tech.icon"
            width="24"
            :alt="tech.name"
          />
        </div>
      </div>
    </div>

    <!-- Android Projects -->
    <div class="flex text-2xl font-bold my-3 gap-1">
      <span class="text-white">setContentView</span>
      <span class="text-indigo-500">( </span>
      <span class="text-white">Android </span>
      <span class="text-indigo-500">)</span>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
      <div
        v-for="project in portfolios.android"
        :key="project.id"
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="p-2 rounded-md text-white border-white bg-primary border shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer"
      >
        <div class="flex p-2 justify-center items-center bg-white rounded-lg">
          <img
            class="rounded-lg hover:scale-75 hover:transition-all hover:duration-200 hover:ease-in-out h-40"
            :src="project.image"
            :alt="project.title"
          />
        </div>
        <div class="m-2">
          <div>
            <h2 class="font-bold">{{ project.title }}</h2>
          </div>
        </div>
        <div class="text-sm mx-2 truncate">
          <p class="truncate">{{ project.description }}</p>
        </div>
        <div class="flex gap-2 m-2">
          <nuxt-link
            v-if="project.github"
            class="border border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_rgba(255,255,255,1)] cursor-default hover:transition-all hover:duration-200 hover:ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer bg-primary p-2 font-semibold text-white flex gap-2 rounded-md"
            :to="project.github"
          >
            <img
              width="15"
              height="10"
              class="white-svg"
              src="/assets/svg/github.svg"
              alt=""
            />
            <span class="md:block hidden text-sm">Code</span>
          </nuxt-link>
        </div>

        <span class="mx-2 font-semibold">#Tech</span>
        <div class="mt-2 mx-2 flex gap-2">
          <img
            v-for="tech in project.technologies"
            :key="tech.name"
            :src="tech.icon"
            width="24"
            :alt="tech.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

// Technologies data
const technologies = ref({
  mobile: [
    {
      name: "Kotlin",
      icon: "/assets/svg/kotlin.svg",
      alt: "kotlin"
    }
  ],
  frontend: [
    {
      name: "HTML",
      icon: "/assets/svg/html.svg",
      alt: "html"
    },
    {
      name: "CSS",
      icon: "/assets/svg/css.svg",
      alt: "css"
    },
    {
      name: "JavaScript",
      icon: "/assets/svg/javascript.svg",
      alt: "javascript"
    },
    {
      name: "Bootstrap",
      icon: "/assets/svg/bootstrap.svg",
      alt: "bootstrap"
    },
    {
      name: "Tailwind",
      icon: "/assets/svg/tailwinds.svg",
      alt: "tailwinds",
      class: "white-svg"
    },
    {
      name: "Nuxt",
      icon: "/assets/svg/nuxt.svg",
      alt: "nuxt",
      class: "white-svg"
    },
    {
      name: "Vue",
      icon: "/assets/svg/vue.svg",
      alt: "vue"
    }
  ],
  other: [
    {
      name: "Figma",
      icon: "/assets/svg/figma.svg",
      alt: "figma"
    },
    {
      name: "Cypress",
      icon: "/assets/svg/cypress.svg",
      alt: "cypress"
    }
  ]
})

// Portfolio data
const portfolios = ref({
  web: [
    {
      id: 1,
      title: "Neubeum",
      description: "Web OpenSource for developer tailwind free",
      image: "/assets/Img/bg.png",
      github: "https://github.com/yudhawahyup27/neubeam",
      preview: "https://neubeam.vercel.app",
      technologies: [
        {
          name: "Next.js",
          icon: "/assets/svg/next-js.svg",
          class: "white-svg"
        },
        {
          name: "Tailwind",
          icon: "/assets/svg/tailwinds.svg",
          class: "white-svg"
        }
      ]
    },
    {
      id: 2,
      title: "Portofolio",
      description: "I made my portfolio web with nuxt, tailwinds",
      image: "/assets/Img/porto-img.png",
      github: "https://github.com/yudhawahyup27/portofolio",
      preview: "https://ywp.my.id",
      technologies: [
        {
          name: "Nuxt",
          icon: "/assets/svg/nuxt.svg",
          class: "white-svg"
        },
        {
          name: "Tailwind",
          icon: "/assets/svg/tailwinds.svg",
          class: "white-svg"
        }
      ]
    },
    {
      id: 3,
      title: "Masjid Center",
      description: "Masjid Center web islamic For free alquran,hadish",
      image: "/assets/Img/masjid.png",
      github: "https://github.com/yudhawahyup27/Islam",
      preview: "https://islam-jade.vercel.app/",
      technologies: [
        {
          name: "Pinia",
          icon: "/assets/svg/pinia.svg"
        },
        {
          name: "Nuxt",
          icon: "/assets/svg/nuxt.svg",
          class: "white-svg"
        },
        {
          name: "Tailwind",
          icon: "/assets/svg/tailwinds.svg",
          class: "white-svg"
        }
      ]
    },
    {
      id: 4,
      title: "Vendor Management System (VMS WIKA)",
      description: "I made my portfolio web with nuxt, tailwinds",
      image: "/assets/Img/Image_not_available.png",
      preview: "https://vms.wika.co.id/landing",
      technologies: [
        {
          name: "Laravel",
          icon: "/assets/svg/laravel.svg",
          class: "white-svg"
        },
        {
          name: "Bootstrap",
          icon: "/assets/svg/bootstrap.svg"
        }
      ]
    },
    {
      id: 5,
      title: "Demangan Farm",
      description: "I made my portfolio web with Laravel and Firebase",
      image: "/assets/Img/demanganFarm.png",
      github: "https://github.com/yudhawahyup27/monitorfarm",
      technologies: [
        {
          name: "Laravel",
          icon: "/assets/svg/laravel.svg",
          class: "white-svg"
        },
        {
          name: "Firebase",
          icon: "/assets/svg/firebase-.svg",
          class: "white-svg"
        },
        {
          name: "Bootstrap",
          icon: "/assets/svg/bootstrap.svg"
        }
      ]
    },
    {
      id: 6,
      title: "Market Place Penjualan Bibit",
      description: "I made my portfolio web with Laravel and Mysql",
      image: "/assets/Img/penjualanbibit.jpg",
      github: "https://github.com/yudhawahyup27/PenjualanBibit",
      technologies: [
        {
          name: "Laravel",
          icon: "/assets/svg/laravel.svg",
          class: "white-svg"
        },
        {
          name: "Bootstrap",
          icon: "/assets/svg/bootstrap.svg"
        }
      ]
    }
  ],
  api: [
    {
      id: 1,
      title: "Komplain It API",
      description: "Api Komplaint IT",
      image: "/assets/Img/komplainIt.png",
      github: "https://github.com/yudhawahyup27/api-komplain",
      technologies: [
        {
          name: "Laravel",
          icon: "/assets/svg/laravel.svg",
          class: "white-svg"
        },
        {
          name: "Tailwind",
          icon: "/assets/svg/tailwinds.svg",
          class: "white-svg"
        }
      ]
    }
  ],
  android: [
    {
      id: 1,
      title: "Aplikasi Komplait IT",
      description: "Aplikasi untuk mempermudah karyawan untuk komplaint",
      image: "~/assets/Img/komplaintmobile.png",
      github: "https://github.com/yudhawahyup27/KomplaintIt",
      technologies: [
        {
          name: "Kotlin",
          icon: "/assets/svg/kotlin.svg"
        }
      ]
    }
  ]
})

// Personal info data
const personalInfo = ref({
  name: "Yudha Wahyu Pratama",
  email: "wyudha104@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1g0aEPWnDDBKNcpCPwB2N7qzN2tZkG6bn/view?usp=sharing",
  website: "https://mastama.my.id",
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yudha-wahyu-pratama/",
      icon: "/assets/svg/linkedin.svg"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nairobi.js/",
      icon: "/assets/svg/instagram.svg"
    },
    {
      name: "GitHub",
      url: "https://github.com/yudhawahyup27/",
      icon: "/assets/svg/github.svg"
    },
    {
      name: "Website",
      url: "https://mastama.my.id",
      icon: "/assets/svg/web.svg",
      class: "white-svg"
    }
  ],
  roles: ["Mobile", "Frontend", "Quality"],
  images: [
    "https://i.ibb.co.com/4FYgxPw/foto.png",
    "https://iili.io/J41KHQ9.png"
  ],
  about: "My name is Yudha. I successfully graduated with a Diploma in Informatics Management from the State Polytechnic of Malang. I am a skilled Fullstack developer with 2+ years of experience in website and Android app development using PHP, JavaScript, and Kotlin. I am always eager to learn new technologies in full stack development, to provide innovative and efficient software development solutions. I am committed to continuously improving my skills and knowledge, to provide the best results in software development."
})

// Reactive state for animations
const showText = ref(1)
const gambarIndex = ref(0)

// Lifecycle
onMounted(() => {
  setInterval(() => {
    showText.value = showText.value === 3 ? 1 : showText.value + 1
    if (showText.value === 3) {
      return showText.value === 1
    }
    gambarIndex.value = (gambarIndex.value + 1) % personalInfo.value.images.length
  }, 5000)
})

// Computed properties for current display
const currentRole = computed(() => {
  switch(showText.value) {
    case 1: return personalInfo.value.roles[0]
    case 2: return personalInfo.value.roles[1]
    case 3: return personalInfo.value.roles[2]
    default: return personalInfo.value.roles[0]
  }
})

const currentImage = computed(() => {
  return personalInfo.value.images[gambarIndex.value]
})

// Export for use in template
defineExpose({
  technologies,
  portfolios,
  personalInfo,
  showText,
  gambarIndex,
  currentRole,
  currentImage
})
</script>