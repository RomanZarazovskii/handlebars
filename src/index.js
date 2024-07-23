import countries from "./data";
import countriesTemplates from "./templates/countries.hbs";

const list = document.getElementById('countriesHTML');
const markUp = countriesTemplates( countries );

list.insertAdjacentHTML('beforeend', markUp);