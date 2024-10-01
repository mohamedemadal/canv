<script setup>
import { computed ,ref,onMounted} from "vue";
import i18n from "../plugins/i18n";

import { useAppLangStore } from "../stores/AppLangStore";
const langs = ref([]);
const appLang = useAppLangStore();
const value=ref('')
const localeBtn = computed({
  get() {
    if (appLang.appLang == "en") return "Ar";
    else return "En";
  },
  set(val) {
    appLang.appLang = val;
  },
});

const changeLocale = () => {
  i18n.global.locale.value == "ar" ? executeArCode() : executeEnCode();

  getlang()
};

const executeArCode = () => {
  document.body.dir = "ltr";
  let k = document.getElementsByClassName("switcher");
  console.log(k);
  k.dir = "ltr";

  i18n.global.locale.value = "en";
  appLang.setAppLang(i18n.global.locale.value);
  appLang.setAppRtl(false);
  window.location.reload();
};
const getlang=()=>{
   if(localStorage.getItem('appLang')== 'ar'){
     langs.value = [

    { name: 'Ar', code: 'ar' },
   ];
     value.value='ar'
   }else{
    langs.value = [
    { name: 'En', code: 'en' },

   ];
     value.value='en'
   }
 }

 onMounted(() => {

  getlang()

});
const executeEnCode = () => {
  document.body.dir = "rtl";
  let k = document.getElementsByClassName("switcher");
  console.log(k);
  k.dir = "rtl";
  i18n.global.locale.value = "ar";
  appLang.setAppLang(i18n.global.locale.value);
  appLang.setAppRtl(true);
  window.location.reload();
};
</script>

<template>
  <Button icon="pi pi-globe" :label="localeBtn" style="  background-color: #AA1E22 !important" class="rounded-xl  text-white " @click="changeLocale">


  </Button>

</template>

<style scoped>
:deep(.v-input__control) {
  max-width: 60px;
}
</style>
