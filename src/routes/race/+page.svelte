<script>
import DataTable from './DataTable.svelte';
export let currentYear = '2022';
export let sortBy = 'all';
</script>

<svelte:head>
	<title>Race</title>
	<meta name='description' content='Svelte demo app - Race' />
</svelte:head>

<section>
	<div class='race'>
		<p class='headline'>This Web app uses the data from the
			<a href='https://www.trionium.com/ashtead10k/'> Trionium website </a> to create sorting by age and gender.
		</p>
		<div class='race_navigation'>
			<button class:active={currentYear === '2022'} on:click={() => currentYear='2022'} type='button'>2022</button>
			<button class:active={currentYear === '2021'} on:click={() => currentYear='2021'} type='button'>2021</button>
		</div>
		<div class='race_navigation'>
			<button class:active={sortBy === 'all'} on:click={() => sortBy = 'all'} type="button">Show all results</button>
			<button class:active={sortBy === 'byAge'} on:click={() => sortBy = 'byAge'} type="button">Show by age</button>
			<button class:active={sortBy === 'byGender'} on:click={() => sortBy = 'byGender'} type="button">Show by gender</button>
		</div>
		<DataTable {currentYear} {sortBy} />
	</div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    .race {
        width: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
    }

		.race_navigation {
        display: flex;
        justify-content: center;
		}

    button {
        background: #fff;
        border: 1px solid #385a86;
        box-shadow: 0 0 4px rgb(0 0 0 / 50%);
        cursor: pointer;
        font-size: 18px;
        margin: 8px 4px;
        padding: 4px 8px;
        transition: .2s;
    }

		button.active {
        background: #385a86;
        box-shadow: none;
        color: #fff;
		}

    .headline {
        color: gray;
        margin: 8px auto 16px;
        max-width: 500px;
        text-align: center;
    }
</style>
