import styles from "./styles.css";
import { getData } from "./weather";

const submitButton = document.querySelector('#submit-button')
const locationInput = document.querySelector('#location-input')
const rawContent = document.querySelector('#raw-content')

const query = await getData('cartagena')

rawContent.innerHTML = query.resolvedAddress;

function queryLocation(){
 
    submitButton.onclick = (e) =>{
        e.preventDefault()
        console.log(locationInput.value)
    }
}

queryLocation()