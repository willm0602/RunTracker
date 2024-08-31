<script lang="ts">
  import {currentRun} from '$lib';
  import HomeView from '$lib/Components/HomeView.svelte';
  import RunView from '$lib/Components/RunView.svelte';
  import RunList from '$lib/Components/RunList.svelte';
	import { showRunOptions } from '$lib/datastore';

</script>

{#key currentRun}
  {#if $currentRun == undefined}
    {#if $showRunOptions }
      <RunList />
    {:else}
      <HomeView />
    {/if}
  {:else}
    <RunView />
  {/if}
{/key}