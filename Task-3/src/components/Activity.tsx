
import TodaysHighight from "./TodaysHighight";
import CompletedActivity from "./CompletedActivity";
import ScheduledActivity from "./ScheduledActivity";

// Component for displaying activity details
function Activity() {
  return (
    <>
      {/* Container for activity details */}
      <div className="p-3">
        <TodaysHighight />
        <CompletedActivity />
        <ScheduledActivity />
      </div>
    </>
  );
}

export default Activity;
