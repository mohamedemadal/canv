<template>
  <Nave></Nave>
  <div class="banner flex items-center h-[35vh] lg:h-[55vh] relative">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">
    <div class="z-50 text-white w-full m-auto w-[80%]">
      <H1 class="font-bold text-5xl text-white z-50">{{ job_name.name }}</H1>
      <div class="flex py-12">
        <p class="text-2xl font-semibold">{{ $t("home") }}</p>
        <svg class="my-auto mx-[1%] ltr:rotate-180" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="text-2xl font-semibold">{{ $t("jobs") }}</p>
        <svg class="my-auto mx-[1%] ltr:rotate-180" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="text-2xl font-semibold">{{ job_name.name }}</p>
      </div>
    </div>
  </div>
  <div class="bg-white py-[3%]">
    <div class="m-auto shadow-lg animate__animated animate__backInRight animate__delay-.8s max-w-[1280px] p-[3%]">
      <p class="text-3xl font-bold text-center">{{ $t("Apply_for_job") }} {{ job_name.name }}</p>
      <!-- Steps Indicator -->
      <div class="flex justify-between mb-8 relative">
        <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center z-10">
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            :class="{
              'bg-[#AA1E22]': currentStep > index || (currentStep === index && !hasStepErrors(index + 1)),
              'bg-gray-300': currentStep < index,
              'bg-red-500': currentStep === index && hasStepErrors(index + 1)
            }"
          >
            {{ index + 1 }}
          </div>
          <span class="mt-2 text-sm font-medium">{{ step.title }}</span>
        </div>
        <div class="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-1"></div>
        <div
          class="absolute top-6 left-0 h-1 bg-[#AA1E22] transition-all duration-300 -z-1"
          :style="{ width: `${(currentStep - 1) * (100 / (steps.length - 1))}%` }"
        ></div>
      </div>
      <!-- Form Content -->
      <form @submit.prevent="submitForm" class=" py-[2%]">
        <!-- Step Content -->
        <template v-for="(step, index) in steps" :key="index">
          <div v-if="currentStep === index + 1" class=" grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div v-for="(fill, fieldIndex) in getStepFields(index + 1)" :key="fieldIndex" class="mb-6">
              <div v-if="fill.field_type === 'text'">
                <div class="flex">
                  <p class="py-2 font-bold text-[#303843]">{{ fill.label_on_form }}</p>
                  <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <component
                  :required="fill.is_required_field"
                  is="InputText"
                  class="bg-[#f7f5f5] w-full"
                  :placeholder="'ادخل '+ fill.label_on_form"
                  v-model="job[fill.name]"
                  :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
                />
                <small v-if="submitted && !job[fill.name] && fill.is_required_field" class="p-error">This field is required</small>
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
                  :placeholder="fill.label_on_form"
                  :maxDate="maxDate"
                  :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
                />
                <small v-if="submitted && !job[fill.name] && fill.is_required_field" class="p-error">This field is required</small>
              </div>
              <div v-else-if="fill.field_type === 'number'">
                <div class="flex">
                  <p class="py-2 font-bold text-[#303843]">{{ fill.label_on_form }}</p>
                  <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">*</span>
                </div>
                <component
                  :required="fill.is_required_field"
                  is="InputNumber"
                  inputId="withoutgrouping" :useGrouping="false"
                  class="bg-[#f7f5f5] w-full"
                  :placeholder="fill.label_on_form"
                  v-model="job[fill.name]"
                  :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
                />
                <small v-if="submitted && !job[fill.name] && fill.is_required_field" class="p-error">This field is required</small>
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
                  :placeholder="fill.label_on_form"
                  v-model="job[fill.name]"
                  :class="{ 'p-invalid': submitted && !job[fill.name] && fill.is_required_field}"
                />
                <small v-if="submitted && !job[fill.name] && fill.is_required_field" class="p-error">This field is required</small>
              </div>
              <div v-else-if="fill.field_type === 'file'">
                <div class="flex">
                  <p class="py-2 font-bold text-[#303843] text-right">{{ fill.label_on_form }}</p>
                  <span v-if="fill.is_required_field" class="my-auto text-[#AA1E22] px-1">* <span v-if="uploadedFileName" class="text-[green] px-2">({{ uploadedFileName }})</span></span>
                </div>
                <label :style="submitted && !job[fill.name] ? { borderColor: 'red' } : {}" for="cv-upload" class="upload-container">
                  <i class="fas pb-2 fa-upload text-3xl text-[#AA1E22]"></i>
                  <input :required="fill.is_required_field" class="hidden" v-model="job[fill.name]">
                  <input
                    :required="fill.is_required_field"
                    id="cv-upload"
                    type="file"
                    @change="handleFileUpload"
                    class="upload-input hidden"
                    accept=".pdf"
                    :class="{ 'p-invalid': submitted && !job[fill.name]}"
                  />
                </label>
                <small v-if="submitted && !job[fill.name] && fill.is_required_field" class="p-error">This field is required</small>
              </div>
            </div>
          </div>
        </template>
        <!-- Navigation Buttons -->
        <div class="flex justify-between col-span-2 mt-6 fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
          <Button
            v-if="currentStep > 1"
            @click="prevStep"
            :label="$t('previous')"
            style="background-color: #AA1E22 !important;"
            class="w-[20%] bg-gray-500 hover:bg-gray-600 text-white"
          />
          <Button
            v-if="currentStep < steps.length"
            @click="nextStep"
            :label="$t('next')"
            style="background-color: #AA1E22 !important;"
            class="w-[20%] ml-auto bg-[#AA1E22] text-white"
          />
          <Button
            v-if="currentStep === steps.length && fields.length >= 1"
            @click="submitted=true"
            :loading="loading"
            style="background-color: #AA1E22 !important;"
            type="submit"
            icon="pi pi-send"
            :label='$t("apply_now")'
            class="w-[20%] ml-auto my-auto pb-2 lg:mb-0 bg focus:ring-0 text-white"
          />
        </div>
      </form>
    </div>
  </div>
  <Toast/>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Nave from '../components/Nave.vue'
