<template>
  <Nave></Nave>

      <!-- banner -->
      <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

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
    <form @submit.prevent="update_profile" class="max-w-[1280px] shadow-md grid grid-cols-1 p-4 lg:grid-cols-6 gap-4  m-auto">
      <div class="col-span-4">
        <div class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("full_name") }}</p>
                  <span v-if="!profile.name"  class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText  required class="bg-[#f7f5f5] w-full " v-model="profile.name" :placeholder='$t("full_name")'  />
                </div>

          </div>
          <div class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("Mobile_number") }} </p>
                  <span  v-if="!profile.phone" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    required class="bg-[#f7f5f5] w-full " v-model="profile.phone" :placeholder='$t("Mobile_number")' />
                </div>
              </div>
              <div class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("Your_email_address") }}</p>
                  <span v-if="!profile.email" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText  type="email" required class="bg-[#303843] w-full " v-model="profile.email" :placeholder='$t("Your_email_address")'  />
                </div>
              </div>
              <div class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("رقم الكارت") }}</p>
                  <span v-if="!profile.card_number" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText   required class="bg-[#303843] w-full " v-model="profile.card_number" :placeholder='$t("رقم الكارت")'  />
                </div>
              </div>
              <div class="z-50  py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t(" تاريخ الإنتهاء") }}</p>
                  <span v-if="!profile.card_exp_date" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Calendar    class="w-full " v-model="profile.card_exp_date"  showIcon     />

                </div>
              </div>
              <div class=" py-1  relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  كلمة المرور</p>
                  <span v-if="!profile.password" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Password  v-model="profile.password" toggleMask   placeholder="  أكتب كلمة المرور "/>
                </div>
              </div>
              <div class=" py-1  relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  الرمز السرى</p>
                  <span v-if="!profile.card_code" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">

                  <InputText   required class="bg-[#303843] w-full " v-model="profile.card_code" :placeholder='$t("رقم الكارت")'  />
                </div>
              </div>

              <div class=" flex-column gap-2 py-1 hidden">
                  <label class="w-full " for="username">{{ $t('personal_image') }}</label>

                  <InputText name="file"  ref="file" @change="uploadFile" accept="image/*" id="filr"   type="file" class="w-full" />

            </div>
            <Button
                type="submit"
                style="background-color: #AA1E22 !important;"
                :label='$t("تعديل")'
                class="mt-3   w-[90%] mx-auto  lg:mb-0 bg focus:ring-0 text-[#AA1E22] ">
            </Button>
      </div>
      <div class="col-span-2 mx-auto">
        <div class="rounded-full" style="border: 5px solid #AA1F23;">

                 <div ><img onclick="document.getElementById('filr').click()" class="hidden m-auto rounded-full" style="width: 200px ;height: 200px;" v-if="profile?.profile"  :src="profile?.profile" >
                    <div  class="m-auto rounded-full bg-no-repeat bg-cover" style="width: 200px ;height: 200px;" :style="{ backgroundImage: `url(${profile?.profile})` }"></div>

                  </div>

          </div>
         <div class="mx-auto text-center w-full">
          <Button
                onclick="document.getElementById('filr').click()"
                style="background-color: #AA1E22 !important;"
                :label='$t("تعديل")'
                class="mt-3   w-[90%] mx-auto  lg:mb-0 bg focus:ring-0 text-[#AA1E22] ">
            </Button>
         </div>
         <div class="mx-auto text-center w-full">
          <p class="underline text-[#DDAE05] font-bold text-xl">اكمل حسابك </p>
         </div>

      </div>

    </form>
   </div>




   <Toast/>

  <Footer></Footer>
</template>
<script setup>
  import Nave from '../components/Nave.vue'
  import Footer from '../components/Footer.vue'
  import { ref, onMounted } from 'vue';
  import axios from "axios";
  const profile=ref({
  })
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
        onMounted(() => {
          fetchdata()
          profile.value.lang=localStorage.getItem('appLang')

        });
</script>

