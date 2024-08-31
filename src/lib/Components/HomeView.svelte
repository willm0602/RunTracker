<script lang="ts">
    import {Button} from 'svelte-ux';
    import { currentRun, showRunOptions } from "$lib/datastore";
	import Run from "$lib/Run";
	import FullBodyCenter from './FullBodyCenter.svelte';

    function startRun() {
        const run = new Run();
        currentRun.set(run);
    }
</script>

<FullBodyCenter>

    <h1 class="text-center">My Pace</h1>
    <Button variant='fill' 
        color='primary'
        on:click={startRun}
    >Create a new Run</Button>
    
    <Button variant='fill' 
        color='primary'
        on:click={() => {
            showRunOptions.set(true);
        }}
        class="mt-6"
    >See Previous Runs</Button>
</FullBodyCenter>