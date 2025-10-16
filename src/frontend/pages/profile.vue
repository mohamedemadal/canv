<template>
  <Nave></Nave>

  <div class="banner flex items-center h-[35vh] lg:h-[55vh] relative" :dir="profile.lang === 'ar' ? 'rtl' : 'ltr'">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full object-cover" src="../images/breadcrumb.png" alt="Banner background">
    <div class="z-50 text-white w-full m-auto w-[80%]">
      <h1 class="font-bold text-5xl text-white z-50">{{ $t("الصفحه الشخصيه") }}</h1>
      <div class="flex py-8">
        <p class="text-2xl font-semibold">{{ $t("home") }}</p>
        <svg class="my-auto mx-[1%]" :class="{ 'ltr:rotate-180': profile.lang === 'ar' }" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="text-2xl font-semibold">{{ $t("الصفحه الشخصيه") }}</p>
      </div>
    </div>
  </div>

  <div class="bg-white auctions px-[2%] py-[3%] pt-[5%]">
    <p class="text-3xl font-bold max-w-[1280px] p-4 m-auto">{{ $t("المعلومات الشخصيه") }}</p>

    <form @submit.prevent="updateProfile" class="max-w-[1280px] shadow-md grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-6 gap-4 m-auto">
      <div class="col-span-4">
        <div class="py-1 relative">
          <div class="flex">
            <label class="py-2 font-bold text-[#303843]" for="name" id="name-label">{{ $t("full_name") }}</label>
            <span v-if="!profile.name" class="my-auto text-[#AA1E22] px-1">*</span>
          </div>
          <InputText id="name" required aria-labelledby="name-label" class="bg-[#f7f5f5] w-full" v-model="profile.name" :placeholder='$t("full_name")' />
        </div>
        <div class="py-1 relative">
          <div class="flex">
            <label class="py-2 font-bold text-[#303843]" for="phone" id="phone-label">{{ $t("Mobile_number") }}</label>
            <span v-if="!profile.phone" class="my-auto text-[#AA1E22] px-1">*</span>
          </div>
          <InputText id="phone" required aria-labelledby="phone-label" class="bg-[#f7f5f5] w-full" v-model="profile.phone" :placeholder='$t("Mobile_number")' />
          <div v-if="!isPhoneValid && profile.phone" class="text-[#AA1E22] text-sm">{{ $t('الرجاء إدخال رقم هاتف صحيح') }}</div>
        </div>
        <div class="py-1 relative">
          <div class="flex">
            <label class="py-2 font-bold text-[#303843]" for="email" id="email-label">{{ $t("Your_email_address") }}</label>
            <span v-if="!profile.email" class="my-auto text-[#AA1E22] px-1">*</span>
          </div>
          <InputText id="email" required aria-labelledby="email-label" class="bg-[#f7f5f5] w-full" v-model="profile.email" :placeholder='$t("Your_email_address")' />
          <div v-if="!isEmailValid && profile.email" class="text-[#AA1E22] text-sm">{{ $t('الرجاء إدخال بريد إلكتروني صحيح') }}</div>
        </div>
        <div class="hidden">
          <InputText ref="fileInput" @change="uploadFile" accept="image/*" id="file" type="file" aria-labelledby="file-label" />
        </div>
        <Button
          type="submit"
          :disabled="isLoading || !isFormValid"
          :class="{ 'opacity-50 cursor-not-allowed': isLoading || !isFormValid }"
          class="mt-3 w-[90%] mx-auto lg:mb-0 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-[#AA1E22] transition-colors duration-200"
          :label="isLoading ? $t('جاري التحميل...') : $t('تعديل')"
        />
      </div>
      <div class="col-span-2 mx-auto">
        <div class="rounded-full" style="border: 5px solid #AA1F23;">
          <div v-if="profile?.profile" class="m-auto rounded-full bg-no-repeat bg-cover" style="width: 200px; height: 200px;" :style="{ backgroundImage: `url(${profile.profile})` }"></div>
          <div v-else class="m-auto rounded-full bg-gray-200" style="width: 200px; height: 200px;"></div>
        </div>
        <div class="mx-auto text-center w-full">
          <Button
            @click="triggerFileInput"
            class="mt-3 w-[90%] mx-auto lg:mb-0 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-[#AA1E22] transition-colors duration-200"
            :label='$t("تعديل")'
          />
        </div>
        <div class="mx-auto text-center w-full">
          <p class="underline text-[#DDAE05] font-bold text-xl">{{ $t("اكمل حسابك") }}</p>
        </div>
      </div>
    </form>

    <Dialog v-model:visible="showOtpModal" :modal="true" :header='$t("ادخل رمز ال OTP") + ` (${currentVerificationType === "email" ? $t("Your_email_address") : $t("Mobile_number")})`' class="w-[90%] max-w-[500px] dir-rtl">
      <div class="bg-white py-6 px-10 rounded-lg">
        <p v-if="otpError" class="pb-1 w-full text-center text-[#AA1E22] font-bold" style="line-height:29px">{{ otpError }}</p>
        <div class="relative">
          <div style="direction: ltr;" class="flex justify-center gap-2">
            <InputText
              v-for="(digit, index) in otp"
              :key="index"
              :ref="(el) => { if (el) otpInputs[index] = el }"
              v-model="otp[index]"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              maxlength="1"
              placeholder="-"
              class="w-12 h-14 text-center text-lg font-bold border border-gray-300 rounded-lg focus:outline-none transition-colors duration-200"
              :class="{ 'ring-2 ring-[#AA1E22] bg-red-50': focusedIndex === index || (index === 0 && focusedIndex === null && showOtpModal) }"
              @input="handleOtpInput(index, $event)"
              @paste="handleOtpPaste($event)"
              @keydown="handleOtpKeydown(index, $event)"
              @focus="focusedIndex = index"
              @blur="focusedIndex = null"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <Button
            :label="isOtpLoading ? $t('جاري التحميل...') : $t('تأكيد')"
            :disabled="!isOtpComplete || isOtpLoading"
            :class="{ 'opacity-50 cursor-not-allowed': !isOtpComplete || isOtpLoading }"
            class="mt-3 w-full lg:w-[70%] mx-auto bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-[#AA1E22] transition-colors duration-200"
            @click="verifyOtp"
          />
        </div>
      </div>
    </Dialog>
  </div>

  <Toast />
  <Footer></Footer>
