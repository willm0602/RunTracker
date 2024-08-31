<script lang="ts">
	import { currentRun } from "$lib/datastore";
	import type RunSegment from "$lib/RunSegment";
	import { Button } from "svelte-ux";

    function saveRun(){
        const oldRunsAsString = localStorage.getItem('runs') || '[]';
        const oldRuns: RunSegment[][] = JSON.parse(oldRunsAsString);
        const run = $currentRun;
        const segments = run?.segments;
        if(segments){
            const runs = [
                ...oldRuns,
                segments
            ];
            localStorage.setItem('runs', JSON.stringify(runs));
        }
    }

</script>

<h1>You did it!</h1>
<Button
    color='info'
    variant='fill'
    on:click={() => {
        currentRun.set(undefined);
    }}
>
    Return Home
</Button>

<Button
    color='secondary'
    variant='fill'
    class='mt-4'
    on:click={saveRun}
>
    Save Run
</Button>