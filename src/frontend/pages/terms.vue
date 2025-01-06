<template>
  <Nave></Nave>

      <!-- banner -->
      <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
      <H1 class="font-bold text-5xl text-white z-50">{{ $t("Contact_us") }}</H1>
     <div class="flex py-8 ">
      <p class="text-2xl font-semibold "> {{ $t("home") }}</p>
      <svg class="my-auto mx-[1%] ltr:rotate-180" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p class="text-2xl font-semibold "> {{ $t("Contact_us") }}</p>
     </div>
    </div>
   </div>
   <div class="bg-slate-50 auctions ">
        <div class="animate__animated animate__backInRight animate__delay-1s py-[3%] m-auto  max-w-[1280px]">
          <p class="py-[3%] text-3xl">{{ terms.name }}</p>
          <div v-html="terms.terms"  ></div>
        </div>
   </div>

  <Footer></Footer>
</template>
<script setup>
  import Nave from '../components/Nave.vue'
  import Footer from '../components/Footer.vue'
  import { ref, onMounted } from 'vue';
  import axios from "axios";
  const contact=ref({})
  const departments=ref('')
  const company_details=ref('')
  const terms=ref('')
  import {useToast} from 'primevue/usetoast'
  const toast = useToast()
  const contact_us=()=>{
    axios.post('api/contact_us',contact.value)
        .then((res) => {
          toast.add({severity: 'success', summary: 'شكرا', detail: ' لقد تلقينا رسالتك، شكرا لتواصلك معنا', life: 3000})
        })
  }
  const fetchdata=()=>{
       axios.post('api/get_canv_terms',{
        lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          terms.value=res.data.result.data
        })
        axios.post('api/get_company_main_data',{
          lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          company_details.value=res.data.result.data
        })
        axios.post('api/get_company_departments',{
          lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          departments.value=res.data.result.data
        })
        }
        onMounted(() => {
          fetchdata()
          contact.value.lang=localStorage.getItem('appLang')
        });
</script>
<style>
 .area .p-inputtext:enabled{
  height: fit-content !important;
 }

</style>
