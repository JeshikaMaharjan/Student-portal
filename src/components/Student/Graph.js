import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useAuth } from "../../Authentication/auth";
import { useToken } from "../../apis";

export default function Graph() {
  const username = useAuth((state) => state.username);
  const { tokenInstance } = useToken();
  const [dataset, setDataSet] = useState([]);

  useEffect(() => {
    tokenInstance
      .get(`graph/data/${username}`)
      .then((res) => {
        setDataSet(res.data);
      })
      .catch((err) => {
        setDataSet(null);
        console.log(err);
      });
  }, []);
  console.log(dataset);
  const state = {
    // labels: ["Sem1", "Sem2", "Sem3", "Sem4", "Sem5"],
    labels: dataset.x,
    datasets: [
      {
        label: "Marks Obtained",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        // data: [65, 59, 80, 81, 56],
        data: dataset.y,
      },
    ],
  };
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Progress graph",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
