<template>
  <Nave></Nave>

    <!-- banner -->
    <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
    <H1 class="font-bold text-5xl text-white z-50">  {{ job?.name }}</H1>
    <div class="flex py-12 ">
    <p class="text-2xl font-semibold ">{{ $t("home") }}</p>
    <svg class="my-auto mx-[1%] ltr:rotate-180" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <p class="text-2xl font-semibold ">{{ $t("jobs") }}</p>
    <svg class="my-auto mx-[1%] ltr:rotate-180" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <p class="text-3xl font-bold " >{{ $t("job_data") }} </p>
    <div class="grid lg:grid-cols-2 gap-4 grid-cols-1 py-[2%]">
       <div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >{{ $t("job_type") }}  : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.name }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >{{ $t("location") }}  : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.shift_type }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" > {{ $t("department_name") }} : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.department?.name }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" > {{ $t("job_location") }} : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.shift_place }}</p>
        </div>
        <div class="flex py-2">
          <p class="text-xl font-bold text-black" >{{ $t("required_number") }}   : </p>
          <p  class="text-xl  font-semibold text-[#7C7B7B]" >{{  job?.applied_number }}</p>
        </div>

       </div>
       <div>
        <p class="font-bold text-xl" >{{ $t("job_description") }} :</p>
        <p class="text-[#AEAEAE] text-lg leading-8" v-html="formattedDescription"></p>
        <span v-if="job?.description?.length > volume" @click="increasVolume" class="font-bold text-[#AA1E22]">{{ $t("read_more") }}</span>


       </div>
    </div>
    <div class="text-center py-6">
      <Button @click="apply(job?.apply_form.id,job?.job_id)" style=" background-color: #AA1E22 !important;"  :label='$t("apply_now")' class="w-[170px] m-auto pb-2 lg:mb-0 bg focus:ring-0 text-[#AA1E22]"/>

    </div>

  </div>
</div>
    <Footer></Footer>
</template>
<script setup>
import Nave from '../components/Nave.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const job = ref({});
const volume=ref(400)
// Navigate to the job application form
const apply = (id, job_id) => {
  router.push({ name: 'job-apply', params: { id: id, job_id: job_id } });
};

// Fetch job details
const fetchdata = () => {
  axios
    .post('api/get_posted_job_details', {
      job_id: router.currentRoute.value.params.id,
      lang: localStorage.getItem('appLang'),
    })
    .then((res) => {
      job.value = res.data.result.data;
    });
};

// Compute formatted description
const formattedDescription = computed(() => {
  return job.value?.description
    ?.replace(/\n/g, '<br>') // Replace line breaks with spaces
   // Remove hyphens and spaces after them
    .trim() // Trim leading/trailing spaces
    .slice(0, volume.value); // Limit to 460 characters
});
const increasVolume=()=>{
  if(job.value?.description.length > volume.value){
    volume.value=volume.value+100
  }
}

onMounted(() => {
  fetchdata();
});
</script>

