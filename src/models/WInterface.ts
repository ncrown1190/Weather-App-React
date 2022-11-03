export interface Weather {
  coord: Coord;
  weather?: Weather[];
  base: string; // "stations",
  main: Main;
  visibility: number; //10000,
  wind: Wind;
  dt: number; //1485789600,
  sys: Sys;
  id: number; //2643743,
  name: string; //"London",
  cod: number; //200
}

export interface Coord {
  lon: number; //-0.13,
  lat: number; //51.51
}

export interface Weather {
  id: number; //300,
  //main: String, //"Drizzle",
  description: string; //"light intensity drizzle",
  icon: string; //"09d"
}

export interface Main {
  temp: number; //280.32,
  pressure: number; //1012,
  humidity: number; //81,
  temp_min: number; //279.15,
  temp_max: number; //281.15
}

export interface Wind {
  speed: number; //4.1,
  deg: number; //80
}

export interface Clouds {
  all: number; //90
}

export interface Sys {
  type: number; //1,
  id: number; //5091,
  message: number; //0.0103,
  country: string; //"GB",
  sunrise: number; //1485762037,
  sunset: number; //1485794875
}
