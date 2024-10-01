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
    <p class="text-3xl font-bold text-center " >تقديم على وظيفة مصمم جرافيك </p>

    <form @submit.prevent="submitForm" class="grid lg:grid-cols-2 gap-6 grid-cols-1 py-[2%]">
      <div v-if="showInput.includes('name')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("full_name") }}</p>
                  <span v-if="!job.name"  class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText  :required="requiredArray.name" class="bg-[#f7f5f5] w-full " v-model="job.name" :placeholder='$t("full_name")'  />
                  <span class="pi pi-user absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>

      </div>
      <div v-if="showInput.includes('email')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("Your_email_address") }}</p>
                  <span v-if="!job.email" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText :required="requiredArray.email"  type="email" required class="bg-[#303843] w-full " v-model="job.email" :placeholder='$t("Your_email_address")'  />
                  <span class="pi pi-envelope absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>

         </div>
          <div v-if="showInput.includes('phone')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("Mobile_number") }} </p>
                  <span  v-if="!job.phone" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText  :required="requiredArray.phone"  required class="bg-[#f7f5f5] w-full " v-model="job.phone" :placeholder='$t("Mobile_number")' />
                  <span class="pi pi-phone absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>
            <div v-if="showInput.includes('nationality_id')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("nationality_id") }}</p>
                  <span v-if="!job.nationality_id" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :invalid="requiredArray.nationality_id" v-model="job.nationality_id" option-value="country_id" :options="inputs.nationalities" optionLabel="name" :placeholder='$t("nationality_id")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>



              <div v-if="showInput.includes('city_id')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("city_id") }}</p>
                  <span v-if="!job.city_id" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown  :invalid="requiredArray.city_id" v-model="job.city_id"  option-value="department_id" :options="departments" optionLabel="name" :placeholder='$t("city_id")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>
              <div  v-if="showInput.includes('gender')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("gender") }}</p>
                  <span v-if="!job.gender" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown @update:model-value="pushfiled($event)" :invalid="requiredArray.gender" option-value="id"  v-model="job.gender"   :options="inputs.genders" optionLabel="name" :placeholder='$t("gender")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>
              <div v-if="showInput.includes('birthdate')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("birthdate") }}</p>
                  <span v-if="!job.birthdate" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Calendar :required="requiredArray.birthdate"  style="width: 100%" showButtonBar v-model.number="job.birthdate" showIcon  :placeholder='$t("date")'  :minDate="maxDate" />
                </div>

              </div>
              <div v-if="showInput.includes('are_you_on_job')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("are_you_on_job") }}</p>
                  <span v-if="!job.are_you_on_job" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown :invalid="requiredArray.are_you_on_job"  v-model="job.are_you_on_job" option-value="id"    :options="inputs.are_you_on_job" optionLabel="name" :placeholder='$t("are_you_on_job")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>

              <div v-if="showInput.includes('address')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("address") }} </p>
                  <span  v-if="!job.address" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.address" class="bg-[#f7f5f5] w-full " v-model="job.address" :placeholder='$t("Mobile_number")' />
                  <span class="pi pi-map-marker absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>

            <div v-if="showInput.includes('academic_qualification')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("academic_qualification") }}</p>
                  <span v-if="!job.academic_qualification" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown :invalid="requiredArray.academic_qualification"  v-model="job.academic_qualification"  option-value="id"  :options="inputs.academic_qualification" optionLabel="name" :placeholder='$t("academic_qualification")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('academic_specialization_id')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("academic_specialization_id") }}</p>
                  <span v-if="!job.academic_specialization_id" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputNumber :required="requiredArray.academic_specialization_id"  v-model="job.academic_specialization_id" inputId="withoutgrouping" :useGrouping="false" class="bg-[#f7f5f5] w-full " :placeholder='$t("academic_specialization_id")' />
                  <span class="pi pi-graduation-cap absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>

                </div>

              </div>
              <div v-if="showInput.includes('another_academic_specialization')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("another_academic_specialization") }} </p>
                  <span  v-if="!job.another_academic_specialization" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.another_academic_specialization" class="bg-[#f7f5f5] w-full " v-model="job.another_academic_specialization" :placeholder='$t("another_academic_specialization")' />
                  <span class="pi pi-book absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>
            <div v-if="showInput.includes('experience_years')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("experience_years") }}</p>
                  <span v-if="!job.experience_years" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown   :invalid="requiredArray.experience_years"  v-model="job.experience_years"   option-value="id" :options="inputs.experience_years" optionLabel="name" :placeholder='$t("experience_years")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>

            <div v-if="showInput.includes('old_experiences')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("old_experiences") }} </p>
                  <span  v-if="!job.old_experiences" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.old_experiences" class="bg-[#f7f5f5] w-full " v-model="job.old_experiences" :placeholder='$t("old_experiences")' />
                  <span class="pi pi-clock absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>

            <div v-if="showInput.includes('has_professional_certificates')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("has_professional_certificates") }}</p>
                  <span v-if="!job.has_professional_certificates" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown :required="requiredArray.has_professional_certificates"  option-value="id" v-model="job.has_professional_certificates"   :options="inputs.has_professional_certificates" optionLabel="name" :placeholder='$t("has_professional_certificates")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>

            <div v-if="showInput.includes('professional_certificates')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("professional_certificates") }} </p>
                  <span  v-if="!job.professional_certificates" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.professional_certificates" class="bg-[#f7f5f5] w-full " v-model="job.professional_certificates" :placeholder='$t("professional_certificates")' />
                  <span class="pi pi-file absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>

            <div v-if="showInput.includes('prefered_job_type')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("prefered_job_type") }}</p>
                  <span v-if="!job.prefered_job_type" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown   :required="requiredArray.prefered_job_type"  v-model="job.prefered_job_type" option-value="id"  :options="inputs.prefered_job_type" optionLabel="name" :placeholder='$t("prefered_job_type")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('knowledge_of_microsoft_office')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("knowledge_of_microsoft_office") }}</p>
                  <span v-if="!job.knowledge_of_microsoft_office" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown  :required="requiredArray.knowledge_of_microsoft_office"  v-model="job.knowledge_of_microsoft_office" option-value="id"  :options="inputs.knowledge_of_microsoft_office" optionLabel="name" :placeholder='$t("knowledge_of_microsoft_office")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('knowledge_of_english')"  class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ $t("knowledge_of_english") }}</p>
                  <span v-if="!job.knowledge_of_english" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown  :required="requiredArray.knowledge_of_english"  v-model="job.knowledge_of_english"  option-value="id"  :options="inputs.knowledge_of_english" optionLabel="name" :placeholder='$t("knowledge_of_english")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('Why_do_you_think_you_deserve_this_opportunity')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ $t("Why_do_you_think_you_deserve_this_opportunity") }} </p>
                  <span  v-if="!job.Why_do_you_think_you_deserve_this_opportunity" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.Why_do_you_think_you_deserve_this_opportunity"  class="bg-[#f7f5f5] w-full " v-model="job.Why_do_you_think_you_deserve_this_opportunity" :placeholder='$t("Why_do_you_think_you_deserve_this_opportunity")' />
                  <span class="pi pi-comment absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>
            <div v-if="showInput.includes('cv')" class="upload-cv">
            <label for="cv-upload" class="upload-container">
              <i class="fas fa-upload text-3xl text-[#AA1E22]"></i>
              <span   v-if="!uploadedFileName">Upload Your CV</span>
              <p class="text-[#28a745] my-2" v-if="uploadedFileName">Uploaded: {{ uploadedFileName }}</p>
              <input
                id="cv-upload"
                type="file"
                @change="handleFileUpload"
                class="upload-input hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>
          </div>
            <div class="text-center py-6 col-span-2">
          <Button  style=" background-color: #AA1E22 !important;" type="submit"  :label='$t("apply_now")' class="c w-[170px] m-auto pb-2 lg:mb-0 bg focus:ring-0 text-[#AA1E22]"/>

    </div>

    </form>
<toast></toast>

  </div>
</div>
    <Footer></Footer>
</template>
<script setup>
  import Nave from '../components/Nave.vue'
  import Footer from '../components/Footer.vue'
  import { ref, onMounted } from 'vue';
  import axios from "axios";
  import {useToast} from 'primevue/usetoast'
  const toast = useToast()
  import {useRouter} from "vue-router";
  const inputs=ref({
    nationalities:[],
    cities:[],
    genders:[],
    are_you_on_job:[],
    academic_qualification:[],
    experience_years:[],
    has_professional_certificates:[],
    prefered_job_type:[],
    knowledge_of_english:[],
    knowledge_of_microsoft_office:[],

  })
 const allform=ref({})
  const uploadedFileName = ref('');
 const showInput=ref([''])
 const requiredArray=ref({})
const router = useRouter()

  const job=ref({
    form_id:'',
    job_id:'',
    lang:'',
    fields:[]

  })

const con =()=>{


  console.log(job.value.fields)
}

  const pushfiled = (e) => {
  // Check if job.value.fields[e.name] is an array
  if (!Array.isArray(job.value.fields[e.name])) {
    job.value.fields[e.name] = []; // Initialize as an array if it doesn't exist
  }

  // Now safely push into the array
  job.value.fields[e.name].push(e);
  console.log(e);
};
 const submitForm=()=>{
  job.value.fields=[]
  Object.entries(job.value).forEach(([key, value]) => {
    if(allform.value.find(field => field.name == key )?.id){
      job.value.fields.push({ name:key,value:value, id: allform.value.find(field => field.name == key )?.id });
    }


});

  axios.post('api/job_apply',job.value)
        .then((res) => {
          toast.add({severity: 'success', summary: 'شكرا', detail: ' لقد تلقينا رسالتك، شكرا لتواصلك معنا', life: 3000})
        })

 }

 const handleFileUpload = (event) => {
      const file = event.target.files[0];
      job.value.cv= event.target.files[0];
      if (file) {
        uploadedFileName.value = file.name; // Update the file name
        // Handle the file upload logic here (e.g., send it to a server)
        console.log("Uploaded file:", file);
      }
    };
   const  getcountries=()=>{
      axios.post('api/get_countries',{
        lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          inputs.value.nationalities=res.data.result.data
        })
        axios.post('api/get_ksa_cities',{
        lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          inputs.value.cities=res.data.result.data
        })
    }

  const fetchdata=()=>{
       axios.post(`api/get_job_apply_form_details`,{

        form_id:router.currentRoute.value.params.id,
        lang:localStorage.getItem('appLang'),

        })
        .then((res) => {
        allform.value=res.data.result.data.form_fields
          for (let i = 0; i <= res.data.result.data.form_fields.length; i++) {
            if(res.data.result.data?.form_fields[i]?.name){
              showInput.value.push(res.data.result.data.form_fields[i].name)
              requiredArray.value[res.data.result.data.form_fields[i].name]=(res.data.result.data.form_fields[i].is_required_field  )
          }
          if (res.data.result.data?.form_fields[i]?.name == 'gender') {
                const field = res.data.result.data?.form_fields[i];

                   inputs.value.genders = field.selection_values.map(value => ({
                    name: value.name,
                    field_id: field.id,  // Access the main field's `filed_id`
                    id: value.id
                }));


            }
          if(res.data.result.data?.form_fields[i]?.name == 'are_you_on_job'){

            const field = res.data.result.data?.form_fields[i];

            inputs.value.are_you_on_job = field.selection_values.map(value => ({
            name: value.name,
            field_id: field.id,  // Access the main field's `filed_id`
            id: value.id
            }));
          }
          if(res.data.result.data?.form_fields[i]?.name == 'academic_qualification'){

            const field = res.data.result.data?.form_fields[i];

            inputs.value.academic_qualification = field.selection_values.map(value => ({
            name: value.name,
            field_id: field.id,  // Access the main field's `filed_id`
            id: value.id
            }));
          }
          if(res.data.result.data?.form_fields[i]?.name == 'experience_years'){
            const field = res.data.result.data?.form_fields[i];

              inputs.value.experience_years = field.selection_values.map(value => ({
              name: value.name,
              field_id: field.id,  // Access the main field's `filed_id`
              id: value.id
              }));
          }
          if(res.data.result.data?.form_fields[i]?.name == 'has_professional_certificates'){
            const field = res.data.result.data?.form_fields[i];

            inputs.value.has_professional_certificates = field.selection_values.map(value => ({
            name: value.name,
            field_id: field.id,  // Access the main field's `filed_id`
            id: value.id
            }));
          }
          if(res.data.result.data?.form_fields[i]?.name == 'prefered_job_type'){
            const field = res.data.result.data?.form_fields[i];

              inputs.value.prefered_job_type = field.selection_values.map(value => ({
              name: value.name,
              field_id: field.id,  // Access the main field's `filed_id`
              id: value.id
              }));
          }
          if(res.data.result.data?.form_fields[i]?.name == 'knowledge_of_microsoft_office'){
            const field = res.data.result.data?.form_fields[i];

              inputs.value.knowledge_of_microsoft_office = field.selection_values.map(value => ({
              name: value.name,
              field_id: field.id,  // Access the main field's `filed_id`
              id: value.id
              }));
          }
          if(res.data.result.data?.form_fields[i]?.name == 'knowledge_of_english'){
            const field = res.data.result.data?.form_fields[i];

              inputs.value.knowledge_of_english = field.selection_values.map(value => ({
              name: value.name,
              field_id: field.id,  // Access the main field's `filed_id`
              id: value.id
              }));
            inputs.value.knowledge_of_english=res.data.result.data?.form_fields[i]?.selection_values
          }
            }
        })

        }
        onMounted(() => {
          fetchdata()
          getcountries()
          job.value.form_id=router.currentRoute.value.params.id
          job.value.job_id=router.currentRoute.value.params.job_id
          job.value.lang=localStorage.getItem('appLang')

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
  border: 2px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  height: 80px;
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


</style>
