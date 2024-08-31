<script lang="ts">
	import Run from "$lib/Run";
	import type RunSegment from "$lib/RunSegment";

    const oldRunsAsString = localStorage.getItem('runs') || '[]';
    const oldRuns: RunSegment[][] = JSON.parse(oldRunsAsString);

    const runs = oldRuns.map((runSegments) => {
        return new Run(runSegments);
    });
    console.log(runs);
</script>

{#each runs as run}
<div>
    <span>RUN</span>
</div>
{/each}