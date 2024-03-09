<script>
    let mood = '';
  
    const moods = [
      { label: '😄 Happy', value: 'Happy' },
      { label: '😐 Neutral', value: 'Neutral' },
      { label: '😢 Sad', value: 'Sad' },
      { label: '😡 Angry', value: 'Angry' }
    ];
  
    function selectMood(value) {
      mood = value;
    }
  </script>
  
  <style>
    .container {
      text-align: center;
      margin-top: 50px;
    }
    
    .mood-button {
      margin: 5px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #f0f0f0;
      border: none;
      text-align: center;
      transition: background-color 0.3s; /* Add transition effect */
    }
    
    .mood-button.active {
      background-color: #4caf50; /* Light up color */
      color: white;
    }
  </style>
  
  <div class="container">
    <h1>Mood</h1>
    <p>How was your mood today?</p>
    
    {#each moods as { label, value }}
      <button 
        class="mood-button {mood === value ? 'active' : ''}"
        on:click={() => selectMood(value)}
      >
        {label}
      </button>
    {/each}
  
  </div>
  