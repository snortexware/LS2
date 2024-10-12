import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Bar, BarElement, } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Box } from '@mui/joy';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

const MultiAxisLineChart = () => {
  // Chart data
  const data = {
    labels: ['Mês Passado', 'Mês Atual'], // Custom X-axis labels
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40], // No label here
        borderColor: 'green',
        backgroundColor: 'green',
        yAxisID: 'y1',
        type: 'bar',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90], // No label here
        borderColor: 'red',
        backgroundColor: 'red',
        yAxisID: 'y2',
        type: 'bar',
      },
      {
        data: [28, 48, 40, 50, 20, 50, 95], // No label here
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        yAxisID: 'y3',
        type: 'bar',
      },
      {
        data: [70, 90, 10, 50, 30, 50, 95], // No label here
        borderColor: '#20615b',
        backgroundColor: '#20615b',
        yAxisID: 'y4',
        type: 'bar',
      },
      {
        data: [28, 48, 40, 50, 20, 50, 35], // No label here
        borderColor: '#f16821',
        backgroundColor: '#f16821',
        yAxisID: 'y5',
        type: 'bar',
      },
    ],
  };
  // Chart options
  const options = {
    responsive: true, // Keep responsive behavior
    maintainAspectRatio: false, // Allow custom height
    plugins: {
      title: {
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          
        },
      },
      y1: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y2: {
        type: 'bar',
        position: 'left',
        title: {
          display: true,
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },y2: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y3: {
        type: 'linear',
        position: 'none',
        title: {
          display: true,
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y4: {
        type: 'linear',
        position: 'none',
        title: {
          display: true,
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y5: {
        type: 'linear',
        position: 'none',
        title: {
          display: true,
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      
      
    },
  };

  return (
    <Box sx={{width: "580px", height: "300px"}} >
     
      <Line data={data} options={options} />
    </Box>
  );
};

export default MultiAxisLineChart;