import moment from 'moment';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const job_name = ref('')
const maxDate = new Date()
const fields = ref([]);
const fields_values = ref([])
const job = ref({});
const cities = ref([])
const specializations = ref([])
const countries = ref([])
const selection = ref({})
const submitted = ref(false)
const uploadedFileName = ref('');
const currentStep = ref(1);
const steps = ref([]);
import { useRouter } from "vue-router";
const router = useRouter()
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const loading = ref(false);

const fetchdata = () => {
  axios.post(`api/get_job_apply_form_details`, {
    lang: localStorage.getItem('appLang'),
    form_id: router.currentRoute.value.params.id,
    job_id: router.currentRoute.value.params.job_id,
  })
  .then((res) => {
    fields.value = res.data.result.data.form_fields;
    // Initialize steps based on tabs in fields (now only two steps)
    const uniqueTabs = [...new Set(fields.value.map(field => field.tab))].sort().slice(0, 2); // Limit to 2 steps
    steps.value = uniqueTabs.map(tab => ({
      number: tab,
      title: t(`tab_${tab}`),
      fields: fields.value.filter(field => field.tab === tab)
    }));
    res.data.result.data.form_fields.forEach((field) => {
      const label = field.name;
      const select = field.field_type
      const selectvalue = field.selection_values
      if (label == 'nationality_id') {
        selection.value.nationality_id = countries.value;
      } else if (label == 'city_id') {
        selection.value.city_id = cities.value;
      }
      else if (label == 'academic_specialization_id') {
        selection.value.academic_specialization_id = specializations.value;
      } else {
        selection.value[label] = selectvalue;
      }
    });
  });
};

const getStepFields = (stepNumber) => {
  return fields.value
    .filter(field => field.tab === stepNumber)
    .sort((a, b) => a.view_num - b.view_num);
};

