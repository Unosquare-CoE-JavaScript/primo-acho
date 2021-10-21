import axios from 'axios';

const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyChTRTGayA2y9pt6L-4D1JWh6JO7wI7zWw';
declare var google: any;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then( (response: any)  =>{
        if(response.data.status !== 'OK'){
            throw new Error('Could not fetch location')
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 8
        })

        new google.maps.Marker({ position: coordinates, map: map })
    })
    .catch(err=>{
        console.log(err)
    })

}
form.addEventListener('submit', searchAddressHandler)!