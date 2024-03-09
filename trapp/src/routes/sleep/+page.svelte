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

<h2>Insecurity questions</h2>

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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-angry"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><path d="M7.5 8 10 9"/><path d="m14 9 2.5-1"/><path d="M9 10h0"/><path d="M15 10h0"/></svg>   
{/if}

{#if selected?.id == 2}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
{/if}

{#if selected?.id == 3}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-annoyed"><circle cx="12" cy="12" r="10"/><path d="M8 15h8"/><path d="M8 9h2"/><path d="M14 9h2"/></svg>
{/if}

{#if selected?.id == 4}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>    
{/if}

{#if selected?.id == 5}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laugh"><circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
{/if}

<style>
    h1 {
        color: blue;
        font-size: 100px;
        padding: 1rem;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        color: black;
        font-size: 20px;
        padding: 1rem;
        margin: 0 auto;
        text-align: center;
    }
</style>
