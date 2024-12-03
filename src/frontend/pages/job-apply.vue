<template>
  <Nave></Nave>

  <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
   <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
   <img class="w-full absolute h-full" src="../images/breadcrumb.png">

   <div class="z-50 text-white w-full m-auto w-[80%] ">
   <H1 class="font-bold text-5xl text-white z-50">  {{ job_name.name }}</H1>
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
   <p class="text-2xl font-semibold ">{{ job_name.name }} </p>

   </div>
   </div>
   </div>


 <div class="bg-white py-[3%] ">
 <div class=  "  m-auto shadow-lg animate__animated animate__backInRight animate__delay-.8s    max-w-[1280px] p-[3%]">
   <p class="text-3xl font-bold text-center " >  {{ $t("Apply_for_job") }} {{ job_name.name }}  </p>
 <form @submit.prevent="submitForm" class="grid lg:grid-cols-2 gap-4 py-[2%]">
   <div v-for="(fill, index) in fields" :key="index">
     <div v-if="fill.field_type === 'text'">
       <div class="flex">
         <p class="py-2 font-bold text-[#303843]">{{ fill.label_on_form }}</p>
         <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*</span>
       </div>
       <component
       :required="fill.is_required_field "
         is="InputText"
         class="bg-[#f7f5f5] w-full"
         v-model="job[fill.name]"
             :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
       />
     </div>

     <div v-else-if="fill.field_type === 'date'">
       <div class="flex">
         <p class="py-2 font-bold text-[#303843]">{{ fill.label_on_form }}</p>
         <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*</span>
       </div>
       <component
       showIcon
         is="Calendar"
         class="bg-[#f7f5f5] w-full"
         v-model="job[fill.name]"
         :maxDate="maxDate"
                  :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
       />
     </div>
     <div v-else-if="fill.field_type === 'number'">
       <div class="flex">
         <p class="py-2 font-bold text-[#303843]">{{ fill.label_on_form }}</p>
         <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*</span>
       </div>
       <component
       :required="fill.is_required_field "
         is="InputNumber"
         inputId="withoutgrouping" :useGrouping="false"
         class="bg-[#f7f5f5] w-full"
         v-model="job[fill.name]"
                  :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
       />
     </div>

     <div v-else-if="fill.field_type === 'selection'">
       <div class="flex">
         <p class="py-2 font-bold text-[#303843]">{{ fill.label_on_form }}</p>
         <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*</span>
       </div>
       <component
       filter
         is="Dropdown"
         option-value="id"
         optionLabel="name"
         class="bg-[#f7f5f5] w-full"
         :options="selection[fill.name]"
         v-model="job[fill.name]"
              :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
       />
     </div>

     <div :class="{ 'p-invalid': submitted && !job[fill.name]}" v-else-if="fill.field_type === 'file'"  >
      <div class="flex">
         <p class="py-2 font-bold text-[#303843] text-right">{{ fill.label_on_form }} </p>
         <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*  <span v-if="uploadedFileName" class="text-[green] px-2">({{ uploadedFileName }})</span></span>
       </div>
           <label :style="submitted && !job[fill.name] ? { borderColor: 'red' } : {}" for="cv-upload" class="upload-container">
             <i class="fas pb-2 fa-upload text-3xl text-[#AA1E22]"></i>
             <input  :required="fill.is_required_field" class="hidden"  v-model="job[fill.name]">
             <input
             :required="fill.is_required_field"
               id="cv-upload"
               type="file"
               @change="handleFileUpload"
               class="upload-input hidden"
               accept=".pdf,.doc,.docx"
               :class="{ 'p-invalid': submitted && !job[fill.name]}"
             />
           </label>
     </div>
   </div>
   <Button v-if="fields.length >=1" @click="submitted=true" :loading="loading" style=" background-color: #AA1E22 !important;" type="submit"  :label='$t("apply_now")' class=" w-[50%] my-auto pb-2 lg:mb-0 bg focus:ring-0 text-[#AA1E22]"/>

 </form>
 </div>
 </div>
 <Toast/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Nave from '../components/Nave.vue'
