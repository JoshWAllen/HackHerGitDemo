<script>
    let vegetable = '';
    let carb = '';
    let protein = '';
  
    const vegetables = [
      { label: 'Amazing', value: 'Amazing' },
      { label: 'Good', value: 'Good' },
      { label: 'Okay', value: 'Okay' },
      { label: 'Not good', value: 'Not good' },
      { label: 'Bad', value: 'Bad' },
    ];
  
    const carbs = [
        { label: 'Amazing', value: 'Amazing' },
      { label: 'Good', value: 'Good' },
      { label: 'Okay', value: 'Okay' },
      { label: 'Not good', value: 'Not good' },
      { label: 'Bad', value: 'Bad' },
    ];

    const proteins = [
        { label: 'Amazing', value: 'Amazing' },
      { label: 'Good', value: 'Good' },
      { label: 'Okay', value: 'Okay' },
      { label: 'Not good', value: 'Not good' },
      { label: 'Bad', value: 'Bad' },
    ];

    function selectVeg(value) {
      vegetable = value;
    }
  
    function selectCarb(value) {
      carb = value;
    }

    function selectProt(value){
        protein = value;
    }
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
        background-color: #e0e0e0;
    }

    .button-group button.active {
        background-color: #4caf50;
        color: white;
    }
</style>