<script lang="ts">
	import { currentRun, Run, type RunSegment } from "$lib";
	import { Button } from "svelte-ux";
	import RunSegmentCard from "./RunSegmentCard.svelte";
	import { indexOfSegmentEditing } from "$lib/datastore";
    
    const DEFAULT_SEGMENT_DURATION = 30; // seconds
    const DEFAULT_SEGMENT_NAME = 'Walk';
    const DEFAULT_SEGMENT_SPEED = 3;

    const currRun = $currentRun as Run

    function goHome(){
        currentRun.set(undefined);
    }

    function addNewSegment(){
        const segment: RunSegment = {
			durationInSeconds: DEFAULT_SEGMENT_DURATION,
			speedInMPH: DEFAULT_SEGMENT_SPEED,
			name: DEFAULT_SEGMENT_NAME
		}
        currRun.push(segment);
        currentRun.set(currRun);
        indexOfSegmentEditing.set(currRun.segments.length - 1);
    }

    function startRun(){
        const currRun = $currentRun;
        if(currRun){
            currRun.isActive = true;
            currentRun.set(currRun);
        }
    }
</script>

<button
    on:click={goHome}
>Go Home</button>
<h1 class="text-primary mt-12">Modify Run</h1>

    {#each $currentRun?.segments || [] as segment, index}
    <RunSegmentCard {segment} {index} />
    {/each}

<Button
    variant='fill-outline'
    color='primary'
    on:click={addNewSegment}
    class="mt-12"
>
    Add Segment
</Button>

<Button
    variant='fill-outline'
    color='secondary'
    on:click={startRun}
    class="mt-12"
>
    Start the Run
</Button>