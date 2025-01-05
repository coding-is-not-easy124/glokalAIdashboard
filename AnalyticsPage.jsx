import React from 'react';
import './AnalyticsPage.css';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import DonutChart from './DonutChart';
import RadarChart from './RadarChart';
import PolarAreaChart from './PolarAreaChart';
import BubbleChart from './BubbleChart';
import ScatterPlot from './ScatterPlot';
import { FaChartPie, FaChartBar, FaChartLine, FaChartArea, FaSitemap } from 'react-icons/fa';
import Icon from '@mdi/react';
import { mdiChartBubble } from '@mdi/js';
import { mdiChartScatterPlot } from '@mdi/js';
import { motion } from 'framer-motion';

const AnalyticsPage = () => {
  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const pieChartData = {
    labels: ['Business Loans', 'Personal Loans', 'Corporate Loans', 'Property Loans'],
    datasets: [
      {
        label: 'Loan Types',
        data: [30, 20, 25, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Average Cases',
        data: [12, 19, 10, 17, 22, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Average Time Spent (Hours)',
        data: [5, 6, 7, 4, 8, 9],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  const radarChartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'Activity Levels',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const polarAreaChartData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  };

  const bubbleChartData = {
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
  };

  const scatterChartData = {
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
  };

  return (
    <div className="analytics-page">
      <main className="content">
        <header className="page-header">
          <h1>Analytics Dashboard</h1>
          <p>
            Visualize key data insights using a variety of interactive charts. 
            Use the insights to make informed decisions and understand trends better.
          </p>
        </header>
        <div className="grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaChartPie size={30} />
            <h2>Loan Distribution</h2>
            <p>Understand the distribution of various loan types in the portfolio.</p>
            <PieChart data={pieChartData} options={pieChartOptions} />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaChartBar size={30} />
            <h2>Average Cases Over Months</h2>
            <p>Track the number of cases handled monthly to identify trends and outliers.</p>
            <BarChart chartData={barChartData} />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaChartLine size={30} />
            <h2>Time Spent on Loans</h2>
            <p>Analyze the average time spent processing loans across months.</p>
            <LineChart chartData={lineChartData} />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaSitemap size={30} />
            <h2>Activity Levels</h2>
            <p>Compare activity levels across various tasks using a radar chart.</p>
            <RadarChart data={radarChartData} />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaChartPie size={30} />
            <h2>Loan Breakdown</h2>
            <p>Dive deeper into the breakdown of loan categories in a donut chart.</p>
            <DonutChart />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaChartArea size={30} />
            <h2>Distribution Insights</h2>
            <p>Explore data distribution patterns using a polar area chart.</p>
            <PolarAreaChart data={polarAreaChartData} />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Icon path={mdiChartScatterPlot} size={2} />
            <h2>Correlation Overview</h2>
            <p>Visualize correlations between variables with a scatter plot.</p>
            <ScatterPlot data={scatterChartData} />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Icon path={mdiChartBubble} size={2} />  
            <h2>Dynamic Relationships</h2>
            <p>Analyze relationships and trends using a bubble chart.</p>
            <BubbleChart data={bubbleChartData} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;