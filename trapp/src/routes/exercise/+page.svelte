<script>
  import Linkbutton from "../../lib/components/linkbutton.svelte";

let selectedExerciseTypes = [];
let selectedStepCount = [];
let exerciseHour = [];
let activityLevel = [];
    
    const exerciseTypes = [
      { label: 'Strength Training', value: 'Strength Training' },
      { label: 'Cardio', value: 'Cardio' },
      { label: 'HIIT', value: 'HIIT' },
      { label: 'Yoga', value: 'Yoga' },
      { label: 'Sports', value: 'Sports' },
      { label: 'Pilates', value: 'Pilates' },
      { label: 'Other', value: 'Other' },
    ];

    const exerciseHours = [
      { label: '0', value: '0' },
      { label: '0.5', value: '0.5' },
      { label: '1', value: '1' },
      { label: '1.5', value: '1.5' },
      { label: '2+', value: '2+' },
    ];

    const activityLevels = [
      { label: '0', value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
    ]

    const stepCounts = [
      { label: '<2000', value: '<2000' },
      { label: '2000-4999', value: '2000-4999' },
      { label: '5000', value: '9999' },
      { label: '>10000', value: '>10000' },
    ]
    
    function toggleExerciseType(value) {
    if (selectedExerciseTypes.includes(value)) {
      selectedExerciseTypes = selectedExerciseTypes.filter(type => type !== value);
    } else {
      selectedExerciseTypes = [...selectedExerciseTypes, value];
    }
  }

  function selectExerciseHour(value) {
    exerciseHour = value;
  }

  function selectStepCount(value) {
    selectedStepCount = value;
  }

  function selectActivityLevel(value) {
    activityLevel = value;
  }

  </script>
  
  <h1>Exercise</h1>

  <Linkbutton/>

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

  <div class="button-container">
    <div class="small-box">
        <p>Exercise Score</p>
    </div>

    <div class="medium-box">
        <p>Recommendations</p>
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
      color: #007BFF;
    }
  
    p {
      font-size: 18px;
      text-align: left;
      margin-bottom: 10px;
    }
  
    input[type="range"] {
      width: 100%;
      height: 20px;
      border-radius: 16px;
      -webkit-appearance: none;
      margin: 10px 0;
      background: #ddd;
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
      margin-bottom: 30px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .small-box {
        width: 250px;
        height: 250px;
        padding: 16px;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .medium-box {
        width: 600px; /* Adjust the width based on your needs */
        height: 250px;
        padding: 16px;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    background-color: #007BFF;
    color: white;
    }
    
  </style>
  