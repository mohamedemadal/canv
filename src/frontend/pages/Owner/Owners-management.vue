<template>
  <Nave></Nave>

      <!-- banner -->
      <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
      <H1 class="font-bold text-5xl text-white z-50">{{ $t("الصفحه الشخصيه") }}</H1>
     <div class="flex py-8 ">
      <p class="text-2xl font-semibold "> {{ $t("home") }}</p>
      <svg class="my-auto mx-[1%] ltr:rotate-180" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p class="text-2xl font-semibold "> {{ $t("الصفحه الشخصيه") }}</p>
     </div>
    </div>
   </div>

   <!-- branches -->
   <div class="bg-white auctions px-[2%] py-[3%] pt-[5%] ">
    <p class="text-3xl font-bold max-w-[1280px]  p-4  m-auto">المعلومات الشخصيه</p>
    <div class="card flex justify-center">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
    </div>
   </div>




   <Toast/>

  <Footer></Footer>
</template>
<script setup>
  import Nave from '../../components/Nave.vue'
  import Footer from '../../components/Footer.vue'
  import { ref, onMounted } from 'vue';
  import axios from "axios";
  const profile=ref({
  })
  const chartData = ref();
  const chartOptions = ref(null);
  const departments=ref('')
  const company_details=ref('')
  const branches=ref('')
  import {useToast} from 'primevue/usetoast'
  const toast = useToast()
  const update_profile=()=>{
    profile.value.lang=localStorage.getItem('appLang')
    profile.value.user_id=localStorage.getItem('user_id')
    axios.post('api/get_user_profile',profile.value)
        .then((res) => {
          toast.add({severity: 'success', summary: 'شكرا', detail: ' لقد تلقينا رسالتك، شكرا لتواصلك معنا', life: 3000})
        })
  }
  const fetchdata=()=>{
       axios.post('api/get_user_profile',{
        lang:localStorage.getItem('appLang'),
        user_id:localStorage.getItem('user_id'),
        })
        .then((res) => {
          profile.value=res.data.result.data
        })

        }
        const uploadFile = (e) => {
          const image = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(image);
              reader.onload = (e) => {
                profile.value.profile = e.target.result;
                profile.value.file = image;
              };

        };



              const setChartData = () => {
                  const documentStyle = getComputedStyle(document.body);

                  return {
                      labels: ['A', 'B', 'C'],
                      datasets: [
                          {
                              data: [540, 325, 702],
                              backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                              hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                          }
                      ]
              };
          };
        onMounted(() => {
          chartData.value = setChartData();
          chartOptions.value = setChartOptions();

        });
</script>

