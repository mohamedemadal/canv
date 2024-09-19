<template>
  <Nave></Nave>

    <!-- banner -->
    <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
    <H1 class="font-bold text-5xl text-white z-50">  {{ job?.name }}</H1>
    <div class="flex py-12 ">
    <p class="text-2xl font-semibold ">الرئيسية</p>
    <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <p class="text-2xl font-semibold ">الوظائف</p>
    <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p class="text-2xl font-semibold ">{{ job?.name }}</p>

    </div>
    </div>
    </div>
<!-- content -->
<div class="bg-white py-[3%] ">
  <div class=  "  m-auto shadow-lg animate__animated animate__backInRight animate__delay-.8s    max-w-[1280px] p-[3%]">
    <p class="text-3xl font-bold " >بيانات الوظيفة</p>
    <div class="grid lg:grid-cols-2 gap-4 grid-cols-1 py-[2%]">
       <div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >نوع الوظيفة : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.name }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >المكان  : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.shift_type }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >اسم القسم   : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.department?.name }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >مكان الوظيفة   : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.shift_place }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >العدد المطلوب  : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.applied_number }}</p>
        </div>

       </div>
       <div>
        <p class="font-bold text-xl" >الوصف :</p>
        <p class="text-[#AEAEAE] text-lg leading-8" > {{ (job?.description)?.slice(0,460) }} ...</p>
       </div>
    </div>
    <div class="text-center py-6">
      <Button style=" background-color: #AA1E22 !important;"  label=" قدم الآن" class="w-[170px] m-auto pb-2 lg:mb-0 bg focus:ring-0 text-[#AA1E22]"/>

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
  const job=ref({})


  const fetchdata=()=>{
       axios.post(`api/get_posted_job_details`,{
        job_id:router.currentRoute.value.params.id
        })
        .then((res) => {
          job.value=res.data.result.data
        })

        }
        onMounted(() => {
          fetchdata()

        });
</script>