</template>

<script setup>
import Nave from '../components/Nave.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted, computed, nextTick } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const toast = useToast();
const profile = ref({
  name: '',
  phone: '',
  email: '',
  profile: '',
  lang: localStorage.getItem('appLang') || 'ar',
  user_id: localStorage.getItem('user_id'),
});
const originalProfile = ref({});
const fileInput = ref(null);
const showOtpModal = ref(false);
const otp = ref(['', '', '', '', '', '']);
const otpError = ref('');
const isLoading = ref(false);
const isOtpLoading = ref(false);
const currentVerificationType = ref('');
const verificationQueue = ref([]);
const requestIds = ref({ email: null, sms: null });
const validityPeriods = ref({ email: null, sms: null });
const otpInputs = ref([]);
const focusedIndex = ref(null);

// --- Computed Properties ---
const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !profile.value.email || emailRegex.test(profile.value.email);
});

const isPhoneValid = computed(() => {
  const phoneRegex = /^\+?\d{10,15}$/;
  return !profile.value.phone || phoneRegex.test(profile.value.phone);
});

const isFormValid = computed(() => {
  return profile.value.name.trim() && isPhoneValid.value && isEmailValid.value;
});

const isOtpComplete = computed(() => {
  return otp.value.every(digit => digit.match(/^[0-9]$/));
});

// --- API and Data Fetching ---
const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await axios.post('api/get_user_profile', {
      lang: profile.value.lang,
      user_id: parseInt(profile.value.user_id),
    });
    profile.value = { ...response.data.result.data, lang: profile.value.lang, user_id: profile.value.user_id };
    originalProfile.value = { ...response.data.result.data };
  } catch (error) {
      // Handle error silently or log it as needed
  } finally {
    isLoading.value = false;
  }
};

// --- Profile Image Handlers ---
const uploadFile = (e) => {
  const image = e.target.files[0];
  if (image) {
    if (!image.type.startsWith('image/')) {
      toast.add({ severity: 'error', summary: 'خطأ', detail: $t('يرجى تحميل صورة فقط'), life: 3000 });
      return;
    }
    if (image.size > 5 * 1024 * 1024) {
      toast.add({ severity: 'error', summary: 'خطاء', detail: $t('حجم الصورة كبير جدًا'), life: 3000 });
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      profile.value.profile = e.target.result;
      profile.value.file = image;
    };
  }
};

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  } else {
    toast.add({ severity: 'error', summary: 'خطأ', detail: $t('لم يتم العثور على حقل إدخال الملف'), life: 3000 });
  }
};

