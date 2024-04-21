<script>
  export let weatherData
</script>

<div class="container">
  <div class="card">
    <div class="card-header">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
    </div>
    <div class="card-body">
      <div class="weather-container">
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather condition icon">
        <p>{Math.floor(weatherData.main.temp - 273.15)}°C</p>
      </div>
      <p>{weatherData.weather[0].description}, feels like {Math.floor(weatherData.main.feels_like - 273.15)}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Visibility: {weatherData.visibility} meters</p>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:2em;

  }

  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
  }

  .card-body {
    padding: 20px;
  }
  .weather-container{
    font-size: large;
    font-weight: 600;
  }
</style>
