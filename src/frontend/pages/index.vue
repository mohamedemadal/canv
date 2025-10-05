<template>
  <!-- nave -->
  <Nave></Nave>
  <!-- slider -->
<Header></Header>
  <!-- swiper -->
  <div  class=" hidden w-full md:h-[40vh] h-[60vh] lg:h-full isolate  bg-[#060B15] ">


    <swiper
      ref="swiperRef"
      :modules="[Pagination, Navigation, Autoplay]"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      :navigation="navigation"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"

      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="text-center relative text-4xl bg-teal-100 rounded-3xl w-full h-[60vh] md:h-[40vh] lg:h-full">
          <!-- Doctor -->
          <div class="absolute inset-0 flex flex-col items-start lg:px-[5%] justify-center p-[1%] z-40">
    <!-- <h1 class="font-bold text-3xl lg:text-7xl w-full lg:w-[60%] lg:pb-6 text-white text-right">كن شريك</h1>
    <h2 class="font-medium text-xl lg:text-2xl w-full lg:w-[60%] text-right text-[#CECECE]" style="line-height: initial;">
      لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال .
    </h2> -->
  </div>

           <div style="background: linear-gradient(to right, #624336 , rgb(0, 0, 0));" class="absolute w-full h-full  opacity-60"></div>
          <div class="bg-white   w-full h-full m-auto">
            <img :src="image.img" class="hidden lg:block m-auto w-full h-full">
          </div>
        </div>
        <!-- Doctor -->
      </swiper-slide>


    </swiper>
  </div>

   <!-- about canv -->
 <div class="bg-white hidden lg:block">
  <div class=  " py-[3%] m-auto  max-w-[1290px] ">
        <div class="">
         <h3 class="text-center text-3xl lg:text-5xl pb-[5%]"> {{ $t("About_CANF") }}</h3>
       </div>
       <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 p-4">
        <div class="hidden">
          <img src="../images/about.png" class="w-full h-full">
        </div>
        <div class="p-4 lg:col-span-2">
         <h4 class="text-3xl lg:text-4xl font-bold">{{ $t("why_choose_canv") }}</h4>
         <p style="line-height: initial; text-align: justify;" class="text-xl lg:text-2xl font-medium text-[#AEAEAE]">{{ about_us?.about_us?.slice(0,290) }} ...</p>
          <a href="/about">
           <Button style=" background-color: #AA1E22 !important;"  :label='$t("read_more")' class="mt-3 w-[200px] bg focus:ring-0 text-[#AA1E22]"/>
          </a>
        </div>
       </div>
    </div>
 </div>
  <!-- counter -->
  <div class="hidden lg:block" :style="{ backgroundImage: `url(${img2})` }" style="background-position: center;background-repeat: no-repeat;background-size: cover;">

  <div class="py-[5%] m-auto z-50 max-w-[1295px]">
    <div class="">
      <h3 class="text-center text-3xl lg:text-5xl text-white  py-4"> {{ $t("Our_many_years_of_experience_in_numbers") }}</h3>
      <p class="text-center text-xl lg:text-2xl  pb-[5%] text-[#AEAEAE]">
        {{ $t("We_show_you_our_professional") }}
       </p>
    </div>
    <div ref="counterRef" class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-7 z-40 px-2 ">
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+ {{ company_statistics?.total_transactions_number }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("Deals_concluded") }} </p>
         </div>
      </div>
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+ {{ company_statistics?.total_property_units_number }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("Under_our_management") }}  </p>
          </div>
      </div>
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl"> {{ company_statistics?.auctions_assets_value }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("The_value_of_auctions") }} </p>
         </div>
      </div>
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+ {{ company_statistics?.total_auctions_assets_number }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> اصول المزادات</p>
        </div>
      </div>
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+{{ company_statistics?.total_auctions_number }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl">  {{ $t("Number_of_auctions") }} </p>
                </div>
      </div>
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-xl">+{{ company_statistics?.auctions_assets_total_area }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("Auction_space")}}  </p>
        </div>
      </div>
      <div  class="px-2 h-[170px] text-black hover:text-white group z-40  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
        <div class="text-base transition duration-1000">
          <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+{{ company_statistics?.total_clients_number }}</p>
          <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl">{{ $t("Number_of_clients") }} </p>
        </div>
      </div>

    </div>
  </div>
</div>

    <!-- counter -->
 <Auctions></Auctions>








 <div class=" lg:hidden" :style="{ backgroundImage: `url(${img2})` }" style="background-position: center;background-repeat: no-repeat;background-size: cover;">

<div class="py-[5%] m-auto z-50 max-w-[1295px]">
  <div class="">
    <h3 class="text-center text-3xl lg:text-5xl text-white  py-4">{{ $t("Our_many_years_of_experience_in_numbers") }} </h3>
    <p class="text-center text-xl lg:text-2xl px-1  pb-[5%] text-[#AEAEAE]">
      {{ $t("We_show_you_our_professional") }}
    </p>
  </div>
  <div ref="counterRef" class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-7 z-50 px-2 ">
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+ {{ company_statistics?.total_transactions_number }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("Deals_concluded") }} </p>
      </div>
    </div>
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+ {{ company_statistics?.total_property_units_number }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("Under_our_management") }}  </p>
      </div>
    </div>
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl"> {{ company_statistics?.auctions_assets_value }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("The_value_of_auctions") }} </p>
      </div>
    </div>
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+ {{ company_statistics?.total_auctions_assets_number }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> اصول المزادات</p>
      </div>
    </div>
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+{{ company_statistics?.total_auctions_number }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl">  {{ $t("Number_of_auctions") }} </p>
      </div>
    </div>
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-xl">+{{ company_statistics?.auctions_assets_total_area }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl"> {{ $t("Auction_space")}}  </p>
      </div>
    </div>
    <div  class="px-2 h-[170px] text-black hover:text-white group z-50  bg-[#FFFFFF] transition hover:bg-[#AA1E22] duration-1000 py-8 border-b-4 rounded-md border-[#AA1E22]">
      <div class="text-base transition duration-1000">
        <p class="invisible group-hover:visible transition  text-white text-center font-bold text-2xl">+{{ company_statistics?.total_clients_number }}</p>
        <p class="transition group-hover:text-white  duration-100 pt-[5%] text-center text-xl">{{ $t("Number_of_clients") }} </p>
      </div>
    </div>

  </div>
</div>
</div>
  <!-- <Rentals></Rentals> -->
<!-- how to confirme -->
 <div class="hidden">
  <div class="bg-slate-50 auctions ">
    <div class=  "  px-[1%] py-[3%] m-auto  max-w-[1280px]">
      <div class=" ">
         <h3 class="text-center text-5xl py-4 ">كيف تسجل فى كانف ؟</h3>
         <p class="text-center text-2xl pb-[5%] text-[#AEAEAE]"> لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل </p>
       </div>
       <div class="py-[2%] grid grid-cols-1 lg:grid-cols-8  gap-2 lg:gap-0 px-2">
       <div style="border: 2px dashed  red;" class="bg-white shadow-lg px-[5%] rounded-md col-span-2 relative py-[12%]">
          <div class=" pt-4 ">
            <svg class="m-auto" width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.3753 90.0524H35.6253C14.1316 90.0524 4.94824 80.8691 4.94824 59.3753V35.6253C4.94824 14.1316 14.1316 4.94824 35.6253 4.94824H59.3753C80.8691 4.94824 90.0524 14.1316 90.0524 35.6253V59.3753C90.0524 80.8691 80.8691 90.0524 59.3753 90.0524ZM35.6253 10.8857C17.3774 10.8857 10.8857 17.3774 10.8857 35.6253V59.3753C10.8857 77.6232 17.3774 84.1149 35.6253 84.1149H59.3753C77.6232 84.1149 84.1149 77.6232 84.1149 59.3753V35.6253C84.1149 17.3774 77.6232 10.8857 59.3753 10.8857H35.6253Z" fill="#A82222"/>
            <path d="M58.7013 50.1935C57.0784 50.1935 55.7326 48.8476 55.7326 47.2247V33.4102H41.918C40.2951 33.4102 38.9492 32.0643 38.9492 30.4414C38.9492 28.8185 40.2951 27.4727 41.918 27.4727H58.7013C60.3242 27.4727 61.6701 28.8185 61.6701 30.4414V47.2247C61.6701 48.8476 60.3242 50.1935 58.7013 50.1935Z" fill="#A82222"/>
            <path d="M36.2958 55.7732C35.5437 55.7732 34.7916 55.4961 34.1979 54.9023C33.0499 53.7544 33.0499 51.8544 34.1979 50.7065L56.602 28.3023C57.7499 27.1544 59.6499 27.1544 60.7979 28.3023C61.9458 29.4503 61.9458 31.3503 60.7979 32.4982L38.3937 54.9023C37.8395 55.4961 37.0478 55.7732 36.2958 55.7732Z" fill="#A82222"/>
            <path d="M47.5018 72.1614C39.1497 72.1614 30.7581 70.8155 22.8018 68.1635C21.2581 67.6489 20.4268 65.9468 20.9414 64.4031C21.456 62.8593 23.1581 61.9885 24.7018 62.5426C39.4268 67.451 55.6164 67.451 70.3414 62.5426C71.8852 62.0281 73.5872 62.8593 74.1018 64.4031C74.6164 65.9468 73.7852 67.6489 72.2414 68.1635C64.2456 70.8551 55.8539 72.1614 47.5018 72.1614Z" fill="#A82222"/>
            </svg>
          </div>
          <div><p class="text-2xl font-bold py-6 text-center text-[#303843]">سجل  حساب منصة فى كانف ؟</p></div>

        </div>
        <div class=" items-center hidden lg:flex"><svg class="my-auto" width="143" height="27" viewBox="0 0 143 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M142.191 15.2854C135.709 10.1877 128.961 7.3543 122.203 7.97851C115.469 8.60272 107.312 14.5632 103.815 16.0136C94.461 19.8996 87.1471 19.4836 84.6268 18.2107C80.7048 16.2218 76.1405 11.1363 78.2304 6.5221C79.9297 2.77074 85.4883 0.518659 89.9203 2.04858C94.9615 3.78657 95.7332 9.12918 95.8196 10.9039C96.1569 17.8681 88.7243 24.1405 81.4286 25.5113C78.216 26.0446 74.9048 25.7933 71.8346 24.7831C63.8859 22.2251 55.0853 16.7663 52.6459 15.2854C41.1024 8.27222 24.1784 8.30286 2.27722 14.5572M12.0522 21.8307L1.47985 15.2854L6.13304 0.310559" stroke="#AA1E22" stroke-width="2" stroke-dasharray="8 4"/>
        </svg>
        </div>
        <div style="border: 2px dashed  #35CF3B;" class="bg-white shadow-lg rounded-md col-span-2  relative py-[12%]">
          <div class=" pt-4 ">
            <svg class="m-auto" width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70.222 90.0518H48.5303C46.9074 90.0518 45.5615 88.7059 45.5615 87.083C45.5615 85.4601 46.9074 84.1143 48.5303 84.1143H70.222C76.7928 84.1143 82.1366 78.7705 82.1366 72.1996V70.458H77.5845C71.6074 70.458 66.5407 66.0246 66.0657 60.3246C65.7491 57.0392 66.9365 53.833 69.3115 51.4976C71.3303 49.4393 74.1012 48.2914 77.0699 48.2914H82.097V45.5601C82.097 38.9893 76.7532 33.6455 70.1824 33.6455H24.7407C18.1699 33.6455 12.8262 38.9893 12.8262 45.5601V52.408C12.8262 54.0309 11.4803 55.3767 9.85742 55.3767C8.23451 55.3767 6.88867 54.0309 6.88867 52.408V45.5601C6.88867 35.7039 14.8845 27.708 24.7407 27.708H70.1824C80.0386 27.708 88.0345 35.7039 88.0345 45.5601V51.2601C88.0345 52.8831 86.6887 54.2289 85.0658 54.2289H77.0699C75.6845 54.2289 74.4178 54.7435 73.5074 55.6935C72.3595 56.8018 71.8053 58.3059 71.9636 59.81C72.2011 62.4225 74.6949 64.5205 77.5449 64.5205H85.0658C86.6887 64.5205 88.0345 65.8663 88.0345 67.4892V72.1996C88.0741 82.0559 80.0783 90.0518 70.222 90.0518Z" fill="#35CF3B"/>
            <path d="M9.89551 52.092C8.27259 52.092 6.92676 50.7462 6.92676 49.1233V31.0339C6.92676 25.136 10.6476 19.792 16.1497 17.6941L47.5789 5.8191C50.8247 4.59201 54.4268 5.02762 57.2372 7.00679C60.0872 8.98596 61.7497 12.1922 61.7497 15.6359V30.6775C61.7497 32.3005 60.4039 33.6463 58.7809 33.6463C57.158 33.6463 55.8122 32.3005 55.8122 30.6775V15.6359C55.8122 14.1318 55.0997 12.7463 53.833 11.8755C52.5664 11.0046 51.0621 10.8067 49.6371 11.3609L18.208 23.2359C15.0018 24.4629 12.8247 27.5902 12.8247 31.0339V49.1233C12.8643 50.7858 11.5184 52.092 9.89551 52.092Z" fill="#35CF3B"/>
            <path d="M77.5828 70.4576C71.6057 70.4576 66.539 66.0243 66.064 60.3243C65.7474 57.0388 66.9349 53.8327 69.3099 51.4973C71.3286 49.4389 74.0995 48.291 77.0682 48.291H85.3016C89.2203 48.4098 92.2286 51.4971 92.2286 55.2971V63.4515C92.2286 67.2515 89.2203 70.3388 85.4203 70.4576H77.5828ZM85.2224 54.2285H77.1078C75.7224 54.2285 74.4557 54.7431 73.5453 55.6931C72.3974 56.8014 71.8432 58.3055 72.0015 59.8097C72.239 62.4222 74.7328 64.5201 77.5828 64.5201H85.3411C85.8557 64.5201 86.3307 64.0453 86.3307 63.4515V55.2971C86.3307 54.7034 85.8557 54.2681 85.2224 54.2285Z" fill="#35CF3B"/>
            <path d="M55.4163 50.4688H27.708C26.0851 50.4688 24.7393 49.1229 24.7393 47.5C24.7393 45.8771 26.0851 44.5312 27.708 44.5312H55.4163C57.0393 44.5312 58.3851 45.8771 58.3851 47.5C58.3851 49.1229 57.0393 50.4688 55.4163 50.4688Z" fill="#35CF3B"/>
            <path d="M37.6042 77.9396C35.9813 77.9396 34.6354 76.5938 34.6354 74.9708V69.9041C34.6354 69.0332 33.9229 68.2812 33.0125 68.2812H11.875C10.2521 68.2812 8.90625 66.9354 8.90625 65.3125C8.90625 63.6896 10.2521 62.3438 11.875 62.3438H33.0125C37.1687 62.3438 40.5729 65.7478 40.5729 69.9041V74.9708C40.5729 76.5938 39.2271 77.9396 37.6042 77.9396Z" fill="#35CF3B"/>
            <path d="M16.704 73.1102C15.952 73.1102 15.1999 72.8333 14.6061 72.2395L9.77695 67.4105C8.62904 66.2625 8.62904 64.3623 9.77695 63.2144L14.6061 58.3854C15.754 57.2374 17.654 57.2374 18.8019 58.3854C19.9499 59.5333 19.9499 61.4333 18.8019 62.5812L16.0707 65.3124L18.8019 68.0437C19.9499 69.1916 19.9499 71.0916 18.8019 72.2395C18.2082 72.8333 17.4561 73.1102 16.704 73.1102Z" fill="#35CF3B"/>
            <path d="M37.6042 89.1818H16.4667C12.3104 89.1818 8.90625 85.7775 8.90625 81.6212V76.5547C8.90625 74.9318 10.2521 73.5859 11.875 73.5859C13.4979 73.5859 14.8438 74.9318 14.8438 76.5547V81.6212C14.8438 82.4921 15.5563 83.2443 16.4667 83.2443H37.6042C39.2271 83.2443 40.5729 84.5901 40.5729 86.213C40.5729 87.836 39.2271 89.1818 37.6042 89.1818Z" fill="#35CF3B"/>
            <path d="M32.7762 94.0106C32.0241 94.0106 31.2721 93.7337 30.6783 93.1399C29.5304 91.992 29.5304 90.0918 30.6783 88.9438L33.4096 86.2128L30.6783 83.4816C29.5304 82.3336 29.5304 80.4337 30.6783 79.2857C31.8262 78.1378 33.7262 78.1378 34.8741 79.2857L39.7033 84.1148C40.8512 85.2627 40.8512 87.1627 39.7033 88.3106L34.8741 93.1399C34.32 93.7337 33.5283 94.0106 32.7762 94.0106Z" fill="#35CF3B"/>
            </svg>
          </div>
          <div><p class="text-2xl font-bold py-6 text-center text-[#303843] px-[5%]">إشحن المبلغ المطلوب</p></div>

        </div>
        <div class=" items-center hidden lg:flex"><svg class="my-auto" width="143" height="27" viewBox="0 0 143 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M142.191 15.2854C135.709 10.1877 128.961 7.3543 122.203 7.97851C115.469 8.60272 107.312 14.5632 103.815 16.0136C94.461 19.8996 87.1471 19.4836 84.6268 18.2107C80.7048 16.2218 76.1405 11.1363 78.2304 6.5221C79.9297 2.77074 85.4883 0.518659 89.9203 2.04858C94.9615 3.78657 95.7332 9.12918 95.8196 10.9039C96.1569 17.8681 88.7243 24.1405 81.4286 25.5113C78.216 26.0446 74.9048 25.7933 71.8346 24.7831C63.8859 22.2251 55.0853 16.7663 52.6459 15.2854C41.1024 8.27222 24.1784 8.30286 2.27722 14.5572M12.0522 21.8307L1.47985 15.2854L6.13304 0.310559" stroke="#AA1E22" stroke-width="2" stroke-dasharray="8 4"/>
        </svg>
        </div>
        <div style="border: 2px dashed  #896917;" class="bg-white shadow-lg  rounded-md col-span-2 relative py-[12%]">
          <div class=" pt-4 ">
            <svg class="m-auto" width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.4587 90.0524H19.792C10.2128 90.0524 4.94824 84.7878 4.94824 75.2087V43.542C4.94824 33.9628 10.2128 28.6982 19.792 28.6982H39.5837C41.2066 28.6982 42.5524 30.0441 42.5524 31.667V75.2087C42.5524 81.4628 45.2045 84.1149 51.4587 84.1149C53.0816 84.1149 54.4274 85.4607 54.4274 87.0837C54.4274 88.7066 53.0816 90.0524 51.4587 90.0524ZM19.792 34.6357C13.5378 34.6357 10.8857 37.2878 10.8857 43.542V75.2087C10.8857 81.4628 13.5378 84.1149 19.792 84.1149H38.7919C37.3669 81.7795 36.6149 78.8107 36.6149 75.2087V34.6357H19.792Z" fill="#896917"/>
            <path d="M39.5837 34.6351H19.792C18.1691 34.6351 16.8232 33.2893 16.8232 31.6663V23.7497C16.8232 17.733 21.692 12.8643 27.7087 12.8643H40.019C40.9294 12.8643 41.8004 13.2996 42.3545 14.0121C42.9087 14.7642 43.1065 15.7143 42.869 16.5851C42.6315 17.4559 42.5524 18.4455 42.5524 19.7913V31.6663C42.5524 33.2893 41.2066 34.6351 39.5837 34.6351ZM22.7607 28.6976H36.6149V19.7913C36.6149 19.4351 36.6149 19.1184 36.6149 18.8018H27.7087C24.9774 18.8018 22.7607 21.0184 22.7607 23.7497V28.6976Z" fill="#896917"/>
            <path d="M55.417 54.4274C53.7941 54.4274 52.4482 53.0816 52.4482 51.4587V31.667C52.4482 30.0441 53.7941 28.6982 55.417 28.6982C57.0399 28.6982 58.3857 30.0441 58.3857 31.667V51.4587C58.3857 53.0816 57.0399 54.4274 55.417 54.4274Z" fill="#896917"/>
            <path d="M71.25 54.4274C69.6271 54.4274 68.2812 53.0816 68.2812 51.4587V31.667C68.2812 30.0441 69.6271 28.6982 71.25 28.6982C72.8729 28.6982 74.2188 30.0441 74.2188 31.667V51.4587C74.2188 53.0816 72.8729 54.4274 71.25 54.4274Z" fill="#896917"/>
            <path d="M71.2503 90.0524H55.417C53.7941 90.0524 52.4482 88.7066 52.4482 87.0837V71.2503C52.4482 67.4503 55.5753 64.3232 59.3753 64.3232H67.292C71.092 64.3232 74.2191 67.4503 74.2191 71.2503V87.0837C74.2191 88.7066 72.8732 90.0524 71.2503 90.0524ZM58.3857 84.1149H68.2816V71.2503C68.2816 70.6962 67.8462 70.2607 67.292 70.2607H59.3753C58.8212 70.2607 58.3857 70.6962 58.3857 71.2503V84.1149Z" fill="#896917"/>
            <path d="M23.75 70.2601C22.1271 70.2601 20.7812 68.9143 20.7812 67.2913V51.458C20.7812 49.8351 22.1271 48.4893 23.75 48.4893C25.3729 48.4893 26.7188 49.8351 26.7188 51.458V67.2913C26.7188 68.9143 25.3729 70.2601 23.75 70.2601Z" fill="#896917"/>
            <path d="M75.208 90.0524H51.458C41.8788 90.0524 36.6143 84.7878 36.6143 75.2087V19.792C36.6143 10.2128 41.8788 4.94824 51.458 4.94824H75.208C84.7872 4.94824 90.0518 10.2128 90.0518 19.792V75.2087C90.0518 84.7878 84.7872 90.0524 75.208 90.0524ZM51.458 10.8857C45.2038 10.8857 42.5518 13.5378 42.5518 19.792V75.2087C42.5518 81.4628 45.2038 84.1149 51.458 84.1149H75.208C81.4622 84.1149 84.1143 81.4628 84.1143 75.2087V19.792C84.1143 13.5378 81.4622 10.8857 75.208 10.8857H51.458Z" fill="#896917"/>
            </svg>

          </div>
          <div><p class="text-2xl font-bold py-6 text-center text-[#303843] px-[5%]">قدم على العقارات</p></div>

        </div>
        <div class="hidden"></div>
       </div>
    </div>
  </div>
 </div>


 <Customer></Customer>
 <Footer></Footer>
</template>

<script setup>
import Nave from '../components/Nave.vue';
import Auctions from '../components/Auctions.vue'
import Customer from '../components/Customer.vue'
import Rentals from '../components/Rentals.vue'
import Property from '../components/Complexes.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import img1 from "../images/header.png";
import img2 from "../images/back.png";


import { ref, reactive, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from "axios";
const company_statistics=ref('')
const about_us=ref('')
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
const fetchdata=()=>{



    axios
    .post('api/get_company_statistics',{
      lang:localStorage.getItem('appLang'),

    })
    .then((res) => {

      company_statistics.value=res.data.result.data
    })
    axios.post('api/about_us',{
      lang:localStorage.getItem('appLang'),
        })
        .then((res) => {
          about_us.value=res.data.result.data
        })
}




onMounted(() => {
  fetchdata()
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1
  });
  if (counterRef.value) {
    observer.observe(counterRef.value);
  }


});

</script>

<style >

 .swiper-pagination-bullet{
  background-color: rgb(255, 255, 255) !important;
  z-index: 60;
  visibility: hidden !important;
}

.swiper-button-next,
.swiper-button-prev {
  color: #007bff;
}
.swiper-button-prev{
  background-color: rgb(180, 12, 12) !important;
  border-radius: 50% !important ;

  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
 padding: 20px !important
}
.swiper-button-next{
  background-color: rgb(180, 12, 12) !important;
  border-radius: 50% !important ;

  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
 padding: 20px !important
}
.swiper-button-next::after ,.swiper-button-prev::after{
  transform: scale(.6) !important
}
</style>
