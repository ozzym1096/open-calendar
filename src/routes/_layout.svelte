<script>
import Nav from '../components/Nav.svelte';

export let segment;
</script>

<style>
	main {
		background-color: white;
		box-sizing: border-box;
		margin: 0 auto;
		max-width: 56em;
		padding: 2em;
		position: relative;
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
