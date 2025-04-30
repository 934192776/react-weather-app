import WeatherInfo from './WeatherInfo';

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherInfo 
        temperature={24} 
        condition="Sunny" 
        location="Sydney" 
      />
    </div>
  );
}
export default App;