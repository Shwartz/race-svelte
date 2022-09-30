<script>
	import TableTemplate from '../../components/TableTemplateAll.svelte';
	import TableTemplateByAge from '../../components/TableTemplateByAge.svelte';
	import TableTemplateByGender from '../../components/TableTemplateByGender.svelte';

	export let currentYear;
	export let sortBy;
	export let isLoader = false;
	const endpoint = {
		'2021': '/data/data-202109.json',
		'2022': '/data/data-202209.json'
	};
	export let yearsLoaded = {};

	const getData = async () => {
		console.log('get data run');
		isLoader = true;
		try {
			const response = await fetch(endpoint[currentYear]);
			const { data } = await response.json();
			yearsLoaded = { ...yearsLoaded, [currentYear]: data };
			isLoader = false;
			console.log('yearsLoaded: ', yearsLoaded);
		} catch (err) {
			console.log(err);
		}
	};

	$: if (!yearsLoaded?.[currentYear]?.length) {
		getData();
	}

</script>

{#if isLoader}
	<div>Loading in progress...</div>
{/if}
<p>Current year: {currentYear}, sort by: {sortBy}</p>

{#if yearsLoaded?.[currentYear]?.length}
	{#if sortBy === 'all'}
		<TableTemplate raceData={yearsLoaded[currentYear]} />
	{/if}
	{#if sortBy === 'byAge'}
		<TableTemplateByAge raceData={yearsLoaded[currentYear]} />
	{/if}
	{#if sortBy === 'byGender'}
		<TableTemplateByGender raceData={yearsLoaded[currentYear]} />
	{/if}
{/if}

