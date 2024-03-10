import { writable, derived } from "svelte/store";

export const exercise = writable(0);
export const habits = writable(0);
export const mood = writable(0);
export const nutrition = writable(0);
export const sleep = writable(0);
export const water = writable(0);

export const score = derived(
  [exercise, habits, mood, nutrition, sleep, water],
  ([$exercise, $habits, $mood, $nutrition, $sleep, $water]) =>
    Math.floor(($exercise + $habits + $mood + $nutrition + $sleep + $water) / 6)
);