// --- Profile Update Logic ---
const updateProfile = async () => {
  if (!isFormValid.value) {
    toast.add({ severity: 'error', summary: 'خطأ', detail: $t('يرجى ملء جميع الحقول المطلوبة بشكل صحيح'), life: 3000 });
    return;
  }

  isLoading.value = true;
  try {
    const formData = new FormData();
    formData.append('lang', profile.value.lang);
    formData.append('user_id', profile.value.user_id);

    // Only append changed fields
    if (profile.value.name !== originalProfile.value.name) {
      formData.append('name', profile.value.name);
    }
    if (profile.value.phone !== originalProfile.value.phone) {
      formData.append('phone', profile.value.phone);
    }
    if (profile.value.email !== originalProfile.value.email) {
      formData.append('email', profile.value.email);
    }
    if (profile.value.file) {
      formData.append('profile', profile.value.file);
    }

    // If no fields have changed, show a message and exit
    if ([...formData.entries()].length <= 2) { // Only lang and user_id
      toast.add({ severity: 'info', summary: $t('بدون تغييرات'), detail: $t('لم يتم إجراء أي تغييرات'), life: 3000 });
      isLoading.value = false;
      return;
    }

    const response = await axios.post('api/update_user_profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (response.data.result.code === 200) {
      verificationQueue.value = [];
      requestIds.value = { email: null, sms: null };
      validityPeriods.value = { email: null, sms: null };

      const emailChanged = profile.value.email !== originalProfile.value.email;
      const phoneChanged = profile.value.phone !== originalProfile.value.phone;

      if (emailChanged || phoneChanged) {
        if (emailChanged) {
          verificationQueue.value.push('email');
          requestIds.value.email = response.data.result.data.request_id;
          validityPeriods.value.email = response.data.result.data.email_code_validity_period;
        }
        if (phoneChanged) {
          verificationQueue.value.push('sms');
          requestIds.value.sms = response.data.result.data.sms_otp_validity_period
            ? response.data.result.data.request_id
            : response.data.result.data.sms_request_id;
          validityPeriods.value.sms = response.data.result.data.sms_otp_validity_period;
        }
      }

      if (verificationQueue.value.length > 0) {
        currentVerificationType.value = verificationQueue.value[0];
        showOtpModal.value = true;
        toast.add({
          severity: 'info',
          summary: $t('تم إرسال OTP'),
          detail: $t('تم إرسال رمز التحقق إلى ') +
                  (currentVerificationType.value === 'email' ? profile.value.email : profile.value.phone) +
                  $t('، صالح لمدة ') +
                  validityPeriods.value[currentVerificationType.value] +
                  $t(' دقيقة'),
          life: 5000,
        });

        nextTick(() => {
          if (otpInputs.value[0]?.$el) {
            otpInputs.value[0].$el.focus();
            focusedIndex.value = 0;
          }
        });
      } else {
        toast.add({ severity: 'success', summary: $t('نجاح'), detail: $t('تم تحديث الملف الشخصي بنجاح'), life: 3000 });
        originalProfile.value = { ...profile.value, file: null };
      }
    } else {
      toast.add({ severity: 'error', summary: 'خطأ', detail: response.data.result.message || $t('فشل في تحديث الملف الشخصي'), life: 3000 });
    }
  } catch (error) {
    toast.add({ severity: 'error', summary: 'خطأ', detail: $t('فشل في تحديث الملف الشخصي'), life: 3000 });
  } finally {
    isLoading.value = false;
  }
};

// --- OTP Handlers ---
const handleOtpInput = (index, event) => {
  const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 1);

  if (value.length > 0) {
    otp.value[index] = value;
    otpError.value = '';

    if (index < otp.value.length - 1) {
      nextTick(() => {
        if (otpInputs.value[index + 1]?.$el) {
          otpInputs.value[index + 1].$el.focus();
          focusedIndex.value = index + 1;
        }
      });
    }
  } else {
    otp.value[index] = '';
    otpError.value = '';
  }
};

