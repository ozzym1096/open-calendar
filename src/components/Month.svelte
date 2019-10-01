<script>
export let month;

const datesArr = [];

for (let i = month.startDate; i <= month.lastDate; i++) {
	datesArr.push(new Date(month.year, month.month, i))
}
</script>

<div class="month">
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
		height: 5vh;
	}

	.first-day {
		border: solid 1px red;
		box-sizing: border-box;
	}
</style>