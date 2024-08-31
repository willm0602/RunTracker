<script lang="ts">
	import { currentRun, indexOfSegmentEditing } from "$lib/datastore";
	import { Button, ButtonGroup, NumberStepper, TextField } from "svelte-ux";
	import FullBodyCenter from "./FullBodyCenter.svelte";
	import { writable } from "svelte/store";
	import type RunSegment from "$lib/RunSegment";

    const segment = writable($currentRun?.getSegmentEditing());

    function adjustSegmentDuration(deltaInSeconds: number){
        if(!segment){
            throw('Segment fault');
        }
        const originalDuration = $segment.durationInSeconds;
        const newDuration = Math.max(0, originalDuration + deltaInSeconds);
        const newSegment: RunSegment = {
            ...$segment,
            durationInSeconds: newDuration
        };
        segment.set(newSegment);
    }

    function cancelChanges() {
        indexOfSegmentEditing.set(undefined);
    }

    function saveChangesAndExit(){
        const currRun = $currentRun;
        if(!currRun){
            throw('Trying to save segment without run available');
        }
        currRun.setSegmentAtIndex($segment, $indexOfSegmentEditing || 0);
        currentRun.set(currRun);
        indexOfSegmentEditing.set(undefined);
    }
</script>

{#key segment}
{#if segment}
    <FullBodyCenter>
        <h1>{$segment.name}</h1>
        <TextField
            label="Name"
            labelPlacement="float"
            bind:value={$segment.name}
        />

        <label class="mt-8" for="edit-mph">
            Speed (in MPH)
        </label>
        <NumberStepper
            id="edit-mph"
            bind:value={$segment.speedInMPH}
            step={0.1}
        />

        <!-- Edit the duration in mph -->
        <span class="mt-12">Edit Duration in MPH</span>
        <div class="flex">
            <div class="flex flex-col">
                <Button
                    on:click = {() => {
                        adjustSegmentDuration(30);
                    }}
                    variant='fill'
                    color='neutral'
                    size='sm'
                >+</Button>
                <Button
                    on:click = {() => {
                        adjustSegmentDuration(-30);
                    }}
                    variant='fill'
                    color='neutral'
                    size='sm'
                >-</Button>
            </div>
                
            <span class="text-2xl flex items-center mx-4">{Math.floor($segment.durationInSeconds / 60)}:{($segment.durationInSeconds % 60) < 10 ? '0' : ''}{$segment.durationInSeconds % 60}</span>

            <div class="flex flex-col">
                <Button
                    on:click = {() => {
                        adjustSegmentDuration(5);
                    }}
                    variant='fill'
                    color='neutral'
                    size='sm'
                >+</Button>
                <Button
                    on:click = {() => {
                        adjustSegmentDuration(-5);
                    }}
                    variant='fill'
                    color='neutral'
                    size='sm'
                >-</Button>
            </div>
        </div>
        
        <ButtonGroup variant="outline" class="mt-12">
            <Button on:click={cancelChanges}>Cancel</Button>
            <Button on:click={saveChangesAndExit}>Save Changes</Button>
        </ButtonGroup>
    </FullBodyCenter>
    {/if}
{/key}
