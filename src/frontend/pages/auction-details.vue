<template>
  <Nave></Nave>
  <!-- banner -->
  <div  class="banner flex items-center h-[35vh] lg:h-[55vh] relative ">
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png">

    <div class="z-50 text-white w-full m-auto w-[80%] ">
      <H1 class="font-bold text-5xl text-white z-50">المزادات </H1>
     <div class="flex py-8 ">
      <p class="text-2xl font-semibold ">الرئيسية</p>
      <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p class="text-2xl font-semibold "> المزادات</p>
      <svg class="my-auto mx-[1%]" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999878 6.49976L16.9999 6.49976" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p class="text-2xl font-semibold "> {{ auction_details.name }}</p>
     </div>
    </div>
   </div>


   <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px] py-4">
    <div>
                  <p class="text-xl font-bold text-right">{{ auction_details.name }}</p>
                  <div class="flex py-2 ">
                    <a class="flex bg-[#AA1E22BF] py-1 px-1 mx-1 rounded-md">
                    <div>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="8.25" r="2.25" stroke="white" stroke-width="1.5"/>
                      <path d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z" stroke="white" stroke-width="1.5"/>
                      </svg>


                    </div>
                    <p class="text-[white] text-sm px-1">{{ auction_details.city }} </p>
                   </a>
                   <a class="flex bg-[#AA1E22BF] py-1 px-2 rounded-md">
                    <div class="m-auto">
                      <svg class="my-auto" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.837158 4.96249C0.837158 3.19169 2.27268 1.75617 4.04348 1.75617H10.7936C12.5644 1.75617 13.9999 3.19169 13.9999 4.96249V12.0501C13.9999 13.821 12.5644 15.2565 10.7936 15.2565H4.04348C2.27268 15.2565 0.837158 13.821 0.837158 12.0501V4.96249ZM4.04348 2.7687C2.83188 2.7687 1.84968 3.75089 1.84968 4.96249V12.0501C1.84968 13.2618 2.83188 14.2439 4.04348 14.2439H10.7936C12.0052 14.2439 12.9874 13.2618 12.9874 12.0501V4.96249C12.9874 3.75089 12.0052 2.7687 10.7936 2.7687H4.04348Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.837158 5.97502C0.837158 5.69542 1.06382 5.46876 1.34342 5.46876H13.4937C13.7733 5.46876 13.9999 5.69542 13.9999 5.97502C13.9999 6.25462 13.7733 6.48128 13.4937 6.48128H1.34342C1.06382 6.48128 0.837158 6.25462 0.837158 5.97502Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71849 0.743652C4.99809 0.743652 5.22475 0.970313 5.22475 1.24991V3.27496C5.22475 3.55456 4.99809 3.78122 4.71849 3.78122C4.43889 3.78122 4.21223 3.55456 4.21223 3.27496V1.24991C4.21223 0.970313 4.43889 0.743652 4.71849 0.743652Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1186 0.743652C10.3982 0.743652 10.6249 0.970313 10.6249 1.24991V3.27496C10.6249 3.55456 10.3982 3.78122 10.1186 3.78122C9.83901 3.78122 9.61235 3.55456 9.61235 3.27496V1.24991C9.61235 0.970313 9.83901 0.743652 10.1186 0.743652Z" fill="white"/>
                      <path d="M8.09357 10.0251C8.09357 10.3979 7.79135 10.7001 7.41855 10.7001C7.04575 10.7001 6.74354 10.3979 6.74354 10.0251C6.74354 9.6523 7.04575 9.35009 7.41855 9.35009C7.79135 9.35009 8.09357 9.6523 8.09357 10.0251Z" fill="white"/>
                      <path d="M10.7936 10.0251C10.7936 10.3979 10.4914 10.7001 10.1186 10.7001C9.74581 10.7001 9.4436 10.3979 9.4436 10.0251C9.4436 9.6523 9.74581 9.35009 10.1186 9.35009C10.4914 9.35009 10.7936 9.6523 10.7936 10.0251Z" fill="white"/>
                      <path d="M5.39351 10.0251C5.39351 10.3979 5.09129 10.7001 4.71849 10.7001C4.34569 10.7001 4.04348 10.3979 4.04348 10.0251C4.04348 9.6523 4.34569 9.35009 4.71849 9.35009C5.09129 9.35009 5.39351 9.6523 5.39351 10.0251Z" fill="white"/>
                      </svg>
                    </div>
                    <p class="text-[white] text-sm px-1"> {{ auction_details.start_date }}</p>
                   </a>
                  </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div class="lg:col-span-2">
        <swiper
      ref="swiperRef"
      :modules="[Pagination, Navigation, Autoplay]"
      @slideChange="onSlideChange"
      @swiper="onSwiper"

      :navigation="navigation"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
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
      <swiper-slide v-for="(auction, index) in 9" :key="index">

             <img class="w-full" src="../images/auctions.png">
        <!-- Doctor -->
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>



          </swiper>
      </div>
      <div  class="w-full h-full gap-2 grid grid-cols-2">
        <img v-for=" x in 6" class="h-full " src="../images/auctions.png">
      </div>

    </div>
   </div>

      <!-- عملية الفلتر -->

      <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px] py-4">
    <div class="bg-white grid grid-cols-1 lg:grid-cols-4 gap-2 p-[2%] max-w-[1390px] m-auto">
      <div class="lg:col-span-3 shadow-lg px-[1%]">
        <h2 class="text-2xl">تفاصيل المزاد</h2>
        <p style="line-height: 34px;" class="text-lg text-[#7C7B7B]" >{{ auction_details.description }}</p>
      </div>
      <div class="grid grid-cols-1 gap-2">
         <div class="shadow-lg">
          <h2 class="text-2xl py-2 bg-[#AA1E22] text-white text-center rounded-md">السعر الإفتتاحى للمزاد</h2>
          <p class="text-2xl py-2 text-center text-[#AA1E22] font-bold">1,500,000 ر.س</p>
         </div>
         <div class="shadow-lg">
          <h2 class="text-2xl py-2 bg-[#168F13] text-white text-center rounded-md">  مبلغ الدخول</h2>
          <p class="text-2xl py-2 text-center text-[#AA1E22] font-bold">1,500,000 ر.س</p>
         </div>
      </div>

    </div>


   </div>


   <!-- الصورة -->
   <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px] py-4">
    <div class=" gap-2">
        <p for="username" class="text-2xl font-bold">منتجات المزاد</p>
         <Dropdown  @update:model-value="change_asset" v-model="get_asset"  option-value="asset_id" :options="auction_details.assets" optionLabel="name" placeholder='اختر نوع المنتج' class="w-fit bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]" />
     </div>
      <div class="max-w-[1390px] m-auto">
        <img class="w-full  lg:h-[600px] " src="../images/auctions.png">

      </div>
   </div>


   <!-- عملية الفلتر -->

   <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px] py-4">

    <div class="bg-white grid grid-cols-1 lg:grid-cols-4 gap-2 p-[2%] max-w-[1390px] m-auto">
      <div class="lg:col-span-3 shadow-lg px-[1%]">
        <h2 class="text-2xl">التفاصيل</h2>
        <p  style="line-height: 34px;" class="text-lg text-[#7C7B7B]" >{{ assets?.description }}</p>

      </div>
      <div class="grid grid-cols-1 gap-2">
         <div class="shadow-lg">
          <h2 class="text-2xl py-2 bg-[#AA1E22] text-white text-center rounded-md">السعر الإفتتاحى للمزاد</h2>
          <p class="text-2xl py-2 text-center text-[#AA1E22] font-bold">{{ assets?.opening_amount }} ر.س</p>
         </div>
         <div class="shadow-lg">
          <h2 class="text-2xl py-2 bg-[#168F13] text-white text-center rounded-md">  مبلغ الدخول</h2>
          <p class="text-2xl py-2 text-center text-[#168F13] font-bold">{{ assets?.entry_amount }} ر.س</p>
         </div>
      </div>

    </div>


   </div>





   <!--  معلومات إضافية -->
   <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px]">
      <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md  max-w-[1390px] m-auto " >
        <div    @click="toggle(1)" class="flex justify-between py-2 w-full " style="border-bottom: 1px solid #E8E8E8;">
          <h3 class="text-3xl font-bold  " > معلومات إضافية</h3>
          <div class="my-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#121212"/>
            </svg>
          </div>
        </div>
          <div v-if="activeIndex === 1" class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3 py-4 duration-2000">
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">المدينة</h4>
            <p class="text-[#7C7B7B] font-medium py-2"> {{ auction_details.city }}</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">الحي</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg "> رقم الصك</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">تاريخ الصك</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">نوع المنتج</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">المساحة</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">الواجهة</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">نوع الملكية</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-extrabold text-xs py-1">الحقوق على الملكية</h4>
            <p class="text-[#7C7B7B] font-medium py-3">شبكة عامة</p>
          </div>

      </div>
      </div>

    </div>

   <!--  معلومات إضافية -->
   <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px] ">
      <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md   " >
        <div    @click="toggle(3)" class="flex justify-between py-2 w-full " style="border-bottom: 1px solid #E8E8E8;">
          <h3 class="text-3xl font-bold  " >الحدود و الأطوال</h3>
          <div class="my-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#121212"/>
            </svg>
          </div>
        </div>
          <div v-if="activeIndex === 3" class=" gap-3 py-4 duration-2000">
          <div   class="p-2 m-a flex">
            <h4 class="font-bold text-xl ">شمالاً :</h4>
            <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto"> شارع عرض 7م بطول 40م</p>
          </div>
          <div   class="p-2 m-a flex">
            <h4 class="font-bold text-xl ">شـرقـاً :</h4>
            <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto"> طريق عرض 5م بطول منكسر يبدأ من الشمال إلى الجنوب الشرقي 5م ثم ينكسر جهة الجنوب بطول 43م ثم ينكسر جهة الجنوب 26م</p>
          </div>
          <div   class="p-2 m-a flex">
            <h4 class="font-bold text-xl ">جنوباً :</h4>
            <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto"> راس مثلث بطول صفر</p>
          </div>
          <div   class="p-2 m-a flex">
            <h4 class="font-bold text-xl ">غـربـاً :</h4>
            <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto">شارع عرض 10م بطول بطول 97م</p>
          </div>


      </div>
      </div>

    </div>
    <!-- الخدمات العامة -->
    <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px] ">
      <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md   " >
        <div    @click="toggle(2)" class="flex justify-between py-2 w-full " style="border-bottom: 1px solid #E8E8E8;">
          <h3 class="text-3xl font-bold  " > الخدمات العامة</h3>
          <div class="my-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#121212"/>
            </svg>
          </div>
        </div>
        <div v-if="activeIndex === 2" class="grid grid-cols-2 lg:grid-cols-6 gap-3 py-4 ">
          <div style="border-left: 1px solid #E8E8E8;" class="px-4">
            <h4 class="font-bold text-lg ">كهرباء</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-4">
            <h4 class="font-bold text-lg ">مياه</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-4">
            <h4 class="font-bold text-lg ">صرف صحى</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-4">
            <h4 class="font-bold text-lg ">الهاتف / إنترنت</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-4">
            <h4 class="font-bold text-lg ">الهاتف / إنترنت</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-4">
            <h4 class="font-bold text-lg ">الهاتف / إنترنت</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
      </div>
      </div>

    </div>
       <!--  نوع الملكية -->
       <div class=" detail lg:px-[5%] px-[2%] m-auto  max-w-[1399px]">
      <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md   " >
        <div    @click="toggle(4)" class="flex justify-between py-2 w-full " style="border-bottom: 1px solid #E8E8E8;">
          <h3 class="text-3xl font-bold  " > نوع الملكية</h3>
          <div class="my-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#121212"/>
            </svg>
          </div>
        </div>
          <div v-if="activeIndex === 4" class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3 py-4 duration-2000">
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">المدينة</h4>
            <p class="text-[#7C7B7B] font-medium py-2"> {{ auction_details.city }}</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">الحي</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg "> رقم الصك</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">تاريخ الصك</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">نوع المنتج</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">المساحة</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">الواجهة</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-bold text-lg ">نوع الملكية</h4>
            <p class="text-[#7C7B7B] font-medium py-2">شبكة عامة</p>
          </div>
          <div style="border-left: 1px solid #E8E8E8;" class="px-2">
            <h4 class="font-extrabold text-xs py-1">الحقوق على الملكية</h4>
            <p class="text-[#7C7B7B] font-medium py-3">شبكة عامة</p>
          </div>

      </div>
      </div>

    </div>

    <Footer></Footer>
