import { writable } from "svelte/store";

export let activeState = writable(0);
export let refreshState = writable(1);

export let storeMessage = writable(0);
