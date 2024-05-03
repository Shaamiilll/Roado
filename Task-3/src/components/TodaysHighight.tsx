
function TodaysHighight() {
  return (
    <div >
      <div className="mb-3">
        <h1 className="font-semibold text-start text-base">
          Todays Highlights (14)
        </h1>
        <h4 className="text-start text-xs text-gray-600">19 Mar 2024</h4>
      </div>
      <div className="flex justify-between gap-3 ">
        <div className="border rounded-md border-gray-500 p-2 text-start">
          <h4 className="text-gray-600 from-neutral-900 font-semibold text-sm">Income</h4>
          <h1 className="text-green-800 font-semibold">1000000 CAD</h1>
          <h4 className="text-xs">2 payments Recived</h4>
        </div>
        <div className="border rounded-md border-gray-500 p-2 text-start">
          <h4 className="text-gray-600 from-neutral-900 font-semibold text-">Expenses</h4>
          <h1 className="text-red-800 font-semibold">5000000 CAD</h1>
          <h4 className="text-xs">2 payments Recived</h4>
        </div>
      </div>
    </div>
  );
}

export default TodaysHighight;
