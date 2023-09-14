const apiKey = import.meta.env.VITE_APIKEY;

export const weatherAPI = async (city = "") => {
  const apiURL = `http://api.weatherapi.com/v1/current.json`;

  let temperature, cityName, condition, icon;

  try {
    const resp = await fetch(`${apiURL}?key=${apiKey}&q=${city.toLowerCase()}`);

    const data = await resp.json();

    const { current, location } = data;

    temperature = current.temp_c;
    cityName = location.name;
    condition = current.condition.text;
    icon = current.condition.icon;
  } catch (error) {
    return { error: true };
  }

  return {
    error: false,
    temperature,
    cityName,
    condition,
    icon,
  };
};
