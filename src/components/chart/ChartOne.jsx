/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const ChartOne = ({ sofia, helene }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const data = {
      labels: sofia.map(() => "Sofia/Helene"),
      datasets: [
        {
          label: "Sofia's Daily Total production",
          data: sofia.map((item) => item.total),
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Helene's Daily Total production",
          data: helene.map((item) => item.total),
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sofia, helene]);

  return (
    <div
      style={{
        width: "100%",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        padding: "0.5rem",
      }}
    >
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartOne;
