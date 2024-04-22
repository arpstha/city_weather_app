<script type="module">
    import { onMount } from 'svelte';
    import Weather from "./Weather.svelte";
    import { fetchWeather } from "../util/util"
	import { Circle } from 'svelte-loading-spinners';
	
    let currentCity = '';
    let weatherData = '';
    let isValidCity = true;
	let errorMessage = '';
	let isLoading = false;

    onMount(async () => {
        try {
			isLoading = true;
            const data = await fetchWeather('london');
            weatherData = data;
        } catch (error) {
            handleError();
        }
		isLoading = false;
    });

    async function handleSubmit(event) {
		isLoading = true;
        event.preventDefault();
        if (currentCity.trim().length !== 0) {
            try {
                const data = await fetchWeather(currentCity);
                if (data.cod === '404') {
                    isValidCity = false;
                } 
				else {
                    isValidCity = true;
					errorMessage = '';
                    weatherData = data;
                }
            } catch (error) {
				handleError();
            }
        }
		currentCity = '';
		isLoading = false;
    }

	function handleError(){
		errorMessage = "Couldn't fetch weather the infomation. Make sure server is running and connected to internet."
	}

    function clear(event){
        event.preventDefault();
        currentCity = '';
        isValidCity = true;
    }
	console.log(errorMessage)
</script>

<main>
    <h1>Find the weather of city around the World</h1>
    <form on:submit={handleSubmit}>
        <input placeholder='Search weather by city' bind:value={currentCity}/>
        <button type="submit">Find Weather</button>
        <button on:click={clear}>Clear</button>
    </form>
	{#if isLoading}
		<div class="loading-spinner">
			<Circle size="60" color="#FF3E00" unit="px" duration="3s" />
		</div>
	{:else}
		{#if weatherData && isValidCity === true}
			<h2>The current weather in {weatherData.name}:</h2>
			<Weather {weatherData} />
		{:else if isValidCity === false}
			<p>The entered city is not valid. Please enter a valid city name.</p>
		{:else if errorMessage}
			<p>{errorMessage}</p>
		{:else}
			<p>No weather data available</p>
		{/if}
	{/if}

</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 300px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 1.5em;
        font-weight: 100;
    }
    
    h2 {
        color: #ff3e00;
        font-size: 1.5em;
        font-weight: 100;
    }

    p {
        color: red;
    }
	.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100%;
}
</style>
