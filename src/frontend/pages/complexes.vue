<template>
  <Nave></Nave>
  <div class="bg-white auction">
    <!-- banner -->
    <div class="banner flex items-center h-[35vh] lg:h-[55vh] relative">
      <div class="absolute bg-black opacity-40 w-full h-full z-50"></div>
      <img class="w-full absolute h-full" src="../images/breadcrumb.png" />

      <div class="z-50 text-white w-full m-auto w-[80%]">
        <H1 class="font-bold text-5xl text-white z-50"> {{ $t('المباني') }}</H1>
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

          <p class="text-2xl font-semibold">{{ $t('المباني') }}</p>
        </div>
      </div>
    </div>

    <div class="filter px-[1%] py-[3%] m-auto max-w-[1290px]">
      <div class="grid lg:grid-cols-3 grid-cols-1 bg-white shadow-lg w-full gap-4 px-[3%] py-[2%]">
        <div class="py-2 relative sh">
          <div class="relative">
            <InputText
              v-model="filter.name"
              required
              class="bg-[#f7f5f5] w-full shadow"
              :placeholder="$t('Neighborhoodname')"
            />
            <span
              class="pi pi-search absolute top-[50%] rtl:left-[5%] ltr:right-[5%] transform -translate-y-[50%] z-50"
            ></span>
          </div>
        </div>
        <div class="py-1 relative my-auto">
          <div class="relative">
            <Dropdown
              style="height: 100% !important"
              filter
              v-model="filter.city_id_filter"
              option-value="id"
              :options="cityes"
              optionLabel="name"
              :placeholder="$t('select_city')"
              class="shadow w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem my-[1%]"
            />
          </div>
        </div>
        <div class="flex items-center text-center">
          <Button
            @click="fetchdata"
            style="background-color: #65bdc4"
            :label="$t('search')"
            class="mt-3 bg-[#65BDC4] w-[50%] m-auto"
          />
        </div>
      </div>
    </div>
    <!-- Advanced Search -->
    <div class="px-[1%] py-[3%] m-auto max-w-[1290px]">
      <div class="bg-white shadow-lg rounded-lg p-6 border border-[#e5e7eb]">
        <!-- Header with toggle -->
        <div
          @click="showAdvanced = !showAdvanced"
          class="flex items-center justify-between cursor-pointer select-none border-b pb-2 mb-4"
        >
          <h3 class="text-2xl font-bold text-[#046A72]">
            {{ $t('advanced_search') }}
          </h3>
          <span>
            <svg
              v-if="!showAdvanced"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#046A72] transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#046A72] transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </span>
        </div>

        <!-- Search Form -->
        <div v-if="showAdvanced">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Area -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#303843]">{{ $t('owner_name') }}</label>
              <InputText
                v-model="Advanced.owner_name"
                class="w-full bg-[#f7f5f5] border-none rounded-md"
                :placeholder="$t('owner_name')"
              />
            </div>

            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#303843]">{{ $t('area') }}</label>
              <InputText
                v-model="Advanced.area"
                class="w-full bg-[#f7f5f5] border-none rounded-md"
                :placeholder="$t('enter_area')"
              />
            </div>

            <!-- Building Number -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#303843]">{{ $t('building_number') }}</label>
              <InputNumber
                v-model="Advanced.building_number"
                class="w-full bg-[#f7f5f5] border-none rounded-md"
                :placeholder="$t('enter_number')"
              />
            </div>

            <!-- Residential Units -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#303843]">{{ $t('residential_units') }}</label>
              <InputNumber
                v-model="Advanced.residential_units_number"
                class="w-full bg-[#f7f5f5] border-none rounded-md"
                :placeholder="$t('enter_number')"
              />
            </div>

            <!-- Commercial Units -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#303843]">{{ $t('commercial_units') }}</label>
              <InputNumber
                v-model="Advanced.commercial_units_number"
                class="w-full bg-[#f7f5f5] border-none rounded-md"
                :placeholder="$t('enter_number')"
              />
            </div>
          </div>
          <!-- Buttons -->
          <div class="flex gap-3 justify-end mt-6 border-t pt-4">
            <Button
              @click="Advanced_Search"
              class="px-6 py-2 bg-[#4FA8AF] text-white rounded-md hover:bg-[#4FA8AF] transition-colors"
              :label="$t('search')"
            />
            <Button
              @click="clear_Advanced_Search"
              class="px-6 py-2 bg-[#4FA8AF] text-white rounded-md hover:bg-[#4FA8AF] transition-colors"
              :label="$t('clear_fillter')"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- auctions -->
    <div class="px-[1%] py-[3%] m-auto max-w-[1290px]">
      <div class="flex justify-between">
        <h2 class="text-4xl font-bold">{{ $t('المباني') }}</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
        <div
          v-for="rent in allauctions"
          style="transition: 0.7s"
          class="text-center text-4xl bg-white rounded-lg w-full shadow-lg hover:scale-[1.01]"
        >
          <!-- <div class="absolute w-full h-full bg-white opacity-20"></div> -->
          <div class="">
            <div class="">
              <div
                class="w-full h-44"
                :style="{ backgroundImage: `url(${rent?.image})` }"
                style="background-position: center; background-repeat: no-repeat; background-size: cover"
              ></div>
            </div>
            <div class="flex justify-between p-2">
              <div>
                <div class="flex py-1">
                  <a
                    :href="rent?.location_url"
                    target="_blank"
                    class="flex bg-[#E6F4F6] py-1 px-1 rounded-md"
                    style="border: 2px solid #046a72"
                  >
                    <div class="my-auto">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="8.25" r="2.25" stroke="#046A72" stroke-width="1.5" />
                        <path
                          d="M15.75 8.16667C15.75 11.8486 11.5312 16.5 9 16.5C6.46875 16.5 2.25 11.8486 2.25 8.16667C2.25 4.48477 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.48477 15.75 8.16667Z"
                          stroke="#046A72"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <p class="text-[#046A72] text-sm px-1">{{ rent.area }} - {{ rent.city }}</p>
                  </a>
                  <a
                    target="_blank"
                    class="flex bg-[#65bdc4] mx-2 py-1 px-1 rounded-md"
                    style="border: 2px solid #65bdc4"
                  >
                    <div class="my-auto">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.06815e-05 4.96201C3.06815e-05 3.1912 1.43555 1.75569 3.20635 1.75569H9.9565C11.7273 1.75569 13.1628 3.19121 13.1628 4.96201V12.0497C13.1628 13.8205 11.7273 15.256 9.9565 15.256H3.20635C1.43555 15.256 3.06815e-05 13.8205 3.06815e-05 12.0497V4.96201ZM3.20635 2.76821C1.99475 2.76821 1.01255 3.75041 1.01255 4.96201V12.0497C1.01255 13.2613 1.99475 14.2435 3.20635 14.2435H9.9565C11.1681 14.2435 12.1503 13.2613 12.1503 12.0497V4.96201C12.1503 3.75041 11.1681 2.76821 9.9565 2.76821H3.20635Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6.48079C0 6.20119 0.226661 5.97453 0.506261 5.97453H12.6565C12.9361 5.97453 13.1628 6.20119 13.1628 6.48079C13.1628 6.76039 12.9361 6.98705 12.6565 6.98705H0.506261C0.226661 6.98705 0 6.76039 0 6.48079Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.88136 2.4307C4.16096 2.4307 4.38762 2.65736 4.38762 2.93696V14.4195C4.38762 14.6991 4.16096 14.9258 3.88136 14.9258C3.60176 14.9258 3.3751 14.6991 3.3751 14.4195V2.93696C3.3751 2.65736 3.60176 2.4307 3.88136 2.4307Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.23146 2.42826C9.51106 2.42826 9.73772 2.65492 9.73772 2.93452V14.4171C9.73772 14.6967 9.51106 14.9233 9.23146 14.9233C8.95186 14.9233 8.7252 14.6967 8.7252 14.4171V2.93452C8.7252 2.65492 8.95186 2.42826 9.23146 2.42826Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.66309 9.91952C3.66309 9.63992 3.88975 9.41326 4.16935 9.41326H8.72519C9.0048 9.41326 9.23146 9.63992 9.23146 9.91952C9.23146 10.1991 9.0048 10.4258 8.72519 10.4258H4.16935C3.88975 10.4258 3.66309 10.1991 3.66309 9.91952Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p class="text-[#ffff] text-sm px-1">مبني</p>
                    <p class="text-[#ffff] text-sm px-1">{{ rent?.building_number }}</p>
                  </a>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div class="grid grid-cols-3 p-[1%] gap-2">
            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="py-2">
                <svg
                  width="27"
                  height="26"
                  class="mx-auto"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.875 22.75H2.875C2.465 22.75 2.125 22.41 2.125 22C2.125 21.59 2.465 21.25 2.875 21.25H22.875C23.285 21.25 23.625 21.59 23.625 22C23.625 22.41 23.285 22.75 22.875 22.75Z"
                    fill="#046A72"
                  />
                  <path
                    d="M3.88501 22.7603C3.68501 22.7603 3.49498 22.6803 3.35498 22.5403C3.21498 22.4003 3.13501 22.2103 3.13501 22.0103L3.125 7.07029C3.125 6.16029 3.58497 5.30026 4.34497 4.79026L8.34497 2.12027C9.27497 1.50027 10.475 1.50027 11.395 2.12027L15.395 4.79026C16.165 5.30026 16.615 6.15029 16.615 7.07029L16.625 21.9903C16.625 22.4003 16.295 22.7403 15.875 22.7403L3.88501 22.7603ZM9.875 3.1503C9.635 3.1503 9.395 3.22026 9.185 3.36026L5.185 6.03031C4.835 6.26031 4.625 6.65029 4.625 7.07029L4.63501 21.2603L15.135 21.2403L15.125 7.07029C15.125 6.65029 14.915 6.26026 14.575 6.04026L10.575 3.37027C10.365 3.22027 10.115 3.1503 9.875 3.1503Z"
                    fill="#046A72"
                  />
                  <path
                    d="M20.8555 22.76C20.4455 22.76 20.1055 22.42 20.1055 22.01V18C20.1055 17.59 20.4455 17.25 20.8555 17.25C21.2655 17.25 21.6055 17.59 21.6055 18V22.01C21.6055 22.42 21.2755 22.76 20.8555 22.76Z"
                    fill="#046A72"
                  />
                  <path
                    d="M20.875 18.75C19.355 18.75 18.125 17.52 18.125 16V14C18.125 12.48 19.355 11.25 20.875 11.25C22.395 11.25 23.625 12.48 23.625 14V16C23.625 17.52 22.395 18.75 20.875 18.75ZM20.875 12.75C20.185 12.75 19.625 13.31 19.625 14V16C19.625 16.69 20.185 17.25 20.875 17.25C21.565 17.25 22.125 16.69 22.125 16V14C22.125 13.31 21.565 12.75 20.875 12.75Z"
                    fill="#046A72"
                  />
                  <path
                    d="M15.875 14.75H3.875C3.465 14.75 3.125 14.41 3.125 14C3.125 13.59 3.465 13.25 3.875 13.25H15.875C16.285 13.25 16.625 13.59 16.625 14C16.625 14.41 16.285 14.75 15.875 14.75Z"
                    fill="#046A72"
                  />
                  <path
                    d="M9.875 22.75C9.465 22.75 9.125 22.41 9.125 22V18.25C9.125 17.84 9.465 17.5 9.875 17.5C10.285 17.5 10.625 17.84 10.625 18.25V22C10.625 22.41 10.285 22.75 9.875 22.75Z"
                    fill="#046A72"
                  />
                  <path
                    d="M9.875 11.25C8.635 11.25 7.625 10.24 7.625 9C7.625 7.76 8.635 6.75 9.875 6.75C11.115 6.75 12.125 7.76 12.125 9C12.125 10.24 11.115 11.25 9.875 11.25ZM9.875 8.25C9.465 8.25 9.125 8.59 9.125 9C9.125 9.41 9.465 9.75 9.875 9.75C10.285 9.75 10.625 9.41 10.625 9C10.625 8.59 10.285 8.25 9.875 8.25Z"
                    fill="#046A72"
                  />
                </svg>
              </h4>
              <div class="">
                <p class="text-lg font-medium text-[#303843]">{{ rent?.residential_units_number }}</p>
                <p class="text-lg font-medium text-[#303843]">وحده سكنيه</p>
              </div>
            </div>

            <div class="border-2 p-[2%] rounded-sm">
              <h4 class="py-2">
                <svg
                  width="27"
                  class="mx-auto"
                  height="27"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.625 22.9082H1.625C1.215 22.9082 0.875 22.5682 0.875 22.1582C0.875 21.7482 1.215 21.4082 1.625 21.4082H23.625C24.035 21.4082 24.375 21.7482 24.375 22.1582C24.375 22.5682 24.035 22.9082 23.625 22.9082Z"
                    fill="#046A72"
                  />
                  <path
                    d="M20.4053 22.918C19.9953 22.918 19.6553 22.578 19.6553 22.168V17.708C19.6553 17.298 19.9953 16.958 20.4053 16.958C20.8153 16.958 21.1553 17.298 21.1553 17.708V22.168C21.1553 22.578 20.8253 22.918 20.4053 22.918Z"
                    fill="#046A72"
                  />
                  <path
                    d="M20.4246 18.4581C18.7946 18.4581 17.4746 17.1381 17.4746 15.5081V13.2381C17.4746 11.6081 18.7946 10.2881 20.4246 10.2881C22.0546 10.2881 23.3746 11.6081 23.3746 13.2381V15.5081C23.3746 17.1381 22.0546 18.4581 20.4246 18.4581ZM20.4246 11.7981C19.6246 11.7981 18.9746 12.4481 18.9746 13.2481V15.5181C18.9746 16.3181 19.6246 16.9681 20.4246 16.9681C21.2246 16.9681 21.8746 16.3181 21.8746 15.5181V13.2481C21.8746 12.4481 21.2246 11.7981 20.4246 11.7981Z"
                    fill="#046A72"
                  />
                  <path
                    d="M14.9248 22.908C14.5148 22.908 14.1748 22.568 14.1748 22.158V6.18799C14.1748 4.59799 13.5048 3.91797 11.9448 3.91797H5.71484C4.14484 3.91797 3.46484 4.59799 3.46484 6.18799V22.158C3.46484 22.568 3.12484 22.908 2.71484 22.908C2.30484 22.908 1.96484 22.568 1.96484 22.158V6.18799C1.96484 3.75799 3.29484 2.41797 5.71484 2.41797H11.9448C14.3548 2.41797 15.6748 3.75799 15.6748 6.18799V22.158C15.6748 22.568 15.3348 22.908 14.9248 22.908Z"
                    fill="#046A72"
                  />
                  <path
                    d="M11.3748 9.1582H6.4248C6.0148 9.1582 5.6748 8.8182 5.6748 8.4082C5.6748 7.9982 6.0148 7.6582 6.4248 7.6582H11.3748C11.7848 7.6582 12.1248 7.9982 12.1248 8.4082C12.1248 8.8182 11.7848 9.1582 11.3748 9.1582Z"
                    fill="#046A72"
                  />
                  <path
                    d="M11.3748 12.9082H6.4248C6.0148 12.9082 5.6748 12.5682 5.6748 12.1582C5.6748 11.7482 6.0148 11.4082 6.4248 11.4082H11.3748C11.7848 11.4082 12.1248 11.7482 12.1248 12.1582C12.1248 12.5682 11.7848 12.9082 11.3748 12.9082Z"
                    fill="#046A72"
                  />
                  <path
                    d="M8.875 22.9082C8.465 22.9082 8.125 22.5682 8.125 22.1582V18.4082C8.125 17.9982 8.465 17.6582 8.875 17.6582C9.285 17.6582 9.625 17.9982 9.625 18.4082V22.1582C9.625 22.5682 9.285 22.9082 8.875 22.9082Z"
                    fill="#046A72"
                  />
                </svg>
              </h4>
              <div class="">
                <p class="text-lg font-medium text-[#303843]">{{ rent?.commercial_units_number }}</p>
                <p class="text-lg font-medium text-[#303843]">وحده سكنيه</p>
              </div>
            </div>
          </div>
          <div class="w-full">
            <p class="text-[#46494A] text-justify text-base py-1 px-2 font-semibold">تفاصيل الكمبوند :</p>
            <p class="text-[#818181] text-justify text-sm py-1 px-2 font-semibold">{{ rent?.description }} ...</p>
          </div>

          <div>
            <!-- @click="details(auction.auction_id)" -->
            <Button
              @click="details(rent.id)"
              style="background-color: #32a7b0 !important; padding: 0px !important; margin-bottom: 2% !important"
              label=" التفاصيل"
              class="mt-3 w-[90%] focus:ring-0 text-[#AA1E22]"
            />
          </div>
        </div>
      </div>
      <div>
        <Paginator
          v-if="allauctions.length >= 1"
          v-model:first="current_page"
          :rows="1"
          :totalRecords="total_pages"
          :template="{
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink  JumpToPageDropdown',
          }"
        ></Paginator>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script setup>
  import Nave from '../components/Nave.vue'
  import Footer from '../components/Footer.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  // import img1 from "../images/riyadh-saudi-arabia-gretopia_5 1.png";
  import { ref, reactive, onMounted, computed, watch } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import { Pagination, Navigation, Autoplay } from 'swiper/modules'
  import axios from 'axios'
  const currentDate = ref(new Date())
  const allauctions = ref({})
  const total_pages = ref(2)
  const current_page = ref(0)
  const active = ref('all')
  const swiperRef = ref(null)
  const showAdvanced = ref(false)
  const cityes = ref('')
  const filter = ref({})
  const state = reactive({
    currentSlide: 0,
    totalSlides: 0,
  })

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
  const details = (id) => {
    router.push({ name: 'complexe-details', params: { id: id } })
  }
  const getauction = (e) => {
    total_pages.value = 2
    current_page.value = 0
    active.value = String(e)
    console.log(e)

    axios
      .post('api/get_buildings', {
        auctions_filter: e,
        page: '1',
        page_scope: '9',
        lang: localStorage.getItem('appLang'),
      })
      .then((res) => {
        console.log(res.data.result.data)
        allauctions.value = ref({})
        allauctions.value = res.data.result.data.data.map((event) => ({
          name: event.name,
          id: event.id,
          image: event.images,
          commercial_units_number: event.commercial_units_number,
          description: event.description,
          residential_units_number: event.residential_units_number,
          units_number: event.units_number,
          area: event.location_details.area.name,
          location_url: event.location_details.location_url,
        }))
        console.log(allauctions.value)
      })
  }
  watch(current_page, (newPage, oldPage) => {
    if (allauctions.value.length >= 9) {
      axios
        .post('api/get_buildings', {
          auctions_filter: active.value,
          city_id_filter: filter.value.city_id_filter,
          page: newPage + 1,
          page_scope: '9',
          lang: localStorage.getItem('appLang'),
        })
        .then((res) => {
          console.log(res.data.result.data)
          if ((res.data.result.data.length = 9)) {
            total_pages.value++
          }

          allauctions.value = ref({})
          allauctions.value = res.data.result.data.data.map((event) => ({
            name: event.name,
            id: event.id,
            image: event.images,
            building_number: event.building_number,
            commercial_units_number: event.commercial_units_number,
            description: event.description,
            residential_units_number: event.residential_units_number,
            units_number: event.units_number,
            area: event.location_details.area.name,
            city: event.location_details.city.name,
            location_url: event.location_details.location_url,
          }))
        })
    }

    // Add any additional logic you need here, like fetching new data
  })
  const fetchdata = () => {
    axios
      .post('api/get_buildings', {
        city_id_filter: filter.value.city_id_filter,
        name_like_filter: filter.value.name,
        page: 1,
        page_scope: 9,
        lang: localStorage.getItem('appLang'),
      })
      .then((res) => {
        console.log(res.data.result.data)

        allauctions.value = res.data.result.data.data.map((event) => ({
          name: event.name,
          id: event.id,
          image: event.images,
          building_number: event.building_number,
          commercial_units_number: event.commercial_units_number,
          description: event.description,
          residential_units_number: event.residential_units_number,
          units_number: event.units_number,
          area: event.location_details.area.name,
          city: event.location_details.city.name,
          location_url: event.location_details.location_url,
        }))
        console.log(allauctions.value)
      })
    axios
      .post('api/get_ksa_cities', {
        lang: localStorage.getItem('appLang'),
      })
      .then((res) => {
        cityes.value = res.data.result.data
      })
  }

  // Advanced Search inputs
  const Advanced = ref({
    area: null,
    building_number: null,
    residential_units_number: null,
    commercial_units_number: null,
    owner_name: null,
  })

  // Advanced Search function
  const Advanced_Search = () => {
    axios
      .post('api/get_buildings', {
        city_id_filter: filter.value.city_id_filter,
        name_like_filter: filter.value.name,
        lang: localStorage.getItem('appLang'),
      })
      .then((res) => {
        allauctions.value = res.data.result.data.data
          .map((event) => ({
            name: event.name,
            id: event.id,
            image: event.images,
            building_number: event.building_number,
            commercial_units_number: event.commercial_units_number,
            description: event.description,
            residential_units_number: event.residential_units_number,
            units_number: event.units_number,
            area: event.location_details.area.name,
            city: event.location_details.city.name,
            location_url: event.location_details.location_url,
            owner_name: event.owner_name,
          }))
          .filter((event) => {
            return (
              (Advanced.value.area === null || event.area == Advanced.value.area) &&
              (Advanced.value.building_number === null || event.building_number == Advanced.value.building_number) &&
              (Advanced.value.residential_units_number === null ||
                event.residential_units_number == Advanced.value.residential_units_number) &&
              (Advanced.value.commercial_units_number === null ||
                event.commercial_units_number == Advanced.value.commercial_units_number) &&
              (Advanced.value.owner_name === null || event.owner_name.includes(Advanced.value.owner_name))
            )
          })
      })
  }

  // clear Advanced fillter
  const clear_Advanced_Search = () => {
    Advanced.value = {
      area: null,
      building_number: null,
      residential_units_number: null,
      commercial_units_number: null,
      owner_name: null,
    }
    fetchdata()
  }
  onMounted(() => {
    updateTime()
    fetchdata()

    setInterval(() => {
      currentDate.value = new Date()
    }, 100)
  })
