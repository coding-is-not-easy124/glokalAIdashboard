import { useRef, useEffect } from 'react';
import { Chart, PolarAreaController, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

const PolarAreaChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Register Chart.js components
        Chart.register(PolarAreaController, ArcElement, RadialLinearScale, Tooltip, Legend);

        // Destroy existing chart instance if it exists
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const polarAreaChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                    {
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
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
            polarAreaChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default PolarAreaChart;