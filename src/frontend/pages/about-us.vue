<template>
  <Nave></Nave>
  <!-- banner -->
  <div class="video-container">
    <video
      src="../banner.mp4"
      autoplay
      loop
      controls
      playsinline
      class="responsive-video">
    </video>
  </div>


   <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative hidden">
    <div  style="position: absolute; width: 100%; height: 100%;" v-if="banner_url">
      <iframe
        style="position: absolute; width: 100%; height: 100%;"
        :src="`${banner_url}?autoplay=1&controls=0&mute=1&showinfo=0&rel=0&modestbranding=1`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
  </div>


    <div class="z-50 text-white w-full m-auto w-[80%] ">
      <H1 class="font-bold text-5xl text-white z-50">من نحن</H1>
     <div class="flex py-8 ">
      <p class="text-2xl font-semibold ">الرئيسية</p>
      <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p class="text-2xl font-semibold ">من نحن</p>
     </div>
    </div>
   </div>
     <!-- about canv -->
     <div class="bg-white">
    <div class=  " py-[3%] m-auto  max-w-[1290px] ">
          <div class="">
           <h3 class="text-center text-5xl pb-[5%]">{{ $t("About_CANF") }} </h3>
         </div>
         <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 p-4">
          <div>
            <img src="../images/about.png" class="w-full h-full">
          </div>
          <div class="p-4">
           <h4 class="text-4xl font-bold">{{ $t("why_choose_canv") }}</h4>
           <p style="line-height: initial" class="text-2xl font-medium text-[#AEAEAE]"> {{ about_us?.about_us }} </p>


          </div>
         </div>
      </div>
   </div>


      <!-- about canv -->
      <div class="bg-white banner ">
    <div class=  "px-2 py-[3%] m-auto  max-w-[1290px]">
          <div class="">
           <h3 class="text-center text-5xl p-[2%]"> {{ $t("meet_the_team") }}</h3>
           <p class="text-center text-2xl pb-[2%] text-[#AEAEAE]">{{ $t("We_show_you_our_professional") }} </p>
         </div>

         <div class="w-full">
        <div>
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
            :modules="[Navigation, Autoplay]"
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }"
          >
            <swiper-slide
              v-for="(team, index) in our_team"
              :key="index"
              class="shadow-xl h-full"

            >
            <div style="transition: 1s;"  class=" hover:scale-[1.03] h-full bg-white">
              <div class="w-full"><img class="w-full h-[290px] "  :src="team?.img_link"></div>
              <!-- <div class="w-full"><img class="w-full " :src="team?.img_link"></div> -->
              <div class=" p-[3%] border-r-2 border-b-2 border-l-2 rounded-md ">
                <div class="flex  justify-between">
                  <div><h4 class="text-xl font-bold "> {{ (team?.name).split(' ').slice(0, 2).join(' ') }}</h4></div>
                  <div class="flex justify-between ">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.8997 23.0075H22.0677L12.0882 9.03973H9.92014L19.8997 23.0075Z" fill="#121212"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23859 0 0 2.23859 0 5V27C0 29.7614 2.23859 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23859 29.7614 0 27 0H5ZM23.4785 8L17.5218 14.7749L24 24H19.2356L14.8732 17.7878L9.41156 24H8L14.2466 16.8955L8 8H12.7644L16.8952 13.8826L22.0671 8H23.4785Z" fill="#121212"/>
                      </svg>

                  <svg width="32" class="mx-3" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="5" fill="#D8C306"/>
                  <path d="M16.4359 24.7104C16.2535 24.7104 16.0693 24.6998 15.8869 24.6794C15.3961 24.6241 14.9189 24.4795 14.4708 24.2496C14.271 24.1467 14.077 24.0323 13.8975 23.9226L13.8684 23.9051C13.1972 23.4957 12.4494 23.2638 11.7074 23.2337H11.6899C11.5357 23.227 11.3504 23.2192 11.1603 23.2085C11.0177 23.1998 10.8907 23.1804 10.7733 23.1484C10.5027 23.0746 10.2932 22.8427 10.2389 22.5585C10.2282 22.5051 10.2195 22.4508 10.2107 22.3974L10.2011 22.3382C10.1981 22.3208 10.1962 22.3013 10.1943 22.2829C10.1816 22.1936 10.1564 22.1694 10.1011 22.1442C10.0022 22.0995 9.89745 22.0617 9.79075 22.0316C9.74031 22.0171 9.68988 22.0035 9.63847 21.9899C9.46776 21.9443 9.29123 21.8958 9.11373 21.8327C8.90422 21.758 8.70247 21.6678 8.5143 21.5659C8.45223 21.5319 8.39015 21.4941 8.32904 21.4524C8.27181 21.4126 8.21944 21.3699 8.17385 21.3224C8.05163 21.1953 7.99052 21.0332 8.00119 20.8654C8.01283 20.6975 8.09528 20.5452 8.23301 20.4346C8.31837 20.3667 8.40372 20.3259 8.47259 20.292L8.49587 20.2803C8.93914 20.063 9.34652 19.8117 9.70928 19.5323C10.3058 19.0724 10.7636 18.562 11.108 17.9712C11.2263 17.7684 11.333 17.5384 11.4232 17.2901C11.4862 17.1174 11.5163 16.9951 11.5241 16.8816C11.525 16.8602 11.5192 16.8399 11.5076 16.8282C11.4678 16.7865 11.4106 16.7438 11.3495 16.7011C11.2273 16.6138 11.1176 16.5381 11.0148 16.4712C10.8616 16.3703 10.7074 16.2703 10.5541 16.1704L10.2641 15.9812C10.1167 15.8842 9.9993 15.794 9.89649 15.6969C9.7927 15.5989 9.71122 15.499 9.6472 15.3913C9.47843 15.1099 9.45806 14.7995 9.58804 14.4929C9.67339 14.2901 9.83441 14.1222 10.0294 14.032C10.2418 13.934 10.4804 13.9059 10.7365 13.9486C10.9518 13.9845 11.1468 14.0495 11.3107 14.1087C11.4232 14.1494 11.5338 14.1921 11.6453 14.2348C11.6725 14.2455 11.6996 14.2561 11.7268 14.2658L11.7229 14.1882C11.7113 13.9592 11.6996 13.7215 11.6938 13.4858C11.6763 12.7426 11.6764 11.9518 11.8859 11.1708C12.0158 10.6856 12.2409 10.2316 12.5542 9.8202C13.1594 9.0246 13.9829 8.47544 15.0013 8.18825C15.5077 8.04563 16.0431 7.98548 16.6357 8.00294C17.1799 8.01943 17.6997 8.11355 18.1808 8.28237C18.8055 8.50067 19.3429 8.81794 19.7793 9.22447C20.3468 9.75325 20.7241 10.3315 20.9336 10.9903C21.0257 11.2814 21.0907 11.5909 21.1324 11.9353C21.1993 12.4951 21.1916 13.0521 21.1848 13.5915L21.1819 13.8244C21.1799 13.9738 21.1683 14.1184 21.1557 14.259C21.2401 14.227 21.3245 14.195 21.405 14.164C21.5805 14.097 21.7386 14.0446 21.888 14.0039C22.0791 13.9515 22.307 13.9039 22.5544 13.9447C22.8405 13.9913 23.0898 14.1649 23.2372 14.4211C23.3817 14.6724 23.406 14.9683 23.3051 15.2322C23.2556 15.3603 23.181 15.4796 23.0762 15.596C22.9715 15.7125 22.8502 15.8172 22.7047 15.9162C22.6048 15.9841 22.5039 16.0501 22.4031 16.117L22.1024 16.315C21.9588 16.4091 21.8143 16.5042 21.6717 16.5993C21.5951 16.6507 21.5146 16.7079 21.4341 16.771C21.4089 16.7904 21.3827 16.8146 21.3574 16.8428C21.3516 16.8496 21.3497 16.8535 21.3497 16.8544C21.3545 16.9398 21.3691 17.0262 21.3953 17.1154C21.4816 17.4152 21.6135 17.7131 21.8007 18.0255C22.244 18.7648 22.8812 19.3916 23.7503 19.9398C23.9191 20.0465 24.0995 20.1377 24.2906 20.2357C24.3449 20.2629 24.3992 20.291 24.4526 20.3191C24.4943 20.3405 24.535 20.3638 24.5748 20.3871C24.6592 20.4365 24.7309 20.5025 24.7882 20.584C24.9113 20.7596 24.924 20.977 24.8231 21.1652C24.762 21.2777 24.6795 21.3534 24.6233 21.4C24.5496 21.4611 24.4768 21.5048 24.4215 21.5358C24.1121 21.7114 23.7707 21.8492 23.405 21.9462C23.2683 21.9821 23.1237 22.0229 22.952 22.0743C22.8832 22.0947 22.8114 22.1296 22.7503 22.1616C22.7241 22.1752 22.7086 22.1859 22.6979 22.2402C22.6892 22.2839 22.6834 22.3275 22.6766 22.3722C22.6698 22.4168 22.663 22.4605 22.6552 22.5041C22.5844 22.8971 22.371 23.1115 21.9811 23.1784C21.8929 23.194 21.7978 23.2046 21.6989 23.2095C21.6009 23.2153 21.5029 23.2192 21.404 23.2231C21.3041 23.227 21.2042 23.2308 21.1053 23.2367H21.0946C20.3875 23.2793 19.6794 23.5044 19.0422 23.8896L18.9335 23.9546C18.6571 24.1215 18.3545 24.2952 18.0169 24.4262C17.658 24.5659 17.272 24.6551 16.8695 24.692C16.7259 24.7046 16.5804 24.7114 16.4349 24.7114L16.4359 24.7104ZM11.0284 22.3761C11.0808 22.3877 11.139 22.3945 11.2069 22.3984C11.3902 22.409 11.5696 22.4168 11.721 22.4217H11.7394C12.6191 22.4585 13.5008 22.7312 14.2894 23.2114L14.3204 23.2308C14.5105 23.3473 14.6725 23.4423 14.8394 23.5277C15.2012 23.713 15.5833 23.8295 15.9771 23.8731C16.2516 23.9042 16.5271 23.9071 16.7977 23.8828C17.1294 23.8528 17.433 23.7829 17.725 23.6694C18.0043 23.5607 18.2701 23.4084 18.5165 23.2599L18.6251 23.194C19.3749 22.7409 20.211 22.476 21.0441 22.4275H21.0606C21.1654 22.4207 21.2692 22.4158 21.373 22.412C21.467 22.4081 21.5621 22.4042 21.6562 22.3993C21.7241 22.3955 21.7881 22.3887 21.8463 22.379C21.8502 22.379 21.8531 22.378 21.857 22.377C21.8579 22.3722 21.8589 22.3663 21.8609 22.3596C21.8676 22.3227 21.8725 22.2858 21.8783 22.249C21.887 22.1937 21.8948 22.1383 21.9055 22.084C21.9617 21.7959 22.1266 21.5737 22.3807 21.4417C22.47 21.3951 22.5903 21.3369 22.7251 21.2971C22.9045 21.2438 23.0558 21.2011 23.2004 21.1633C23.4322 21.1021 23.6514 21.0206 23.8541 20.9217C23.6776 20.8314 23.4972 20.7373 23.3206 20.6257C22.342 20.0077 21.6184 19.2936 21.1082 18.4427C20.8841 18.0692 20.7241 17.7082 20.6183 17.3395C20.5766 17.193 20.5514 17.0456 20.5437 16.9C20.532 16.6808 20.6077 16.4683 20.758 16.3014C20.8152 16.2374 20.8773 16.1791 20.9413 16.1306C21.0364 16.0569 21.1314 15.989 21.2236 15.9269C21.3681 15.8299 21.5146 15.7338 21.6601 15.6387L21.9608 15.4408C22.0587 15.3768 22.1557 15.3127 22.2527 15.2467C22.3429 15.1856 22.4157 15.1235 22.4758 15.0566C22.5136 15.0139 22.5379 14.978 22.5515 14.9421C22.5699 14.8936 22.5515 14.848 22.5379 14.8257C22.5127 14.782 22.4719 14.7519 22.4283 14.7451C22.3342 14.7296 22.2168 14.7558 22.1043 14.7868C21.9811 14.8208 21.8482 14.8645 21.6979 14.9227C21.5408 14.9828 21.373 15.0469 21.2042 15.1061C21.112 15.1381 21.0277 15.1565 20.9443 15.1614C20.7852 15.1701 20.6271 15.1128 20.5107 15.0013C20.3894 14.8848 20.3225 14.7218 20.3254 14.554C20.3264 14.4967 20.3283 14.4201 20.3361 14.3405L20.3429 14.2629C20.3574 14.1077 20.371 13.9612 20.3729 13.8176L20.3758 13.5818C20.3826 13.0453 20.3894 12.5378 20.3293 12.0323C20.2944 11.7393 20.2401 11.4783 20.1634 11.2367C19.9976 10.7138 19.692 10.25 19.2294 9.81826C18.8705 9.48352 18.4408 9.23223 17.9151 9.04789C17.5125 8.9072 17.0741 8.82764 16.6134 8.81406C16.1042 8.79756 15.6493 8.84899 15.2235 8.9693C14.366 9.21089 13.7045 9.6504 13.2011 10.3121C12.9518 10.6391 12.7734 11 12.6705 11.3823C12.4892 12.0585 12.4892 12.7833 12.5057 13.4673C12.5105 13.6924 12.5221 13.9243 12.5338 14.1484L12.5454 14.389C12.5483 14.457 12.5503 14.5249 12.5512 14.5928C12.5532 14.9236 12.3252 15.1526 11.9838 15.1633C11.9237 15.1633 11.8781 15.1555 11.8529 15.1507C11.7258 15.1313 11.6182 15.0905 11.5318 15.0585C11.4736 15.0362 11.4154 15.0139 11.3572 14.9916C11.2505 14.9508 11.1438 14.9101 11.0372 14.8713C10.9091 14.8247 10.7568 14.7742 10.6065 14.749C10.4794 14.7286 10.4106 14.7509 10.3698 14.7694C10.3601 14.7742 10.3446 14.7888 10.3359 14.8092C10.3039 14.8848 10.3136 14.9256 10.3436 14.976C10.3698 15.0197 10.4067 15.0634 10.4552 15.1099C10.5221 15.173 10.6026 15.2351 10.7083 15.304L10.9964 15.4922C11.1516 15.5931 11.3068 15.694 11.461 15.7959C11.5726 15.8696 11.6899 15.9502 11.8209 16.0433C11.9111 16.1083 12.0081 16.1791 12.0973 16.2742C12.2632 16.4508 12.3495 16.6924 12.333 16.9388C12.3165 17.1853 12.2447 17.4065 12.1846 17.5714C12.0769 17.8654 11.9508 18.1381 11.8083 18.3826C11.4154 19.0559 10.8761 19.6594 10.204 20.1775C9.84798 20.4521 9.45321 20.7024 9.02934 20.9217C9.14283 20.977 9.26214 21.0274 9.38629 21.0711C9.53372 21.1235 9.68698 21.1652 9.84993 21.2089C9.90231 21.2234 9.95565 21.237 10.008 21.2515C10.1535 21.2923 10.2971 21.3437 10.4338 21.4058C10.751 21.5494 10.946 21.8123 10.9954 22.1665C10.9974 22.1791 10.9984 22.1917 10.9993 22.2034V22.2014L11.009 22.2645C11.0148 22.3023 11.0216 22.3402 11.0284 22.377V22.3761Z" fill="white"/>
                  </svg>


                </div>

                </div>
                <h4 class="text-xl text-[#AEAEAE] pt-1">   {{ team?.job_title }}</h4>
              </div>
              <div class="w-[80%] p">


              </div>

            </div>
            </swiper-slide>

          </swiper>
        </div>

        <!-- Display Active Slide Index -->
        <div class="text-center mt-4">
          <div class="swiper-pagination"></div>
        </div>
      </div>

      </div>
   </div>
   <!-- metting -->
   <div class="bg-white metting">
      <div class=  " px-[2%] py-[3%] grid grid-cols-1 gap-4 lg:grid-cols-2 m-auto max-w-[1290px]">
        <div style="display:inline-grid;" class="lg:py-[3%]">
          <div class="py-[1%]" >
            <h3 class="font-bold text-4xl ">{{ $t("vision") }}</h3>
            <p class="text-[#AEAEAE] text-2xl py-2" >{{ about_us?.company_vision }}</p>
          </div>
          <div>
            <h3 class="font-bold text-4xl ">{{ $t("mission") }}</h3>
            <p class="text-[#AEAEAE] text-2xl py-2" > {{ about_us?.company_message }}</p>
          </div>
        </div>
       <div><img class="lg:h-[85%] w-full" src="../images/business-meeting.png"></div>
      </div>
     </div>
   <!-- Customer -->
    <Customer></Customer>
    <Footer></Footer>
  </template>
  <script setup>
  import Nave from '../components/Nave.vue'
  import Customer from '../components/Customer.vue'
  import Footer from '../components/Footer.vue'
  import axios from "axios";
  import { ref, reactive, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  const our_team=ref('')
  const about_us=ref('')
  const pagination = {
  el: '.swiper-pagination',
  clickable: true,
};
const banner=ref('')
const banner_url=ref('')
const swiperRef = ref(null);
const activeIndex = ref(0);
const slid = ref(0);

const onSlideChange = (swiper) => {

  activeIndex.value = swiper.realIndex;
  const slidesPerView = swiper.params.slidesPerView;
  slid.value = Math.floor(activeIndex.value + (slidesPerView / 2) - 0.5);

};


const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};
  const fetchdata=()=>{
        axios.post('api/get_our_team',{
          lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          our_team.value=res.data.result.data
        })
        axios.post('api/get_company_banner',{
          lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
           banner.value = res.data.result.data
           const videoId = banner.value.banner_url.split('youtu.be/')[1]
           banner_url.value = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

        })
        axios.post('api/about_us',{
          lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          about_us.value=res.data.result.data
        })
        }
        onMounted(() => {
          fetchdata()

        });

  </script>
<style>
.banner .swiper-pagination-bullet {

  margin-top: 12px;
  background-color: rgb(255, 255, 255) !important;
  z-index: 60;
}
.banner .swiper-pagination{
  position: absolute;
  margin-top: 10px

}

.swiper-button-next,
.swiper-button-prev {
  color: #007bff;
}
.swiper-button-prev{
  background-color: red !important;
  border-radius: 50% !important ;
  transform: scale(.7) !important;
  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
}
.swiper-button-next{
  background-color: red !important;
  border-radius: 50% !important ;
  transform: scale(.7) !important;
  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
}
.video-container {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
}

.responsive-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
