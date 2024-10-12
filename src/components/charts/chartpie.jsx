import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box } from '@mui/joy';

// Register necessary components (ArcElement is needed for pie/doughnut charts)
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Chart data
  const data = {
    labels: ['Instalações', 'Cancelamentos', 'Manutenções', 'Mudança de Plano', 'Mudança de Titular'],
    datasets: [
      {
        label: 'Total de Ações',
        data: [300, 50, 100, 75, 30], // Example data representing each category
        backgroundColor: [
          'green',
          'red',
          '#007bff',
          '#20615b',
          '#f16821',
        ], // Colors for each section of the pie
        borderWidth: 0.5,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'left', // Legend position
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Box sx={{minWidth: "40vh", maxWidth: "100%", minHeight: "30vh", maxHeight: "100%"}}>
      <Pie data={data} options={options} />
    </Box>
  );
};

export default PieChart;
