import React, { useState } from 'react'

const props = {
    height: '168',
    weight: '69',
    calBurned: '420'
}

const AvgHR = {
    underweight: '80',
    normal: '75',
    overweight: '70'
}

function FTracker(props) {

    const [bmi, setBmi] = useState()
    const [category, setCategory] = useState('')
    const [heartRate, setHeartRate] = useState()

    const calcVals = (height, weight) => {
        setBmi(height*height/weight)

        if (bmi <= 25) {
            setCategory('underweight') 
        }
        else if (bmi >= 25) {
            setCategory('overweight')
        }
        else {
            setCategory('normal')
        }

        setHeartRate(AvgHR[category])
    }

  return (
    <div>
        {calcVals(props.height, props.weight)}
        <div className='row-container' id='overall-tracker'>
            <div>
                BMI: 
                <span className='key-value'>{bmi}</span>
                <span className='alt-value'>You are {category}</span>
            </div>
            <div>
                Average Heart Rate: 
                <span className='key-value'>{heartRate} BPM</span>
            </div>
            <div>
                Calories Burned: 
                <span className='key-value'>{props.calBurned}</span>
            </div>
        </div>
        <div className='row-container' id='per-day-tracker'>
            {/* <div>
                Steps: 
                <span className='key-value'>{props.steps}</span>
            </div> */}
            <div>
                Calories Burned Today: 
                <span className='key-value'>{props.calBurnedTod}</span>
            </div>
            <div>
                Calorie Intake: 
                <span className='key-value'>{props.calIntake}</span>
            </div>
        </div>
    </div>
  )
}

// Overall
// BMI
// Average Heart Rate (Medically)
// Cal burned

// Per Day
// Steps
// Cal Burned
// Cal Intake


export default FTracker