<script>
import { onMount } from 'svelte';

const path = "/data/test.json";
onMount(async function() {
	const response = await fetch(path);
	const { data } = await response.json();
	console.log(data);
})

</script>

<svelte:head>
	<title>Race</title>
	<meta name='description' content='Svelte demo app - Race' />
</svelte:head>

<section>
	<div class='race'>
		<p class='headline'>This Web app uses the data from the <a href='https://www.trionium.com/ashtead10k/'> Trionium
			website </a> to create sorting by age and gender.</p>
		<div class='race_navigation'>
			<button type='button'>2022</button>
			<button type='button'>2021</button>
		</div>
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
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
        line-height: 1;
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

		button .current {
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