</script>
<style>
  .auction .swiper-pagination-bullet {
    background-color: white;
    color: red !important;
    z-index: 60;
  }

  .auction .swiper-pagination-bullet span {
    color: red !important;
  }
  .p-button {
    background-color: #046a72;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #007bff;
  }

  .swiper-button-prev {
    background-color: red !important;
    border-radius: 9% !important;
    transform: scale(0.7) !important;
    color: white !important;
    width: 50px !important;
    height: 50px !important;
  }

  .swiper-button-next {
    background-color: red !important;
    border-radius: 9% !important;
    transform: scale(0.7) !important;
    color: white !important;
    width: 50px !important;
    height: 50px !important;
  }

  .auction .swiper-pagination {
    position: relative;
    margin-top: 1%;
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background-color: white !important;
    border: 1px solid #aa1e22;
    color: black;
  }

  .p-paginator .p-paginator-pages .p-paginator-page {
    background-color: #cccccc !important;
    border: 1px solid black;
    color: black !important;
  }

  .p-paginator .p-dropdown {
    visibility: hidden !important;
  }

  .p-paginator .p-paginator-last,
  .p-paginator .p-paginator-first {
    visibility: hidden !important;
  }

  .p-paginator .p-icon {
    transform: rotate(180deg) !important;
    width: 2rem;
    height: 3rem;
  }

  .filter .p-inputtext:enabled {
    height: 42px !important;
  }
</style>
