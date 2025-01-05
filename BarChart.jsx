import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { BarController, BarElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        
        Chart.register(BarController, BarElement, LinearScale, Title, CategoryScale, Tooltip, Legend);
        // Destroy existing chart instance
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        label: 'Data',
                        data: [10, 20, 30],
                        backgroundColor: 'rgba(75,192,192,0.2)',
                    },
                ],
            },
        });

        // Cleanup on unmount
        return () => {
            barChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default BarChart;