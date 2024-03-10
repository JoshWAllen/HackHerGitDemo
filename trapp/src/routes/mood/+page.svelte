<script>
    let mood = '';
    let stress = '';
    let day = '';

    const moods = [
      { label: '😀 Happy' ,value: 'Happy' },
      { label: '😐 Neutral', value: 'Neutral' },
      { label: '😢 Sad', value: 'Sad' },
      { label: '😡 Angry', value: 'Angry' },
    ];

    const stresses = [
      { label: 'None', value: 'None'},
      { label: 'Low', value: 'Low' },
      { label: 'Moderate', value: 'Moderate' },
      { label: 'High', value: 'High' }
    ];

    const days = [
        {label: 'Great', value: 'Great'},
        {label: 'Good', value: 'Good'},
        {label: 'Ok', value: 'Ok'},
        {label: 'Bad', value: 'Bad'},
        {label: 'Terrible', value: 'Terrible'}
    ];

    function selectMood(value) {
      mood = value;
    }

    function selectStress(value) {
      stress = value;
    }

    function selectDay(value){
        day = value;
    }
</script>

<style>

h5 {
  color: #606C38;
  font-size: 20px;
}


    .container {
      text-align: center;
      margin-top: 50px;
      font-family: Arial, sans-serif;
      color: #333;
    }

    .box {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .button-group {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }

    .mood-button,
    .stress-button,
    .day-button {
      margin: 5px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #f0f0f0;
      border: none;
      text-align: center;
      transition: background-color 0.3s, transform 0.3s;
    }

    .mood-button:hover,
    .stress-button:hover,
    .day-button:hover {
      background-color: #E9EDC9;
      transform: scale(1.05);
    }

    .mood-button.active,
    .stress-button.active,
    .day-button.active {
      background-color:#606C38;
      color: white;
      transform: scale(1.1);
    }
</style>

<div class="container">
    <h1>Mood Tracker</h1>
    <h5>Rate your mood, stress level and how the day was.</h5>

    <div class="box">
        <div class="button-group">
          <h2>Mood</h2>
          {#each moods as { label, value }}
            <button 
              class="mood-button {mood === value ? 'active' : ''}"
              on:click={() => selectMood(value)}
            >
              {label}
            </button>
          {/each}
        </div>
    </div>

    <div class="box">
        <div class="button-group">
          <h2>Stress</h2>
          {#each stresses as { label, value }}
            <button 
              class="stress-button {stress === value ? 'active' : ''}"
              on:click={() => selectStress(value)}
            >
              {label}
            </button>
          {/each}
        </div>
    </div>

    <div class="box">
        <div class="button-group">
            <h2>Rating</h2>
            {#each days as { label, value }}
              <button 
                class="day-button {day === value ? 'active' : ''}"
                on:click={() => selectDay(value)}
              >
                {label}
              </button>
            {/each}
        </div>
    </div>
</div>