const hasStepErrors = (stepNumber) => {
  if (!submitted.value) return false;
  const stepFields = getStepFields(stepNumber);
  return stepFields.some(field =>
    field.is_required_field && !job.value[field.name]
  );
};

const nextStep = () => {
  submitted.value = true;
  // Validate current step fields
  const currentStepFields = getStepFields(currentStep.value);
  const hasErrors = currentStepFields.some(field =>
    field.is_required_field && !job.value[field.name]
  );
  if (hasErrors) {
    toast.add({
      severity: 'warn',
      summary: 'Warning',
      detail: t('please_fill_required_fields'),
      life: 3000
    });
    return;
  }
  currentStep.value++;
};

const prevStep = () => {
  currentStep.value--;
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  job.value.cv = event.target.files[0];
  if (file) {
    uploadedFileName.value = file.name;
    console.log("Uploaded file:", file);
    loading.value = false
  }
};

const submitForm = () => {
  submitted.value = true;
  // Validate all steps
  for (let i = 1; i <= steps.value.length; i++) {
    const stepFields = getStepFields(i);
    const hasErrors = stepFields.some(field =>
      field.is_required_field && !job.value[field.name]
    );
    if (hasErrors) {
      currentStep.value = i;
      toast.add({
        severity: 'warn',
        summary: 'Warning',
        detail: t('please_fill_required_fields'),
        life: 3000
      });
      return;
    }
  }
  if(job.value.birthdate) {
    job.value.birthdate = moment(job.value.birthdate).format("MM/DD/YYYY");
  }
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
  loading.value = true;
  axios.post('api/job_apply/form_data', formData)
    .then((res) => {
      if(res.data?.result?.message == 'success'){
        toast.add({severity: 'success', summary: t('thank_you'), detail: t('application_received'), life: 3000})
        // Optionally reset form or redirect
        setTimeout(() => {
          router.push('/jobs');
        }, 2000);
      } else {
        alert(res.data?.result)
      }
    })
    .catch((el) => {
      alert(el)
    })
    .finally(() => {
      loading.value = false;
    });
};

const getcities = () => {
  axios.post('api/get_ksa_cities', {
    lang: localStorage.getItem('appLang'),
  })
  .then((res) => {
    cities.value = res.data.result.data
    console.log(cities.value)
    fetchdata()
    getJobName()
  })
  axios.post('api/get_academic_specializations', {
    lang: localStorage.getItem('appLang'),
  })
  .then((res) => {
    specializations.value = res.data.result.data
    console.log(specializations.value)
    fetchdata()
    getJobName()
  })
}

const getNatail = () => {
  axios.post(`api/get_countries`, {
    lang: localStorage.getItem('appLang'),
  })
  .then((res) => {
    countries.value = res.data.result.data
    console.log(countries.value)
    getJobName()
  });
}

const getJobName = () => {
  axios.post(`api/get_posted_job_details`, {
    lang: localStorage.getItem('appLang'),
    job_id: router.currentRoute.value.params.job_id,
  })
  .then((res) => {
    job_name.value = res.data.result.data
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
.p-dropdown {
  height: 50px !important;
}
/* Steps styling */
.step-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}
.step-number {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.step-title {
  font-size: 0.875rem;
  text-align: center;
}
.progress-bar {
  position: absolute;
  top: 1.25rem;
  left: 0;
  height: 0.25rem;
  background-color: #e5e7eb;
  width: 100%;
  z-index: 1;
}
.progress {
  height: 100%;
  background-color: #AA1E22;
  transition: width 0.3s ease;
}
.step-active .step-number {
  background-color: #AA1E22;
  color: white;
}
.step-completed .step-number {
  background-color: #AA1E22;
  color: white;
}
.step-incomplete .step-number {
  background-color: #e5e7eb;
  color: #6b7280;
}
.step-error .step-number {
  background-color: #ef4444;
  color: white;
}
</style>
