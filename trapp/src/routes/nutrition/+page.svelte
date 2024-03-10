<script>
    let vegetable = '';
    let carb = '';
    let protein = '';
    let vegetableScore = 0;
    let carbsScore = 0;
    let proteinScore = 0;
  
    const vegetables = [
      { label: 'Amazing', value: 'Amazing', number: 5 },
      { label: 'Good', value: 'Good', number: 4 },
      { label: 'Okay', value: 'Okay', number: 3 },
      { label: 'Not good', value: 'Not good', number: 2 },
      { label: 'Bad', value: 'Bad', number: 1 },
    ];
  
    const carbs = [
        { label: 'Amazing', value: 'Amazing', number: 5 },
      { label: 'Good', value: 'Good', number: 4 },
      { label: 'Okay', value: 'Okay', number: 3 },
      { label: 'Not good', value: 'Not good', number: 2 },
      { label: 'Bad', value: 'Bad', number: 1},
    ];

    const proteins = [
        { label: 'Amazing', value: 'Amazing', number: 5 },
      { label: 'Good', value: 'Good', number: 4 },
      { label: 'Okay', value: 'Okay', number: 3 },
      { label: 'Not good', value: 'Not good', number: 2 },
      { label: 'Bad', value: 'Bad', number: 1},
    ];

    function selectVeg(value) {
      vegetable = value;
      vegetableScore = value.number;
    }
  
    function selectCarb(value) {
      carb = value;
      carbsScore = value.number;
    }

    function selectProt(value){
      protein = value;
      proteinScore = value.number;
    }

    $: percentage = ((vegetableScore + carbsScore + proteinScore)/15)*100;
</script>

<div class="container">
    <h1>Nutrition Tracker</h1>
    <h5>Rate how your eating was today for each category.</h5>
    <div class="button-group">
      <h2>Vegetables</h2>
      {#each vegetables as { label, value }}
        <button 
          class="veg-button {vegetable === value ? 'active' : ''}"
          on:click={() => selectVeg(value)}
        >
          {label}
        </button>
      {/each}
    </div>
  
    <div class="button-group">
      <h2>Carbohydrates</h2>
      {#each carbs as { label, value }}
        <button 
          class="carb-button {carb === value ? 'active' : ''}"
          on:click={() => selectCarb(value)}
        >
          {label}
        </button>
      {/each}
    </div>

    <div class="button-group">
        <h2>Protein</h2>
        {#each proteins as { label, value }}
          <button 
            class="prot-button {protein === value ? 'active' : ''}"
            on:click={() => selectProt(value)}
          >
            {label}
          </button>
        {/each}
      </div>
</div>

<style>
    .container {
        font-size: 2rem;
        text-align: center;
        margin-top: 50px;
    }
  
    .button-group {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }

    .button-group button {
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

    .button-group button:hover {
        background-color: #E9EDC9;
    }

    .button-group button.active {
        background-color: #606C38;
        color: white;
    }

    h5 {
      color: #606C38;
    }
</style>