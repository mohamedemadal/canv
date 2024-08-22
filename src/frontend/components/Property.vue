<template>
  <div class="bg-white Property pro">
  <div class=  "  px-[2%] py-[1%] m-auto  max-w-[1290px] ">

     <div class="flex justify-between py-[2%]">
      <h2 class="text-3xl lg:text-4xl  font-bold ">المجمعات</h2>
      <a class="text-xl lg:text-2xl font-bold text-[#32A7AE]">مشاهدة المزيد</a>
     </div>
      <div class="relative">
        <div class="swiper-button-next " style="left: 0 !important;"></div>
        <div class="swiper-button-prev "></div>
        <div class="w-full lg:w-[90%] relative m-auto">

          <swiper
    ref="swiperRef"
    :modules="[Pagination, Navigation, Autoplay]"
    @slideChange="onSlideChange"
    @swiper="onSwiper"
    :navigation="navigation"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
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
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024:{
          slidesPerView: 3,
          spaceBetween: 10,
        }
    }"
  >


    <swiper-slide v-for="(image, index) in 4" :key="index">
      <div class="text-center relative text-4xl bg-white rounded-lg w-full shadow-md">
        <!-- <div class="absolute w-full h-full bg-white opacity-20"></div> -->
        <div class="h-full ">
          <img alt="not found" class="h-[230px] w-full" src="../images/auctions.png">
            <div class="flex justify-between p-2">
              <div>
                <p class="text-xl font-bold text-right">كمباوند الغدير</p>
                <div class="flex py-1 ">
                  <a class="flex bg-[#32A7B0] py-1 px-1 mx-1 rounded-md">
                  <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="8.25" r="2.25" stroke="white" stroke-width="1.5"/>
                    <path d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z" stroke="white" stroke-width="1.5"/>
                    </svg>


                  </div>
                  <p class="text-[white] text-sm px-1">مكة المكرمة</p>
                 </a>
                 <a class="flex bg-[#32A7B0] py-1 px-2 rounded-md">
                  <div class="m-auto">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.837158 4.96249C0.837158 3.19169 2.27268 1.75617 4.04348 1.75617H10.7936C12.5644 1.75617 13.9999 3.19169 13.9999 4.96249V12.0501C13.9999 13.821 12.5644 15.2565 10.7936 15.2565H4.04348C2.27268 15.2565 0.837158 13.821 0.837158 12.0501V4.96249ZM4.04348 2.7687C2.83188 2.7687 1.84968 3.75089 1.84968 4.96249V12.0501C1.84968 13.2618 2.83188 14.2439 4.04348 14.2439H10.7936C12.0052 14.2439 12.9874 13.2618 12.9874 12.0501V4.96249C12.9874 3.75089 12.0052 2.7687 10.7936 2.7687H4.04348Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.837158 5.97502C0.837158 5.69542 1.06382 5.46876 1.34342 5.46876H13.4937C13.7733 5.46876 13.9999 5.69542 13.9999 5.97502C13.9999 6.25462 13.7733 6.48128 13.4937 6.48128H1.34342C1.06382 6.48128 0.837158 6.25462 0.837158 5.97502Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71849 0.743652C4.99809 0.743652 5.22475 0.970313 5.22475 1.24991V3.27496C5.22475 3.55456 4.99809 3.78122 4.71849 3.78122C4.43889 3.78122 4.21223 3.55456 4.21223 3.27496V1.24991C4.21223 0.970313 4.43889 0.743652 4.71849 0.743652Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1186 0.743652C10.3982 0.743652 10.6249 0.970313 10.6249 1.24991V3.27496C10.6249 3.55456 10.3982 3.78122 10.1186 3.78122C9.83901 3.78122 9.61235 3.55456 9.61235 3.27496V1.24991C9.61235 0.970313 9.83901 0.743652 10.1186 0.743652Z" fill="white"/>
                    <path d="M8.09357 10.0251C8.09357 10.3979 7.79135 10.7001 7.41855 10.7001C7.04575 10.7001 6.74354 10.3979 6.74354 10.0251C6.74354 9.6523 7.04575 9.35009 7.41855 9.35009C7.79135 9.35009 8.09357 9.6523 8.09357 10.0251Z" fill="white"/>
                    <path d="M10.7936 10.0251C10.7936 10.3979 10.4914 10.7001 10.1186 10.7001C9.74581 10.7001 9.4436 10.3979 9.4436 10.0251C9.4436 9.6523 9.74581 9.35009 10.1186 9.35009C10.4914 9.35009 10.7936 9.6523 10.7936 10.0251Z" fill="white"/>
                    <path d="M5.39351 10.0251C5.39351 10.3979 5.09129 10.7001 4.71849 10.7001C4.34569 10.7001 4.04348 10.3979 4.04348 10.0251C4.04348 9.6523 4.34569 9.35009 4.71849 9.35009C5.09129 9.35009 5.39351 9.6523 5.39351 10.0251Z" fill="white"/>
                    </svg>
                  </div>
                  <p class="text-[white] text-sm px-1"> 27-5-2024</p>
                 </a>
                </div>
              </div>
              <div class="flex space-x-2">

                  <div class="rounded-full m-auto p-2 text-center" style="margin-left: 3%;background-color: #0D988C30;">
                  <svg style="margin: auto;"  width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_713_4342" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="33">
                  <path d="M33.1268 0.107422H0.839844V32.6472H33.1268V0.107422Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_713_4342)">
                  <path d="M16.7896 0.107114H0.839844L4.19553 3.4496H16.7896C20.1999 3.4496 23.4705 4.80278 25.882 7.21144C28.2934 9.62011 29.6483 12.887 29.6483 16.2933C29.6483 19.6997 28.2934 22.9666 25.882 25.3752C23.4705 27.7838 20.1999 29.1372 16.7896 29.1372H8.92771L11.9979 26.0748H16.7918C19.3883 26.0748 21.8784 25.0446 23.7143 23.2107C25.5505 21.3768 26.582 18.8895 26.582 16.2961C26.582 13.7026 25.5505 11.2153 23.7143 9.38148C21.8784 7.54761 19.3883 6.51737 16.7918 6.51737H7.26001L10.6883 9.93945L14.9167 14.1597H16.7896C17.3558 14.1597 17.8989 14.3844 18.2993 14.7843C18.6997 15.1842 18.9246 15.7267 18.9246 16.2922C18.9246 16.8578 18.6997 17.4003 18.2993 17.8002C17.8989 18.2001 17.3558 18.4248 16.7896 18.4248H14.9225L11.4942 21.8505H16.7896C17.5198 21.8505 18.243 21.7068 18.9176 21.4277C19.5923 21.1485 20.2053 20.7394 20.7217 20.2236C21.2381 19.7079 21.6477 19.0955 21.9271 18.4217C22.2066 17.7478 22.3504 17.0255 22.3504 16.2961C22.3504 15.5667 22.2066 14.8444 21.9271 14.1705C21.6477 13.4966 21.2381 12.8843 20.7217 12.3685C20.2053 11.8528 19.5923 11.4436 18.9176 11.1645C18.243 10.8854 17.5198 10.7417 16.7896 10.7417H16.2272L15.4249 9.9389H15.4457L16.7896 9.93536C18.4784 9.93536 20.0981 10.6055 21.2922 11.7983C22.4864 12.991 23.1573 14.6088 23.1573 16.2957C23.1573 17.9825 22.4864 19.6003 21.2922 20.7931C20.0981 21.9859 18.4784 22.6561 16.7896 22.6561H10.6836L4.19663 29.1365L0.843405 32.4856H16.7896C21.0883 32.4856 25.211 30.7799 28.2507 27.7438C31.2904 24.7076 32.9979 20.5898 32.9979 16.2961C32.9979 12.0023 31.2904 7.88449 28.2507 4.84837C25.211 1.81224 21.0883 0.106567 16.7896 0.106567V0.107114Z" fill="#0D988C"/>
                  <path d="M12.4725 16.2948L0.838867 4.67493V27.9171L4.19427 24.5653L12.4725 16.2948Z" fill="#0A4B65"/>
                  </g>
                  </svg>
                  </div>

              </div>
            </div>
           <div>

           </div>
        </div>
        <div class="grid grid-cols-4 p-[1%] gap-2">
          <div class="border-2 p-[2%] rounded-sm">
            <div class=" text-center text-[#46494A] ">
              <svg class="mx-auto my-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.875 22.75H2.875C2.465 22.75 2.125 22.41 2.125 22C2.125 21.59 2.465 21.25 2.875 21.25H22.875C23.285 21.25 23.625 21.59 23.625 22C23.625 22.41 23.285 22.75 22.875 22.75Z" fill="#046A72"/>
                <path d="M3.88501 22.7603C3.68501 22.7603 3.49498 22.6803 3.35498 22.5403C3.21498 22.4003 3.13501 22.2103 3.13501 22.0103L3.125 7.07029C3.125 6.16029 3.58497 5.30026 4.34497 4.79026L8.34497 2.12027C9.27497 1.50027 10.475 1.50027 11.395 2.12027L15.395 4.79026C16.165 5.30026 16.615 6.15029 16.615 7.07029L16.625 21.9903C16.625 22.4003 16.295 22.7403 15.875 22.7403L3.88501 22.7603ZM9.875 3.1503C9.635 3.1503 9.395 3.22026 9.185 3.36026L5.185 6.03031C4.835 6.26031 4.625 6.65029 4.625 7.07029L4.63501 21.2603L15.135 21.2403L15.125 7.07029C15.125 6.65029 14.915 6.26026 14.575 6.04026L10.575 3.37027C10.365 3.22027 10.115 3.1503 9.875 3.1503Z" fill="#046A72"/>
                <path d="M20.8555 22.76C20.4455 22.76 20.1055 22.42 20.1055 22.01V18C20.1055 17.59 20.4455 17.25 20.8555 17.25C21.2655 17.25 21.6055 17.59 21.6055 18V22.01C21.6055 22.42 21.2755 22.76 20.8555 22.76Z" fill="#046A72"/>
                <path d="M20.875 18.75C19.355 18.75 18.125 17.52 18.125 16V14C18.125 12.48 19.355 11.25 20.875 11.25C22.395 11.25 23.625 12.48 23.625 14V16C23.625 17.52 22.395 18.75 20.875 18.75ZM20.875 12.75C20.185 12.75 19.625 13.31 19.625 14V16C19.625 16.69 20.185 17.25 20.875 17.25C21.565 17.25 22.125 16.69 22.125 16V14C22.125 13.31 21.565 12.75 20.875 12.75Z" fill="#046A72"/>
                <path d="M15.875 14.75H3.875C3.465 14.75 3.125 14.41 3.125 14C3.125 13.59 3.465 13.25 3.875 13.25H15.875C16.285 13.25 16.625 13.59 16.625 14C16.625 14.41 16.285 14.75 15.875 14.75Z" fill="#046A72"/>
                <path d="M9.875 22.75C9.465 22.75 9.125 22.41 9.125 22V18.25C9.125 17.84 9.465 17.5 9.875 17.5C10.285 17.5 10.625 17.84 10.625 18.25V22C10.625 22.41 10.285 22.75 9.875 22.75Z" fill="#046A72"/>
                <path d="M9.875 11.25C8.635 11.25 7.625 10.24 7.625 9C7.625 7.76 8.635 6.75 9.875 6.75C11.115 6.75 12.125 7.76 12.125 9C12.125 10.24 11.115 11.25 9.875 11.25ZM9.875 8.25C9.465 8.25 9.125 8.59 9.125 9C9.125 9.41 9.465 9.75 9.875 9.75C10.285 9.75 10.625 9.41 10.625 9C10.625 8.59 10.285 8.25 9.875 8.25Z" fill="#046A72"/>
              </svg>
            </div>
            <p class="text-base font-medium text-[#046A72] ">20 وحده سكنيه</p>
          </div>
          <div class="border-2 p-[2%] rounded-sm">
            <div class=" text-center text-[#046A72] ">
              <svg class="mx-auto my-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.625 22.75H1.625C1.215 22.75 0.875 22.41 0.875 22C0.875 21.59 1.215 21.25 1.625 21.25H23.625C24.035 21.25 24.375 21.59 24.375 22C24.375 22.41 24.035 22.75 23.625 22.75Z" fill="#046A72"/>
              <path d="M20.4053 22.7598C19.9953 22.7598 19.6553 22.4198 19.6553 22.0098V17.5498C19.6553 17.1398 19.9953 16.7998 20.4053 16.7998C20.8153 16.7998 21.1553 17.1398 21.1553 17.5498V22.0098C21.1553 22.4198 20.8253 22.7598 20.4053 22.7598Z" fill="#046A72"/>
              <path d="M20.4246 18.2999C18.7946 18.2999 17.4746 16.9799 17.4746 15.3499V13.0799C17.4746 11.4499 18.7946 10.1299 20.4246 10.1299C22.0546 10.1299 23.3746 11.4499 23.3746 13.0799V15.3499C23.3746 16.9799 22.0546 18.2999 20.4246 18.2999ZM20.4246 11.6399C19.6246 11.6399 18.9746 12.2899 18.9746 13.0899V15.3599C18.9746 16.1599 19.6246 16.8099 20.4246 16.8099C21.2246 16.8099 21.8746 16.1599 21.8746 15.3599V13.0899C21.8746 12.2899 21.2246 11.6399 20.4246 11.6399Z" fill="#046A72"/>
              <path d="M14.9248 22.7498C14.5148 22.7498 14.1748 22.4098 14.1748 21.9998V6.02979C14.1748 4.43979 13.5048 3.75977 11.9448 3.75977H5.71484C4.14484 3.75977 3.46484 4.43979 3.46484 6.02979V21.9998C3.46484 22.4098 3.12484 22.7498 2.71484 22.7498C2.30484 22.7498 1.96484 22.4098 1.96484 21.9998V6.02979C1.96484 3.59979 3.29484 2.25977 5.71484 2.25977H11.9448C14.3548 2.25977 15.6748 3.59979 15.6748 6.02979V21.9998C15.6748 22.4098 15.3348 22.7498 14.9248 22.7498Z" fill="#046A72"/>
              <path d="M11.3748 9H6.4248C6.0148 9 5.6748 8.66 5.6748 8.25C5.6748 7.84 6.0148 7.5 6.4248 7.5H11.3748C11.7848 7.5 12.1248 7.84 12.1248 8.25C12.1248 8.66 11.7848 9 11.3748 9Z" fill="#046A72"/>
              <path d="M11.3748 12.75H6.4248C6.0148 12.75 5.6748 12.41 5.6748 12C5.6748 11.59 6.0148 11.25 6.4248 11.25H11.3748C11.7848 11.25 12.1248 11.59 12.1248 12C12.1248 12.41 11.7848 12.75 11.3748 12.75Z" fill="#046A72"/>
              <path d="M8.875 22.75C8.465 22.75 8.125 22.41 8.125 22V18.25C8.125 17.84 8.465 17.5 8.875 17.5C9.285 17.5 9.625 17.84 9.625 18.25V22C9.625 22.41 9.285 22.75 8.875 22.75Z" fill="#046A72"/>
              </svg>

            </div>
            <p class="text-base font-medium text-[#046A72] ">20 وحده تجاريه</p>
          </div>



        </div>
        <div class="p-[2%]">
            <h3 class="text-sm font-bold text-right py-1"> تفاصيل الكمبوند : </h3>
            <p class="text-sm text-right text-[#818181]">{{ rent.text.substring(0, 100)}} ... </p>
        </div>
        <div>
           <Button  style=" background-color: #32A7B0 !important;padding: 0px !important;margin-bottom: 2% !important;border: 0px ;"  label="إقرأ المزيد" class="mt-3 w-[90%]  focus:ring-0 text-[#AA1E22]"/>
        </div>
      </div>
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
import Nave from '../components/Nave.vue';
// import img1 from "../images/riyadh-saudi-arabia-gretopia_5 1.png";
import { ref, reactive, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from "axios";


const swiperRef = ref(null);
const rent=ref({
  text:"تمتع بالإقامة في شقة مكونة من ثلاث غرف نوم وتتكون من غرفة نوم ماستر بدورة مياة بكامل ملحقاتها وغرفة نوم سريرين منفصل..."
})
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




const fetchdata=()=>{
axios
  .post('get_auctions',{
   auctions_filter:"all"
  })
  .then((res) => {


  })
}

onMounted(() => {




});

</script>
<style>
.Property .swiper-pagination-bullet {
background-color: #32A7B0 !important;
z-index: 60;
}


.swiper-button-next,
.swiper-button-prev {
color: #007bff;
}
.pro .swiper-button-prev{

background-color: #03595f !important;
border-radius: 50% !important ;
transform: scale(.7) !important;
color:  white !important;
width: 50px !important ;
height: 50px !important ;
}
.pro .swiper-button-next{

  background-color: #03595f !important;
border-radius: 50% !important ;
transform: scale(.7) !important;
color:  white !important;
width: 50px !important ;
height: 50px !important ;
}
.Property .swiper-pagination{
position: relative !important;
margin-top: 2% !important
}
</style>

