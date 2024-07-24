import styles from "./styles.css";
import { getData } from "./weather";

const submitButton = document.querySelector('#submit-button')
const locationInput = document.querySelector('#location-input')


const informationElementLocation = document.getElementById('ie-location')
const informationElementTimezone = document.getElementById('ie-timezone')
const informationElementCurrentTemperature = document.getElementById('ie-current-temp')

const query = await getData('cartagena')

informationElementLocation.innerHTML = query.resolvedAddress;
informationElementTimezone.innerHTML = query.timezone;
informationElementCurrentTemperature.innerHTML = query.currentConditions.temp + ' feels like ' + query.currentConditions.feelslike;

function queryLocation(){
 
    submitButton.onclick = (e) =>{
        e.preventDefault()
        console.log(locationInput.value)
    }
}

queryLocation()