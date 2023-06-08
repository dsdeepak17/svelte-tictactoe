<script lang="ts">
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
  let winner: turnType | null = null;
  let winningPositions: number[] = [];
  let isDrawn: boolean = false;

  function handleClick(value: turnType | number): void {
    if (!isNumber(value)) return;

    if (typeof value === 'number')  {
      tiles[value] = turn;
      turn = turnComplement[turn];
    }

    checkGameState();
  }

  function checkGameState(): void {
    // Define the winning combinations as an array of arrays
    const winningCombinations: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    // Check if any winning combination exists
    const winningCombination = winningCombinations.find(combination => {
      const [a, b, c] = combination;
      const tilesValues = [tiles[a], tiles[b], tiles[c]];
      return tilesValues.every(value => value === turn);
    });

    if (winningCombination) {
      winner = turn;
      winningPositions = winningCombination;
      isDrawn = false;
    } else if (tiles.every(value => !isNumber(value))) {
      // All tiles are filled and no winner
      winner = null;
      winningPositions = [];
      isDrawn = true;
    } else {
      winner = null;
      winningPositions = [];
      isDrawn = false;
    }
  }
</script>

<div class="game-container">
  {#each tiles as tileValue, index}
    <Tile {tileValue} {handleClick} isWinner={winningPositions.includes(index)} />
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
