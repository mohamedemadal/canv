<template>
  <Nave></Nave>
  <!-- banner -->
  <div class="banner flex items-center h-[35vh] lg:h-[55vh] relative">
    <Toast />
    <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
    <img class="w-full absolute h-full" src="../images/breadcrumb.png" />

    <div class="z-50 text-white w-full m-auto w-[80%]">
      <H1 class="font-bold text-5xl text-white z-50">{{ $t('auctions') }} </H1>
      <div class="flex py-8">
        <p class="text-2xl font-semibold">{{ $t('home') }}</p>
        <svg
          class="my-auto mx-[1%] ltr:rotate-180"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999878 6.49976L16.9999 6.49976"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="text-2xl font-semibold">{{ $t('auctions') }}</p>
        <svg
          class="my-auto mx-[1%] ltr:rotate-180"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999878 6.49976L16.9999 6.49976"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99972 11.5C5.99972 11.5 0.999767 7.81756 0.999756 6.49996C0.999744 5.18237 5.99976 1.5 5.99976 1.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="text-2xl font-semibold">{{ auction_details.name }}</p>
      </div>
    </div>
  </div>

  <div class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px] py-4">
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div>
        <p class="text-xl font-bold text-right">{{ auction_details.name }}</p>
        <div class="flex py-2">
          <a class="flex bg-[#AA1E22BF] py-1 px-1 mx-1 rounded-md">
            <div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="8.25" r="2.25" stroke="white" stroke-width="1.5" />
                <path
                  d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <p class="text-[white] text-sm px-1">{{ auction_details.city }}</p>
          </a>
          <a class="flex bg-[#AA1E22BF] py-1 px-2 rounded-md">
            <div class="m-auto">
              <svg
                class="my-auto"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.837158 4.96249C0.837158 3.19169 2.27268 1.75617 4.04348 1.75617H10.7936C12.5644 1.75617 13.9999 3.19169 13.9999 4.96249V12.0501C13.9999 13.821 12.5644 15.2565 10.7936 15.2565H4.04348C2.27268 15.2565 0.837158 13.821 0.837158 12.0501V4.96249ZM4.04348 2.7687C2.83188 2.7687 1.84968 3.75089 1.84968 4.96249V12.0501C1.84968 13.2618 2.83188 14.2439 4.04348 14.2439H10.7936C12.0052 14.2439 12.9874 13.2618 12.9874 12.0501V4.96249C12.9874 3.75089 12.0052 2.7687 10.7936 2.7687H4.04348Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.837158 5.97502C0.837158 5.69542 1.06382 5.46876 1.34342 5.46876H13.4937C13.7733 5.46876 13.9999 5.69542 13.9999 5.97502C13.9999 6.25462 13.7733 6.48128 13.4937 6.48128H1.34342C1.06382 6.48128 0.837158 6.25462 0.837158 5.97502Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.71849 0.743652C4.99809 0.743652 5.22475 0.970313 5.22475 1.24991V3.27496C5.22475 3.55456 4.99809 3.78122 4.71849 3.78122C4.43889 3.78122 4.21223 3.55456 4.21223 3.27496V1.24991C4.21223 0.970313 4.43889 0.743652 4.71849 0.743652Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1186 0.743652C10.3982 0.743652 10.6249 0.970313 10.6249 1.24991V3.27496C10.6249 3.55456 10.3982 3.78122 10.1186 3.78122C9.83901 3.78122 9.61235 3.55456 9.61235 3.27496V1.24991C9.61235 0.970313 9.83901 0.743652 10.1186 0.743652Z"
                  fill="white"
                />
                <path
                  d="M8.09357 10.0251C8.09357 10.3979 7.79135 10.7001 7.41855 10.7001C7.04575 10.7001 6.74354 10.3979 6.74354 10.0251C6.74354 9.6523 7.04575 9.35009 7.41855 9.35009C7.79135 9.35009 8.09357 9.6523 8.09357 10.0251Z"
                  fill="white"
                />
                <path
                  d="M10.7936 10.0251C10.7936 10.3979 10.4914 10.7001 10.1186 10.7001C9.74581 10.7001 9.4436 10.3979 9.4436 10.0251C9.4436 9.6523 9.74581 9.35009 10.1186 9.35009C10.4914 9.35009 10.7936 9.6523 10.7936 10.0251Z"
                  fill="white"
                />
                <path
                  d="M5.39351 10.0251C5.39351 10.3979 5.09129 10.7001 4.71849 10.7001C4.34569 10.7001 4.04348 10.3979 4.04348 10.0251C4.04348 9.6523 4.34569 9.35009 4.71849 9.35009C5.09129 9.35009 5.39351 9.6523 5.39351 10.0251Z"
                  fill="white"
                />
              </svg>
            </div>
            <p class="text-[white] text-sm px-1">{{ auction_details.start_date }}</p>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-5 p-[1%] gap-1">
        <div class="p-1 flex items-center rounded-sm">
          <p class="text-sm font-bold text-center text-center" v-if="auction_details?.status == 'running'">
            ينتهي بعد :
          </p>
          <p class="text-sm font-bold text-center text-center" v-if="auction_details?.status == 'comming'">
            قادم بعد :
          </p>
          <p class="text-sm font-bold text-center text-center" v-if="auction_details?.status == 'finished'">منتهي :</p>
        </div>
        <div class="border-2 p-[2%] rounded-sm">
          <h4 class="text-xl font-medium text-[#46494A] text-center" v-if="auction_details?.status != 'finished'">
            {{ auction_details?.day }}
          </h4>
          <h4 class="text-xl font-medium text-[#46494A] text-center" v-if="auction_details?.status == 'finished'">0</h4>
          <p class="text-xl font-medium text-[#AA1E22] text-center">يوم</p>
        </div>
        <div class="border-2 p-[2%] rounded-sm">
          <h4 class="text-xl font-medium text-[#46494A] text-center" v-if="auction_details?.status == 'finished'">0</h4>
          <h4
            class="text-xl font-medium text-[#46494A] text-center"
            v-if="auction_details?.status == 'comming' && auction_details?.start_time < currentHour"
          >
            {{ currentHour - auction_details?.start_time }}
          </h4>
          <h4
            class="text-xl font-medium text-[#46494A] text-center"
            v-if="auction_details?.status == 'comming' && auction_details?.start_time > currentHour"
          >
            {{ auction_details.start_time - currentHour }}
          </h4>
          <h4
            class="text-xl font-medium text-[#46494A] text-center"
            v-if="auction_details?.status == 'running' && auction_details?.end_time < currentHour"
          >
            {{ currentHour - auction_details?.end_time }}
          </h4>
          <h4
            class="text-xl font-medium text-[#46494A] text-center"
            v-if="auction_details?.status == 'running' && auction_details?.end_time > currentHour"
          >
            {{ auction_details?.end_time - currentHour }}
          </h4>
          <p class="text-xl font-medium text-[#AA1E22] text-center">{{ $t('hour') }}</p>
        </div>
        <div class="border-2 p-[2%] rounded-sm">
          <h4 class="text-xl text-center font-medium text-[#46494A]" v-if="auction_details?.status == 'finished'">0</h4>
          <h4
            class="text-xl font-medium text-[#46494A] text-center"
            v-if="auction_details?.second > currentMinutes && auction_details?.status != 'finished'"
          >
            {{ 59 - (auction_details?.second - currentMinutes) }}
          </h4>
          <h4
            class="text-xl font-medium text-[#46494A] text-center"
            v-if="auction_details?.second < currentMinutes && auction_details?.status != 'finished'"
          >
            {{ 59 - (currentMinutes - auction_details?.second) }}
          </h4>

          <p class="text-xl font-medium text-[#AA1E22] text-center">{{ $t('minute') }}</p>
        </div>
        <div class="border-2 p-[2%] rounded-sm">
          <h4 class="text-xl font-medium text-[#46494A] text-center" v-if="auction_details?.status == 'finished'">0</h4>
          <h4 class="text-xl font-medium text-[#46494A] text-center" v-if="auction_details?.status != 'finished'">
            {{ 59 - currentSeconds }}
          </h4>
          <p class="text-xl font-medium text-[#AA1E22] text-center">{{ $t('second') }}</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-2">
      <div class="">
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
          <swiper-slide v-for="(auction, index) in 3" :key="index">
            <div class="relative">
              <div class="absolute w-full h-full bg-black opacity-20"></div>
              <div class="flex absolute top-[5%] right-[2%]">
                {{}}
                <a
                  :href="auction_details?.auction_video_url"
                  target="_blank"
                  class="flex items-center w-14 h-10 rounded-lg text-center bg-[#D479FF]"
                >
                  <svg
                    class="m-auto"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 15.75C20.09 15.75 19.75 15.41 19.75 15C19.75 14.59 20.09 14.25 20.5 14.25C21.09 14.25 21.22 14.16 21.23 14.16C21.25 14.1 21.25 13.75 21.25 13.5V11.5C21.25 11.25 21.25 10.91 21.21 10.82C21.2 10.83 21.05 10.75 20.5 10.75C20.09 10.75 19.75 10.41 19.75 10C19.75 9.59 20.09 9.25 20.5 9.25C22.58 9.25 22.75 10.27 22.75 11.5V13.5C22.75 14.73 22.58 15.75 20.5 15.75Z"
                      fill="white"
                    />
                    <path
                      d="M6.38007 15.2501C6.32007 15.2501 6.26007 15.2401 6.20007 15.2301C5.80007 15.1301 5.55007 14.7201 5.65007 14.3201C5.95007 13.1301 5.95007 11.8701 5.65007 10.6801C5.55007 10.2801 5.79007 9.8701 6.20007 9.7701C6.60007 9.6701 7.00007 9.9201 7.10007 10.3201C7.46007 11.7501 7.46007 13.2601 7.10007 14.6801C7.02007 15.0201 6.71007 15.2501 6.38007 15.2501Z"
                      fill="white"
                    />
                    <path
                      d="M9.88007 15.2499C9.82007 15.2499 9.76007 15.2399 9.70007 15.2299C9.30007 15.1299 9.05007 14.7199 9.15007 14.3199C9.45007 13.1299 9.45007 11.8699 9.15007 10.6799C9.05007 10.2799 9.29007 9.86995 9.70007 9.76995C10.1001 9.66995 10.5101 9.90995 10.6101 10.3199C10.9701 11.7499 10.9701 13.2599 10.6101 14.6799C10.5201 15.0199 10.2101 15.2499 9.88007 15.2499Z"
                      fill="white"
                    />
                    <path
                      d="M13 20.25H7C2.59 20.25 1.25 18.91 1.25 14.5V10.5C1.25 6.09 2.59 4.75 7 4.75H13C17.41 4.75 18.75 6.09 18.75 10.5V14.5C18.75 18.91 17.41 20.25 13 20.25ZM7 6.25C3.43 6.25 2.75 6.93 2.75 10.5V14.5C2.75 18.07 3.43 18.75 7 18.75H13C16.57 18.75 17.25 18.07 17.25 14.5V10.5C17.25 6.93 16.57 6.25 13 6.25H7Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  :href="auction_details?.live_video_url"
                  target="_blank"
                  class="flex mx-3 items-center w-14 h-10 rounded-lg text-center bg-[#CA0505]"
                >
                  <svg
                    class="m-auto"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 17C2.59 17 2.25 16.66 2.25 16.25V8.75C2.25 8.34 2.59 8 3 8C3.41 8 3.75 8.34 3.75 8.75V16.25C3.75 16.66 3.41 17 3 17Z"
                      fill="white"
                    />
                    <path
                      d="M7.5 19.5C7.09 19.5 6.75 19.16 6.75 18.75V6.25C6.75 5.84 7.09 5.5 7.5 5.5C7.91 5.5 8.25 5.84 8.25 6.25V18.75C8.25 19.16 7.91 19.5 7.5 19.5Z"
                      fill="white"
                    />
                    <path
                      d="M12 22C11.59 22 11.25 21.66 11.25 21.25V3.75C11.25 3.34 11.59 3 12 3C12.41 3 12.75 3.34 12.75 3.75V21.25C12.75 21.66 12.41 22 12 22Z"
                      fill="white"
                    />
                    <path
                      d="M16.5 19.5C16.09 19.5 15.75 19.16 15.75 18.75V6.25C15.75 5.84 16.09 5.5 16.5 5.5C16.91 5.5 17.25 5.84 17.25 6.25V18.75C17.25 19.16 16.91 19.5 16.5 19.5Z"
                      fill="white"
                    />
                    <path
                      d="M21 17C20.59 17 20.25 16.66 20.25 16.25V8.75C20.25 8.34 20.59 8 21 8C21.41 8 21.75 8.34 21.75 8.75V16.25C21.75 16.66 21.41 17 21 17Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div
                class="w-full lg:h-[75vh] h-[70vh]"
                :style="{ backgroundImage: `url(${auction_details?.profile_img_link})` }"
                style="background-position: center; background-repeat: no-repeat; background-size: cover"
              ></div>
            </div>

            <!-- Doctor -->
          </swiper-slide>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </swiper>
      </div>
    </div>
  </div>

  <!-- عملية الفلتر -->

  <div class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px] py-4">
    <div class="bg-white grid grid-cols-1 lg:grid-cols-5 gap-2 p-[2%] max-w-[1390px] m-auto">
      <div class="lg:col-span-3 shadow-lg px-[1%]">
        <h2 class="text-2xl">تفاصيل المزاد</h2>
        <p style="line-height: 34px" class="text-lg text-[#7C7B7B]">{{ auction_details.description }}</p>
      </div>
      <div class="lg:col-span-2 shadow-md p-4">
        <div class="flex justify-between">
          <div>
            <p class="text-[#303843] text-2xl font-bold">{{ $t('Details') }}</p>
          </div>
          <div class="flex">
            <img :src="auction_details.auction_logo" class="w-14" />
            <svg
              class="mx-4 hidden"
              width="57"
              height="43"
              viewBox="0 0 57 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.59632 7.08472H3.01414V9.95571H6.87382C9.40258 9.95571 10.4673 11.1155 10.4673 13.4161V18.1884H0.504395V21.0784H13.5475V13.245C13.5665 9.29025 11.7412 7.08472 7.59632 7.08472Z"
                fill="#01355A"
              />
              <path
                d="M6.3411 3.58647C7.27275 3.58647 8.03328 2.80693 8.03328 1.89429C8.03328 0.962647 7.29176 0.183105 6.3411 0.183105C5.42847 0.183105 4.64893 0.962647 4.64893 1.89429C4.64893 2.80693 5.42847 3.58647 6.3411 3.58647Z"
                fill="#01355A"
              />
              <path
                d="M33.4925 3.58647C34.4241 3.58647 35.1846 2.80693 35.1846 1.89429C35.1846 0.962647 34.4431 0.183105 33.4925 0.183105C32.5798 0.183105 31.8003 0.962647 31.8003 1.89429C31.8003 2.80693 32.5798 3.58647 33.4925 3.58647Z"
                fill="#01355A"
              />
              <path
                d="M48.6267 0.183105C47.7141 0.183105 46.9346 0.962647 46.9346 1.89429C46.9346 2.80693 47.7141 3.58647 48.6267 3.58647C49.5584 3.58647 50.3189 2.80693 50.3189 1.89429C50.2999 0.962647 49.5584 0.183105 48.6267 0.183105Z"
                fill="#01355A"
              />
              <path
                d="M36.4014 18.2077H29.8418V13.7016C29.8418 11.2109 30.9065 9.95599 33.4733 9.95599H36.4014V18.2077ZM47.0868 18.2077H39.5195V7.08499H32.8079C28.5869 7.08499 26.7427 9.42362 26.7427 13.4354V18.2077H22.0274C20.5253 18.2077 19.8409 17.5803 19.8409 15.9642V0.240234H16.7417V15.6029C16.7417 19.4246 18.0156 21.0787 22.1795 21.0787H50.1479V7.08499H47.0868V18.2077Z"
                fill="#01355A"
              />
              <path d="M56.4034 0.240234H53.3042V21.0787H56.4034V0.240234Z" fill="#01355A" />
              <path
                d="M11.3227 31.9163H5.99902V42.3545H8.39469V33.8746H10.9425C12.5776 33.8746 13.224 34.5401 13.224 36.1562V42.3355H15.6197V36.2132C15.6387 33.2472 14.3078 31.9163 11.3227 31.9163Z"
                fill="#01355A"
              />
              <path
                d="M18.6805 31.2125V31.916H17.0454V33.8363H18.6805V42.3542H21.0762V33.8363H24.3275V31.916H21.0762V31.2695C21.0762 30.3569 21.3994 30.0336 22.3121 30.0336H24.3275V28.1323H21.7417C19.5742 28.1323 18.6805 29.0259 18.6805 31.2125Z"
                fill="#01355A"
              />
              <path
                d="M32.4463 37.6773V40.4532H29.0999C28.1873 40.4532 27.712 39.9779 27.712 39.0652C27.712 38.1526 28.1873 37.6773 29.0999 37.6773H32.4463ZM30.7731 31.9163H25.8867V33.8366H30.7351C31.99 33.8366 32.4082 34.2739 32.4082 35.5288V35.7759H28.5486C26.4951 35.7759 25.2593 37.0118 25.2593 39.0652C25.2593 41.1187 26.4951 42.3545 28.5486 42.3545H34.8229V35.9661C34.8229 33.0951 33.6441 31.9163 30.7731 31.9163Z"
                fill="#01355A"
              />
              <path
                d="M40.2798 29.2163H37.8842V31.9162H36.249V33.8365H37.8842V39.2743C37.8842 41.4608 38.7778 42.3544 40.9643 42.3544H43.8353V40.4341H41.5347C40.6221 40.4341 40.2988 40.1109 40.2988 39.1982V33.8365H43.8353V31.9162H40.2988V29.2163H40.2798Z"
                fill="#01355A"
              />
              <path
                d="M52.0871 31.916H49.2731V28.1323H46.8774V42.3542H49.2731V33.8743H51.7068C53.3229 33.8743 53.9884 34.5398 53.9884 36.1559V42.3352H56.4031V36.2129C56.4031 33.2469 55.0721 31.916 52.0871 31.916Z"
                fill="#01355A"
              />
              <path d="M2.91907 28.1323H0.504395V42.2782H2.91907V28.1323Z" fill="#01355A" />
              <path
                d="M54.8823 24.5582V23.9117C54.8823 23.6075 54.9964 23.4934 55.3196 23.4934H55.9851V22.5618H55.1865C54.3499 22.5618 53.9126 23.0181 53.9126 23.8737V24.5582H53.3042V25.4898H56.4034V24.5582H54.8823Z"
                fill="#01355A"
              />
            </svg>
          </div>
        </div>
        <div class="p-[2%] grid grid-cols-3 my-2 md:gap-2 gap-4">
          <div class="border-2 py-3">
            <p class="text-base font-bold text-center">{{ $t('auction_duration') }}</p>
            <p class="text-base px-1 text-center text-[#AA1E22]">{{ auction_details?.duration + 1 }} يوم</p>
          </div>
          <div class="border-2 py-3">
            <p class="text-base font-bold text-center">{{ $t('auction_time') }}</p>

            <!-- <p class="text-basepx-1 text-center text-[#AA1E22] " v-if=" auction_details?.start_time > auction_details?.end_time"> {{ auction_details?.start_time - auction_details?.end_time  }} {{ $t('hour') }}</p>
            <p class="text-base px-1 text-center text-[#AA1E22] " v-if=" auction_details?.start_time < auction_details?.end_time"> {{ auction_details?.end_time - auction_details.start_time   }} {{ $t('hour') }}</p> -->
            <p class="text-base px-1 text-center text-[#AA1E22]">
              {{ auction_details?.start }} {{ auction_details?.start_time_period }}
            </p>
          </div>
          <div class="border-2 py-3">
            <p class="text-base font-bold text-center">{{ $t('product_count') }}</p>
            <p class="text-base px-1 text-center text-[#AA1E22]">{{ auction_details?.assets_number }}</p>
          </div>
        </div>
        <div>
          <Button
            v-if="!isRegistration"
            style="background-color: #aa1e22 !important"
            label=" سجل فى المزاد"
            class="mt-3 w-[90%] focus:ring-0 text-[#AA1E22]"
            @click="registration"
          />
          <Button
            v-if="isRegistration"
            style="background-color: #aa1e22 !important"
            label="مسجّل بالمزاد ✅"
            class="mt-3 w-[90%] focus:ring-0 text-[#AA1E22]"
            disabled
          />
        </div>
      </div>
    </div>
  </div>

  <!-- الصورة -->
  <div class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px] py-4">
    <div class="gap-2">
      <p for="username" class="text-2xl font-bold">منتجات المزاد</p>
      <Dropdown
        @update:model-value="change_asset"
        v-model="get_asset"
        option-value="asset_id"
        :options="auction_details.assets"
        optionLabel="name"
        placeholder="اختر نوع المنتج"
        class="w-fit bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]"
      />
    </div>
    <div class="max-w-[1390px] m-auto">
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
        <swiper-slide v-for="(img, index) in assets?.asset_imags" :key="index">
          <div class="relative">
            <div
              class="absolute w-full h-full opacity-50"
              style="background: linear-gradient(to right, #00000099, rgb(0, 0, 0))"
            ></div>
            <div
              class="w-full lg:h-[70vh] h-[60vh]"
              :style="{ backgroundImage: `url(${img?.image_link})` }"
              style="background-position: center; background-repeat: no-repeat; background-size: cover"
            ></div>

            <!-- <img class="w-full max-h-[80vh]" :src="img?.image_link"> -->
            <p class="absolute top-[10%] right-[5%] font-bold text-2xl text-white">{{ auction?.image_description }}</p>
          </div>
          <!-- <img class="w-full max-h-[80vh]" :src="auction?.image_link"> -->
          <!-- Doctor -->
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
    </div>
  </div>

  <!-- عملية الفلتر -->

  <div v-if="assets != ''" class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px] py-4">
    <div class="bg-white grid grid-cols-1 lg:grid-cols-4 gap-2 p-[2%] max-w-[1390px] m-auto">
      <div class="lg:col-span-3 shadow-lg px-[1%]">
        <h2 class="text-2xl">{{ $t('Details') }}</h2>
        <p style="line-height: 34px" class="text-lg text-[#7C7B7B]">{{ assets?.description }}</p>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <div class="shadow-lg">
          <h2 class="text-2xl py-2 bg-[#AA1E22] text-white text-center rounded-md">
            {{ $t('Opening_price_of_the_auction') }}
          </h2>
          <p class="text-2xl py-2 text-center text-[#AA1E22] font-bold">{{ assets?.opening_amount }} ر.س</p>
        </div>
        <div class="shadow-lg">
          <h2 class="text-2xl py-2 bg-[#168F13] text-white text-center rounded-md">{{ $t('The_amount_of_entry') }}</h2>
          <p class="text-2xl py-2 text-center text-[#168F13] font-bold">{{ assets?.entry_amount }} ر.س</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="assets != ''" class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px]">
    <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md max-w-[1390px] m-auto">
      <div @click="toggle(5)" class="flex justify-between py-2 w-full" style="border-bottom: 1px solid #e8e8e8">
        <h3 class="text-3xl font-bold">{{ $t('Location') }}</h3>
        <div class="my-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
              fill="#121212"
            />
          </svg>
        </div>
      </div>
      <div v-if="activeIndex === 5" class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3 py-4 duration-2000">
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('city') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.location.city }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('neighborhood') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.location.area }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('The_area') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.total_area }}</p>
        </div>
        <div class="md:col-span-2 lg:col-span-6">
          <iframe
            class="w-full h-[250px]"
            :src="mapLink"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
  <!--  معلومات إضافية -->

  <div v-if="assets != ''" class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px]">
    <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md max-w-[1390px] m-auto">
      <div @click="toggle(1)" class="flex justify-between py-2 w-full" style="border-bottom: 1px solid #e8e8e8">
        <h3 class="text-3xl font-bold">{{ $t('Additional_information') }}</h3>
        <div class="my-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
              fill="#121212"
            />
          </svg>
        </div>
      </div>
      <div v-if="activeIndex === 1" class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3 py-4 duration-2000">
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('city') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.location.city }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('neighborhood') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.location.area }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('Instrument_number') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.deed_number }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('History_of_the_instrument') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.deed_date }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('Product_type') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.asset_type }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('The_area') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.total_area }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('interface') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.asset_land_info.asset_facade }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('Type_of_ownership') }}</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.addional_info.ownership_type }}</p>
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-bold text-lg">{{ $t('General_Services') }}</h4>
          <span v-for="serv in assets?.addional_info.public_service" class="text-[#7C7B7B] font-medium py-2">
            {{ serv }} ,</span
          >
        </div>
        <div style="border-left: 1px solid #e8e8e8" class="px-2">
          <h4 class="font-extrabold text-xs py-1">الحقوق على الملكية</h4>
          <p class="text-[#7C7B7B] font-medium py-2">{{ assets?.addional_info.ownership_rights }}</p>
        </div>
      </div>
    </div>
  </div>

  <!--  معلومات إضافية -->
  <div v-if="assets != ''" class="detail lg:px-[5%] px-[2%] m-auto max-w-[1399px]">
    <div class="bg-white shadow-lg my-[2%] p-[1%] rounded-md">
      <div @click="toggle(3)" class="flex justify-between py-2 w-full" style="border-bottom: 1px solid #e8e8e8">
        <h3 class="text-3xl font-bold">{{ $t('Boundaries_and_lengths') }}</h3>
        <div class="my-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
              fill="#121212"
            />
          </svg>
        </div>
      </div>
      <div v-if="activeIndex === 3" class="gap-3 py-4 duration-2000">
        <div class="p-2 m-a flex">
          <h4 class="font-bold text-lg lg:text-xl">{{ $t('Northward') }} :</h4>
          <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto">
            {{ assets?.boundaries_and_dimensions.north_boundary }}
            <span class="text-lg font-bold text-black">{{ $t('Length') }} : </span>
            {{ assets?.boundaries_and_dimensions.north_boundary_length }}
          </p>
        </div>
        <div class="p-2 m-a flex">
          <h4 class="font-bold text-xl">{{ $t('Eastbound') }} :</h4>
          <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto">
            {{ assets?.boundaries_and_dimensions.south_boundary
            }}<span class="text-lg font-bold text-black"> {{ $t('Length') }} : </span>
            {{ assets?.boundaries_and_dimensions.east_boundary_length }}
          </p>
        </div>
        <div class="p-2 m-a flex">
          <h4 class="font-bold text-xl">{{ $t('Southbound') }} :</h4>
          <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto">
            {{ assets?.boundaries_and_dimensions.east_boundary }}
            <span class="text-lg font-bold text-black">{{ $t('Length') }} : </span>
            {{ assets?.boundaries_and_dimensions.south_boundary_length }}
          </p>
        </div>
        <div class="p-2 m-a flex">
          <h4 class="font-bold text-xl">{{ $t('West') }} :</h4>
          <p class="text-[#7C7B7B] font-medium text-lg px-2 my-auto">
            {{ assets?.boundaries_and_dimensions.west_boundary }}
            <span class="text-lg font-bold text-black">{{ $t('Length') }} : </span>
            {{ assets?.boundaries_and_dimensions.east_boundary_length }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>
<script setup>
  import Nave from '../components/Nave.vue'
  import Footer from '../components/Footer.vue'
  import { useRouter } from 'vue-router'
  import { useToast } from 'primevue/usetoast'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const toast = useToast()
  const router = useRouter()
  // import img1 from "../images/riyadh-saudi-arabia-gretopia_5 1.png";
  import { ref, reactive, onMounted, computed } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import { Pagination, Navigation, Autoplay } from 'swiper/modules'
  import axios from 'axios'

  const isRegistration = ref(false)
  const auction_details = ref({})
  const get_asset = ref('')
  const assets = ref('')
  const active = ref('all')
  const swiperRef = ref(null)
  const currentDate = ref(new Date())
  const mapLink = ref('')
  const state = reactive({
    currentSlide: 0,
    totalSlides: 0,
  })
  const items = ref([
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ])

  const activeIndex = ref(null)

  const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
  }
  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
  }

  const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  const currentMinutes = computed(() => {
    return currentDate.value.toLocaleTimeString([], { minute: '2-digit', hour12: false }).split(':')[0]
  })
  const currentHour = computed(() => {
    // Create a new Date object based on currentDate
    const date = new Date(currentDate.value)

    // Add one hour to the current hour
    date.setHours(date.getHours() + 1)

    // Return the updated hour
    return date.toLocaleTimeString([], { hour: '2-digit', hour12: false })
  })
  const currentSeconds = computed(() => {
    return currentDate.value.toLocaleTimeString([], { second: '2-digit', hour12: false }).split(':')[0]
  })
  const formattedDate = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = String(currentDate.value.getMonth() + 1).padStart(2, '0') // Months are 0-based
    const day = String(currentDate.value.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  })
  // Function to update the current date
  const updateTime = () => {
    currentDate.value = new Date()
  }
  // Function to update the current date

  const change_asset = (e) => {
    axios
      .post('api/get_asset_details', {
        asset_id: e,
        lang: localStorage.getItem('appLang'),
      })
      .then((res) => {
        assets.value = res.data.result.data
        mapLink.value = `https://www.google.com/maps?q=${res.data.result.data.location.latitude},${res.data.result.data.location.longitude}&hl=es;z=14&output=embed`
      })
  }
  const fetchdata = () => {
    axios
      .post('api/get_auction_details', {
        auction_id: router.currentRoute.value.params.id,
        lang: localStorage.getItem('appLang'),
      })
      .then((res) => {
        ;(auction_details.value.name = res.data.result.data.name),
          (auction_details.value.description = res.data.result.data.description),
          (auction_details.value.start = res.data.result.data.start_time),
          (auction_details.value.start_time_period = res.data.result.data.start_time_period),
          (auction_details.value.auction_logo = res.data.result.data.auction_logo),
          (auction_details.value.auction_video_url = res.data.result.data.auction_video_url),
          (auction_details.value.live_video_url = res.data.result.data.live_video_url),
          (auction_details.value.auction_id = res.data.result.data.auction_id), //
          (auction_details.value.status = res.data.result.data.status),
          (auction_details.value.duration_by_hours = res.data.result.data.duration_by_hours),
          (auction_details.value.assets_number = res.data.result.data.assets_number),
          (auction_details.value.profile_img_link = res.data.result.data.profile_img_link),
          (auction_details.value.auction_type = res.data.result.data.auction_type),
          (auction_details.value.city = res.data.result.data.city),
          (auction_details.value.start_date = res.data.result.data.start_date),
          (auction_details.value.start_time = res.data.result.data.start_time.split(':')[0]),
          (auction_details.value.end_time = res.data.result.data.end_time
            ? res.data.result.data.end_time.split(':')[0]
            : null),
          (auction_details.value.day =
            res.data.result.data.status == 'running'
              ? Math.ceil(
                  (new Date(res.data.result.data.end_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24),
                )
              : Math.ceil(
                  (new Date(res.data.result.data.start_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24),
                )),
          (auction_details.value.second = res.data.result.data.start_time.split(':')[1]),
          (auction_details.value.duration =
            res.data.result.data.status == 'running' && res.data.result.data.end_date && res.data.result.data.start_date
              ? Math.ceil(
                  (new Date(res.data.result.data.end_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24),
                )
              : Math.ceil(
                  (new Date(res.data.result.data.start_date) - new Date(formattedDate.value)) / (1000 * 60 * 60 * 24),
                )),
          (auction_details.value.duration =
            res.data.result.data.end_date && res.data.result.data.start_date
              ? Math.ceil(
                  (new Date(res.data.result.data.end_date) - new Date(res.data.result.data.start_date)) /
                    (1000 * 60 * 60 * 24),
                )
              : null)

        auction_details.value.assets = res.data.result.data.assets //
      })
  }

  // registration button action
  const userinfo = ref({
    name: '',
    phone: '',
    email: '',
  })
  const getuserInfo = async () => {
    // get user info
    await axios
      .post('api/get_user_profile', {
        lang: localStorage.getItem('language'),
        user_id: localStorage.getItem('user_id'),
      })
      .then((res) => {
        console.log(res)
        userinfo.value.name = res.data.result.data.name
        userinfo.value.phone = res.data.result.data.phone
        userinfo.value.email = res.data.result.data.email
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const registration = async () => {
    // check for login
    if (localStorage.getItem('authenticated') == 'true') {
      // login
      // send data to backend
      await axios
        .post('api/add_interested_in_auction', {
          lang: localStorage.getItem('language'),
          client_name: userinfo.value.name,
          client_phone: userinfo.value.phone,
          auction_id: auction_details.value.auction_id,
          asset_id: null,
        })
        .then((data) => {
          // Hide the button
          toast.add({ severity: 'success', summary: 'Success', detail: t('done_add') })
          isRegistration.value = true
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      // not login
      router.push('/login')
    }
  }

  // check for registration
  const checkRegistration = async () => {
    await axios
      .post('api/get_user_auctions', {
        lang: localStorage.getItem('language'),
        search_with: "phone_number",
        phone_number: userinfo.value.phone,
      })
      .then((res) => {
        for(let item of res.data.result.data.auctions) {
          if(item.id == auction_details.value.auction_id) isRegistration.value = true
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onMounted(async () => {
    updateTime()
    fetchdata()
    await getuserInfo()
    await checkRegistration()

    setInterval(() => {
      currentDate.value = new Date()
    }, 100)
  })
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

  .swiper-button-prev {
    background-color: #ab1919 !important;
    border-radius: 50% !important;
    transform: scale(0.7) !important;
    color: white !important;
    width: 50px !important;
    height: 50px !important;
  }

  .swiper-button-next {
    background-color: #ab1919 !important;
    border-radius: 50% !important;
    transform: scale(0.7) !important;
    color: white !important;
    width: 50px !important;
    height: 50px !important;
  }

  .detail .swiper-pagination {
    position: absolute !important;
  }

  .p-dropdown {
    background-color: #aa1e22 !important;
    clip-path: polygon(4% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  .p-dropdown-label,
  .p-icon {
    color: white !important;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    transform: scale(0.6) !important;
  }
</style>
