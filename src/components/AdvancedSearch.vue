<template>
  <div class="advanced-search">
    <button
      @click="toggle"
      class="toggle-button flex justify-between items-center text-[#AA1E22] mb-4"
    >
      <span class="mx-2">{{ $t("advanced_search") }}</span>
      <i :class="{'pi pi-chevron-down': !isOpen, 'pi pi-chevron-up': isOpen}"></i>
    </button>

    <div v-if="isOpen" class="search-content grid lg:grid-cols-4 grid-cols-1 gap-4">
      <!-- Building Info -->
      <div class="py-1">
        <InputText
          v-model="filters.building_number"
          class="bg-[#f7f5f5] w-full shadow"
          :placeholder='$t("building_number")'
        />
      </div>

      <!-- Room/Bath Count -->
      <div class="py-1">
        <InputNumber
          v-model="filters.rooms_number_equal"
          class="bg-[#f7f5f5] w-full shadow"
          :placeholder='$t("rooms_number")'
        />
      </div>

      <div class="py-1">
        <InputNumber
          v-model="filters.bathrooms_number_equal"
          class="bg-[#f7f5f5] w-full shadow"
          :placeholder='$t("bathrooms_number")'
        />
      </div>

      <!-- Features -->
      <div class="grid grid-cols-2">
        <div class="py-1 flex items-center">
          <Checkbox v-model="filters.installed_conditioner" :binary="true" class="mx-2" />
          <label>{{ $t("installed_conditioner") }}</label>
        </div>
        <div class="py-1 flex items-center">
          <Checkbox v-model="filters.installed_kitchen" :binary="true" class="mx-2" />
          <label>{{ $t("installed_kitchen") }}</label>
        </div>
      </div>

      <!-- Rental Type -->
      <div class="py-1">
        <Dropdown
          v-model="filters.rental_type"
          option-value="code"
          optionLabel="name"
          :options="[
            { name: $t('singles'), code: 'singles' },
            { name: $t('families'), code: 'families' }
          ]"
          :placeholder='$t("rental_type")'
          class="shadow w-full bg-[#f7f5f5] md:w-14rem"
        />
      </div>

      <!-- Entrance Type -->
      <div class="py-1">
        <Dropdown
          v-model="filters.entrance_type"
          option-value="code"
          optionLabel="name"
          :options="[
            { name: $t('separate'), code: 'separate' },
            { name: $t('shared'), code: 'shared' }
          ]"
          :placeholder='$t("entrance_type")'
          class="shadow w-full bg-[#f7f5f5] md:w-14rem"
        />
      </div>

      <!-- Price Range -->
      <div class="py-1">
        <span class="p-float-label">
          <InputNumber v-model="filters.rent_amount_lt_equal" class="bg-[#f7f5f5] w-full shadow" />
          <label>{{ $t("price_from") }}</label>
        </span>
      </div>
      <div class="py-1">
        <span class="p-float-label">
          <InputNumber v-model="filters.rent_amount_gt_equal" class="bg-[#f7f5f5] w-full shadow" />
          <label>{{ $t("price_to") }}</label>
        </span>
      </div>

      <!-- Activity -->
      <div class="py-1">
        <Dropdown
          v-model="filters.activity_type_id"
          option-value="activity_id"
          optionLabel="name"
          :options="activityTypes"
          :placeholder='$t("activity")'
          class="shadow w-full bg-[#f7f5f5] md:w-14rem"
        />
      </div>
      <div class="py-1">
        <InputText
          v-model="filters.activity"
          class="bg-[#f7f5f5] w-full shadow"
          :placeholder='$t("activity")'
        />
      </div>

      <div class="flex items-center text-center">
        <Button
          @click="emitSearch"
          style="background-color:#AA1E22;"
          :label='$t("advanced_search")'
          class="mt-3 bg-[#AA1E22] w-[50%] m-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
  activityTypes: {
    type: Array,
    default: () => []
  },
  initialFilters: {
    type: Object,
    default: () => ({})
  }
});

const emits = defineEmits(['search']);

const isOpen = ref(false);
const filters = ref({ ...props.initialFilters });

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const emitSearch = () => {
  emits('search', filters.value);
};
</script>

<style scoped>
.advanced-search {
  @apply bg-white shadow-lg w-full px-[3%] py-[2%];
}

.toggle-button {
  @apply w-full text-left;
}
</style>
