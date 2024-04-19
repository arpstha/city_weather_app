<script>
	import { writable } from 'svelte/store';
	import Weather from "./Weather.svelte";
	import { onMount } from 'svelte';
  
	export const currentCity = writable('');
	export const weatherData = writable(null);
  
	onMount(async () => {
	  fetchWeather('london');
	});
  
	async function fetchWeather(city) {
	  try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db707a8803a4ca18f60ef2c268914634`);
		
		if (!response.ok) {
		  throw new Error('Failed to fetch weather data');
		}
		const data = await response.json();
		weatherData.set(data); 
	  } catch (error) {
		console.error(error);
	  }
	}
  
	function handlesubmit(event) {
	  event.preventDefault();
	  const inputValue = $currentCity;
	  if (inputValue.trim() !== '') {
		currentCity.set(inputValue);
		fetchWeather($currentCity)
	  }
	}
	
	function clear(event){
	  event.preventDefault();
	  currentCity.set('');
	  weatherData.set(null); 
	}
  </script>
  
  <main>
	<form>
	  <input placeholder='Search weather by city' bind:value={$currentCity}/>
	  <button on:click={handlesubmit}>Find Weather</button>
	  <button on:click={clear}>Clear</button>
	</form>
	{#if $weatherData} 
	  <h1>The current weather in {$weatherData.name}:</h1>
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
  