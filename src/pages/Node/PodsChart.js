import React from "react";

import { Line } from "react-chartjs-2";

const PodsChart = () => {
  return <Line data={data} options={options} />;
};

export default PodsChart;

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "# of No Votes",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const dummyData = [
  {
    State: "Running",
    RestartCount: 4,
    Name: "asdf-7d958688b6-vvpp9",
  },
  {
    State: "Running",
    RestartCount: 4,
    Name: "asdf-7d958688b6-zc69p",
  },
  {
    State: "Running",
    RestartCount: 4,
    Name: "nginx-deployment-66b6c48dd5-9qcbg",
  },
];

const labels = [];
const dataMined = [];
