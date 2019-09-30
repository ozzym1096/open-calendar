<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import monthsArr from '../utils/monthsArr.js';

let start, end;
</script>

<svelte:head>
	<title>Svelte Calendar Demo</title>
</svelte:head>

<div class="calendar">
	<VirtualList itemHeight={175} items={monthsArr} let:item bind:start bind:end>
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