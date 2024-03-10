<script>
    
    export let percentage = 100; 
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Arial, sans-serif;
        color: #333;
    }

    .message {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
        animation: fadeIn 1s ease-in-out;
    }

    .percentage {
        font-size: 72px;
        font-weight: bold;
        color: #606C38; 
        margin-bottom: 20px;
        text-align: center;
        animation: scaleUp 1s ease-in-out;
    }

    .caption {
        font-size: 18px;
        margin-bottom: 20px;
        text-align: center;
        animation: slideIn 1s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes scaleUp {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0);
        }
    }
</style>

<div class="container">
    <div class="message">
        <h1>Congratulations!</h1>
        <p>You've achieved a perfect score!</p>
    </div>

    <div class="percentage">{percentage}%</div>

    <div class="caption">Wow! You've absolutely nailed it! Your dedication to maintaining a positive mindset, healthy habits, and overall well-being is truly inspiring. Keep up the fantastic work!
    </div>
</div>
