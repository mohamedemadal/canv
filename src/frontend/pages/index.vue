<template>
  <!-- nave -->
  <Nave></Nave>
  <!-- slider -->

  <!-- swiper -->
  <div  class=" w-full md:h-[40vh] h-[60vh] lg:h-full isolate  bg-[#060B15] ">


    <swiper
      ref="swiperRef"
      :modules="[Pagination, Navigation, Autoplay]"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      :navigation="navigation"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"

      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="text-center relative text-4xl bg-teal-100 rounded-3xl w-full h-[60vh] md:h-[40vh] lg:h-full">
          <!-- Doctor -->
          <div class="absolute inset-0 flex flex-col items-start lg:px-[5%] justify-center p-[1%] z-50">
    <h1 class="font-bold text-4xl lg:text-8xl w-full lg:w-[60%] text-white text-right">كن شريك</h1>
    <h2 class="font-medium text-xl lg:text-3xl w-full lg:w-[60%] text-right text-white" style="line-height: initial;">
      لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال .
    </h2>
  </div>

           <div class="absolute w-full h-full bg-slate-700 opacity-20"></div>
          <div class="bg-white   w-full h-full m-auto">
            <img :src="image.img" class="m-auto w-full h-full">
          </div>
        </div>
        <!-- Doctor -->
      </swiper-slide>

      <!-- Add navigation buttons -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>

   <!-- about canv -->
 <div class="bg-white">
  <div class=  " py-[3%] m-auto  max-w-screen-xl ">
        <div class="">
         <h3 class="text-center text-5xl pb-[5%]">عن كانف</h3>
       </div>
       <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 p-4">
        <div>
          <img src="../images/about.png" class="w-full h-full">
        </div>
        <div class="p-4">
         <h4 class="text-4xl font-bold">لماذا تختار كانف ؟</h4>
         <p style="line-height: initial" class="text-2xl font-medium text-[#AEAEAE]">تأسست الفوزان العقارية، في سنة 1991 ميلادي، والتي تعتبر الأن من الشركات العقارية، الرائده في منطقة القصيم وذلك في محاولة منا لتطوير وتحسين تجربة العملاء الباحثين عن خدمات عقارية و بقيم سامية</p>
         <Button style=" background-color: #AA1E22 !important;"  label="إقرأ المزيد" class="mt-3 w-36 bg focus:ring-0 text-[#AA1E22]"/>

        </div>
       </div>
    </div>
 </div>
  <!-- counter -->
  <!-- <div >
    <div class=  " py-[3%] m-auto  max-w-screen-xl">
      <div class="">
         <h3 class="text-center text-5xl py-4 "> سنوات خبرتنا العديدة بالأرقام </h3>
         <p class="text-center text-2xl pb-[5%] text-[#AEAEAE]"> نعرض لكم إنجازاتنا المهنية بالأرقام ، والتي تظهر المهارات المكتسبة وثقة العديد من العملاء. </p>
       </div>
      <div ref="counterRef" class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-7 ">

        <div v-for="count in 7" class="bg-[#FFFFFF] py-8 border-b-4 rounded-md border-[#AA1E22]">
           <p class="text-xl text-[#AA1E22] text-center">{{ counter.count1 }} +</p>
           <p class="text-xl text-center font-semibold">عدد الصفقات المبرمة</p>
        </div>


      </div>
    </div>
  </div> -->
    <!-- counter -->
 <!-- <Auctions></Auctions>
 <Rentals></Rentals>
 <Property></Property>
 <Customer></Customer> -->
</template>

<script setup>
import Nave from '../components/Nave.vue';
import Auctions from '../components/Auctions.vue'
import Customer from '../components/Customer.vue'
import Rentals from '../components/Rentals.vue'
import Property from '../components/Property.vue'
import img1 from "../images/header.png";
import { ref, reactive, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from "axios";
const counter = ref({
  count1:''
});
const target = 450;
const incrementTime = 2; // The time in milliseconds for each increment

let interval;
const counterRef = ref(null);
const images = ref([
  { img: img1 },
  { img: img1 },
  { img: img1 },
]);

const swiperRef = ref(null);

const state = reactive({
  currentSlide: 0,
  totalSlides: 0,
});

const pagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

function startCounter() {
  interval = setInterval(() => {
    if (counter.value.count1 < target) {
      counter.value.count1++;
    }
  }, incrementTime);
}

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    startCounter();
  }
}
const fetchdata=()=>{
  axios
    .post('get_auctions',{
     auctions_filter:"all"
    })
    .then((res) => {


    })
}




onMounted(() => {
  fetchdata()
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1
  });
  if (counterRef.value) {
    observer.observe(counterRef.value);
  }


});

</script>

<style >

 .swiper-pagination-bullet{
  background-color: rgb(255, 255, 255) !important;
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
.swiper-pagination{


}
</style>
