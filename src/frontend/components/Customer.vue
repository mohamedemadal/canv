<template>
  <div class="bg-white Customer">
  <div class=  "  px-[1%] py-[3%] m-auto  ">
    <div class=" ">
       <h3 class="text-center text-5xl py-4 "> عملائنا </h3>
       <p class="text-center text-2xl pb-[5%] text-[#AEAEAE]">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل </p>
     </div>

      <div class="w-full">

        <div class="">
          <swiper

      effect="coverflow"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
    ref="swiperRef"
    :modules="[Pagination, Navigation, Autoplay]"
     @slideChange="onSlideChange"
    @swiper="onSwiper"
    :navigation="navigation"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"


    :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
    :breakpoints="{
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide   v-for="(image, index) in customer" :key="index" :class="{ 'hidden': index !== activeIndex }">
             <div  class="mx-4 my-auto text-center"><img :src="image" ></div>

      <!-- Doctor -->
    </swiper-slide>




        </swiper>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  </div>
</div>
</template>
<script setup>
import { EffectCoverflow } from 'swiper/modules';
import { ref, reactive, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../images/customer/brand_img01.png";
import img2 from "../images/customer/brand_img02.png";
import img3 from "../images/customer/brand_img03.png";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const customer=ref([img1,img2,img3,img1,img2,img3,img1,img2,img3])


const swiperRef = ref(null);
const activeIndex = ref(0);

const onSlideChange=(swiper)=>{
 console.log("swiper")
 activeIndex.value = swiper.realIndex;
}
const pagination = {
el: '.swiper-pagination',
clickable: true,
};

const navigation = {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
};






</script>
<style>
.Customer .swiper-pagination-bullet {
background-color: rgb(170, 0, 0) !important;
z-index: 60;
}


.swiper-button-next,
.swiper-button-prev {
color: #007bff;
}
.swiper-button-prev{
background-color: red !important;
border-radius: 9% !important ;
transform: scale(.7) !important;
color:  white !important;
width: 50px !important ;
height: 50px !important ;
}
.swiper-button-next{
background-color: red !important;
border-radius: 9% !important ;
transform: scale(.7) !important;
color:  white !important;
width: 50px !important ;
height: 50px !important ;
}
.Customer .swiper-pagination{
position: relative !important;
margin-top: 2% !important
}
</style>

