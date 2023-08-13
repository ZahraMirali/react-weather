export type WeatherData = {
  current: {
    feelslike_c: number;
    pressure_mb: number;
  };
  location: {
    name: string;
    country: string;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
};

export type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
    avghumidity: number;
    avgvis_km: number;
    uv: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    daily_chance_of_snow: number;
    daily_chance_of_rain: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};
