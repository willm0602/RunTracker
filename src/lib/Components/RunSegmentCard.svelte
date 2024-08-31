<script lang="ts">
	import { currentRun, indexOfSegmentEditing } from "$lib/datastore";
	import type RunSegment from "$lib/RunSegment";
	import { Button, ButtonGroup, Card, Header } from "svelte-ux";

    import {mdiAccountArrowDown} from '@mdi/js'

    export let segment: RunSegment;
    export let index: number;
    const {
        durationInSeconds
    } = segment;

    const durationInMinutes = Math.floor(durationInSeconds / 60);
    const durationOverflowSeconds = durationInSeconds - 60 * durationInMinutes;
</script>

<div
    class="border-solid border-2 mt-2 mb-4 p-4 flex"
>
    <div class="flex-col flex-1">
        <h2
        class="my-0"
        >{segment.name}</h2>
        <p class="mb-0">{durationInMinutes}:{durationOverflowSeconds < 10 ? '0' : ''}{durationOverflowSeconds}</p>
    </div>
        
    <ButtonGroup class="mb-0 float-right">
        <Button
            color='info'
            variant='fill-light'
            size='sm'
            on:click={() => {
                indexOfSegmentEditing.set(index);
            }}
        >
            Edit
        </Button>
        <Button
            color='accent'
            variant='fill-light'
            size='sm'
            on:click={() => {
                const currRun = $currentRun;
                currRun?.copySegmentAt(index);
                currentRun.set(currRun);
            }}
        >
            Copy
        </Button>
        <Button
            color='danger'
            variant='fill-light'
            size='sm'
            on:click={() => {
                const currRun = $currentRun;
                currRun?.removeSegmentAtIndex(index);
                currentRun.set(currRun);
            }}
        >
            Delete
        </Button>

        {#if $currentRun?.canMoveUpAtIndex(index)}
        <Button
            color='secondary'
            variant='fill-light'
            size='sm'
            on:click={() => {
                const currRun = $currentRun;
                currRun?.moveSegmentAtIndexUp(index);
                currentRun.set(currRun);
            }}
            class="text-4xl p-0"
        >
            ↑
        </Button>
        {/if}

        {#if $currentRun?.canMoveDownAtIndex(index)}
        <Button
            color='secondary'
            variant='fill-light'
            size='sm'
            on:click={() => {
                const currRun = $currentRun;
                currRun?.moveSegmentAtIndexDown(index);
                currentRun.set(currRun);
            }}
            class="text-4xl p-0"
        >
        ↓
        </Button>
        {/if}
    </ButtonGroup>
</div>
  
