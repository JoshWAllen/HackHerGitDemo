<script>
  const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
</script>

<div class="card">
  <h1>Mood History</h1>
  <div class="days">
    {#each days as day, i}
      <div class="day">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9bb169"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-smile"
          ><circle cx="12" cy="12" r="10" /><path
            d="M8 14s1.5 2 4 2 4-2 4-2"
          /><line x1="9" x2="9.01" y1="9" y2="9" /><line
            x1="15"
            x2="15.01"
            y1="9"
            y2="9"
          /></svg
        >
        <p>{day}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .card {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
  }

  .days {
    display: flex;
    gap: 2rem;
  }

  .day {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
