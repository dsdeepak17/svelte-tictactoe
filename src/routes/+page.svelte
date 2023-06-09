<script>
	import Tictactoe from '../components/Tictactoe.svelte';
	//write logic here
</script>


<svelte:head>
	<title>Tic Tac Toe</title>
</svelte:head>
<div class="container">
	<h1>TicTacToe</h1>
	<Tictactoe />
</div>

<style>
	/* Write styles here */
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
