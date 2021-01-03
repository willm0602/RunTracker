/**
 * JSX component for a series of runs
 */

import React from 'react';
import Section from '../utils/section'
import Run from './run'

class Collection extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        var runs = this.props.runs

        var distance = 0 //total distance traveled in a series of sections for the run
        var time = 0 //total time spent running
        runs.forEach((e)=>{ //adds up the total distance and total time
            distance+=e.distance 
            time+=e.time
        })
        var speed = distance/time*60 //total distance divided by total time in miles per hour to get average speed
        if(time==0) //prevents NaN error
        {
            speed = 0
        }

        var total = new Section(speed,time) //generates a section component to summarize the total run
        return(
            <Run run={total}/>
        )
    }
}

export default Collection;