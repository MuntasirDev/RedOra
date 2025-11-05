import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLoaderData } from 'react-router';

const PagesToRead = () => {
  const data = useLoaderData(); 
  const [chartData, setChartData] = useState({ series: [], options: {} });

  useEffect(() => {
    if (!data) return;

    const labels = data.map((book) => book.bookName);
    const pages = data.map((book) => book.totalPages);

    setChartData({
      series: [{ name: 'Pages to Read', data: pages }],
      options: {
        chart: {
          type: 'area',
          height: 400,
          zoom: { enabled: true },
          toolbar: { show: true, tools: { download: true, zoom: true } }
        },
        dataLabels: { enabled: false },
        markers: {
          size: 5,
          colors: ['#23BE0A'],
          strokeColors: '#ffffff',
          strokeWidth: 2
        },
        title: {
          text: 'Pages to Read per Book',
          align: 'left',
          style: { fontSize: '20px', color: '#23BE0A', fontWeight: 'bold' }
        },
        fill: {
  type: 'solid',
  colors: ['#ffffff'], 
  opacity: 0.1,        
},

        stroke: { curve: 'smooth', width: 3, colors: ['#23BE0A'] },
        xaxis: {
          categories: labels,
          labels: { rotate: -45, rotateAlways: true, style: { colors: '#333', fontSize: '12px' } },
          title: { text: 'Books', style: { color: '#23BE0A', fontWeight: 'bold' } }
        },
        yaxis: {
          title: { text: 'Pages', style: { color: '#23BE0A', fontWeight: 'bold' } },
          labels: { style: { colors: '#333', fontSize: '12px' } }
        },
        tooltip: {
          theme: 'light',
          y: {
            formatter: (val) => `${val} pages`,
            title: { formatter: () => 'Pages: ' }
          }
        },
        grid: {
          borderColor: '#e0e0e0',
          row: { colors: ['#f9f9f9', 'transparent'], opacity: 0.5 }
        }
      },
    });
  }, [data]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen rounded-lg shadow-lg">
      {chartData.series.length > 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={400}
        />
      ) : (
        <p className="text-center text-gray-500">Loading chart data...</p>
      )}
    </div>
  );
};

export default PagesToRead;
