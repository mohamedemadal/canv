<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Page Title -->
    <h1 class="text-2xl font-bold text-right mb-6">لوحة إدارة الأملاك</h1>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <Chart type="doughnut" :data="chartInstallments" class="bg-white p-4 rounded-2xl shadow" />
      <Chart type="doughnut" :data="chartClients" class="bg-white p-4 rounded-2xl shadow" />
      <Chart type="doughnut" :data="chartProperties" class="bg-white p-4 rounded-2xl shadow" />
    </div>

    <!-- Tabs and Search Header -->
    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
      <h2 class="text-xl font-semibold text-right">الأقساط المتوقعه</h2>
      <div class="flex items-center gap-2">
        <Button label="بحث" class="bg-red-700 text-white rounded-xl px-6" />
        <div class="flex bg-white rounded-xl overflow-hidden">
          <button class="px-4 py-2 text-sm font-medium" :class="{'bg-red-700 text-white': selectedTab === 'expected'}" @click="selectedTab = 'expected'">متوقعه</button>
          <button class="px-4 py-2 text-sm font-medium" :class="{'bg-red-700 text-white': selectedTab === 'paid'}" @click="selectedTab = 'paid'">مدفوعه</button>
          <button class="px-4 py-2 text-sm font-medium" :class="{'bg-red-700 text-white': selectedTab === 'due'}" @click="selectedTab = 'due'">مستحقه</button>
        </div>
        <InputText v-model="search" placeholder="تاريخ القسط" class="rounded-xl text-right" />
      </div>
    </div>

    <!-- Activities Table -->
    <DataTable :value="filteredActivities" class="bg-white rounded-2xl shadow" stripedRows>
      <Column field="activity" header="الأقساط" />
      <Column field="installment" header="تاريخ الإستحقاق" />
      <Column field="amount" header="المبلغ" />
      <Column field="status" header="الحالة">
        <template #body="slotProps">
          <span :class="getStatusClass(slotProps.data.status)">
            {{ slotProps.data.status }}
          </span>
        </template>
      </Column>
    </DataTable>

    <!-- Pagination -->
    <Paginator :rows="10" :totalRecords="activities.length" @page="onPageChange" class="mt-6" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Chart from 'primevue/chart'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const search = ref('')
const selectedTab = ref('expected')
const currentPage = ref(0)
const rowsPerPage = 10

const chartInstallments = {
  labels: ['مدفوع', 'متأخر', 'مؤجل'],
  datasets: [
    {
      data: [4000, 2000, 1000],
      backgroundColor: ['#22c55e', '#f97316', '#ef4444'],
    },
  ],
}

const chartClients = {
  labels: ['نشط', 'غير نشط'],
  datasets: [
    {
      data: [120, 30],
      backgroundColor: ['#3b82f6', '#9ca3af'],
    },
  ],
}

const chartProperties = {
  labels: ['مؤجر', 'غير مؤجر'],
  datasets: [
    {
      data: [85, 15],
      backgroundColor: ['#10b981', '#f59e0b'],
    },
  ],
}

const activities = ref([
  { activity: 'تحصيل القسط', installment: '2025-05-01', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-02', amount: '5000 L.E', status: 'متأخر' },
  { activity: 'تحصيل القسط', installment: '2025-05-03', amount: '5000 L.E', status: 'مؤجل' },
  { activity: 'تحصيل القسط', installment: '2025-05-04', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-05', amount: '5000 L.E', status: 'متأخر' },
  { activity: 'تحصيل القسط', installment: '2025-05-06', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-07', amount: '5000 L.E', status: 'مؤجل' },
  { activity: 'تحصيل القسط', installment: '2025-05-08', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-09', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-10', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-11', amount: '5000 L.E', status: 'مدفوع' },
  { activity: 'تحصيل القسط', installment: '2025-05-12', amount: '5000 L.E', status: 'متأخر' },
])

const filteredActivities = computed(() => {
  const filtered = activities.value.filter((item) => {
    const matchesSearch = item.installment.includes(search.value)
    const matchesTab =
      (selectedTab.value === 'expected' && item.status === 'مؤجل') ||
      (selectedTab.value === 'paid' && item.status === 'مدفوع') ||
      (selectedTab.value === 'due' && item.status === 'متأخر')
    return matchesSearch && matchesTab
  })
  const start = currentPage.value * rowsPerPage
  return filtered.slice(start, start + rowsPerPage)
})

const onPageChange = (e) => {
  currentPage.value = e.page
}

const getStatusClass = (status) => {
  switch (status) {
    case 'مدفوع':
      return 'text-green-500 font-bold'
    case 'متأخر':
      return 'text-red-500 font-bold'
    case 'مؤجل':
      return 'text-orange-500 font-bold'
    default:
      return ''
  }
}
</script>

<style scoped>
</style>
