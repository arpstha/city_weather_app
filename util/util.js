export async function fetchWeather(city) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/weather/${city}`);
      let weatherData = await response.json();
      return weatherData
    } catch (error) {
      console.error(error);
    }
  }