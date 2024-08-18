<template>
   <Nave></Nave>
  about content
</template>
<script setup>
import Nave from '../components/Nave.vue';
import Auctions from '../components/Auctions.vue'
import Customer from '../components/Customer.vue'
import Rentals from '../components/Rentals.vue'
import Property from '../components/Property.vue'
import img1 from "../images/header.png";
import { ref, reactive, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const counter = ref({
  count1:''
});
const target = 450;
const incrementTime = 2; // The time in milliseconds for each increment

let interval;
const counterRef = ref(null);
const images = ref([
  { img: img1 },
  { img: img1 },
  { img: img1 },
]);

const swiperRef = ref(null);

const state = reactive({
  currentSlide: 0,
  totalSlides: 0,
});

const pagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

function startCounter() {
  interval = setInterval(() => {
    if (counter.value.count1 < target) {
      counter.value.count1++;
    }
  }, incrementTime);
}

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    startCounter();
  }
}

onMounted(() => {

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1
  });
  if (counterRef.value) {
    observer.observe(counterRef.value);
  }


});

</script>
