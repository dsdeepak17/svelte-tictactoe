<script lang="ts">
  import { afterUpdate } from 'svelte';
  import type { turnComplementType, turnType } from '../types/Tictactoe';
  import { isNumber } from '../utils';
  import Tile from './Tile.svelte';

  const turnComplement: turnComplementType = {
    x: "o",
    o: "x",
  }

  // write logic
  const tiles: (number | turnType)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let turn: turnType = 'x';

  function handleClick(value: turnType | number): void {
    //write code here
    if (!isNumber(value)) return;

    if (typeof value === 'number')  {
      tiles[value] = turn;
      turn = turnComplement[turn];
    }
  }

  function checkGameState(): void {
    // Define the winning combinations as an array of arrays
    const winningCombinations: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    // Check if any winning combination exists
    const isWin = winningCombinations.some(combination => {
      const [a, b, c] = combination;
      const tilesValues = [tiles[a], tiles[b], tiles[c]];
      return tilesValues.every(value => value === turn);
    });

    // Check if the game is drawn (all tiles are filled)
    const isDraw = tiles.every(value => !isNumber(value));

    if (isWin) {
      console.log(`${turn} has won`);
    } else if (isDraw) {
      console.log("The game is drawn!");
    }
  }

  afterUpdate(() => {
    checkGameState();
  })
</script>

<div class="game-container">
  {#each tiles as tileValue}
    <Tile {tileValue} {handleClick} />
  {/each}
</div>

<style lang="scss">
  /* write styling */
  .game-container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;
  }
</style>
