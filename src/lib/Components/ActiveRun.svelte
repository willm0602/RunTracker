<script lang="ts">
    import { currentRun, type RunSegment } from '$lib';
	import { Button, number, Progress } from 'svelte-ux';
	import { writable } from 'svelte/store';
	import FullBodyCenter from './FullBodyCenter.svelte';
	import CompletedScreen from './CompletedScreen.svelte';

    type AnnotatedSegment = {
        start: number,
        end: number
    } & RunSegment

    const timerRunSegments: RunSegment[] = [
        {
			durationInSeconds: 1,
			speedInMPH: 0,
			name: '3'
		},
        {
			durationInSeconds: 1,
			speedInMPH: 0,
			name: '2'
		},
        {
			durationInSeconds: 1,
			speedInMPH: 0,
			name: '1'
		},
    ];

    const activeSegments: RunSegment[] = [
        ...timerRunSegments,
        ...$currentRun?.segments || []
    ];

    const annotatedSegments: AnnotatedSegment[] = activeSegments.map((segment) => {
        return {
            ...segment,
            start: 0,
            end: segment.durationInSeconds
        }
    });
    for(let i = 1; i < annotatedSegments.length; i++){
        const prevSegment = annotatedSegments[i-1];
        const segment = annotatedSegments[i];
        segment.start = prevSegment.end;
        segment.end = segment.start + segment.durationInSeconds;
        annotatedSegments[i] = segment;
    }
    
    function getCurrentAnnotatedSegmentAtTime(time: number): AnnotatedSegment | undefined{
        for(const segment of annotatedSegments){
            if(segment.start <= time && segment.end >= time)
                return segment;
        }
    }

    const start = writable<Date | undefined>(undefined);
    const secondsSinceStart = writable<number | undefined>(undefined);
    const currentSegment = writable<AnnotatedSegment | undefined>(undefined);
    const secondsSinceStartOfSegment = writable<number | undefined>(undefined);
    const isCompleted = writable<boolean>(false);

    start.subscribe((newStart) => {
        if(!newStart)
            return undefined;
        const now = new Date();
        secondsSinceStart.set((now.getTime() - newStart?.getTime()) / 1000)
    })

    let frame;
    function update(){
        frame = requestAnimationFrame(update);
        if($start){
            const now = new Date();
            const secondsSince = (now.getTime() - $start.getTime()) / 1000
            secondsSinceStart.set(secondsSince);
            const newSegment = getCurrentAnnotatedSegmentAtTime(secondsSince)
            currentSegment.set(newSegment);
            secondsSinceStartOfSegment.set(secondsSince - (newSegment?.start || 0));
            isCompleted.set(annotatedSegments.filter((segment) => {
                segment.end < secondsSince
            }).length == 0);
        }
    }
    update();
</script>

{#key secondsSinceStartOfSegment}
<FullBodyCenter>

    {#if !$start}
    <Button
        class="text-5xl h-96 w-72"
        color='primary'
        variant='fill-outline'
        rounded='full'
        on:click={() => {
            start.set(new Date);
        }}
    >
        Start
    </Button>
    {:else if $currentSegment}
        <h1>{$currentSegment.name}</h1>
        <Progress value={($secondsSinceStartOfSegment || 0) / ($currentSegment.end - $currentSegment.start )} class="[--color:theme(colors.success)]" />
    {:else if $isCompleted}
        <CompletedScreen />
    {/if}
</FullBodyCenter>
{/key}