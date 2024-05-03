import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

function Statistics({ title }) {
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
          hoverOffset:10,
        },
      ],
    };

    // Chart configuration for a doughnut chart
    const configPie = {
      type: "doughnut", // Changed type to doughnut
      data: dataPie,
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
          doughnutTotal: {
            text: `Total:10`, // Total value to display
            color: "#000", // Color of the text
            fontSize: 20, // Font size of the text
            fontAlign: "center", // Text alignment
            fontWeight: "bold", // Font weight
          },
        },
      },
    };

    // Register plugin to draw total in center
    Chart.register({
      id: "doughnutTotal",
      afterDraw: (chart, args, options) => {
        const ctx = chart.ctx;
        const canvasWidth = chart.width;
        const canvasHeight = chart.height;
        const chartArea = chart.chartArea; // Get chart area

        // Total text options
        const totalText = options.text || "";
        const totalColor = options.color || "#676666";
        const totalFontSize = options.totalFontSize || 15;
        const totalFontWeight = options.totalFontWeight || "normal";

        // Number text options
        const numberText = options.numberText || "";
        const numberColor = options.numberColor || "#676666";
        const numberFontSize = options.numberFontSize || 12;
        const numberFontWeight = options.numberFontWeight || "normal";

        ctx.font = `${totalFontWeight} ${totalFontSize}px Arial`;
        ctx.fillStyle = totalColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Calculate the center coordinates relative to the doughnut chart
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;

        // Display the total text in the center of the doughnut chart
        ctx.fillText(totalText, centerX, centerY - 10); // Adjust Y position for total

        // Display the number text under the total text
        ctx.font = `${numberFontWeight} ${numberFontSize}px Arial`;
        ctx.fillStyle = numberColor;
        ctx.fillText(numberText, centerX, centerY + 10); // Adjust Y position for number
      },
    });

    // Get chart canvas element
    const chartCanvas = document.getElementById(`chart-${title}`);
    if (chartCanvas) {
      // Create chart if canvas element exists
      const chartPie = new Chart(chartCanvas, configPie);

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
