import { useRef, useEffect } from 'react';
import { Chart, BubbleController, PointElement, LinearScale, Tooltip, Legend } from 'chart.js';

const BubbleChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Register Chart.js components
        Chart.register(BubbleController, PointElement, LinearScale, Tooltip, Legend);

        // Destroy existing chart instance if it exists
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const bubbleChart = new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Bubble Dataset',
                        data: [
                            { x: 20, y: 30, r: 15 },
                            { x: 40, y: 10, r: 10 },
                            { x: 25, y: 50, r: 25 },
                        ],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Cleanup on component unmount
        return () => {
            bubbleChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default BubbleChart;