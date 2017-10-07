import axios from 'axios'

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const appid = "bd9294e84f5707293d8812e82363cbf8"
const api = 'api.openweathermap.org/data/2.5/'
const initialParams = {
  lang: 'ru',
  units: 'metric',
  appid
}
const initialCities = [ //Moscow
  524901,
  //Novosibirsk
 1496747,
  //St. Peterburg
  536203,
  //Kiev
  703448
]


const fetchOtherCities = (cites) => {
  return axios.get(proxyUrl + api + 'group', {
    params: {...initialParams,
      id: cites.join(',')
    }
  })
}

export const fetchAllCities = async () => {
  const local = await fetchLocal()
  const other = await fetchOtherCities(initialCities)
  return [local.data, ...other.data.list]
}

const getPreciseLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve([position.coords.latitude, position.coords.longitude]);
    });
  });
}

const fetchLocal = async () => {
  const pos = await getPreciseLocation({
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
	})
  
  return await axios.get(proxyUrl + api + 'weather', {
    params: {...initialParams,
      lat: pos[0],
        lon: pos[1]
    }
  })
}
