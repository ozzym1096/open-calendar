<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import {createMonthsArr, pushToMonthsArr, sliceMonthsArr} from '../utils/monthsArr.js';
import {onMount, tick} from 'svelte';

let start, end, monthsArr = createMonthsArr(2019, 2021);

async function checkScrollEnd(e) {
	const elem = e.currentTarget;
	// Virtual list reaches bottom
	if (elem.scrollHeight - elem.scrollTop === elem.offsetHeight) {
		monthsArr = sliceMonthsArr(monthsArr)
		await tick()
		monthsArr = pushToMonthsArr(monthsArr)
	}
	// Virtual list reaches top
	if (elem.scrollTop === 0) {
		console.log('top')
	}
}

onMount(() => {
	document.querySelector('svelte-virtual-list-viewport').addEventListener('scroll', checkScrollEnd);
})
</script>

<svelte:head>
	<title>Svelte Calendar Demo</title>
</svelte:head>

<div class="calendar">
	<VirtualList itemHeight={235} items={monthsArr} let:item bind:start bind:end>
		<Month month={item}/>
	</VirtualList>

	<p>showing {start}-{end} of {monthsArr.length} rows</p>
</div>

<style>
	.calendar {
		height: 75vh;
		margin-left: auto;
		margin-right: auto;
		width: 75%;
	}
</style>