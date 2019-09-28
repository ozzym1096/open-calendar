<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import monthsArr from '../utils/monthsArr.js';
</script>

<svelte:head>
	<title>Svelte Calendar Demo</title>
</svelte:head>

<div class="calendar">
	<VirtualList items={monthsArr} let:item>
		<Month month={item}/>
	</VirtualList>
</div>

<style>
	.calendar {
		height: 75vh;
		margin-left: auto;
		margin-right: auto;
		width: 75%;
	}
</style>