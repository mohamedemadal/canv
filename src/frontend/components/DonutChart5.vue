<template>
    <div class="chart-container">
        <DoughnutChart :chart-data="chartData" :chart-options="chartOptions" />
        <div class="inner">
            <DoughnutChart :chart-data="chartData2" :chart-options="chartOptions2" />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Doughnut } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from "chart.js";


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default defineComponent({
    components: {
        DoughnutChart: Doughnut,
    },
    setup() {
        const chartData = ref({
            labels: ["بحاجه لتتعميد الصيانات", "بحاجه لتتعميد فواتير"],
            datasets: [
                {
                    data: [25, 75],
                    backgroundColor: ["#FF4906", "#A1DC67"],
                    borderColor: "#ffffff",
                    borderWidth: 5,
                    cutout: "55%",
                    borderRadius: 10,
                },
            ],
        });

        const chartOptions = ref({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
        });

        const chartData2 = ref({
            labels: ["تم التعميد صيانات<", "تم التعميد فواتير"],
            datasets: [
                {
                    data: [25, 75],
                    backgroundColor: ["#39CEF3", "#576AD5"],
                    borderColor: "#ffffff",
                    borderWidth: 5,
                    cutout: "55%",
                    borderRadius: 10,
                },
            ],
        });
        const chartOptions2 = ref({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
        });
        return { chartData, chartOptions, chartData2, chartOptions2 };
    },
});
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.inner {
    transform: scale(0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}
</style>