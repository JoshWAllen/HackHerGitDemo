<script>
    let meditationChannels = [
      { name: "Boho Beautiful - Destress Yoga", link: "https://www.youtube.com/watch?v=7CTsdbf81W8" },
      { name: "10 Minute Yoga Stress and Anxiety", link: "https://www.youtube.com/watch?v=8TuRYV71Rgo" },
      { name: "30 Minute Relaxing Stretching", link: "https://www.youtube.com/watch?v=9MazN_6wdqI"}
    ];
  
    let exerciseWorkouts = [
      { name: "Leg Day Workouts", link: "https://legionathletics.com/ultimate-leg-workout/" },
      { name: "Pull Day Workouts (Back & Biceps)", link: "https://legionathletics.com/pull-workout" },
      { name: "Push Day Workouts (Chest, Triceps & Shoulders)", link: "https://legionathletics.com/push-workout"},
      { name: "Ab & Core Workouts (aimed for women)", link: "https://www.womenshealthmag.com/fitness/a19996405/best-ab-exercises/"},
      { name: "Ab & Core Workouts (aimed for men)", link: "https://www.menshealth.com/uk/building-muscle/a757285/best-ab-exercises/" }
    ];
  
    let mealRecipes = [
      { name: "Healthy Recipes", link: "https://www.bbcgoodfood.com/recipes/collection/quick-and-healthy-recipes" },
      { name: "Healthy Vegetarian Recipes", link: "https://www.bbcgoodfood.com/recipes/collection/healthy-vegetarian-recipes" },
      { name: "Healthy Vegan Recipes", link: "https://www.bbcgoodfood.com/recipes/collection/healthy-vegan-recipes"},
      { name: "Healthy Gluten-Free Recipes", link: "https://www.bbcgoodfood.com/recipes/collection/gluten-free-dinner-recipes" }
    ];
  
    let selfHelpBooks = [
      { name: "Atomic Habits", link: "https://jamesclear.com/atomic-habits" },
      { name: "8 Rules of Love", link: "https://8rulesoflove.com/" },
      { name: "The Mountain is You", link: "https://www.goodreads.com/en/book/show/53642699"},
      { name: "101 Essays That Will Change the Way You Think", link:"https://www.goodreads.com/en/book/show/32998876  "}
    ];
  
    let documentaries = [
      { name: "The Missing Ingredient in Self Care", link: "https://www.youtube.com/watch?v=Eupk56SG76M" },
      { name: "Using 5 Minutes of Self Care to Survive Burnout", link: "https://www.youtube.com/watch?v=Xmbh3VHwcTo" },
      { name: "The Secret of Becoming Mentally Strong", link: "https://www.youtube.com/watch?v=TFbv757kup4"}
    ];
  
    let budgetingSteps = [
      { name: "How to Budget and Save in Your 20's", link: "https://www.youtube.com/watch?v=a-vmZpnpze0" },
      { name: "35 Tips to Help You Save Money", link: "https://www.nbc.ca/personal/advice/budget/tips-on-saving-more.html" }
    ];
  
    let destresserGames = [
      { name: "Art Coloring App", link: "https://apps.apple.com/us/app/happy-color-art-coloring-book/id1407852246" },
      { name: "Game 2", link: "https://example.com/game2" }
    ];
  </script>
  
  <style>
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
      color: #333;
    }
  
    h2 {
      font-size: 24px;
      color: #666;
      margin-bottom: 5px;
    }

    h5{
        font-size: 12px
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
      color: #606C38;
      text-decoration: none;
    }
  
    .resource {
      border: 2px solid #606C38;
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
  <h5> Some easy, simple youtube videos for a quick destresser</h5>
  <ul>
    {#each meditationChannels as channel}
      <li class="resource">
        <a href={channel.link}>{channel.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Exercise Workouts</h2>
  <h5>Some exercises to do in or out of the gym. Remember, you don't need to incoporate every workout, just the ones that you feel comfortable with.</h5>
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
  <h5> Find more on Amazon, Indigo, etc. </h5>

  <ul>
    {#each selfHelpBooks as book}
      <li class="resource">
        <a href={book.link}>{book.name}</a>
      </li>
    {/each}
  </ul>
  
  <h2>Ted Talks</h2>
  <h5> Find more on the TedTalk youtube channel! </h5>

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
  