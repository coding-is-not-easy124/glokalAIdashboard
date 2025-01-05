import { useRef, useEffect } from 'react';
import { Chart, RadarController, PointElement, LineElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

const RadarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Register Chart.js components
        Chart.register(RadarController, PointElement, LineElement, RadialLinearScale, Tooltip, Legend);

        // Destroy existing chart instance if it exists
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My Activities',
                        data: [65, 59, 90, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                    },
                ],
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Cleanup on component unmount
        return () => {
            radarChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default RadarChart;
