<template>
  <div class="bg-white complexes">
<div class=  " px-[2%] py-[3%] m-auto  max-w-[1350px]">



      <div class="flex justify-between">
        <h2 class="text-3xl lg:text-4xl  font-bold">المجمعات</h2>
        <a href="/auctions" class="text-xl lg:text-2xl font-bold text-[#ef5258]">مشاهدة المزيد</a>
      </div>

     <div class=" grid lg:grid-cols-3 w-full lg:w-fit grid-cols-2 shadow-lg rounded-md bg-white px-2 pb-2 m-1 ">
      <Button  @click="getauction('running')"   :style=" active == 'running' ? { backgroundColor: '#65BDC4' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label="  القادمة" class="mt-3 bg-[#AA1E22]   "/>

      <Button  @click="getauction('comming')"   :style=" active == 'comming' ? { backgroundColor: '#65BDC4' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label="   الحالية" class="mt-3 bg-[#AA1E22]   "/>
      <Button  @click="getauction('finished')"   :style=" active == 'finished' ? { backgroundColor: '#65BDC4' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label=" المنتهية " class="mt-3 bg-[#AA1E22]   "/>
     </div>
      <div v-if="allauctions.length >= 1" class=" mt-3">

        <div class="w-full relative ">
          <div class="swiper-button-next " ></div>
          <div class="swiper-button-prev "></div>
          <div class="w-full m-auto lg:w-[90%]">
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
    <swiper-slide v-for="(auction, index) in allauctions" :key="index">
      <div class="text-center relative text-4xl bg-white rounded-lg w-full shadow-lg ">
        <!-- <div class="absolute w-full h-full bg-white opacity-20"></div> -->
        <div class="h-full">
           <div class="relative" >

            <img alt="not found" class="h-[230px] w-full" src="../images/auctions.png">
            <p  :class="{'bg-[#CE3C3CB8]': auction.status == 'finished','bg-[#5BFF338F]': auction.status == 'running','bg-[#C9AA3FBF]': auction.status == 'comming',}" class="absolute z-50 top-[70%] left-3   text-white text-base p-2 rounded-lg">{{ auction.status }}</p>
           </div>
            <div class="flex justify-between p-2">
              <div>
                <p class="text-xl font-bold text-right">{{ auction.name }}</p>

                <div class="flex py-1 ">
                  <a  class="flex bg-[#65BDC4]  py-1 px-1 mx-1 rounded-md" >
                  <div class="my-auto">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_436_3516)">
                  <circle cx="9" cy="8.30664" r="2.25" stroke="white" stroke-width="1.5"/>
                  <path d="M15.75 8.22331C15.75 11.9052 11.5312 16.5566 9 16.5566C6.46875 16.5566 2.25 11.9052 2.25 8.22331C2.25 4.54141 5.27208 1.55664 9 1.55664C12.7279 1.55664 15.75 4.54141 15.75 8.22331Z" stroke="white" stroke-width="1.5"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_436_3516">
                  <rect width="18" height="18" fill="white" transform="translate(0 0.0566406)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  </div>
                  <p class="text-white text-sm px-1">{{ auction.city }} </p>
                 </a>
                 <a class="flex bg-[#65BDC4] py-1 px-2 rounded-md " >
                  <div class="m-auto">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.836914 5.01865C0.836914 3.24785 2.27243 1.81233 4.04323 1.81233H10.7934C12.5642 1.81233 13.9997 3.24785 13.9997 5.01865V12.1063C13.9997 13.8771 12.5642 15.3126 10.7934 15.3126H4.04323C2.27243 15.3126 0.836914 13.8771 0.836914 12.1063V5.01865ZM4.04323 2.82485C2.83163 2.82485 1.84944 3.80705 1.84944 5.01865V12.1063C1.84944 13.3179 2.83163 14.3001 4.04323 14.3001H10.7934C12.005 14.3001 12.9872 13.3179 12.9872 12.1063V5.01865C12.9872 3.80705 12.005 2.82485 10.7934 2.82485H4.04323Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.836914 6.03117C0.836914 5.75157 1.06357 5.52491 1.34318 5.52491H13.4934C13.773 5.52491 13.9997 5.75157 13.9997 6.03117C13.9997 6.31077 13.773 6.53743 13.4934 6.53743H1.34318C1.06357 6.53743 0.836914 6.31077 0.836914 6.03117Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71825 0.799805C4.99785 0.799805 5.22451 1.02647 5.22451 1.30607V3.33111C5.22451 3.61071 4.99785 3.83737 4.71825 3.83737C4.43865 3.83737 4.21199 3.61071 4.21199 3.33111V1.30607C4.21199 1.02647 4.43865 0.799805 4.71825 0.799805Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1184 0.799805C10.398 0.799805 10.6246 1.02647 10.6246 1.30607V3.33111C10.6246 3.61071 10.398 3.83737 10.1184 3.83737C9.83877 3.83737 9.61211 3.61071 9.61211 3.33111V1.30607C9.61211 1.02647 9.83877 0.799805 10.1184 0.799805Z" fill="white"/>
                    <path d="M8.09332 10.0813C8.09332 10.4541 7.79111 10.7563 7.41831 10.7563C7.04551 10.7563 6.74329 10.4541 6.74329 10.0813C6.74329 9.70846 7.04551 9.40624 7.41831 9.40624C7.79111 9.40624 8.09332 9.70846 8.09332 10.0813Z" fill="white"/>
                    <path d="M10.7934 10.0813C10.7934 10.4541 10.4912 10.7563 10.1184 10.7563C9.74557 10.7563 9.44335 10.4541 9.44335 10.0813C9.44335 9.70846 9.74557 9.40624 10.1184 9.40624C10.4912 9.40624 10.7934 9.70846 10.7934 10.0813Z" fill="white"/>
                    <path d="M5.39326 10.0813C5.39326 10.4541 5.09105 10.7563 4.71825 10.7563C4.34545 10.7563 4.04323 10.4541 4.04323 10.0813C4.04323 9.70846 4.34545 9.40624 4.71825 9.40624C5.09105 9.40624 5.39326 9.70846 5.39326 10.0813Z" fill="white"/>
                    </svg>

                  </div>
                  <p class="text-white text-sm px-1"> {{ auction.start_date }}</p>
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

        <div class="grid grid-cols-5 p-[1%] gap-1">
          <div class=" p-1 flex items-center  rounded-sm">

            <p class="text-sm font-bold text-center " v-if="auction.status == 'running'">ينتهي بعد :</p>
            <p class="text-sm font-bold text-center " v-if="auction.status == 'comming'">قادم بعد :</p>
            <p class="text-sm font-bold text-center " v-if="auction.status == 'finished'"> منتهي :</p>
          </div>
          <div class="border-2 p-[2%] rounded-sm">
            <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status != 'finished'">{{ auction.day }}</h4>
            <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
            <p class="text-xl font-medium text-[#AA1E22] ">يوم</p>
          </div>
          <div class="border-2 p-[2%] rounded-sm">
            <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status == 'comming' && auction.start_time < currentHour ">{{   currentHour  - auction.start_time}}</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if=" auction.status == 'comming' && auction.start_time > currentHour">{{   auction.start_time - currentHour}}</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status == 'running' && auction.end_time < currentHour ">{{   currentHour  - auction.end_time}}</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if=" auction.status == 'running' && auction.end_time > currentHour">{{   auction.end_time - currentHour}}</h4>
            <p class="text-xl font-medium text-[#AA1E22] ">ساعة</p>
          </div>
          <div class="border-2 p-[2%] rounded-sm">
            <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.second > currentMinutes && auction.status != 'finished'">{{    59-(auction.second - currentMinutes)}}</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.second < currentMinutes && auction.status != 'finished'">{{   59-( currentMinutes- auction.second)}}</h4>

            <p class="text-xl font-medium text-[#AA1E22] ">دقيقة</p>
          </div>
          <div class="border-2 p-[2%] rounded-sm">
            <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
            <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status != 'finished'">{{  59-currentSeconds}}</h4>
            <p class="text-xl font-medium text-[#AA1E22] ">ثانية</p>
          </div>
        </div>
        <div class="p-[2%] grid grid-cols-3 gap-1">
         <div class="flex border-l-2">
          <p class="text-xs font-bold ">مدة المزاد :</p>
          <p class="text-xs px-1" >{{ auction.duration }} يوم</p>

         </div>
         <div class="flex border-l-2">
          <p class="text-xs font-bold"> وقت المزاد :</p>

          <p class="text-xs px-1" v-if=" auction.start_time > auction.end_time"> {{ auction.start_time - auction.end_time  }} ساعة</p>
          <p class="text-xs px-1" v-if=" auction.start_time < auction.end_time"> {{ auction.end_time - auction.start_time   }} ساعة</p>
         </div>
         <div class="flex">
          <p class="text-xs font-bold">عدد المنتجات :</p>
          <p class="text-xs px-1"> {{ auction.assets_number }}</p>
         </div>
        </div>
        <div>
          <!-- @click="details(auction.auction_id)" -->
           <Button   @click="details(auction.auction_id)" style=" background-color: #65BDC4 !important;padding: 0px !important;margin-bottom: 2% !important;"  label="إقرأ المزيد" class="mt-3 w-[90%]  focus:ring-0 text-[#AA1E22]"/>
        </div>
      </div>
      <!-- Doctor -->
    </swiper-slide>




        </swiper>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  </div>
</div>
</template>
<script setup>
import Nave from '../components/Nave.vue';
import {useRouter} from "vue-router";

const router = useRouter()
// import img1 from "../images/riyadh-saudi-arabia-gretopia_5 1.png";
import { ref, reactive, onMounted,computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from "axios";
const allauctions=ref({})
const active=ref('comming')
const swiperRef = ref(null);
const currentDate = ref(new Date());
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
const currentMinutes = computed(() => {
return currentDate.value.toLocaleTimeString([], { minute: '2-digit', hour12: false }).split(':')[0];
});
const currentHour = computed(() => {
// Create a new Date object based on currentDate
const date = new Date(currentDate.value);

// Add one hour to the current hour
date.setHours(date.getHours() + 1);

// Return the updated hour
return date.toLocaleTimeString([], { hour: '2-digit', hour12: false });
});
const currentSeconds = computed(() => {
return currentDate.value.toLocaleTimeString([], { second: '2-digit', hour12: false }).split(':')[0];
});
const formattedDate = computed(() => {
const year = currentDate.value.getFullYear();
const month = String(currentDate.value.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const day = String(currentDate.value.getDate()).padStart(2, '0');

return `${year}-${month}-${day}`;
});
// Function to update the current date
const updateTime = () => {
currentDate.value = new Date();
};
const details=(id)=>{
router.push({name:'auction-details',params:{'id':id} })
}
const getauction=(e)=>{

active.value=String(e)
allauctions.value={}

axios
.post('api/get_projects',{
  projects_filter:e,
  page_number:"1",
  page_scope:"7",
})
.then((res) => {
  console.log(res.data.result.data)

  allauctions.value = res.data.result?.data.map(event => ({
              "name": event.name,
              "auction_id": event.auction_id,
              "status": event.status,
              "duration_by_hours": event.duration_by_hours,
              "assets_number": event.assets_number,
              "profile_img_link": event.profile_img_link,
              "auction_type": event.auction_type,
              "city": event.city,
              "start_date": event.start_date,

              "end_time": event.end_time ? event.end_time.split(":")[0] : null,
              "start_time": event.start_time ? event.start_time.split(":")[0] : null,
              "second": event.start_time ? (event.start_time).split(":")[1] : null,

              "day": event.status == 'running'
                ? Math.ceil((new Date(event.end_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24))
                : Math.ceil((new Date(event.start_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),

                "duration": event.status == 'running' && event.end_date && event.start_date
                ? Math.ceil((new Date(event.end_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24))
                : Math.ceil((new Date(event.start_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),

              "duration": event.end_date && event.start_date ? Math.ceil((new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24)): null
        }));
        console.log( allauctions.value)



})

}

const fetchdata=()=>{
axios
.post('api/get_projects',{
  projects_filter:"comming",
  page_number:"1",
  page_scope:"7",
})
.then((res) => {
  console.log(res.data.result.data)

  allauctions.value = res.data.result.data.map(event => ({
              "name": event.name,
              "auction_id": event.auction_id,
              "status": event.status,
              "duration_by_hours": event.duration_by_hours,
              "assets_number": event.assets_number,
              "profile_img_link": event.profile_img_link,
              "auction_type": event.auction_type,
              "city": event.city,
              "start_date": event.start_date,
              "start_date": event.start_date,

              "start_time": (event.start_time).split(":")[0],
              "end_time": event.end_time ? event.end_time.split(":")[0] : null,
              "second":(event.start_time).split(":")[1],
               "day": event.status == 'running'
                ? Math.ceil((new Date(event.end_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24))
                : Math.ceil((new Date(event.start_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),
              "duration": event.end_date && event.start_date ? Math.ceil((new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24)): null
        }));
        console.log( allauctions.value)



})
}


onMounted(() => {
updateTime();
fetchdata()

setInterval(() => {
    currentDate.value = new Date();
  }, 100);

});

</script>
<style>
.complexes .swiper-pagination-bullet {
background-color: #65BDC4!important;
visibility: hidden !important;
z-index: 60;

}


.swiper-button-next,
.swiper-button-prev {
color: #007bff;
}
.complexes .swiper-button-prev{
background-color: #349ca3 !important;
border-radius: 50% !important ;
transform: scale(.7) !important;
color:  white !important;
width: 50px !important ;
height: 50px !important ;
}
.complexes .swiper-button-next{
background-color: #349ca3 !important;
border-radius: 50% !important ;
transform: scale(.7) !important;
color:  white !important;
width: 50px !important ;
height: 50px !important ;
}

</style>

