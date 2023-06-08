<main class="container">
	<slot />
</main>

<style lang="scss">
	:global(*) {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	:global(button, input, optgroup, select, textarea) {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
	}

	:global(ul, ol) {
		list-style: none;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	:global(a:hover, a:focus) {
		text-decoration: underline;
	}

	.container {
		width: 100%;
		max-width: 600px;
		height: 100vh;
		margin: 0 auto;
		padding: 20px;

		@media (min-width: 768px) {
			padding: 30px;
		}
	}
</style>