</template>
<script setup>
import Nave from '../components/Nave.vue';
import Footer from '../components/Footer.vue';
import {useRouter} from "vue-router";

const router = useRouter()
// import img1 from "../images/riyadh-saudi-arabia-gretopia_5 1.png";
import { ref, reactive, onMounted,computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from "axios";
const auction_details=ref({})
const get_asset=ref('')
const assets=ref({})
const active=ref('all')
const swiperRef = ref(null);
const currentDate = ref(new Date());
const state = reactive({
  currentSlide: 0,
  totalSlides: 0,
});
const items = ref([
  { title: 'Item 1', content: 'Content for item 1' },
  { title: 'Item 2', content: 'Content for item 2' },
  { title: 'Item 3', content: 'Content for item 3' },
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
const pagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};
const currentMinutes = computed(() => {
  return currentDate.value.toLocaleTimeString([], { minute: '2-digit', hour12: false }).split(':')[0];
});
const currentHour = computed(() => {
  return currentDate.value.toLocaleTimeString([], { hour: '2-digit', hour12: false });
});
const currentSeconds = computed(() => {
  return currentDate.value.toLocaleTimeString([], { second: '2-digit', hour12: false }).split(':')[0];
});
const formattedDate = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = String(currentDate.value.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(currentDate.value.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
});
// Function to update the current date
const updateTime = () => {
  currentDate.value = new Date();
};

const change_asset=(e)=>{
  axios.post('api/get_asset_details',{
    asset_id:e
  })
  .then((res) => {

    assets.value=res.data.result.data
  })
}
const fetchdata=()=>{
axios
  .post('api/get_auction_details',{
    auction_id:router.currentRoute.value.params.id
  })
  .then((res) => {

    auction_details.value=res.data.result.data
  })
}


onMounted(() => {

  fetchdata()



});

</script>
<style>
.detail .swiper-pagination-bullet {
  background-color: rgb(254, 254, 254) !important;
  z-index: 60;
}


.swiper-button-next,
.swiper-button-prev {
  color: #007bff;
}
.swiper-button-prev{
  background-color: #AB1919 !important;
  border-radius: 50% !important ;
  transform: scale(.7) !important;
  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
}
.swiper-button-next{
  background-color: #AB1919 !important;
  border-radius: 50% !important ;
  transform: scale(.7) !important;
  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
}
.detail .swiper-pagination{

 position: absolute !important;


}
.p-dropdown{
  background-color: #AA1E22 !important;

}
.p-dropdown-label ,.p-icon{
  color:  white !important
}
.swiper-button-next::after ,.swiper-button-prev::after{
  transform: scale(.6) !important
}

</style>

