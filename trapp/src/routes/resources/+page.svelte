<script>
    let meditationChannels = [
      { name: "Boho Beautiful - Destress Yoga", link: "https://www.youtube.com/watch?v=7CTsdbf81W8" },
      { name: "10 Minute Yoga Stress and Anxiety", link: "https://www.youtube.com/watch?v=8TuRYV71Rgo" },
      { name: "30 Minute Relaxing Stretching", link: "https://www.youtube.com/watch?v=9MazN_6wdqI"}
    ];
  
    let exerciseWorkouts = [
      { name: "Workout 1", link: "https://example.com/workout1" },
      { name: "Workout 2", link: "https://example.com/workout2" }
    ];
  
    let mealRecipes = [
      { name: "Recipe 1", link: "https://example.com/recipe1" },
      { name: "Recipe 2", link: "https://example.com/recipe2" }
    ];
  
    let selfHelpBooks = [
      { name: "Book 1", link: "https://example.com/book1" },
      { name: "Book 2", link: "https://example.com/book2" }
    ];
  
    let documentaries = [
      { name: "Documentary 1", link: "https://example.com/documentary1" },
      { name: "Documentary 2", link: "https://example.com/documentary2" }
    ];
  
    let budgetingSteps = [
      { name: "Step 1", link: "https://example.com/step1" },
      { name: "Step 2", link: "https://example.com/step2" }
    ];
  
    let destresserGames = [
      { name: "Game 1", link: "https://example.com/game1" },
      { name: "Game 2", link: "https://example.com/game2" }
    ];
  </script>
  
  <style>
    /* Add your CSS styling here */
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
      color: #333;
    }
  
    h2 {
      font-size: 24px;
      color: #666;
      margin-bottom: 10px;
    }
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    li {
      margin-bottom: 5px;
    }
  
    a {
      color: #007bff;
      text-decoration: none;
    }
  
    .resource {
      border: 2px solid #007bff;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 20px;
      transition: transform 0.3s ease;
    }
  
    .resource:hover {
      transform: translateY(-5px);
    }
  </style>
  
  <h1>Resources</h1>
  
  <h2>Meditation/Yoga Channels</h2>
  <ul>
    {#each meditationChannels as channel}
      <li class="resource">
        <a href={channel.link}>{channel.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Exercise Workouts</h2>
  <ul>
    {#each exerciseWorkouts as workout}
      <li class="resource">
        <a href={workout.link}>{workout.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Healthy Meal Recipes</h2>
  <ul>
    {#each mealRecipes as recipe}
      <li class="resource">
        <a href={recipe.link}>{recipe.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Self-Help Books</h2>
  <ul>
    {#each selfHelpBooks as book}
      <li class="resource">
        <a href={book.link}>{book.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Documentaries</h2>
  <ul>
    {#each documentaries as documentary}
      <li class="resource">
        <a href={documentary.link}>{documentary.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Budgeting/Money Saving Steps</h2>
  <ul>
    {#each budgetingSteps as step}
      <li class="resource">
        <a href={step.link}>{step.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Destresser Games</h2>
  <ul>
    {#each destresserGames as game}
      <li class="resource">
        <a href={game.link}>{game.name}</a>
      </li>
    {/each}
  </ul>
  