const handleOtpPaste = (event) => {
  const paste = (event.clipboardData || window.clipboardData).getData('text').trim();
  const digits = paste.match(/\d/g);

  if (digits && digits.length >= otp.value.length) {
    for (let i = 0; i < otp.value.length; i++) {
      otp.value[i] = digits[i] || '';
    }
    otpError.value = '';

    nextTick(() => {
      const lastIndex = otp.value.length - 1;
      if (otpInputs.value[lastIndex]?.$el) {
        otpInputs.value[lastIndex].$el.focus();
        focusedIndex.value = lastIndex;
      }
    });
  } else {
    otpError.value = $t('رمز OTP غير صالح');
  }
  event.preventDefault();
};

const handleOtpKeydown = (index, event) => {
  if (event.key === 'Backspace') {
    if (!otp.value[index] && index > 0) {
      event.preventDefault();
      nextTick(() => {
        if (otpInputs.value[index - 1]?.$el) {
          otpInputs.value[index - 1].$el.focus();
          focusedIndex.value = index - 1;
        }
      });
    }
  } else if (event.key === 'ArrowLeft' && index > 0) {
    nextTick(() => {
      if (otpInputs.value[index - 1]?.$el) {
        otpInputs.value[index - 1].$el.focus();
        focusedIndex.value = index - 1;
      }
    });
  } else if (event.key === 'ArrowRight' && index < otp.value.length - 1) {
    nextTick(() => {
      if (otpInputs.value[index + 1]?.$el) {
        otpInputs.value[index + 1].$el.focus();
        focusedIndex.value = index + 1;
      }
    });
  }
};

const verifyOtp = async () => {
  if (!isOtpComplete.value) {
    otpError.value = $t('يرجى إدخال رمز OTP كامل');
    return;
  }

  isOtpLoading.value = true;
  try {
    const response = await axios.post('api/user_profile_verfication', {
      lang: profile.value.lang,
      user_id: parseInt(profile.value.user_id),
      verfy_with: currentVerificationType.value,
      request_id: requestIds.value[currentVerificationType.value],
      verfication_code: otp.value.join(''),
    });

    if (response.data.result.code === 200) {
      if (response.data.result.data.verfid === false) {
        otpError.value = $t('رمز OTP غير صحيح، يرجى إدخاله مرة أخرى');
        otp.value = ['', '', '', '', '', ''];
        nextTick(() => {
          if (otpInputs.value[0]?.$el) {
            otpInputs.value[0].$el.focus();
            focusedIndex.value = 0;
          }
        });
      } else {
        toast.add({ severity: 'success', summary: $t('نجاح'), detail: $t('تم التحقق بنجاح'), life: 3000 });
        verificationQueue.value.shift();
        otp.value = ['', '', '', '', '', ''];
        otpError.value = '';
        focusedIndex.value = null;

        if (verificationQueue.value.length > 0) {
          currentVerificationType.value = verificationQueue.value[0];
          toast.add({
            severity: 'info',
            summary: $t('تم إرسال OTP'),
            detail: $t('تم إرسال رمز التحقق إلى ') +
                    (currentVerificationType.value === 'email' ? profile.value.email : profile.value.phone) +
                    $t('، صالح لمدة ') +
                    validityPeriods.value[currentVerificationType.value] +
                    $t(' دقيقة'),
            life: 5000,
          });

          nextTick(() => {
            if (otpInputs.value[0]?.$el) {
              otpInputs.value[0].$el.focus();
              focusedIndex.value = 0;
            }
          });
        } else {
          showOtpModal.value = false;
          originalProfile.value = { ...profile.value, file: null };
        }
      }
    } else {
      otpError.value = response.data.result.message || $t('فشل في التحقق من رمز OTP');
    }
  } catch (error) {
    toast.add({ severity: 'error', summary: 'خطأ', detail: $t('فشل في التحقق من رمز OTP'), life: 3000 });
  } finally {
    isOtpLoading.value = false;
  }
};

// --- Lifecycle ---
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.dir-rtl {
  direction: rtl;
}
.bg-primary {
  background-color: #AA1E22 !important;
}
.bg-primary-hover {
  background-color: #8C1A1D !important;
}
.p-inputtext:focus {
  box-shadow: none !important;
}
.p-inputtext {
  border: 1px solid var(--gray-300, #d1d5db) !important;
}
.ring-2.ring-\[\#AA1E22\].bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 242, 242, var(--tw-bg-opacity)) !important;
  border-color: transparent !important;
  box-shadow: 0 0 0 2px #AA1E22 !important;
}
</style>
