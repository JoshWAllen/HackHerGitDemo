<script>
    let waterIntake = 0; // Initial water intake
    const goal = 8; // Daily water intake goal in cups
  
    function drinkWater() {
      if (waterIntake < goal) {
        waterIntake++;
      }
    }
  
    function resetIntake() {
      waterIntake = 0;
    }
  </script>
  
  <style>
    /* Existing styles */
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
      padding-top: 20px; /* Adjusted padding */
      font-family: Arial, sans-serif;
      color: #333;
    }
  
    .progress-bar {
      width: 300px;
      height: 20px;
      background-color: #E9EDC9;
      border-radius: 10px;
      margin-bottom: 20px;
      overflow: hidden;
    }
  
    .progress-bar-inner {
      height: 100%;
      background-color: #606C38;
      transition: width 0.5s ease-in-out;
    }
  
    button {
      padding: 10px 20px;
      background-color: #f0f0f0;
      border: none;
      border-radius: 5px;
      color: black;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
      margin-bottom: 10px; /* Adjusted margin */
    }
  
    button:hover {
      background-color: #606C38;
      color: white;
      transform: scale(1.05); /* Button scale on hover */
    }
  
    button:active {
      transform: scale(0.95); /* Button scale on click */
    }
  
    h1 {
      margin-bottom: 20px; /* Add margin between headings and progress bar */
      text-align: center; /* Center text */
    }

    h6 {
      color: #606C38;
      font-size: 20px;
    }
  </style>
  
  <div class="container">
    <h1>Water Intake Tracker</h1>
    <h6>A healthy amount of water to drink a day is 8 cups.</h6>
    
    <div class="progress-bar">
      <div class="progress-bar-inner" style="width: {waterIntake / goal * 100}%"></div>
    </div>
  
    <p>{waterIntake} / {goal} cups drank today</p>
  
    <button on:click={drinkWater}>Add Cup</button>
    <button on:click={resetIntake}>Reset Intake</button>
  </div>
  