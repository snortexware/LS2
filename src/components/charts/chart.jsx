import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Box } from '@mui/joy';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MultiAxisLineChart = () => {
  // Chart data
  const data = {
    labels: ['Junho', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: 'Instalações',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'green',
        backgroundColor: 'green',
        yAxisID: 'y1',
      },
      {
        label: 'Cancelamentos',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'red',
        backgroundColor: 'red',
        yAxisID: 'y2',
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
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
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
    },
  };

  return (
    <Box alignItems="flex-start" sx={{ minwidth: "60%", maxWidth: "100%", minHeight: "50vh", maxHeight: "50vh"  }}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default MultiAxisLineChart;
