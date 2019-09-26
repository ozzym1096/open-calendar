<script>
export let month;
const daysArr = [];
for (let i = 1; i <= month.days; i++) {
	daysArr.push(i)
}
</script>

<div class="container">
	{#each daysArr as day}
		<div class="day"><p>{month.year},{month.month}: {day} days</p></div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.day{
		width: 100%;
	}
</style>