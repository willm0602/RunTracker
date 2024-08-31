import { get } from "svelte/store";
import type RunSegment from "./RunSegment";
import { indexOfSegmentEditing } from "./datastore";

export default class Run{
    segments: RunSegment[]
    isActive: boolean
    
    constructor(segments?: RunSegment[]){
        this.segments = segments || [];
        this.isActive = false;
    }

    push(segment: RunSegment){
        this.segments.push(segment);
    }

    removeSegmentAtIndex(index: number){
        if(index < 0 || index >= this.segments.length){
            throw(`Cannot remove segment at index ${index} when there are
            only ${this.segments.length} segments`);
        }
        this.segments.splice(index, 1);
    }

    getSegmentEditing(){
        const index = get(indexOfSegmentEditing);
        if(index === undefined){
            throw('Editing Segment has not been called')
        }
        if(index < 0 || index >= this.segments.length){
            throw('Index out of bounds');
        }
        return this.segments[index];
    }

    setSegmentAtIndex(segment: RunSegment, index: number){
        this.segments[index] = segment;
    }

    copySegmentAt(index: number){
        const segment = {
            ...this.segments[index]
        };
        this.segments.splice(index, 0, segment);
    }

    canMoveDownAtIndex(index: number){
        return index < this.segments.length - 1;
    }
    
    canMoveUpAtIndex(index: number){
        return index > 0;
    }

    moveSegmentAtIndexDown(index: number){
        const segmentMovingDown = this.segments[index];
        const segmentMovingUp = this.segments[index+1];
        this.segments[index] = segmentMovingUp;
        this.segments[index+1] = segmentMovingDown;
    }

    moveSegmentAtIndexUp(index: number){
        this.moveSegmentAtIndexDown(index-1);
    }

    startRun(){
        this.isActive = true;
    }
}