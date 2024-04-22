
# City Weather App 🌤️

## SUMMARY

This is a small city weather app to show the current weather of the city of your choise. The default city is set to London, which can be changed to your choise. 

This project is built using Svelte for frontend, python FastAPI for the backend server, weather information is provided by Openweathermap.


## MAIN FEATURES
- View current weather of city of choise (default: London)
- Change the city with search bar

# Set-up instructions


### How to clone

To clone this repository, within your terminal, navigate to an appropriate directory and use the commands

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

Before running the app make sure to obtain your own API_KEY for Openweathermap and save in the file "/src/config/api_key.py as follows:
>API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

### Running app
To run the app locally, first run the server with the code below into your terminal. 
```
python3 -m uvicorn server:app
```
Terminal should confirm of server startup comfirm:

>INFO:     Started server process [98132]</br>
>INFO:     Waiting for application startup.</br>
>INFO:     Application startup complete.</br>
>INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)</br>

Now you can launch the app in your browser with the code below into your terminal. Make sure the server is running on http://127.0.0.1 and port 8000 for successful connection between Wether App and the server.
```
npm run dev
```

Terminal should confirm of Weather app ready:

>Your application is ready~! 🚀
>
> - Local:      http://localhost:8080
> - Network:    Add `--host` to expose


The terminal should confirm that app is ready to be open either you can click the link displayed in terminal or use the given port to open the app in browser.
