<script lang="ts">
    import { currentRun, indexOfSegmentEditing } from "$lib/datastore";
	import ActiveRun from "./ActiveRun.svelte";
	import EditRun from "./EditRun.svelte";
	import EditSegment from "./EditSegment.svelte";
</script>

{#if $currentRun}
    {#if $indexOfSegmentEditing !== undefined}
        <EditSegment />
    {:else if $currentRun.isActive}
        <ActiveRun/>
    {:else}
        <EditRun/>
    {/if}
{:else}
    <!-- TODO: include a proper error message -->
    <h1 class="text-red-600">Error: Weird State Hit</h1>
{/if}