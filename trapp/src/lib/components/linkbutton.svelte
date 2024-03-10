<div class="center-container">
    <button on:click={() => console.log("click")}>Next</button>
</div>

<style>
    .center-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        width: 65px;
        height: 25px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
    }

    button:hover {
        background-color: #45a049;
        transform: scale(1.05);
    }
</style>
