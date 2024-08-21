<template>
  <Nave></Nave>
  <div class="bg-white auction">
  <!-- banner -->
  <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
      <H1 class="font-bold text-5xl text-white z-50"> المزادات</H1>
     <div class="flex py-8 ">
      <p class="text-2xl font-semibold ">الرئيسية</p>
      <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p class="text-2xl font-semibold ">المزادات </p>
     </div>
    </div>
   </div>

   <!-- auctions -->
  <div class=  "  px-[1%] py-[3%] m-auto  max-w-[1290px]">
      <div class="flex justify-between">
        <h2 class="text-4xl  font-bold">المزادات</h2>

      </div>

      <div class=" grid lg:grid-cols-4 w-full lg:w-fit grid-cols-2 shadow-lg rounded-md bg-white px-2 pb-2 m-1 ">
      <Button @click="getauction('all')"  :style=" active == 'all' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label=" الكل " class="mt-3 bg-[#AA1E22]  my-auto "/>
      <Button  @click="getauction('comming')"   :style=" active == 'comming' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label=" الحالية" class="mt-3 bg-[#AA1E22]   "/>
      <Button  @click="getauction('running')"   :style=" active == 'running' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label=" القادمة" class="mt-3 bg-[#AA1E22]   "/>
      <Button  @click="getauction('finished')"   :style=" active == 'finished' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label="المنتهية " class="mt-3 bg-[#AA1E22]   "/>
     </div>

     <div class="grid  grid-cols-1 lg:grid-cols-3 gap-3">
      <div  v-for="(auction, index) in allauctions" :key="index" class="text-center relative text-4xl bg-white rounded-lg w-full shadow-md ">
          <!-- <div class="absolute w-full h-full bg-white opacity-20"></div> -->
          <div class="">
             <div class="relative" >

              <img alt="not found" class="h-[230px] w-full" src="../images/auctions.png">
              <p class="absolute z-50 top-3 left-3 bg-black opacity-50 text-white text-base p-2 rounded-lg">{{ auction.status }}</p>
             </div>
              <div class="flex justify-between p-2">
                <div>
                  <p class="text-xl font-bold text-right">{{ auction.name }}</p>
                  <div class="flex py-1 ">
                    <a class="flex bg-[#AA1E22BF] py-1 px-1 mx-1 rounded-md">
                    <div>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="8.25" r="2.25" stroke="white" stroke-width="1.5"/>
                      <path d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z" stroke="white" stroke-width="1.5"/>
                      </svg>


                    </div>
                    <p class="text-[white] text-sm px-1">{{ auction.city }} </p>
                   </a>
                   <a class="flex bg-[#AA1E22BF] py-1 px-2 rounded-md">
                    <div class="m-auto">
                      <svg class="my-auto" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.837158 4.96249C0.837158 3.19169 2.27268 1.75617 4.04348 1.75617H10.7936C12.5644 1.75617 13.9999 3.19169 13.9999 4.96249V12.0501C13.9999 13.821 12.5644 15.2565 10.7936 15.2565H4.04348C2.27268 15.2565 0.837158 13.821 0.837158 12.0501V4.96249ZM4.04348 2.7687C2.83188 2.7687 1.84968 3.75089 1.84968 4.96249V12.0501C1.84968 13.2618 2.83188 14.2439 4.04348 14.2439H10.7936C12.0052 14.2439 12.9874 13.2618 12.9874 12.0501V4.96249C12.9874 3.75089 12.0052 2.7687 10.7936 2.7687H4.04348Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.837158 5.97502C0.837158 5.69542 1.06382 5.46876 1.34342 5.46876H13.4937C13.7733 5.46876 13.9999 5.69542 13.9999 5.97502C13.9999 6.25462 13.7733 6.48128 13.4937 6.48128H1.34342C1.06382 6.48128 0.837158 6.25462 0.837158 5.97502Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71849 0.743652C4.99809 0.743652 5.22475 0.970313 5.22475 1.24991V3.27496C5.22475 3.55456 4.99809 3.78122 4.71849 3.78122C4.43889 3.78122 4.21223 3.55456 4.21223 3.27496V1.24991C4.21223 0.970313 4.43889 0.743652 4.71849 0.743652Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1186 0.743652C10.3982 0.743652 10.6249 0.970313 10.6249 1.24991V3.27496C10.6249 3.55456 10.3982 3.78122 10.1186 3.78122C9.83901 3.78122 9.61235 3.55456 9.61235 3.27496V1.24991C9.61235 0.970313 9.83901 0.743652 10.1186 0.743652Z" fill="white"/>
                      <path d="M8.09357 10.0251C8.09357 10.3979 7.79135 10.7001 7.41855 10.7001C7.04575 10.7001 6.74354 10.3979 6.74354 10.0251C6.74354 9.6523 7.04575 9.35009 7.41855 9.35009C7.79135 9.35009 8.09357 9.6523 8.09357 10.0251Z" fill="white"/>
                      <path d="M10.7936 10.0251C10.7936 10.3979 10.4914 10.7001 10.1186 10.7001C9.74581 10.7001 9.4436 10.3979 9.4436 10.0251C9.4436 9.6523 9.74581 9.35009 10.1186 9.35009C10.4914 9.35009 10.7936 9.6523 10.7936 10.0251Z" fill="white"/>
                      <path d="M5.39351 10.0251C5.39351 10.3979 5.09129 10.7001 4.71849 10.7001C4.34569 10.7001 4.04348 10.3979 4.04348 10.0251C4.04348 9.6523 4.34569 9.35009 4.71849 9.35009C5.09129 9.35009 5.39351 9.6523 5.39351 10.0251Z" fill="white"/>
                      </svg>
                    </div>
                    <p class="text-[white] text-sm px-1"> {{ auction.start_date }}</p>
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

          <div class="grid grid-cols-4 p-[1%] gap-3">
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status != 'finished'">{{ auction.day }}</h4>
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <p class="text-xl font-medium text-[#AA1E22] ">يوم</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.start_time < currentHour && auction.status != 'finished'">{{   currentHour  - auction.start_time}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.start_time > currentHour && auction.status != 'finished'">{{   auction.start_time - currentHour}}</h4>
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
            <p class="text-xs font-bold">عدد الأصول  :</p>
            <p class="text-xs px-1"> {{ auction.assets_number }}</p>
           </div>
          </div>
          <div>
            <!-- @click="details(auction.auction_id)" -->
             <Button  style=" background-color: #AA1E22 !important;padding: 0px !important;margin-bottom: 2% !important;"  label="إقرأ المزيد" class="mt-3 w-[90%]  focus:ring-0 text-[#AA1E22]"/>
          </div>
        </div>
      <!-- test -->

     </div>
     <div>
      <Paginator v-if="allauctions.length >= 1"  v-model:first="current_page" :rows="1" :totalRecords="total_pages"
        :template="{

        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink  JumpToPageDropdown'
    }"
        ></Paginator>
     </div>
  </div>

</div>
<Footer></Footer>
</template>
<script setup>
import Nave from '../components/Nave.vue';
import Footer from '../components/Footer.vue'
import {useRouter} from "vue-router";

const router = useRouter()
// import img1 from "../images/riyadh-saudi-arabia-gretopia_5 1.png";
import { ref, reactive, onMounted,computed,watch} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from "axios";
const currentDate = ref(new Date());
const allauctions=ref({})
const total_pages=ref(2)
const current_page=ref(0)
const active=ref('all')
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
  total_pages.value =2
  current_page.value=0
  active.value=String(e)
    console.log( e)

axios
  .post('api/get_auctions',{
    auctions_filter:e,
    page_number:"1",
    page_scope:"9",
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

                "start_time": (event.start_time).split(":")[0],
                "end_time": event.end_time ? event.end_time.split(":")[0] : null,
                "second":(event.start_time).split(":")[1],
                "day":Math.ceil((( new Date(event.start_date)) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),
                "duration": event.end_date && event.start_date ? Math.ceil((new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24)): null
          }));
          console.log( allauctions.value)



  })

}
watch(current_page, (newPage, oldPage) => {
  axios
  .post('api/get_auctions',{
    auctions_filter:active.value,
    page_number:newPage+1,
    page_scope:"9",
  })
  .then((res) => {
    console.log(res.data.result.data)
    if(res.data.result.data.length = 9 ){
      total_pages.value ++
    }


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

                "start_time": (event.start_time).split(":")[0],
                "end_time": event.end_time ? event.end_time.split(":")[0] : null,
                "second":(event.start_time).split(":")[1],
                "day":Math.ceil((( new Date(event.start_date)) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),
                "duration": event.end_date && event.start_date ? Math.ceil((new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24)): null
          }));
          console.log( allauctions.value)



  })

      // Add any additional logic you need here, like fetching new data
    });
const fetchdata=()=>{
axios
  .post('api/get_auctions',{
    auctions_filter:"all",
    page_number:"1",
    page_scope:"9",
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
                "second":(event.start_time).split(":")[1],
                "day":Math.ceil(( new Date(event.start_date)) - new Date(formattedDate.value) / (1000 * 60 * 60 * 24))
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
.auction .swiper-pagination-bullet {
background-color: white;
color: red !important;
z-index: 60;
}
.auction .swiper-pagination-bullet span {

color: red !important;

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
.auction .swiper-pagination{
position: relative ;
margin-top: 1%
}
.p-paginator .p-paginator-pages .p-paginator-page.p-highlight{
  background-color: red !important;
  color: white;
}
.p-paginator .p-paginator-pages .p-paginator-page{
  background-color: #CCCCCC !important;
  border: 1px solid black;
  color: black !important
}
.p-paginator .p-dropdown{
  visibility: hidden !important;
}
.p-paginator .p-paginator-last ,.p-paginator .p-paginator-first{
  visibility: hidden !important;
}
.p-icon {
  transform: rotate(180deg) !important;
    width: 2rem;
    height: 3rem;
}
</style>

