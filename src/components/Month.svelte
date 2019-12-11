<script>
	import {onMount, tick} from 'svelte';
	import {currentMonth} from '../utils/stores.js'

	export let month;
	export let calendarDiv;

	const datesArr = [];
	
	let monthDiv;

	for (let i = month.startDate; i <= month.lastDate; i++) {
		datesArr.push(new Date(month.year, month.month, i))
	}

	const monthString = datesArr[0].toDateString();

	function monthInView (entries, observerObj) {
		entries.forEach(intersection => {
			if (intersection.isIntersecting) {
				currentMonth.set(monthString)
				observerObj.unobserve(intersection.target)
				observerObj.observe(intersection.target)
			}
		});
	}

	onMount(async () => {
		await tick()
		const observer = new IntersectionObserver(monthInView, {
			root: calendarDiv,
			rootMargin: "0px",
			threshold: 0.25
		});
		observer.observe(monthDiv)
	})
</script>

<div class="month" bind:this={monthDiv}>
	{#each datesArr as date, i}
		{#if i === 0 && date.getDate() === 1}
			<div class="day" class:first-day={date.getDate() === 1} style={`margin-left: calc(var(--day-width) * ${date.getDay()}`}>
				<p>{date.getMonth() + 1}.{date.getDate()}.{date.getFullYear()}</p>
			</div>
		{:else}
			<div class="day" class:first-day={date.getDate() === 1}>
				<p>{date.getMonth() + 1}.{date.getDate()}.{date.getFullYear()}</p>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	* {
		--day-width: calc(100% / 7);
	}

	p {
		font-size: 0.75rem;
	}

	.month {
		display: flex;
		flex-flow: row wrap;
		width: 100%;
	}

	.day {
		flex-basis: var(--day-width);
		height: 15vh;
	}

	.first-day {
		border: solid 1px red;
		box-sizing: border-box;
	}
</style>