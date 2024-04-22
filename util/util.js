export async function fetchWeather(city, timeout = 5000) {
  try {
    const responsePromise = fetch(`http://127.0.0.1:8000/weather/${city}`);
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, timeout);
    });

    const response = await Promise.race([responsePromise, timeoutPromise]);
      if (!response.ok) {
          throw new Error('Failed to fetch weather data');
      }
      const weatherData = await response.json();
      return weatherData;
  } catch (error) {
      console.error('An error occurred while fetching weather data:', error);
      return error;
  }
}
