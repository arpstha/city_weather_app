<script type="module">
	import Weather from "./Weather.svelte";
	import { fetchWeather } from "../util/util"

	let currentCity = '';
	let weatherData = '';

   $: fetchWeather('london')
   .then((data)=> weatherData = data)
  
	function handleSubmit(event) {
	  event.preventDefault();
	  if (currentCity.length !== 0) {
		fetchWeather(currentCity)
		.then((data)=> weatherData = data)
	  }
	}
  
	function clear(event){
	  event.preventDefault();
	  currentCity = '';
	}
  </script>
  
  <main>
	<form on:submit={handleSubmit}>
	  <input placeholder='Search weather by city' bind:value={currentCity}/>
	  <button type="submit">Find Weather</button>
	  <button on:click={clear}>Clear</button>
	</form>
	{#if weatherData} 
	  <h1>The current weather in {weatherData.name}:</h1>
	  <Weather {weatherData} />
	{:else}
	  <p>No weather data available</p>
	{/if}
  </main>
  
  <style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 240px;
	  margin: 0 auto;
	}
  
	h1 {
	  color: #ff3e00;
	  text-transform: uppercase;
	  font-size: 1.5em;
	  font-weight: 100;
	  margin-bottom: 0%;
	}
  </style>
  