const job_name=ref('')
const maxDate=new Date()
const fields = ref([]);
const fields_values=ref([])
const job = ref({});
const cities=ref([])
const specializations=ref([])
const countries=ref([])
const selection=ref({})
const submitted=ref(false)
const uploadedFileName = ref('');
import {useRouter} from "vue-router";
const router = useRouter()
import {useToast} from 'primevue/usetoast'
const toast = useToast()
const fetchdata = () => {
 axios.post(`api/get_job_apply_form_details`, {
   lang: localStorage.getItem('appLang'),
   form_id: router.currentRoute.value.params.id,
 })
 .then((res) => {
   // Assign the form fields to `fields`
   fields.value = res.data.result.data.form_fields;

   // Loop through each field and initialize the arrays in `selection`
   res.data.result.data.form_fields.forEach((field) => {
     const label = field.name;
     const select=field.field_type
     const selectvalue=field.selection_values

     // Check if `label` exists and is not already a key in `selection.value`
     if (label == 'nationality_id') {
        selection.value.nationality_id = countries.value;
      } else if (label == 'city_id') {
        // Handle the specific case for 'another_condition'
        selection.value.city_id = cities.value;
      }
      else if (label == 'academic_specialization_id') {
        // Handle the specific case for 'another_condition'
        selection.value.academic_specialization_id = specializations.value;
      }else {
        selection.value[label] = selectvalue;
      }
   });


 });
console.log(selection.value)
};



const handleFileUpload = (event) => {

     const file = event.target.files[0];
     job.value.cv= event.target.files[0];
     if (file) {
       uploadedFileName.value = file.name; // Update the file name
       // Handle the file upload logic here (e.g., send it to a server)
       console.log("Uploaded file:", file);
       loading.value=false
     }
   };
const submitForm=()=>{
  submitted.value=true
 fields_values.value=[]
 Object.entries(job.value).forEach(([key, value]) => {
   const field = fields.value.find(field => field.name == key);
   if (field?.id) {
     fields_values.value.push({ name: key, value: value, id: field.id });
   }
 });

 const formData = new FormData();
 formData.append("fields", JSON.stringify(fields_values.value));
 formData.append("form_id", router.currentRoute.value.params.id);
 formData.append("job_id", router.currentRoute.value.params.job_id);
 formData.append("lang", localStorage.getItem('appLang'));
 formData.append("cv", job.value.cv);

 axios.post('api/job_apply/form_data',formData)
       .then((res) => {
         if(res.data?.result?.message == 'success'){
           toast.add({severity: 'success', summary: 'شكرا', detail: ' لقد تلقينا رسالتك، شكرا لتواصلك معنا', life: 3000})
         }else {
           alert(res.data?.result)
         }
       }).catch((el)=>{
         alert(el)
       })

}
 const getcities=()=>{
  axios.post('api/get_ksa_cities',{
    lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          cities.value=res.data.result.data
          console.log(cities.value)
          fetchdata()
          getJobName()
        })

        axios.post('api/get_academic_specializations',{
          lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          specializations.value=res.data.result.data
          console.log(specializations.value)

          fetchdata()
          getJobName()
        })
}

const getNatail=()=>{


  axios.post(`api/get_countries`, {
   lang: localStorage.getItem('appLang'),

 })
 .then((res) => {
  countries.value=res.data.result.data
  console.log( countries.value)
  fetchdata()
  getJobName()
 });
}

const getJobName=()=>{
 axios.post(`api/get_posted_job_details`, {
   lang: localStorage.getItem('appLang'),
   job_id: router.currentRoute.value.params.job_id,
 })
 .then((res) => {
   job_name.value=res.data.result.data



 });
}
onMounted(() => {
  getNatail()
  getcities()
});
</script>


<style scoped>
.upload-cv {
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 width: 100%;
}

.upload-container {
 display: inline-block;
 padding: 20px;
 background-color: #f4f4f4;
 border: 2px dashed #b8a5a5;
 border-radius: 10px;
 cursor: pointer;
 text-align: center;
 height: 50px;
 width: 100%;
}

.upload-container i {
 font-size: 24px;
 color: #AA1E22;
}

.upload-container span {
 display: block;
 margin-top: 10px;
 font-size: 16px;
 color: #333;
}

.upload-input {
 display: none;
}
.p-dropdown{
  height:50px !important;
}

</style>
