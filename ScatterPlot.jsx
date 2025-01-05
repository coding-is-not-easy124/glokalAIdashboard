import { useRef, useEffect } from 'react';
import { Chart, ScatterController, PointElement, LinearScale, Tooltip, Legend } from 'chart.js';

const ScatterPlot = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Register Chart.js components
        Chart.register(ScatterController, PointElement, LinearScale, Tooltip, Legend);

        // Destroy existing chart instance if it exists
        if (Chart.getChart(chartRef.current)) {
            Chart.getChart(chartRef.current).destroy();
        }

        // Create new chart instance
        const ctx = chartRef.current.getContext('2d');
        const scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Scatter Dataset',
                        data: [
                            { x: -10, y: 0 },
                            { x: 0, y: 10 },
                            { x: 10, y: 5 },
                            { x: 5, y: 2 },
                        ],
                        backgroundColor: 'rgba(75, 192, 192, 1)',
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                    },
                },
            },
        });

        // Cleanup on component unmount
        return () => {
            scatterChart.destroy();
        };
    }, []);

    return <canvas ref={chartRef}></canvas>;
};

export default ScatterPlot;