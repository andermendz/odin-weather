import styles from "./styles.css";
import { getData } from "./weather";

const submitButton = document.querySelector("#submit-button");
const locationInput = document.querySelector("#location-input");
const informationElementLocation = document.getElementById("ie-location");
const informationElementTimezone = document.getElementById("ie-timezone");
const informationElementCurrentTemperature =
  document.getElementById("ie-current-temp");
const informationElementCurrentConditions = document.getElementById("current-conditions")

function queryLocation() {
  submitButton.onclick = async (e) => {
    e.preventDefault();

    if (locationInput.value) {
      const query = await getData(locationInput.value);

      if (query.resolvedAddress) {
        informationElementLocation.innerHTML = query.resolvedAddress;
        informationElementTimezone.innerHTML = query.timezone;
        informationElementCurrentTemperature.innerHTML =
          query.currentConditions.temp +
          " feels like " +
          query.currentConditions.feelslike;

          informationElementCurrentConditions.innerHTML = query.currentConditions.conditions;
      } else {
        console.log("oh there is an error");
        alert("We could not find your city");
      }
    } else {
      alert("Enter a City");
    }
  };
}

queryLocation();
