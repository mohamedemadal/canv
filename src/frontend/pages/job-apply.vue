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
    <p class="text-2xl font-semibold ">{{ job_name }} </p>

    </div>
    </div>
    </div>
<!-- content -->
<div class="bg-white py-[3%] ">
  <div class=  "  m-auto shadow-lg animate__animated animate__backInRight animate__delay-.8s    max-w-[1280px] p-[3%]">
    <p class="text-3xl font-bold text-center " >  {{ $t("Apply_for_job") }} {{ job_name }}  </p>

    <form @submit.prevent="submitForm" class="grid lg:grid-cols-2 gap-6 grid-cols-1 py-[2%]">
      <div v-if="showInput.includes('name')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.name[1] }}</p>
                  <span v-if="requiredArray.name[0]"  class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText  :required="requiredArray.name[0]" class="bg-[#f7f5f5] w-full " v-model="job.name" :placeholder=requiredArray?.name[1]   />
                  <span class="pi pi-user absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>

      </div>
      <div v-if="showInput.includes('email')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.email[1] }}</p>
                  <span v-if="requiredArray.email[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText :required="requiredArray.email[0]"  type="email" required class="bg-[#303843] w-full " v-model="job.email" :placeholder=requiredArray?.email[1]  />
                  <span class="pi pi-envelope absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>

         </div>
          <div v-if="showInput.includes('phone')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.phone[1] }} </p>
                  <span  v-if="requiredArray.phone[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText  :required="requiredArray.phone[0]"  required class="bg-[#f7f5f5] w-full " v-model="job.phone" :placeholder=requiredArray?.phone[1] />
                  <span class="pi pi-phone absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>
            <div v-if="showInput.includes('nationality_id')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.nationality_id[1] }}</p>
                  <span v-if="requiredArray.nationality_id[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :invalid="requiredArray.nationality_id[0]" v-model="job.nationality_id" option-value="country_id" :options="inputs.nationalities" optionLabel="name" :placeholder=requiredArray?.nationality_id[1]   class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>



              <div v-if="showInput.includes('city_id')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.city_id[1] }}</p>
                  <span v-if="requiredArray.city_id[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :invalid="requiredArray.city_id" v-model="job.city_id"  option-value="city_id" :options="inputs?.cities" optionLabel="name" :placeholder=requiredArray?.city_id[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>
              <div  v-if="showInput.includes('gender')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.gender[1] }}</p>
                  <span v-if="requiredArray.gender[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter @update:model-value="pushfiled($event)" :invalid="requiredArray.gender" option-value="id"  v-model="job.gender"   :options="inputs.genders" optionLabel="name" :placeholder=requiredArray.gender[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>
              <div v-if="showInput.includes('birthdate')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.birthdate[1] }}</p>
                  <span v-if="requiredArray.birthdate[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Calendar :required="requiredArray.birthdate"  style="width: 100%" showButtonBar v-model.number="job.birthdate" showIcon  :placeholder=requiredArray.birthdate[1]  :minDate="maxDate" />
                </div>

              </div>
              <div v-if="showInput.includes('are_you_on_job')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.are_you_on_job[1]}}</p>
                  <span v-if="requiredArray.are_you_on_job[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :invalid="requiredArray.are_you_on_job"  v-model="job.are_you_on_job" option-value="id"    :options="inputs.are_you_on_job" optionLabel="name" :placeholder='$t("are_you_on_job")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

              </div>

              <div v-if="showInput.includes('address')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.address[1] }} </p>
                  <span  v-if="requiredArray.address[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.address[0]" class="bg-[#f7f5f5] w-full " v-model="job.address" :placeholder=requiredArray.address[1] />
                  <span class="pi pi-map-marker absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>

            <div v-if="showInput.includes('academic_qualification')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">   {{ requiredArray.academic_qualification[1] }}</p>
                  <span v-if="requiredArray.academic_qualification[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :invalid="requiredArray.academic_qualification[0]"  v-model="job.academic_qualification"  option-value="academic_specialization_id"  :options="inputs.academices" optionLabel="name" :placeholder=requiredArray.academic_qualification[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('academic_specialization_id')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.academic_specialization_id[1] }}</p>
                  <span v-if="requiredArray.academic_specialization_id[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputNumber :required="requiredArray.academic_specialization_id[0]"  v-model="job.academic_specialization_id" inputId="withoutgrouping" :useGrouping="false" class="bg-[#f7f5f5] w-full " :placeholder=requiredArray.academic_specialization_id[1] />
                  <span class="pi pi-graduation-cap absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>

                </div>

              </div>
              <div v-if="showInput.includes('another_academic_specialization')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.another_academic_specialization[1] }} </p>
                  <span  v-if="requiredArray.another_academic_specialization[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :required="requiredArray.another_academic_specialization[0]"  v-model="job.another_academic_specialization"  option-value="id"  :options="inputs.knowledge_of_english" optionLabel="name" :placeholder=requiredArray.another_academic_specialization[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>
            </div>
            <div v-if="showInput.includes('experience_years')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.experience_years[1] }}</p>
                  <span v-if="requiredArray.experience_years[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter  :invalid="requiredArray.experience_years[0]"  v-model="job.experience_years"   option-value="id" :options="inputs.experience_years" optionLabel="name" :placeholder=requiredArray.experience_years[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>

            <div v-if="showInput.includes('old_experiences')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.old_experiences[1] }} </p>
                  <span  v-if="requiredArray.old_experiences[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.old_experiences[0]" class="bg-[#f7f5f5] w-full " v-model="job.old_experiences" :placeholder=requiredArray.old_experiences[1] />
                  <span class="pi pi-clock absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>

            <div v-if="showInput.includes('has_professional_certificates')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.has_professional_certificates[1] }}</p>
                  <span v-if="requiredArray.has_professional_certificates[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :required="requiredArray.has_professional_certificates[0]"  option-value="id" v-model="job.has_professional_certificates"   :options="inputs.has_professional_certificates" optionLabel="name" :placeholder=requiredArray.has_professional_certificates[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>

            <div v-if="showInput.includes('professional_certificates')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.professional_certificates[1] }} </p>
                  <span v-if="requiredArray.professional_certificates[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.professional_certificates[0]" class="bg-[#f7f5f5] w-full " v-model="job.professional_certificates" :placeholder=requiredArray.professional_certificates[1] />
                  <span class="pi pi-file absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>

            <div v-if="showInput.includes('prefered_job_type')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{requiredArray.prefered_job_type[1] }}</p>
                  <span v-if="requiredArray.prefered_job_type[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown  filter :required="requiredArray.prefered_job_type[0]"  v-model="job.prefered_job_type" option-value="id"  :options="inputs.prefered_job_type" optionLabel="name" :placeholder=requiredArray.prefered_job_type[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('knowledge_of_microsoft_office')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.knowledge_of_microsoft_office[1] }}</p>
                  <span v-if="requiredArray.knowledge_of_microsoft_office[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :required="requiredArray.knowledge_of_microsoft_office[0]"  v-model="job.knowledge_of_microsoft_office" option-value="id"  :options="inputs.knowledge_of_microsoft_office" optionLabel="name" :placeholder=requiredArray.knowledge_of_microsoft_office[1]  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('knowledge_of_english')"  class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username">  {{ requiredArray.knowledge_of_english[1] }}</p>
                  <span v-if="!job.knowledge_of_english" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <Dropdown filter :required="requiredArray.knowledge_of_english"  v-model="job.knowledge_of_english"  option-value="id"  :options="inputs.knowledge_of_english" optionLabel="name" :placeholder='$t("knowledge_of_english")'  class="w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
                </div>

            </div>
            <div v-if="showInput.includes('Why_do_you_think_you_deserve_this_opportunity')" class=" py-1 relative ">
                  <div class="flex ">
                  <p class="py-2 font-bold text-[#303843]" for="username"> {{ requiredArray.Why_do_you_think_you_deserve_this_opportunity[1]}} </p>
                  <span  v-if="requiredArray.Why_do_you_think_you_deserve_this_opportunity[0]" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <div class="relative ">
                  <InputText    :required="requiredArray.Why_do_you_think_you_deserve_this_opportunity[0]"  class="bg-[#f7f5f5] w-full " v-model="job.Why_do_you_think_you_deserve_this_opportunity" :placeholder= requiredArray.Why_do_you_think_you_deserve_this_opportunity[1] />
                  <span class="pi pi-comment absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"></span>
                </div>
            </div>
            <div v-if="showInput.includes('cv')" class="upload-cv">
            <label for="cv-upload" class="upload-container">
              <i class="fas fa-upload text-3xl text-[#AA1E22]"></i>
              <span   v-if="!uploadedFileName">Upload Your CV</span>
              <p class="text-[#28a745] my-2" v-if="uploadedFileName">Uploaded: {{ uploadedFileName }}</p>
              <input class="hidden" v-model="job.cv">
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
          <Button :loading="loading" style=" background-color: #AA1E22 !important;" type="submit"  :label='$t("apply_now")' class="c w-[170px] m-auto pb-2 lg:mb-0 bg focus:ring-0 text-[#AA1E22]"/>

    </div>
    </form>
    <Toast/>

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
    academices:[]

  })
  const loading=ref(false)
  const job_name=ref('')
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



  const pushfiled = (e) => {
  // Check if job.value.fields[e.name] is an array
  if (!Array.isArray(job.value.fields[e.name])) {
    job.value.fields[e.name] = []; // Initialize as an array if it doesn't exist
  }

  // Now safely push into the array
  job.value.fields[e.name].push(e);
  console.log(e);
};


const test=()=>{
  const formData = new FormData();
  for (let i = 0; i < 5; i++) {
    formData.append("name",i);
    }
}

const submitForm = () => {
  job.value.fields = [];

  // Fill job.value.fields
  Object.entries(job.value).forEach(([key, value]) => {
    const field = allform.value.find(field => field.name == key);
    if (field?.id) {
      job.value.fields.push({ name: key, value: value, id: field.id });
    }
  });
  const formData = new FormData();
  formData.append("fields", JSON.stringify(job.value.fields));
  formData.append("form_id", job.value.form_id);
  formData.append("job_id", job.value.job_id);
  formData.append("lang", localStorage.getItem('appLang'));
  formData.append("cv", job.value.cv);


  axios.post('api/job_apply/form_data',formData)
        .then((res) => {
          toast.add({severity: 'success', summary: 'شكرا', detail: ' لقد تلقينا رسالتك، شكرا لتواصلك معنا', life: 3000})
        })

   }

 const handleFileUpload = (event) => {
      loading.value=true
      const file = event.target.files[0];
      job.value.cv= event.target.files[0];
      if (file) {
        uploadedFileName.value = file.name; // Update the file name
        // Handle the file upload logic here (e.g., send it to a server)
        console.log("Uploaded file:", file);
        loading.value=false
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
        axios.post('api/get_academic_specializations',{
        lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          inputs.value.academices=res.data.result.data
        })
    }

  const fetchdata=()=>{
       axios.post(`api/get_job_apply_form_details`,{

        form_id:router.currentRoute.value.params.id,
        lang:localStorage.getItem('appLang'),

        })
        .then((res) => {
          job_name.value=res.data.result.data.name
        allform.value=res.data.result.data.form_fields
          for (let i = 0; i <= res.data.result.data.form_fields.length; i++) {
            if(res.data.result.data?.form_fields[i]?.name){
              showInput.value.push(res.data.result.data.form_fields[i].name)
              requiredArray.value[res.data.result.data.form_fields[i].name]=[(res.data.result.data.form_fields[i].is_required_field ),(res.data.result.data.form_fields[i].label_on_form )]

          }
          console.log( requiredArray.value)
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
          job.value.form_id=parseInt(router.currentRoute.value.params.id)
          job.value.job_id=parseInt(router.currentRoute.value.params.job_id)
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
