<template>
    <Carousel :autoplay="1000" :items-to-show="1">
        <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">

                <div class="max-w-md rounded  border-white border  p-2 overflow-hidden shadow-lg">
                    <img class="w-full" src="https://i.ytimg.com/vi/pvD1l2BmfrE/sddefault.jpg"
                        alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <span>Category</span>
                    <div class="px-6 pt-4 pb-2">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Frontend</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vue</span>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script>

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Slider',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
})
</script>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    background-color: white;
    border-radius: 100%;
    border: 5px solid white;
}
</style>
