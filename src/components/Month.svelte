<script>
export let month;
// @TODO margin-bottom for months ending on a Saturday
const firstDayOffset = new Date(month.year, month.month, 1).getDay();
const firstMonthTest = month.year !== 2019 || month.month !== 0;

const daysArr = [];
for (let i = 1; i <= month.days; i++) {
	daysArr.push(i)
}
</script>

<div class="month" class:not-first-month={firstMonthTest}>
	{#each daysArr as day, i}
		{#if i === 0}
			<div class="day first-day" style={`margin-left: calc(var(--day-width) * ${firstDayOffset})`}><p>{month.month + 1}.{day}.{month.year}</p></div>
		{:else}
			<div class="day"><p>{month.month + 1}.{day}.{month.year}</p></div>
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

		&.not-first-month {
			margin-top: -5vh;
		}
	}

	.day {
		flex-basis: var(--day-width);
		height: 5vh;

		&:first-child {
			border: solid 1px red;
			box-sizing: border-box;
		}
	}
</style>