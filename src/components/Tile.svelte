<script lang="ts">
	import type { turnType } from '../types/Tictactoe';
	import { isNumber } from '../utils';
	// Write logic
	export let tileValue: number | turnType = 0;
	export let handleClick: (value: number | turnType) => void;
  export let isWinner=false;
</script>

<!-- 
  @component
  
  <Tile {tileValue} {handleClick} {isWinner} />
  
 -->

<button on:click={() => handleClick(tileValue)} disabled={!isNumber(tileValue)} class={isWinner ? 'winner-position': ''}>
	{isNumber(tileValue) ? '' : tileValue}
</button>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	/* Write the styling */
	button {
		font-family: 'Montserrat', sans-serif;
		font-size: 32px;
		width: 48px;
		height: 48px;
		outline: none;
		border: 3px solid transparent;
		color: #212738;
		background-color: #ffeecf;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 0.3s ease;

		&:active:not(:disabled) {
			transform: scale(0.9);
		}

    &.winner-position {
      background-color: #212738;
      color: #ffeecf;
    }
	}
</style>
