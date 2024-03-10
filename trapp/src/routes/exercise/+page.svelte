<script>
    let exerciseHours = 1;
    let activityLevel = 3;
    let stepCount = 5500

    let xPos = 50;
    let yPos = 50;
    
    let selectedExerciseTypes = [];
    
    const exerciseTypes = [
      { label: 'Strength Training', value: 'Strength Training' },
      { label: 'Cardio', value: 'Cardio' },
      { label: 'HIIT', value: 'HIIT' },
      { label: 'Yoga', value: 'Yoga' },
      { label: 'Sports', value: 'Sports' },
      { label: 'Pilates', value: 'Pilates' },
      { label: 'Other', value: 'Other' },
    ];
    
    function toggleExerciseType(value) {
      if (selectedExerciseTypes.includes(value)) {
        selectedExerciseTypes = selectedExerciseTypes.filter(type => type !== value);
      } else {
        selectedExerciseTypes = [...selectedExerciseTypes, value];
      }
    }
  </script>
  
  <h1>EXERCISE</h1>
  
  <div class="box">
    <p>Enter today's exercise hours:</p>
    <label>
      <input type="range" bind:value={exerciseHours} min="0" max="2" step="0.5" />
    </label>
    
    <p>Exercise Hours: {exerciseHours === 2 ? '2+' : exerciseHours}</p>
  </div>

 <div class="box">
  <p>Rate your activity level:</p>
  <label>
  <input type="range" bind:value={activityLevel} min="1" max="5"/>
  </label>
    
  <p>Activity Level: {activityLevel}</p>
 </div>
  
 <div class="box">
    <p>Enter today's step count:</p>
    <label>
      <input type="range" bind:value={stepCount} min="1000" max="10000" step="500"/>
    </label>
      
    <p>Step Count: {stepCount === 10000 ? '10 000+' : stepCount}</p>
  </div>

  <div class="box">
    <p>Select Exercise Type(s)</p>
    <div class="button-container">
    {#each exerciseTypes as { label, value }}
      <button
        class="exercise-button {selectedExerciseTypes.includes(value) ? 'active' : ''}"
        on:click={() => toggleExerciseType(value)}
      >
        {label}
      </button>
    {/each}
    </div>
  </div>

  <div class="small-box">
    <p>Exercise Score</p>
  </div>

  <div class="medium-box">
    <p>Recommendations</p>
  </div>
  
  <style>
    h1 {
      text-align: center;
      font-size: 35px;
    }
  
    p {
      font-size: 20px;
      text-align: left;
    }
  
    input[type="range"] {
      width: 100%;
      height: 20px;
      border-radius: 16px;
      -webkit-appearance: none;
      margin: 10px 0;
    }
  
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #04AA6D;
      cursor: pointer;
    }
  
    .box {
      width: 100%;
      padding: 16px;
      margin-bottom: 50px;
      background: lightgrey;
      border-radius: 16px;
    }

    .small-box {
        width: 250px;
        height: 250px;
        margin-bottom: 20px; /* Adjust the margin between small and medium boxes */
        padding: 16px;
        background: lightgrey;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .medium-box {
        width: 400px; /* Adjust the width based on your needs */
        height: 250px;
        padding: 16px;
        background: lightgrey;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly; /* Change to space-evenly */
      align-items: center;
      margin-bottom: 20px;
    }
  
    .container {
      text-align: center;
      margin-top: 50px;
    }
  
    .exercise-button {
      margin: 5px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #f0f0f0;
      border: none;
      text-align: center;
      transition: background-color 0.3s;
    }
  
    .exercise-button.active {
      background-color: #4caf50;
      color: white;
    }
  </style>
  