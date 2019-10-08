<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import createMonthsArr from '../utils/monthsArr.js';

const monthsArr = createMonthsArr(2019, 2050);

let start, end;
</script>

<svelte:head>
	<title>Svelte Calendar Demo</title>
</svelte:head>

<div class="calendar">
	<VirtualList items={monthsArr} let:item bind:start bind:end>
		<Month month={item}/>
	</VirtualList>

	<p>showing {start}-{end} of {monthsArr.length} rows</p>
</div>

<style>
	.calendar {
		height: 75vh;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
</style>