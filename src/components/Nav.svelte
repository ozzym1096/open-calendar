<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		clear: both;
		content: '';
		display: block;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		display: inline-block;
		position: relative;
	}

	.selected::after {
		background-color: rgb(255, 62, 0);
		bottom: -1px;
		content: '';
		display: block;
		height: 2px;
		position: absolute;
		width: calc(100% - 1em);
	}

	a {
		display: block;
		padding: 1em 0.5em;
		text-decoration: none;
	}
</style>

<nav>
	<ul>
		<li>
			<a class={segment === undefined ? 'selected' : ''} href=".">home</a>
		</li>
	</ul>
</nav>
