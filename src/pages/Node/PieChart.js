import React from "react";
import { Pie } from "react-chartjs-2";

const PodsChart = (props) => {
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

  const colors = [
    `${randomNum()}, ${randomNum()}, ${randomNum()}`,
    `${randomNum()}, ${randomNum()}, ${randomNum()}`,
  ];

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: [
          `rgba(` + colors[0] + `, 0.2)`,
          `rgba(` + colors[1] + `, 0.2)`,
        ],
        borderColor: [
          `rgba(` + colors[0] + `, 1)`,
          `rgba(` + colors[1] + `, 1)`,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
          {props.label}
        </h3>
      </div>
      <Pie data={data} />
    </>
  );
};

export default PodsChart;
