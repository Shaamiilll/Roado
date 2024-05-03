import React from 'react'
import TodaysHighight from './TodaysHighight'
import CompletedActivity from './CompletedActivity'

function Activity() {
  return (
    <>
    <div className="p-3 ">
    <TodaysHighight/>
    <CompletedActivity/>
    </div>
    </>
  )
}

export default Activity