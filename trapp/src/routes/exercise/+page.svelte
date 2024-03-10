<script>
    import Linkbutton from "../../lib/components/linkbutton.svelte";
  
  let exerciseHour = "";
  let activityLevel = "";
  let selectedStepCount = "";

  let exerciseHourScore = 0;
  let activityLevelScore = 0
  let selectedStepCountScore = 0

  const exerciseHours = [
    { label: '0', value: '0', number: 1 },
    { label: '0.25', value: '0.25', number: 2 },
    { label: '0.5', value: '0.5', number: 3 },
    { label: '0.75', value: '0.75', number: 4 },
    { label: '1', value: '1', number: 5 },
  ];

  const activityLevels = [
    { label: '0', value: '0', number: 1 },
    { label: '1', value: '1', number: 2 },
    { label: '2', value: '2', number: 3 },
    { label: '3', value: '3', number: 4 },
    { label: '4', value: '4', number: 5 },
    { label: '5', value: '5', number: 6 },
  ];

  const stepCounts = [
    { label: '<2000', value: '<2000', number: 1 },
    { label: '2000-4999', value: '2000-4999', number: 2 },
    { label: '5000-9999', value: '5000-9999', number: 3 },
    { label: '>10000', value: '>10000', number: 4 },
  ];

  function toggleExerciseType(value) {
    // Add your logic if needed
  }

  function selectExerciseHour(value) {
  exerciseHour = value;
  exerciseHourScore = value.number;
}

function selectActivityLevel(value) {
  activityLevel = value;
  activityLevelScore = value.number;
}

function selectStepCount(value) {
  selectedStepCount = value;
  selectedStepCountScore = value.number;
}

$: percentage = ((exerciseHourScore + activityLevelScore + selectedStepCountScore)/15)*100;

    </script>
    
    <h1>Exercise</h1>
  
    <div class="box">
      <p>Select today's exercise hours</p>
      <div class="button-container">
        {#each exerciseHours as { label, value }}
          <button
            class="exercise-button {exerciseHour === value ? 'active' : ''}"
            on:click={() => selectExerciseHour(value)}
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
    
    <div class="box">
      <p>Rate today's activity level</p>
      <div class="button-container">
        {#each activityLevels as { label, value }}
          <button
            class="exercise-button {activityLevel === value ? 'active' : ''}"
            on:click={() => selectActivityLevel(value)}
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
    
    <div class="box">
      <p>Select today's step count</p>
      <div class="button-container">
        {#each stepCounts as { label, value }}
          <button
            class="exercise-button {selectedStepCount === value ? 'active' : ''}"
            on:click={() => selectStepCount(value)}
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
    
  <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f8f8f8;
        color: #333;
      }
    
      h1 {
        text-align: center;
        font-size: 35px;
        color: #D4A373;
      }
    
      p {
        font-size: 18px;
        text-align: left;
        margin-bottom: 10px;
        color: #606C38;
      }
    
      .box {
        width: 100%;
        padding: 16px;
        margin-bottom: 30px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
  
      .button-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
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
      background-color: #606C38;
      color: white;
      }
      
    </style>
    