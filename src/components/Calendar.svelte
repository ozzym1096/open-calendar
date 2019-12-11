<script>
	import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
	import Month from '../components/Month.svelte'
	import createMonthsArr from '../utils/monthsArr.js'
	import {currentMonth} from '../utils/stores.js'

	const monthsArr = createMonthsArr(2019, 2050);

	let start, end, calendarDiv;
</script>

<h1>Current Month: {$currentMonth}</h1>
<div class="calendar" bind:this={calendarDiv}>
	<VirtualList items={monthsArr} let:item bind:start bind:end>
		<Month month={item} {calendarDiv}/>
	</VirtualList>	
</div>
<p>showing {start}-{end} of {monthsArr.length} rows</p>

<style>
	.calendar {
		height: 75vh;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
</style>