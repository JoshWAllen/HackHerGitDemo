<script>
  
    let mood = '';
    let notes = '';
    let moodHistory = [];
  
    const moods = [
      { label: 'Happy', value: 'Happy' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Sad', value: 'Sad' },
      { label: 'Angry', value: 'Angry' }
    ];
  
    function saveMood() {
      moodHistory = [...moodHistory, { mood, notes }];
      console.log(`Mood: ${mood}`);
      console.log(`Notes: ${notes}`);
      
  
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
    }
    
    .mood-button.active {
      background-color: #4caf50;
      color: white;
    }
    
    textarea {
      margin-top: 20px;
      width: 80%;
      height: 100px;
      font-size: 16px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  </style>
  
  <div class="container">
    <h1>Daily Mood Tracker</h1>
    <p>How do you feel today on a scale ?</p>
    
    {#each moods as { label, value }}
      <button 
        class="mood-button"
        class:selected={mood === value}
        on:click={() => mood = value}
        class:active={mood === value}
      >
        {label}
      </button>
    {/each}
    
    <textarea 
      placeholder="Add notes (optional)"
      bind:value={notes}
    ></textarea>
    
    </div>