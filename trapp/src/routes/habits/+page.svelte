<script>
    let habits = [
      { name: 'Exercise', completed: false },
      { name: 'Read', completed: false },
      { name: 'Meditate/Yoga', completed: false },
      { name: 'Journal', completed: false},
      { name: 'Clean', completed: false},
      { name: 'Walk/Run', completed: false},
      { name: 'Take Medication', completed: false},
      { name: 'Go to Work or School', completed: false}
    ];
  
    let newHabit = '';
  
    function addHabit() {
      habits = [...habits, { name: newHabit, completed: false }];
      newHabit = '';
      updateCompletedCount();
    }
  
    function toggleCompleted(index) {
      habits[index].completed = !habits[index].completed;
      habits = [...habits];
      updateCompletedCount();
    }
  
    function deleteHabit(index) {
      habits.splice(index, 1);
      habits = [...habits];
      updateCompletedCount();
    }
  
    let completedCount = 0;
  
    function updateCompletedCount() {
      completedCount = habits.filter(habit => habit.completed).length;
    }
  </script>
  
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 0;
    }
  
    h1 {
      color: #333;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    h6{
        text-align: center;
        margin: 2px
    
    }
    input[type="text"] {
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
    }
  
    button {
      padding: 8px 16px;
      font-size: 16px;
      color: rgb(7, 0, 8);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  
    button:hover {
      opacity: 0.8;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    li {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }
  
    .habit-btn {
      padding: 8px;
      font-size: 16px;
      border: 2px solid transparent;
      border-radius: 20px;
      cursor: pointer;
      flex: 1;
      text-align: left;
      transition: background-color 0.3s, border-color 0.3s;
    }
  
    .habit-btn.completed {
      background-color: #539574;
      border-color: #86dbc3;
    }
  
    .delete-btn {
      margin-left: 10px;
      background-color: #f44336;
    }
  
    .delete-btn:hover {
      background-color: #d32f2f;
    }
  
    .stats {
      margin-top: 20px;
      text-align: center;
    }
    
    .legend {
      text-align: center;
      margin-top: 20px;
    }
    
    .legend-item {
      display: inline-block;
      margin-right: 20px;
    }
  </style>
  
  <h1>⭑Habit Tracker⭑</h1>
<h6>Select what habits you have done today. If needed, add or delete what applies to you.</h6>
<h6>Be sure to have at least 5 habits for an accurate reading</h6>

<input type="text" bind:value={newHabit} placeholder="Enter new habit">
<button on:click={addHabit}>Add Habit</button>

<ul>
  {#each habits as habit, index}
    <li>
      <button class="habit-btn {habit.completed ? 'completed' : ''}" on:click={() => toggleCompleted(index)}>{habit.name}</button>
      <button class="delete-btn" on:click={() => deleteHabit(index)}>Delete</button>
    </li>
  {/each}
</ul>

<div class="stats">
  <p>Total Habits: {habits.length}</p>
  <p>Completed Habits: {completedCount}</p>
</div>

<div class="legend">
  <div class="legend-item">
    <button class="habit-btn" style="background-color: #539574;"></button> Completed
  </div>
  <div class="legend-item">
    <button class="habit-btn"></button> Incomplete
  </div>
</div>