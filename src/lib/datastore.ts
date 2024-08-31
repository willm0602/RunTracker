import { writable } from "svelte/store";
import Run from "./Run";

const currentRun = writable<Run | undefined>(undefined);
const indexOfSegmentEditing = writable<number | undefined>(undefined);
const showRunOptions = writable<boolean>(false);

export {
    currentRun,
    indexOfSegmentEditing,
    showRunOptions
}