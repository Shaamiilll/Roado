import { useEffect } from "react";
import Chart, { ChartConfiguration, registerables } from "chart.js/auto"; // Import Chart.js library

interface StatisticsProps {
  title: string; // Explicitly specifying the type of title prop as string
}

function Statistics({ title }: StatisticsProps) {
  useEffect(() => {
    // Static chart data
    const dataPie = {
      labels: ["Upcoming", "Ongoing", "Completed"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgba(79, 210, 181, 1)",
            "rgba(255, 203, 73, 1)",
            "rgba(116, 100, 255, 1)",
          ],
          hoverOffset: 10,
        },
      ],
    };

    // Chart configuration for a doughnut chart
    const configPie: ChartConfiguration<"doughnut"> = {
      type: "doughnut",
      data: dataPie,
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };

    // Register plugins
    Chart.register(...registerables);

    // Get chart canvas element
    const chartCanvas = document.getElementById(`chart-${title}`) as HTMLCanvasElement;
    if (chartCanvas) {
      // Create chart if canvas element exists
      const chartPie = new Chart(chartCanvas, configPie);

      // Add custom plugin to display total
      Chart.register({
        id: 'doughnutTotal',
        beforeDraw: chart => {
          const ctx = chart.ctx;
          const width = chart.width;
          const height = chart.height;

          ctx.restore();
          ctx.font = "20px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          const total = dataPie.datasets[0].data.reduce((acc, curr) => acc + curr, 0); // Calculate total
          ctx.fillText(` ${total}`, width / 2, height / 2);
          ctx.save();
        }
      });

      // Cleanup function to destroy the chart on component unmount
      return () => {
        chartPie.destroy();
      };
    }
  }, [title]); // Re-run effect if the title changes

  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden"
      style={{ maxWidth: "250px", backgroundColor: "white", height: "300px" }}
    >
      <div className="py-2 px-3  text-start">{title}</div>
      <canvas className="p-1 ml-2 mr-2" id={`chart-${title}`}></canvas>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center space-x-4">
      <Statistics title="Upcoming" />
      <Statistics title="Ongoing" />
      <Statistics title="Revenue" />
      <Statistics title="Expenses" />
    </div>
  );
}

export default App;
