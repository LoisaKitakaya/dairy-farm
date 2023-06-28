/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const ChartThree = ({ sofia, helene }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    const data = {
      labels: [sofia[0].ref, helene[0].ref],
      datasets: [
        {
          data: [sofia[0].total, helene[0].total],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };

    const options = {
      cutout: "60%",
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        style={{ width: "35%", margin: "1rem 0" }}
      />
    </div>
  );
};

export default ChartThree;
