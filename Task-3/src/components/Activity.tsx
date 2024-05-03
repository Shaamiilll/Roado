import React from 'react'
import TodaysHighight from './TodaysHighight'
import CompletedActivity from './CompletedActivity'
import ScheduledActivity from './ScheduledActivity'

function Activity() {
  return (
    <>
    <div className="p-3 ">
    <TodaysHighight/>
    <CompletedActivity/>
    <ScheduledActivity/>
    </div>
    </>
  )
}

export default Activity