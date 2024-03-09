<script>
    let exerciseHours = 1;
    let xPos = 50;
    let yPos = 50;
</script>

<h1>EXERCISE</h1>

<div 
    class="box" style="left: {xPos}%; top: {yPos}%">
    <p>Enter today's exercise hours:</p>
    <label>
        <input type="range" bind:value={exerciseHours} min="0" max="2" step="0.5"/>
    </label>
      
    <p>Exercise Hours: {exerciseHours === 2 ? '2+' : exerciseHours}</p>
    
</div>
  
<style>
    h1 {
      text-align: center;
      font-size: 35px
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
    background: lightgrey;
    border-radius: 16px;
  }
    
</style>