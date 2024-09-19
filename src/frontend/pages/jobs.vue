<template>
  <Nave></Nave>
    <!-- banner -->
    <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
      <H1 class="font-bold text-5xl text-white z-50"> الوظائف</H1>
     <div class="flex py-8 ">
      <p class="text-2xl font-semibold ">الرئيسية</p>
      <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p class="text-2xl font-semibold "> الوظائف</p>
     </div>
    </div>
   </div>

   <!-- ////////////////////////////// -->
  <div class="bg-slate-50 auctions ">
    <div class=  "  px-[1%] py-[1%] m-auto  max-w-[1280px]">
      <div class=" ">
         <h3 class="text-center text-3xl  py-4 ">انضم إلى فريق كانف، حيث الابتكار هو أولويتنا</h3>
         <p class="text-center text-xl  text-[#AEAEAE]"> انضم إلى فريق متخصص ومبتكر وملتزم إلى التميز في كل خطوة. </p>
       </div>

    </div>
  </div>
  <div class="bg-slate-50 auctions " v-if="!jobs">
    <div class=  " px-[2%] py-[3%] m-auto  max-w-[1295px] h-[40vh] te  flex text-center items-center">
      <h2 class="text-3xl text-[#BC1E1E] font-bold text-center m-auto">نأسف لعدم وجود وظائف شاغره فالوقت الحالي . 😢
      </h2>
    </div>
  </div>
  <div class="bg-slate-50 auctions ">
    <div  class=  " px-[2%] py-[3%] grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4 sh max-w-[1390px] m-auto">
      <div  style="transition: .7s;" v-for="job  in jobs" class="bg-white py-[6%] px-[6%] rounded-md shadow-xl  hover:scale-[1.03]">
        <h3 class="text-2xl font-bold  "  style="text-wrap: nowrap; overflow: hidden;"> {{ (job?.name).split(' ').slice(0, 5).join(' ')}}</h3>
        <div class="flex justify-between pt-6">
          <div class="flex" >
            <span class="font-bold " >المكان :</span>
            <p>{{ job?.shift_place }}</p>
          </div>
          <div class="flex" >
            <span class="font-bold " >الدوام :</span>
            <p>{{ job?.shift_type }}</p>
          </div>
        </div>
        <h5  class="text-[#AEAEAE] py-6 leading-6  min-h-[139px]">{{ (job?.description)?.trim().slice(0,140) }} ...</h5>
        <div>
           <Button  style=" background-color: #AA1E22 "  @click="details(job?.job_id)" label=" التفاصيل" class="my-2 w-[90%]  focus:ring-0 text-[#AA1E22]"/>
        </div>
      </div>

    </div>
  </div>


  <Footer></Footer>
</template>
<script setup>
  import Nave from '../components/Nave.vue'
  import Footer from '../components/Footer.vue'
  import { ref, onMounted } from 'vue';
  import axios from "axios";
  import {useRouter} from "vue-router";

const router = useRouter()
  const jobs=ref('')
  const details=(id)=>{
      router.push({name:'jobs-details',params:{'id':id} })
    }
  const fetchdata=()=>{
        axios.post('api/get_our_posted_jobs',{
        })
        .then((res) => {
          jobs.value=res.data.result.data
        })
        }
        onMounted(() => {
          fetchdata()

        });
</script>
