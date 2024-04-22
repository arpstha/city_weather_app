# City Weather App 🌤️
![Weather App Screenshot](https://github.com/arpstha/city_weather_app/blob/main/weather.png)

## SUMMARY

This is a small city weather app to show the current weather of the city of your choice. The default city is set to London, which can be changed to your choice.

This project is built using Svelte for the frontend, python FastAPI for the backend server, and weather information is provided by OpenWeatherMap.


## MAIN FEATURES
- View the current weather of the city of choice (default: London)
- Change the city with search bar

# Set-up instructions


### How to clone

To clone this repository, within your terminal, navigate to an appropriate directory and use the commands:

```
git clone https://github.com/arpstha/city_weather_app.git
cd city_weather_app
```

### Dependencies

To install all dependencies required run:

```
npm install
```
### Openweathermap API_KEY

Before running the app make sure to obtain your own API_KEY for OpenWeatherMap and save it in the file "/src/config/api_key.py as follows:
>API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

### Running app
To run the app locally, first run the server with the code below into your terminal.
```
python3 -m uvicorn server:app
```
Terminal should confirm server startup confirm:

>INFO:     Started server process [98132]</br>
>INFO:     Waiting for application startup.</br>
>INFO:     Application startup complete.</br>
>INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)</br>

Now you can launch the app in your browser with the code below into your terminal. Make sure the server is running on http://127.0.0.1 and port 8000 for successful connection between the Weather App and the server.

```
npm run dev
```
Terminal should confirm that the Weather app is ready:

>Your application is ready~! 🚀
>
> - Local:      http://localhost:8080
> - Network:    Add `--host` to expose


The terminal should confirm that the app is ready to be opened either you can click the link displayed in the terminal or use the given port to open the app in the browser.
