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

<style global>
	h1,
	figure,
	p {
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-transform: uppercase;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		margin: 0 0 1em 0;
		max-width: 400px;
		width: 100%;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>