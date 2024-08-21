<template>
    <div class="bg-slate-50 auctions">
  <div class=  "  px-[1%] py-[3%] m-auto  max-w-[1295px]">
      <div class=" ">
         <h3 class="text-center text-5xl py-4 ">تعرف أكثر على خدمات كانف ... </h3>
         <p class="text-center text-2xl pb-[5%] text-[#AEAEAE]"> لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل </p>
       </div>


        <div class="flex justify-between">
          <h2 class="text-4xl  font-bold">المزادات</h2>
          <a href="/auctions" class="text-2xl font-bold text-[#ef5258]">مشاهدة المزيد</a>
        </div>
        <div>{{ formattedTime }}</div>
       <div class=" grid lg:grid-cols-3 w-full lg:w-fit grid-cols-2 shadow-lg rounded-md bg-white px-2 pb-2 m-1 ">
        <Button  @click="getauction('comming')"   :style=" active == 'comming' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label=" الحالية" class="mt-3 bg-[#AA1E22]   "/>
        <Button  @click="getauction('running')"   :style=" active == 'running' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label=" القادمة" class="mt-3 bg-[#AA1E22]   "/>
        <Button  @click="getauction('finished')"   :style=" active == 'finished' ? { backgroundColor: '#AA1E22' ,color:'white' } : { backgroundColor: 'white' ,color:'black',border:'0'}"   label="المنتهية " class="mt-3 bg-[#AA1E22]   "/>
       </div>
        <div v-if="allauctions.length >= 1" class=" mt-3">

          <div class="w-full relative ">
            <div class="swiper-button-next " ></div>
            <div class="swiper-button-prev "></div>
            <div class="w-full m-auto lg:w-[90%]">
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
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024:{
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }"
    >
      <swiper-slide v-for="(auction, index) in allauctions" :key="index">
        <div class="text-center relative text-4xl bg-white rounded-lg w-full shadow-md ">
          <!-- <div class="absolute w-full h-full bg-white opacity-20"></div> -->
          <div class="h-full">
             <div class="relative" >

              <img alt="not found" class="h-[230px] w-full" src="../images/auctions.png">
              <p  :class="{'bg-[#CE3C3CB8]': auction.status == 'finished','bg-[#5BFF338F]': auction.status == 'running','bg-[#C9AA3FBF]': auction.status == 'comming',}" class="absolute z-50 top-[70%] left-3   text-white text-base p-2 rounded-lg">{{ auction.status }}</p>
             </div>
              <div class="flex justify-between p-2">
                <div>
                  <p class="text-xl font-bold text-right">{{ auction.name }}</p>
                  <div class="flex py-1 ">
                    <a  class="flex bg-[#F6E4E4]  py-1 px-1 mx-1 rounded-md" style="border: 2px solid #810206;">
                    <div class="my-auto">
                      <svg class="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="8.25" r="2.25" stroke="#7A0505" stroke-width="1.5"/>
                      <path d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z" stroke="#7A0505" stroke-width="1.5"/>
                      </svg>




                    </div>
                    <p class="text-[#810206] text-base px-1">{{ auction.city }} </p>
                   </a>
                   <a class="flex bg-[#F6E4E4] py-1 px-2 rounded-md " style="border: 2px solid #810206;">
                    <div class="m-auto">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.836914 4.96201C0.836914 3.1912 2.27243 1.75569 4.04323 1.75569H10.7934C12.5642 1.75569 13.9997 3.1912 13.9997 4.96201V12.0497C13.9997 13.8205 12.5642 15.256 10.7934 15.256H4.04323C2.27243 15.256 0.836914 13.8205 0.836914 12.0497V4.96201ZM4.04323 2.76821C2.83163 2.76821 1.84944 3.75041 1.84944 4.96201V12.0497C1.84944 13.2613 2.83163 14.2435 4.04323 14.2435H10.7934C12.005 14.2435 12.9872 13.2613 12.9872 12.0497V4.96201C12.9872 3.75041 12.005 2.76821 10.7934 2.76821H4.04323Z" fill="#7A0505"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.836914 5.97453C0.836914 5.69493 1.06357 5.46827 1.34318 5.46827H13.4934C13.773 5.46827 13.9997 5.69493 13.9997 5.97453C13.9997 6.25413 13.773 6.48079 13.4934 6.48079H1.34318C1.06357 6.48079 0.836914 6.25413 0.836914 5.97453Z" fill="#7A0505"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71825 0.743164C4.99785 0.743164 5.22451 0.969825 5.22451 1.24943V3.27447C5.22451 3.55407 4.99785 3.78073 4.71825 3.78073C4.43865 3.78073 4.21199 3.55407 4.21199 3.27447V1.24943C4.21199 0.969825 4.43865 0.743164 4.71825 0.743164Z" fill="#7A0505"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1184 0.743164C10.398 0.743164 10.6246 0.969825 10.6246 1.24943V3.27447C10.6246 3.55407 10.398 3.78073 10.1184 3.78073C9.83877 3.78073 9.61211 3.55407 9.61211 3.27447V1.24943C9.61211 0.969825 9.83877 0.743164 10.1184 0.743164Z" fill="#7A0505"/>
                      <path d="M8.09332 10.0246C8.09332 10.3974 7.79111 10.6996 7.41831 10.6996C7.04551 10.6996 6.74329 10.3974 6.74329 10.0246C6.74329 9.65182 7.04551 9.3496 7.41831 9.3496C7.79111 9.3496 8.09332 9.65182 8.09332 10.0246Z" fill="#7A0505"/>
                      <path d="M10.7934 10.0246C10.7934 10.3974 10.4912 10.6996 10.1184 10.6996C9.74557 10.6996 9.44335 10.3974 9.44335 10.0246C9.44335 9.65182 9.74557 9.3496 10.1184 9.3496C10.4912 9.3496 10.7934 9.65182 10.7934 10.0246Z" fill="#7A0505"/>
                      <path d="M5.39326 10.0246C5.39326 10.3974 5.09105 10.6996 4.71825 10.6996C4.34545 10.6996 4.04323 10.3974 4.04323 10.0246C4.04323 9.65182 4.34545 9.3496 4.71825 9.3496C5.09105 9.3496 5.39326 9.65182 5.39326 10.0246Z" fill="#7A0505"/>
                      </svg>
                    </div>
                    <p class="text-[#810206] text-sm px-1"> {{ auction.start_date }}</p>
                   </a>
                  </div>
                </div>
                <div class="flex space-x-2">
                    <div class="rounded-full m-auto text-center" >
                      <svg width="59" height="30" viewBox="0 0 59 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_59_2249)">
                      <path d="M7.51629 15.1999C5.87603 15.1999 4.65279 14.7209 3.87745 13.772C2.91676 12.5993 2.69745 10.7514 3.22875 8.28761V8.27828L3.23184 8.26895C3.29053 7.89253 3.70446 5.68694 3.96394 4.48926H6.66373C6.52472 5.22964 6.28069 6.48643 5.92237 8.06985C5.83588 8.45249 5.77718 8.71691 5.76792 8.76046C5.34781 10.7047 5.70305 11.4669 6.10462 11.9584C6.43823 12.3659 7.0097 12.5744 7.80048 12.5744H15.455L15.3191 12.1295C15.2048 11.75 15.1307 11.3487 15.0998 10.9318C15.0689 10.5056 15.072 10.0639 15.1091 9.61595C15.1369 9.27997 15.1956 8.94711 15.2604 8.6298H15.2728L15.35 8.27828C15.523 7.47257 16.045 5.01499 16.113 4.75057L16.1315 4.67902C16.1593 4.57014 16.2551 4.49859 16.3725 4.49859H23.1806C23.9714 4.49859 24.5583 4.72568 24.9259 5.17364C25.0927 5.37896 25.3429 5.86114 25.1453 6.78818L25.034 7.30458C24.8116 8.32494 24.6603 9.13687 24.5398 9.78704C24.4533 10.2537 24.3792 10.655 24.305 10.9909C24.2031 11.4545 24.1197 11.8215 24.0487 12.1544L23.956 12.5744H28.9293C29.3031 12.5744 29.6305 12.3473 29.6984 12.0424L31.2244 4.49859H33.884L32.2623 12.5277C32.0183 13.6601 31.0761 14.9542 29.1702 15.175L28.9756 15.1968L28.781 15.2061H7.51629V15.1999ZM18.1919 7.43524C18.1054 7.83343 17.988 8.3716 17.8923 8.80712L17.8799 8.86623C17.8737 8.89423 17.8676 8.916 17.8583 8.93467L17.8428 8.96889L17.8367 9.00622C17.7965 9.21775 17.7749 9.39196 17.7625 9.55995C17.7378 9.90214 17.7347 10.2288 17.7563 10.5336C17.7996 11.134 18.0035 11.6162 18.3772 12.0082C18.819 12.4717 19.7488 12.5713 20.45 12.5713H21.2593L21.318 12.3006C21.6609 10.7234 21.9574 9.37641 22.1551 8.4836C22.1551 8.4836 22.3034 7.81476 22.3528 7.58145L22.4455 7.16148H18.2506L18.1919 7.43524Z" fill="#2F3843"/>
                      <path d="M31.4795 3.00872L32.0571 0.15918H34.7137L34.1391 3.00872H31.4795Z" fill="#AA1F23"/>
                      <path d="M19.8525 3.00756C20.0132 2.14586 20.2448 0.948179 20.4147 0.161133H23.1145C22.9971 0.773971 22.8056 1.76322 22.5338 3.00756H19.8525Z" fill="#AA1F23"/>
                      <path d="M36.605 15.2003C35.8204 15.2003 35.1346 14.8893 34.6713 14.3262C34.2419 13.8036 34.1276 13.0632 34.3315 12.1237L36.7687 0.15625H39.3264L36.815 12.5748H55.4201L55.5066 12.1766C55.5344 12.0459 55.5684 11.8997 55.6085 11.6975C55.6487 11.4922 55.797 10.8203 55.9483 10.1203C55.9483 10.1203 56.146 9.20883 56.1677 9.11862L56.2603 8.69865H48.164V8.69243H44.2132C43.4348 8.69243 42.8818 8.50267 42.5235 8.11693L42.4741 8.06404L42.4185 7.9956C42.1467 7.65652 41.9953 7.25833 41.9613 6.80725C41.9459 6.58949 41.9366 6.33129 41.9829 6.06376C42.0107 5.89889 42.1127 5.45092 42.1837 5.12117V5.10251C42.2146 4.97496 42.2393 4.8723 42.2517 4.8132L42.3969 4.13503L42.4617 3.82706L42.4957 3.67774C42.5853 3.26088 42.6162 3.13956 42.6224 3.11156V3.10223C42.6749 2.90624 42.7305 2.6916 42.7954 2.48317C42.8633 2.2623 42.9498 2.04765 43.0517 1.84544C43.2927 1.37259 43.6294 0.974404 44.0526 0.66643C44.4943 0.342901 45.0998 0.178026 45.8442 0.178026H57.1994L56.6588 2.78803H45.2944L45.2079 3.18C45.1862 3.27955 45.1615 3.39154 45.1306 3.53153L45.0534 3.8955C45.0534 3.8955 45.0472 3.9235 45.0442 3.93905L44.9947 4.16303L44.7476 5.29538C44.7229 5.40737 44.7013 5.51003 44.6796 5.60024L44.587 6.02021H55.068V6.02643H56.631C57.4094 6.02643 57.9624 6.21619 58.3207 6.60194L58.3701 6.65482L58.4257 6.72326C58.6975 7.06235 58.8489 7.46053 58.8829 7.91161C58.8983 8.12937 58.9076 8.38757 58.8613 8.6551C58.8335 8.81687 58.7315 9.27105 58.6605 9.6008V9.61325C58.6296 9.74079 58.608 9.84345 58.5925 9.90256L58.5771 9.96788C58.2744 11.3927 58.1075 12.1579 58.0828 12.2481V12.2575C58.0303 12.4535 57.9747 12.665 57.9099 12.8796C57.8419 13.1005 57.7554 13.3183 57.6535 13.5205C57.4125 13.9964 57.0758 14.3946 56.6526 14.7088C56.2109 15.0355 55.6085 15.2003 54.861 15.2003H36.5926H36.605Z" fill="#2F3843"/>
                      <path d="M5.13727 29.8871C3.60821 29.8871 2.38806 29.5076 1.50769 28.7641C0.63659 28.0268 0.145438 26.9629 0.0465903 25.6035C-0.0738809 23.9672 0.238109 22.6357 0.38947 21.998V21.9887C0.408004 21.9265 0.42036 21.8705 0.429627 21.8207C0.497585 21.5127 1.0845 19.1236 1.28528 18.3085C1.31308 18.1965 1.40884 18.125 1.52931 18.125H8.25099C8.95528 18.125 9.73062 18.1903 10.1384 18.6632C10.5245 19.1111 10.4782 19.8049 10.3731 20.4861C10.3577 20.5764 10.1445 21.6154 9.82947 23.1335V23.149C9.80785 23.2735 9.70591 23.3575 9.57617 23.3575H7.51272C7.40151 23.3575 7.29957 23.3108 7.2347 23.233C7.18837 23.1739 7.14203 23.0713 7.1791 22.9157C7.26868 22.5517 7.46329 21.6807 7.56523 21.2234L7.6579 20.8034H3.43832L3.36727 21.0554C2.73711 23.3108 2.66298 24.5582 2.70931 25.2084C2.75256 25.8088 2.95643 26.2941 3.33329 26.6892C3.77502 27.1558 4.7079 27.2522 5.41219 27.2522H9.78004L9.16224 29.8903H5.13418L5.13727 29.8871Z" fill="#2F3843"/>
                      <path d="M22.6177 29.8856C21.7991 29.8856 21.2369 29.6896 20.9033 29.2852C20.5573 28.8652 20.4739 28.2368 20.6531 27.3564C20.7087 27.0796 20.7674 26.7996 20.8292 26.5227L21.0825 25.3686L20.2546 26.2023C19.6275 26.8307 18.7441 27.7328 18.3487 28.1528C17.2645 29.3007 16.0072 29.8856 14.6048 29.8856C13.7152 29.8856 13.0572 29.6553 12.6495 29.2012C12.2232 28.7252 12.0687 28.0253 12.1769 27.0609C12.217 26.7094 12.322 26.0685 12.4178 25.5024C12.4889 25.0793 12.5537 24.6842 12.5784 24.4851C12.6279 24.1025 13.0078 22.4226 13.2148 21.5174C13.2735 21.2654 13.3167 21.0694 13.3383 20.9667C13.7677 18.8607 14.7376 18.1172 17.0513 18.1172H24.9653C25.0673 18.1172 25.163 18.1639 25.231 18.2478C25.299 18.3287 25.3268 18.4314 25.3051 18.5216C25.1661 19.1469 23.9583 24.622 23.5876 26.6067L23.5784 26.6565C23.5537 26.784 23.5598 26.8836 23.5691 26.9427L23.6062 27.1978L23.8595 27.2351C23.8935 27.2413 23.9274 27.2413 23.9645 27.2413H25.9538L25.3762 29.8793H22.6177V29.8856ZM16.7702 20.7676C16.3686 20.7676 16.0659 20.9761 16.0041 21.2934V21.3027C15.9115 21.7227 15.0991 25.4339 14.8519 26.7249C14.8396 26.7871 14.8334 26.8431 14.8334 26.8991V27.2475H15.1763C15.3647 27.2475 15.7601 27.1604 16.313 26.5694C16.7331 26.1183 20.7118 21.8347 21.1628 21.3463L21.7034 20.7645H16.7733L16.7702 20.7676Z" fill="#2F3843"/>
                      <path d="M43.8424 29.8871C43.7405 29.8871 43.6447 29.8405 43.5768 29.7565C43.5088 29.6756 43.481 29.5761 43.5026 29.4827L45.3406 20.763H42.3721L42.9312 18.125H46.7677C47.3886 18.125 47.7191 18.3739 47.889 18.5823C48.2072 18.9743 48.2721 19.5778 48.0898 20.3773C47.7902 21.6714 47.0272 25.4479 46.7986 26.5741L46.6905 27.1029L47.2125 26.9785C48.93 26.5679 50.3633 25.647 51.4692 24.2347C52.8284 22.502 53.7489 20.5826 54.1999 18.5294L54.2277 18.3988C54.2524 18.2837 54.3512 18.2059 54.4748 18.2059H56.5043C56.6062 18.2059 56.702 18.2525 56.7699 18.3365C56.8379 18.4174 56.8657 18.517 56.8441 18.6103L56.8163 18.7441C56.4332 20.5857 55.7506 22.334 54.793 23.9423C52.538 27.7189 48.9146 29.8871 44.8525 29.8871H43.8424Z" fill="#2F3843"/>
                      <path d="M38.81 29.8871C38.4023 29.8871 38.0532 29.8374 37.769 29.7378C37.4848 29.6383 37.2624 29.4921 37.0956 29.2867C37.0153 29.1903 36.9504 29.0814 36.8979 28.9663C36.7466 28.621 36.7157 28.1824 36.796 27.6287L36.9597 26.8976L38.3343 20.7412L37.8833 20.763C37.6578 20.7754 37.284 20.8999 36.7805 21.4412C36.5396 21.6994 35.1032 23.2455 33.7193 24.7356L31.174 27.1091L30.6303 29.8903H28.1282C28.0263 29.8903 27.9305 29.8436 27.8626 29.7596C27.7946 29.6787 27.7668 29.5761 27.7884 29.4827V29.4765C27.8502 29.2059 28.1653 27.778 28.5175 26.1541C28.8665 24.5427 29.3237 22.3993 29.5183 21.3478C29.5368 21.2421 29.5399 21.1425 29.5276 21.0585L29.4874 20.8034L29.2341 20.7692C29.2001 20.7661 29.1661 20.763 29.1291 20.763H27.9027L28.4804 18.125H30.4759C31.2945 18.125 31.8567 18.321 32.1903 18.7254C32.5362 19.1422 32.6196 19.7738 32.4405 20.6541L32.2799 21.4816L32.0235 22.6886L32.8451 21.8082L32.8606 21.7927C33.2158 21.4349 33.5803 21.0648 33.8213 20.8159C34.2321 20.3959 34.5626 20.0568 34.748 19.8577C35.8322 18.7098 37.0894 18.1281 38.4918 18.1281C38.5382 18.1281 38.5845 18.1281 38.6309 18.1281C39.4494 18.153 40.0611 18.3801 40.4441 18.8094C40.8704 19.2822 41.0248 19.9853 40.9167 20.9497C40.9013 21.0928 40.8735 21.2981 40.8271 21.5749C40.7839 21.858 40.7314 22.166 40.6758 22.5082C40.5955 22.9842 40.5399 23.3326 40.5151 23.5223C40.4688 23.905 40.0858 25.5848 39.8788 26.4901C39.851 26.6207 39.8232 26.7327 39.8016 26.8261L39.7027 27.2491H41.9021L41.3245 29.8871H38.8069H38.81Z" fill="#2F3843"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_59_2249">
                      <rect width="59" height="29.8642" fill="white" transform="translate(0 0.111328)"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>


                </div>
              </div>
             <div>

             </div>
          </div>

          <div class="grid grid-cols-5 p-[1%] gap-1">
            <div class=" p-1 flex items-center  rounded-sm">

              <p class="text-sm font-bold text-center ">ينتهي بعد :</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status != 'finished'">{{ auction.day }}</h4>
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <p class="text-xl font-medium text-[#AA1E22] ">يوم</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.start_time < currentHour && auction.status != 'finished'">{{   currentHour  - auction.start_time}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.start_time > currentHour && auction.status != 'finished'">{{   auction.start_time - currentHour}}</h4>
              <p class="text-xl font-medium text-[#AA1E22] ">ساعة</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.second > currentMinutes && auction.status != 'finished'">{{    59-(auction.second - currentMinutes)}}</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.second < currentMinutes && auction.status != 'finished'">{{   59-( currentMinutes- auction.second)}}</h4>

              <p class="text-xl font-medium text-[#AA1E22] ">دقيقة</p>
            </div>
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="text-xl font-medium text-[#46494A] " v-if="auction.status == 'finished'">0</h4>
              <h4 class="text-xl font-medium text-[#46494A]  " v-if="auction.status != 'finished'">{{  59-currentSeconds}}</h4>
              <p class="text-xl font-medium text-[#AA1E22] ">ثانية</p>
            </div>
          </div>
          <div class="p-[2%] grid grid-cols-3 gap-1">
           <div class="flex border-l-2">
            <p class="text-xs font-bold ">مدة المزاد :</p>
            <p class="text-xs px-1" >{{ auction.duration }} يوم</p>

           </div>
           <div class="flex border-l-2">
            <p class="text-xs font-bold"> وقت المزاد :</p>

            <p class="text-xs px-1" v-if=" auction.start_time > auction.end_time"> {{ auction.start_time - auction.end_time  }} ساعة</p>
            <p class="text-xs px-1" v-if=" auction.start_time < auction.end_time"> {{ auction.end_time - auction.start_time   }} ساعة</p>
           </div>
           <div class="flex">
            <p class="text-xs font-bold">عدد المنتجات :</p>
            <p class="text-xs px-1"> {{ auction.assets_number }}</p>
           </div>
          </div>
          <div>
            <!-- @click="details(auction.auction_id)" -->
             <Button  style=" background-color: #AA1E22 !important;padding: 0px !important;margin-bottom: 2% !important;"  label="إقرأ المزيد" class="mt-3 w-[90%]  focus:ring-0 text-[#AA1E22]"/>
          </div>
        </div>
        <!-- Doctor -->
      </swiper-slide>




          </swiper>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
    </div>
  </div>
</template>
<script setup>
import Nave from '../components/Nave.vue';
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
const allauctions=ref({})
const active=ref('comming')
const swiperRef = ref(null);
const currentDate = ref(new Date());
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
const currentMinutes = computed(() => {
  return currentDate.value.toLocaleTimeString([], { minute: '2-digit', hour12: false }).split(':')[0];
});
const currentHour = computed(() => {
  // Create a new Date object based on currentDate
  const date = new Date(currentDate.value);

  // Add one hour to the current hour
  date.setHours(date.getHours() + 1);

  // Return the updated hour
  return date.toLocaleTimeString([], { hour: '2-digit', hour12: false });
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
const details=(id)=>{
  router.push({name:'auction-details',params:{'id':id} })
}
const getauction=(e)=>{

  active.value=String(e)
  allauctions.value={}

axios
  .post('api/get_auctions',{
    auctions_filter:e,
    page_number:"1",
    page_scope:"7",
  })
  .then((res) => {
    console.log(res.data.result.data)

    allauctions.value = res.data.result.data.map(event => ({
                "name": event.name,
                "auction_id": event.auction_id,
                "status": event.status,
                "duration_by_hours": event.duration_by_hours,
                "assets_number": event.assets_number,
                "profile_img_link": event.profile_img_link,
                "auction_type": event.auction_type,
                "city": event.city,
                "start_date": event.start_date,

                "start_time": (event.start_time).split(":")[0],
                "end_time": event.end_time ? event.end_time.split(":")[0] : null,
                "second":(event.start_time).split(":")[1],
                "day":Math.ceil((( new Date(event.start_date)) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),
                "duration": event.end_date && event.start_date ? Math.ceil((new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24)): null
          }));
          console.log( allauctions.value)



  })

}

const fetchdata=()=>{
axios
  .post('api/get_auctions',{
    auctions_filter:"comming",
    page_number:"1",
    page_scope:"7",
  })
  .then((res) => {
    console.log(res.data.result.data)

    allauctions.value = res.data.result.data.map(event => ({
                "name": event.name,
                "auction_id": event.auction_id,
                "status": event.status,
                "duration_by_hours": event.duration_by_hours,
                "assets_number": event.assets_number,
                "profile_img_link": event.profile_img_link,
                "auction_type": event.auction_type,
                "city": event.city,
                "start_date": event.start_date,
                "start_date": event.start_date,

                "start_time": (event.start_time).split(":")[0],
                "end_time": event.end_time ? event.end_time.split(":")[0] : null,
                "second":(event.start_time).split(":")[1],
                "day":Math.ceil((( new Date(event.start_date)) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24)),
                "duration": event.end_date && event.start_date ? Math.ceil((new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24)): null
          }));
          console.log( allauctions.value)



  })
}


onMounted(() => {
  updateTime();
  fetchdata()

  setInterval(() => {
      currentDate.value = new Date();
    }, 100);

});

</script>
<style>
.auctions .swiper-pagination-bullet {
  background-color: rgb(170, 0, 0) !important;
  z-index: 60;
}


.swiper-button-next,
.swiper-button-prev {
  color: #007bff;
}
.swiper-button-prev{
  background-color: red !important;
  border-radius: 9% !important ;
  transform: scale(.7) !important;
  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
}
.swiper-button-next{
  background-color: red !important;
  border-radius: 50% !important ;
  transform: scale(.7) !important;
  color:  white !important;
 width: 50px !important ;
 height: 50px !important ;
}


</style>

