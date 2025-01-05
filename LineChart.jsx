import { useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Register Chart.js components
        Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

        // Destroy existing chart instance if it exists
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [65, 59, 80, 81],
                        fill: false,
                        borderColor: 'rgba(75,192,192,1)',
                        tension: 0.1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
            },
        });

        // Cleanup on component unmount
        return () => {
            lineChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default LineChart;