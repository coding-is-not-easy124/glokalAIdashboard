import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { PieController, ArcElement, Tooltip, Legend } from 'chart.js';

const PieChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        
        Chart.register(PieController, ArcElement, Tooltip, Legend);
        // Destroy existing chart instance
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [
                    {
                        label: 'Colors',
                        data: [300, 50, 100],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                        borderWidth: 1,
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
            pieChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default PieChart;