<script>
	let questions = [
		{
			id: 1,
			text: `1`
		},
		{
			id: 2,
			text: `2`
		},
		{
			id: 3,
			text: `3`
		},
        {
			id: 4,
			text: `4`
		},
        {
			id: 5,
			text: `5`
		}
	];

	let selected;
</script>

<h1>Sleep</h1>

<h2>Rate your sleep last night from 1-5</h2>

	<select
		bind:value={selected}
		>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

{#if selected?.id == 1}
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#CCD5AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-angry"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><path d="M7.5 8 10 9"/><path d="m14 9 2.5-1"/><path d="M9 10h0"/><path d="M15 10h0"/></svg>   
{/if}

{#if selected?.id == 2}
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#CCD5AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
{/if}

{#if selected?.id == 3}
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#CCD5AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-annoyed"><circle cx="12" cy="12" r="10"/><path d="M8 15h8"/><path d="M8 9h2"/><path d="M14 9h2"/></svg>
{/if}

{#if selected?.id == 4}
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#CCD5AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>    
{/if}

{#if selected?.id == 5}
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#CCD5AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laugh"><circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
{/if}

<style>
    h1 {
        color: #D4A373;
        font-size: 100px;
        padding: 1rem;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        color: #606C38;
        font-size: 20px;
        padding: 1rem;
        margin: 0 auto;
        text-align: center;
    }

	select {
		appearance: none;
  		-webkit-appearance: none;
  		background-color: white;
  		border: 1px solid gray;
  		border-radius: 5px;
  		display: block;
  		font-size: 16px;
  		height: 36px;
  		line-height: 36px;
  		margin: 0 auto;
  		padding: 0 10px;
  		text-align: center;
  		width: 50%;
	}

	svg {
		margin: 25px auto;
		padding: 0 10px;
	}
</style>
