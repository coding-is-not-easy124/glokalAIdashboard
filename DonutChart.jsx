import { useRef, useEffect } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

const DonutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Register Chart.js components
        Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

        // Destroy existing chart instance if it exists
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const donutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [
                    {
                        data: [300, 50, 100, 80, 120],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            },
        });

        // Cleanup on component unmount
        return () => {
            donutChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default DonutChart;
