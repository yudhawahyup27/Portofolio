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
        <div class="d-flex justify-content-between hidden md:block">
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
        <div class="social-media md:flex flex-wrap my-4 gap-2 cursor-pointer hidden  ">
          <nuxt-link to="https://www.linkedin.com/in/yudha-wahyu-pratama/">
            <svg class="" fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512"
              xml:space="preserve" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z ">
                </path>
              </g>
            </svg>
            <span
              class="opacity-0 bg-black text-white text-center text-xs rounded py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-300">
              LinkedIn Profile
            </span>

          </nuxt-link>
          <nuxt-link to="https://www.instagram.com/nairobi.js/">
            <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z">
                  </path>
                  <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>
                  <path
                    d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z">
                  </path>
                  <path
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z">
                  </path>
                </g>
              </g>
            </svg>
          </nuxt-link>
          <nuxt-link to="https://github.com/yudhawahyup27/">
            <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z">
                  </path>
                  <path
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M244.2,423.4 c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2 c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8 c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3 c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6 c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5C243,374.6,247.3,398.2,244.2,423.4z">
                  </path>
                </g>
              </g>
            </svg>
          </nuxt-link>
          <nuxt-link to="https://mastama.my.id">
            <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M301.4,286.7h-91.1c-8.6,0-15.5,6.9-15.5,15.4c0,8.4,6.9,15.4,15.5,15.4h91.1c8.5,0,15.4-7,15.4-15.4 C316.8,293.6,309.9,286.7,301.4,286.7z">
                  </path>
                  <path
                    d="M210.3,225h44.8c8.6,0,15.5-7,15.5-15.5s-6.9-15.4-15.5-15.4h-44.8c-8.6,0-15.5,6.9-15.5,15.4S201.8,225,210.3,225z">
                  </path>
                  <path
                    d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M383,303.3 c-0.3,44.4-36.4,80.7-80.8,80.7h-92.9c-44.5,0-80.8-36.4-80.8-80.7v-94.4c0-44.5,36.4-80.9,80.8-80.9h56.6 c20.9,2.5,51.2,20.4,62.4,44.1c3.1,6.7,4.7,7.7,7.3,27.5c1.4,10.2,2,17.7,6.6,21.9c6.5,5.8,30.2,1.9,34.9,5.6l3.6,2.8l2.1,4.4 l0.8,3.6L383,303.3z">
                  </path>
                </g>
              </g>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="z-0 gambar"></div>
      <div class="text1 md:mx-10">
        <h1 class="md:hidden block text-indigo-500 z-10 font-bold text-center md:text-left  md:text-2xl">
          Frontend <span class="text-white">Developer</span>
        </h1>
        <div class="hidden md:flex md:flex-wrap text-indigo-500 z-10 font-bold md:text-left md:text-xl my-4">
          <span v-if="showText === 1" class="mx-2 text-2xl ">{{ mobile }} </span>
          <h1 v-else class="mx-2 text-2xl">{{ web }}
          </h1>
          <small class="text-white hidden md:block text-2xl animate-none">Developer</small>
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
      <div class="h-5 border-b-4 border-white text-2xl mb-5 ">
        <span class="bg-primary  pr-4 text-3xl text-white">Teknologi</span>
      </div>
      <span class="mt-4 text-white">I work with the following technologies and tools:</span>
      <div class="grid grid-col-1 md:grid-cols-3  gap-1  my-2  p-4">
        <!-- Mobile Dev -->
        <div>
          <h3 class="text-white  font-extrabold text-xl my-3 ">Mobile</h3>
          <div class="grid grid-cols-4 gap-2 mx-auto justify-center">
            <div class="html group flex relative">
              <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>flutter</title>
                  <path
                    d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z">
                  </path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Flutter</span>
            </div>
            <div class="css group flex relative">
              <svg fill="#ffffff" viewBox="0 0 24 24" width="40px" height="40px " role="img"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Kotlin icon</title>
                  <path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z"></path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Kotlin</span>
            </div>
          </div>
        </div>
        <!-- Front end -->
        <div>
          <h3 class="text-white  font-extrabold text-xl my-3 ">Frontend Web</h3>
          <div class="grid grid-cols-4 gap-2">
            <div class="html group flex relative">
              <svg width="40px" height="40px" fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512"
                xml:space="preserve" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="c133de6af664cd4f011a55de6b0011b2">
                    <path display="inline"
                      d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646 l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506 l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014 v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z">
                    </path>
                  </g>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">HTML</span>
            </div>
            <div class="css group flex relative">
              <svg fill="#ffffff" width="40px" height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512"
                xml:space="preserve" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="c133de6af664cd4f011a55de6b001b19">
                    <path display="inline"
                      d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z">
                    </path>
                  </g>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">CSS</span>
            </div>
            <div class="js group flex relative">
              <svg width="40px" height="40px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill-rule="nonzero" clip-rule="nonzero"
                    d="M7.58638 0.102166C7.8199 -0.0340553 8.10867 -0.0340553 8.34219 0.102166L14.5565 3.72717C14.7869 3.86157 14.9286 4.10825 14.9286 4.375V11.625C14.9286 11.8918 14.7869 12.1384 14.5565 12.2728L8.34219 15.8978C8.10867 16.0341 7.8199 16.0341 7.58638 15.8978L6.03281 14.9916C5.67502 14.7829 5.55417 14.3236 5.76288 13.9658C5.97159 13.6081 6.43083 13.4872 6.78862 13.6959L7.96429 14.3817L13.4286 11.1942V4.80578L7.96429 1.61828L2.5 4.80578V11.1942L3.6168 11.8457C3.96098 11.9561 4.38611 11.9831 4.68576 11.8507C4.82477 11.7893 4.95031 11.6893 5.04968 11.5107C5.15426 11.3227 5.25 11.0098 5.25 10.5V5.25C5.25 4.83579 5.58579 4.5 6 4.5C6.41421 4.5 6.75 4.83579 6.75 5.25V10.5C6.75 11.1902 6.62104 11.7716 6.36047 12.2399C6.09471 12.7176 5.71466 13.036 5.29192 13.2228C4.48562 13.579 3.59523 13.433 3.04999 13.2371C3.00686 13.2216 2.96525 13.2022 2.92567 13.1791L1.3721 12.2728C1.14168 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14168 3.86157 1.3721 3.72717L7.58638 0.102166ZM8.24655 5.28323C8.64339 4.81081 9.26318 4.5 10.1042 4.5C10.8847 4.5 11.4792 4.76756 11.8815 5.19314C12.166 5.49417 12.1527 5.96885 11.8516 6.25338C11.5506 6.53792 11.0759 6.52455 10.7914 6.22352C10.7038 6.13087 10.5202 6 10.1042 6C9.66182 6 9.47952 6.14753 9.39511 6.24802C9.28615 6.37774 9.25 6.54184 9.25 6.625C9.25 6.70816 9.28615 6.87226 9.39511 7.00198C9.47952 7.10247 9.66182 7.25 10.1042 7.25C10.1782 7.25 10.2497 7.26073 10.3173 7.28072C10.9368 7.37001 11.4089 7.64784 11.7326 8.03323C12.1049 8.47643 12.2292 8.99983 12.2292 9.375C12.2292 9.75017 12.1049 10.2736 11.7326 10.7168C11.3358 11.1892 10.716 11.5 9.87501 11.5C9.0945 11.5 8.49996 11.2324 8.09768 10.8069C7.81315 10.5058 7.82652 10.0311 8.12755 9.74662C8.42857 9.46208 8.90325 9.47546 9.18779 9.77648C9.27536 9.86913 9.459 10 9.87501 10C10.3174 10 10.4997 9.85247 10.5841 9.75198C10.693 9.62226 10.7292 9.45816 10.7292 9.375C10.7292 9.29184 10.693 9.12774 10.5841 8.99802C10.4997 8.89753 10.3174 8.75 9.87501 8.75C9.80097 8.75 9.72943 8.73927 9.66188 8.71928C9.04237 8.62999 8.57028 8.35216 8.24655 7.96677C7.87427 7.52357 7.75 7.00017 7.75 6.625C7.75 6.24983 7.87427 5.72643 8.24655 5.28323Z"
                    fill="#ffffff"></path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Javascript</span>
            </div>
            <div class="bootstrap group flex relative">
              <svg width="40px" height="40px" fill="#FFFFFF" viewBox="0 0 14 14" role="img" focusable="false"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="m 2.8451713,1.0147205 c -0.2984996,0.04404 -0.6570177,0.184127 -0.9114328,0.358172 -0.1662461,0.10984 -0.3808259,0.316253 -0.504581,0.478094 -0.1380959,0.182004 -0.3064666,0.532217 -0.3728589,0.772591 l -0.0563006,0.200045 0,8.3451505 0.056301,0.200046 c 0.065861,0.240373 0.2342319,0.590586 0.3728589,0.77259 0.2602576,0.340131 0.6612667,0.626669 1.0638693,0.756672 0.332492,0.106126 0.1662458,0.101881 4.5072368,0.101881 4.343115,0 4.176869,0.0042 4.507236,-0.104003 0.404727,-0.130003 0.805205,-0.414419 1.06387,-0.75455 0.138096,-0.184127 0.308591,-0.53434 0.374452,-0.77259 l 0.05418,-0.200046 0,-8.3451505 -0.0563,-0.200045 c -0.06587,-0.239843 -0.234236,-0.590587 -0.372332,-0.772591 -0.124287,-0.162372 -0.338335,-0.368254 -0.504581,-0.478094 -0.178463,-0.122044 -0.468995,-0.25417 -0.693135,-0.316253 l -0.196521,-0.05412 -4.106759,-0.0021 c -2.2578677,-0.0021 -4.160935,0.0042 -4.2246716,0.0138 z m 5.5971317,2.207402 c 0.633117,0.104003 1.065463,0.312008 1.348028,0.648425 0.120037,0.142207 0.260258,0.424501 0.318683,0.634628 0.03612,0.137963 0.04196,0.215965 0.04409,0.56034 0.0021,0.362418 -0.0021,0.416011 -0.04409,0.558219 -0.122162,0.424501 -0.388793,0.750305 -0.819546,1.002883 l -0.148187,0.08596 0.106227,0.03396 c 0.161997,0.05412 0.432878,0.194209 0.570974,0.298212 0.344708,0.260007 0.584782,0.664343 0.680918,1.146682 0.04621,0.240373 0.04621,0.75455 -0.0021,0.97476 -0.190147,0.8665115 -0.861506,1.4687715 -1.871199,1.6709405 -0.386669,0.078 -0.486523,0.08225 -2.5622097,0.08225 l -2.028947,0 0,-7.7471345 2.0995884,0.008 c 1.8791663,0.0058 2.1192403,0.01008 2.3077943,0.04192 z m -2.6843711,2.185117 0,0.912676 0.9677331,-0.008 c 0.907715,-0.01008 0.975701,-0.0122 1.121764,-0.052 0.456778,-0.124167 0.654893,-0.386296 0.654893,-0.866512 0,-0.368254 -0.130129,-0.606505 -0.412694,-0.74659 -0.250166,-0.124167 -0.521047,-0.150167 -1.584385,-0.15229 l -0.7473111,0 0,0.912676 z m 0,3.13016 0,1.062843 1.0574961,-0.008 c 1.188155,-0.008 1.227991,-0.01221 1.520648,-0.153882 0.336741,-0.163963 0.486522,-0.43246 0.486522,-0.870756 0,-0.564055 -0.22414,-0.876594 -0.740938,-1.032597 -0.146062,-0.04616 -0.174213,-0.04616 -1.235958,-0.05412 l -1.0877701,-0.0058 0,1.062843 z">
                  </path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Bootstraps</span>
            </div>
            <div class="tailwind group flex relative">
              <svg width="40px" height="40px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
                    fill="#ffffff"></path>
                  <path
                    d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
                    fill="#ffffff"></path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Tailwinds</span>
            </div>
            <div class="nuxt group flex relative">
              <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 24 24" role="img"
                xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Nuxt.js icon</title>
                  <path
                    d="M19.724 20.272l.023-.045a.74.74 0 0 0 .053-.117l.002-.005a1.16 1.16 0 0 0 .054-.607l.001.007a1.795 1.795 0 0 0-.235-.623l.005.008-5.317-9.353-.812-1.42-.807 1.42-5.314 9.353a1.85 1.85 0 0 0-.204.604l-.001.011a1.257 1.257 0 0 0 .08.713l-.003-.008a.809.809 0 0 0 .05.102l-.002-.004c.16.275.5.602 1.25.602h9.898c.157 0 .925-.032 1.28-.637zm-6.227-9.316l4.859 8.548H8.64zm10.249 7.934L16.73 6.53c-.072-.13-.477-.787-1.182-.787-.317 0-.772.135-1.142.785l-.907 1.59.807 1.42 1.25-2.212 6.941 12.18h-2.64a1.187 1.187 0 0 1-.058.608l.003-.008a.772.772 0 0 1-.057.126l.002-.004-.023.045c-.355.605-1.122.637-1.272.637h4.129c.152 0 .917-.032 1.272-.637.157-.275.27-.737-.107-1.382zM7.304 20.307a.989.989 0 0 1-.045-.092l-.002-.006a1.228 1.228 0 0 1-.084-.712l-.001.007H1.501L9.93 4.672l2.767 4.864.802-1.42-2.412-4.249c-.067-.122-.475-.777-1.177-.777-.317 0-.772.137-1.142.787L.23 18.889c-.072.13-.425.812-.075 1.417.16.275.5.602 1.25.602h7.151c-.745 0-1.09-.322-1.25-.602z">
                  </path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Nuxt</span>
            </div>
            <div class="react group flex relative">
              <svg viewBox="0 0 24 24" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>react</title>
                  <rect width="24" height="24" fill="none"></rect>
                  <path
                    d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z">
                  </path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">React</span>
            </div>
            <div class="vue group flex relative">
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z"
                    fill="#f2f2f2"></path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Vue</span>
            </div>
          </div>
        </div>
        <!-- Other -->
        <div>
          <h3 class="text-white  font-extrabold text-xl my-3 ">Other</h3>
          <div class="grid grid-cols-4">
            <div class="html group flex relative ">
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                    stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Figma</span>
            </div>
            <div class="css group flex relative ">
              <svg width="40px" height="40px" fill="#ffffff" viewBox="0 0 24 24" role="img"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044 1.004-.175.306-.13.655-.306 1.09-.567l1.223 1.745c-1.003.83-2.138 1.222-3.447 1.222-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.611-1.79-.611-2.925 0-1.09.219-2.094.61-2.923a4.623 4.623 0 0 1 1.748-2.007c.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658A4.786 4.786 0 0 0 9.12 8.77c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446-.043 1.18.175 2.008.524 2.532H6.37zm12 2.705c-.436 1.353-1.091 2.357-2.008 3.098-.916.743-2.138 1.135-3.665 1.266l-.305-2.05c1.003-.132 1.745-.35 2.225-.7.174-.13.524-.523.524-.523L11.519 6.764h3.01l2.095 8.683 2.226-8.683h2.923L18.37 17.28z">
                  </path>
                </g>
              </svg>
              <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Kotlin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="box" @click="animateBox">Click me to animate</div>
  </div>
</template>

<script>
definePageMeta({
  layout: "landing",
});
import Slider from '~/components/partial/slider.vue';
const boxRef = ref(null);

const animateBox = () => {
  this.$gsap.to(boxRef, { x: 100, opacity: 0, duration: 1 });
};
export default {
  data() {
    return {
      mobile: "Mobile",
      web: "Frontend",
      showText: 1,
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
