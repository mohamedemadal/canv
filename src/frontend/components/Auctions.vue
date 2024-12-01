<template>
    <div class="bg-slate-50 auctions">
  <div class=  " px-[2%] py-[3%] m-auto  max-w-[1350px]">
      <div class=" ">
         <h3 class="text-center text-3xl lg:text-5xl py-4 hidden lg:block ">{{ $t("Learn_more_about_CANF_services") }} </h3>
         <!-- <p class="text-center text-xl lg:text-2xl px-1 pb-[5%] text-[#AEAEAE]"> لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل </p> -->
       </div>


        <div class="flex justify-between">
          <h2 class="text-3xl lg:text-4xl my-auto font-bold">{{ $t("auctions") }}</h2>

        </div>
        <div class="flex justify-between">
         <div class=" grid lg:grid-cols-3 w-full lg:w-fit grid-cols-3 shadow-lg rounded-md bg-[#FFFFFF] px-2 pb-2 m-1 ">
        <Button  @click="getauction('comming')"   :style=" active == 'comming' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   :label='$t("Upcoming")' class="mt-3 bg-[#AA1E22]   "/>
        <Button  @click="getauction('running')"   :style=" active == 'running' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   :label='$t("Current")' class="mt-3 bg-[#AA1E22]   "/>
        <Button  @click="getauction('finished')"   :style=" active == 'finished' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"  :label='$t("Ending")'  class="mt-3 bg-[#AA1E22]   "/>
       </div>
          <a href="/auctions" class="text-xl lg:text-2xl lg:px-10 font-bold text-[#AA1E22]">{{ $t("Watch_more") }} </a>
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

              <img alt="not found" class="h-[230px] w-full" :src="auction?.profile_img_link">
              <p  :class="{'bg-[#CE3C3CB8]': auction.status == 'finished','bg-[#5BFF338F]': auction.status == 'running','bg-[#C9AA3FBF]': auction.status == 'comming',}" class="absolute z-50 top-[70%] left-3   text-white text-base p-2 rounded-lg">{{ auction.status }}</p>
             </div>
              <div class="flex justify-between p-2">
                <div>
                  <p class="text-xl font-bold text-right">{{ auction.name }}</p>
                  <div class="flex py-1 ">
                    <a  class="flex bg-[#F6E4E4]  py-1 px-1 mx-1 rounded-md" style="border: 2px solid #810206;">
                    <div class="my-auto">
                      <svg class="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="8.25" r="2.25" stroke="#7A0505" stroke-width="1.5"/>
                      <path d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z" stroke="#7A0505" stroke-width="1.5"/>
                      </svg>




                    </div>
                    <p class="text-[#810206] text-base px-1">{{ auction.city }} </p>
                   </a>
                   <a class="flex bg-[#F6E4E4] py-1 px-2 rounded-md " style="border: 2px solid #810206;">
                    <div class="m-auto">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.836914 4.96201C0.836914 3.1912 2.27243 1.75569 4.04323 1.75569H10.7934C12.5642 1.75569 13.9997 3.1912 13.9997 4.96201V12.0497C13.9997 13.8205 12.5642 15.256 10.7934 15.256H4.04323C2.27243 15.256 0.836914 13.8205 0.836914 12.0497V4.96201ZM4.04323 2.76821C2.83163 2.76821 1.84944 3.75041 1.84944 4.96201V12.0497C1.84944 13.2613 2.83163 14.2435 4.04323 14.2435H10.7934C12.005 14.2435 12.9872 13.2613 12.9872 12.0497V4.96201C12.9872 3.75041 12.005 2.76821 10.7934 2.76821H4.04323Z" fill="#7A0505"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.836914 5.97453C0.836914 5.69493 1.06357 5.46827 1.34318 5.46827H13.4934C13.773 5.46827 13.9997 5.69493 13.9997 5.97453C13.9997 6.25413 13.773 6.48079 13.4934 6.48079H1.34318C1.06357 6.48079 0.836914 6.25413 0.836914 5.97453Z" fill="#7A0505"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71825 0.743164C4.99785 0.743164 5.22451 0.969825 5.22451 1.24943V3.27447C5.22451 3.55407 4.99785 3.78073 4.71825 3.78073C4.43865 3.78073 4.21199 3.55407 4.21199 3.27447V1.24943C4.21199 0.969825 4.43865 0.743164 4.71825 0.743164Z" fill="#7A0505"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1184 0.743164C10.398 0.743164 10.6246 0.969825 10.6246 1.24943V3.27447C10.6246 3.55407 10.398 3.78073 10.1184 3.78073C9.83877 3.78073 9.61211 3.55407 9.61211 3.27447V1.24943C9.61211 0.969825 9.83877 0.743164 10.1184 0.743164Z" fill="#7A0505"/>
                      <path d="M8.09332 10.0246C8.09332 10.3974 7.79111 10.6996 7.41831 10.6996C7.04551 10.6996 6.74329 10.3974 6.74329 10.0246C6.74329 9.65182 7.04551 9.3496 7.41831 9.3496C7.79111 9.3496 8.09332 9.65182 8.09332 10.0246Z" fill="#7A0505"/>
                      <path d="M10.7934 10.0246C10.7934 10.3974 10.4912 10.6996 10.1184 10.6996C9.74557 10.6996 9.44335 10.3974 9.44335 10.0246C9.44335 9.65182 9.74557 9.3496 10.1184 9.3496C10.4912 9.3496 10.7934 9.65182 10.7934 10.0246Z" fill="#7A0505"/>
                      <path d="M5.39326 10.0246C5.39326 10.3974 5.09105 10.6996 4.71825 10.6996C4.34545 10.6996 4.04323 10.3974 4.04323 10.0246C4.04323 9.65182 4.34545 9.3496 4.71825 9.3496C5.09105 9.3496 5.39326 9.65182 5.39326 10.0246Z" fill="#7A0505"/>
                      </svg>
                    </div>
                    <p class="text-[#810206] text-sm px-1"> {{ auction.start_date }}</p>
                   </a>
                  </div>
                </div>
                <div class="flex space-x-2">
                    <div class="rounded-full m-auto text-center" >
                    <img :src="auction?.auction_logo" class="w-16 h-10">

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
              <p class="text-sm font-bold text-center " v-if="auction.status == 'finished'"> {{ $t("ended") }} :</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status != 'finished'">{{ auction.day }}</h4>
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <p class="text-lg  font-medium text-[#AA1E22] ">{{ $t("day") }} </p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status == 'comming' && auction.start_time < currentHour ">{{   currentHour  - auction.start_time}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if=" auction.status == 'comming' && auction.start_time > currentHour">{{   auction.start_time - currentHour}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status == 'running' && auction.end_time < currentHour ">{{   currentHour  - auction.end_time}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if=" auction.status == 'running' && auction.end_time > currentHour">{{   auction.end_time - currentHour}}</h4>
              <p class="text-lg  font-medium text-[#AA1E22] ">{{ $t("hour") }}</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.second > currentMinutes && auction.status != 'finished'">{{    59-(auction.second - currentMinutes)}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.second < currentMinutes && auction.status != 'finished'">{{   59-( currentMinutes- auction.second)}}</h4>

              <p class="text-lg  font-medium text-[#AA1E22] ">{{ $t("minute") }}</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status != 'finished'">{{  59-currentSeconds}}</h4>
              <p class="text-lg font-medium text-[#AA1E22] ">{{ $t("second") }}</p>
            </div>
          </div>
          <div class="p-[2%] grid grid-cols-3 gap-1">
           <div class="flex ">
            <p class="text-xs font-bold "> {{ $t("auction_duration") }} :</p>
            <p class="text-xs px-1" >{{ auction.duration }} {{ $t("day") }}</p>

           </div>
           <div class="flex ">
            <p class="text-xs font-bold"> {{ $t("auction_time") }}  :</p>

            <p class="text-xs px-1" v-if=" auction.start_time > auction.end_time"> {{ auction.start_time - auction.end_time  }} {{ $t("hour") }}</p>
            <p class="text-xs px-1" v-if=" auction.start_time < auction.end_time"> {{ auction.end_time - auction.start_time   }} {{ $t("hour") }}</p>
           </div>
           <div class="flex">
            <p class="text-xs font-bold">{{ $t("product_count") }}  :</p>
            <p class="text-xs px-1"> {{ auction.assets_number }}</p>
           </div>
          </div>
          <div>
            <!-- @click="details(auction.auction_id)" -->
             <Button   @click="details(auction.auction_id)" style=" background-color: #AA1E22 !important;padding: 0px !important;margin-bottom: 2% !important;"  label="إقرأ المزيد" class="mt-3 w-[90%]  focus:ring-0 text-[#AA1E22]"/>
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
  .post('api/get_auctions',{
    auctions_filter:e,
    page:"1",
    page_scope:"7",
    lang:localStorage.getItem('appLang'),
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
                "auction_logo":event.auction_logo,
                "start_time": (event.start_time).split(":")[0],
                "end_time": event.end_time ? event.end_time.split(":")[0] : null,
                "second":(event.start_time).split(":")[1],
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
  .post('api/get_auctions',{
    auctions_filter:"comming",
    page:"1",
    page_scope:"7",
    lang:localStorage.getItem('appLang'),
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
                "auction_logo":event.auction_logo,
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
.auctions .swiper-pagination-bullet {
  background-color: rgb(170, 0, 0) !important;
  z-index: 60;
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


</style>

