<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import monthsArr from '../utils/monthsArr.js';
import {onMount} from 'svelte';

let start, end;

function checkScrollEnd(e) {
	let elem = e.currentTarget;
	if (elem.scrollHeight - elem.scrollTop === elem.offsetHeight) {
		console.log("bottom");
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