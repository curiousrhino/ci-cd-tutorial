import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
export default class CurrencyConverterApp extends LightningElement {
  countryList = countryCodeList
  countryFrom = "USD"
  countryTo = "AUD"
  handleChange(event){
    const {name, value} = event.target
    //console.log("name", name ,value)
    //console.log("value", value)
    this[name] = value
    console.log(value)
    console.log(this[name]);
    
  }
}