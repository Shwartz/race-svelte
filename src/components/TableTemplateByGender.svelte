<script>
	export let raceData;
	$: female = raceData.filter(row => row.gender === 'Female');
	$: male = raceData.filter(row => row.gender === 'Male');
	$: hasData = female.length > 0 && male.length > 0;
	$: arr = [
		{
			data: female,
			title: 'Female'
		},
		{
			data: male,
			title: 'Male'
		}
	];
</script>

<div>
	{#if hasData}
		{#each arr as byGender, i}
			<h3>{byGender.title}</h3>
			<div class='grid9 head'>
				<div>Position all</div>
				<div>Position in group</div>
				<div>Time</div>
				<div>Race Nr</div>
				<div>First Name</div>
				<div>Last Name</div>
				<div>Club</div>
				<div>Gender</div>
				<div>Age</div>
			</div>
			{#each byGender.data as row, i}
				<div class='grid9'>
					<div>{row.position}</div>
					<div>{i + 1}</div>
					<div>{row.time}</div>
					<div>{row.raceNumber}</div>
					<div>{row.firstName}</div>
					<div>{row.lastName}</div>
					<div title={row.club}>{row.club}</div>
					<div>{row.gender || ""}</div>
					<div>{row.age}</div>
				</div>
			{/each}
		{/each}
	{:else }
		<p>No data available.</p>
	{/if}
</div>

<style>
    .grid9.head {
        background: #385a86;
    }

    .head div {
        color: white;
    }

    .head div {
        overflow: visible;
        white-space: break-spaces;
    }

    .grid9 {
        display: grid;
        min-width: 600px;
        background: rgba(255, 255, 255, 0.6);
    }

    .grid9 div {
        padding: 2px;
        border: 1px dotted #c2c9d4;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .grid9 {
        grid-template-columns: 70px 70px 1fr 1fr 2fr 2fr 3fr 1fr 50px;
    }
</style>
