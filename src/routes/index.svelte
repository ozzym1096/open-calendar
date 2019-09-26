<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import monthsArr from '../utils/monthsArr.js';
</script>

<svelte:head>
	<title>Svelte Calendar Demo</title>
</svelte:head>

<VirtualList height="500px" items={monthsArr} let:item>
	<Month month={item}/>
</VirtualList>

<style>
	
</style>