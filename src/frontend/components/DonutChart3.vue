<template>
    <div class="chart-container">
        <DoughnutChart :chart-data="chartData" :chart-options="chartOptions" />
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
            labels: ["المتأخر", "المتحصل", "المستحق"],
            datasets: [
                {
                    data: [33, 33, 33], 
                    backgroundColor: ["#FF4906", "#39CEF3", "#A1DC67"], 
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

        return { chartData, chartOptions };
    },
});
</script>

<style scoped>
.chart-container {
    width: 200px;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
</style>