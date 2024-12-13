<template>
  <div  class="full-screen relative" :style="{ backgroundImage: `url(${image})` }">
    <div style="background: linear-gradient(to right, #624336 , rgb(0, 0, 0));" class="absolute z-40 w-full h-full  opacity-40"></div>
    <h1 class="z-50 text-white  text-5xl font-bold tracking-wider	" >{{ displayText }}</h1>
  </div>
</template>
<script>
import img from '../images/header.png'
export default {
  data() {
    return {
      fullText: "كـــانف للمـــزادات",
      displayText: "",
      image:img
    };
  },
  mounted() {
    this.writeTextLetterByLetter();
  },
  methods: {
    writeTextLetterByLetter() {
      let index = 0;
      const interval = setInterval(() => {
        if (index < this.fullText.length) {
          this.displayText += this.fullText[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200); // Adjust the speed by changing the interval time (150 ms)
    },
  },
};
</script>
<style >
.full-screen {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Add any background color */
  font-size: 2rem;
  color: #333;
}
</style>
