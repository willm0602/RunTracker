/**
 * Records a section of the run where the speed is measured in miles per hour
 * and the time is measured in minutes
 */

class Section{
    constructor(speed,time)
    {
        this.speed = speed
        this.time = time
        this.distance = speed*time/60
    }
}

export default Section