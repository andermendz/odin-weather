export async function getData(location) {
  try {
    const locationQuery = location;
    const apiKey = "";

    let query = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationQuery}?unitGroup=metric&key=${apiKey}&contentType=json`
    );

    let data = await query.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
