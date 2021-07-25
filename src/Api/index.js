import axios from 'axios'

var url = 'https://covid19.mathdro.id/api'
export const fetchData = async (country)=>{
    try {
        if(country){
            url = `https://covid19.mathdro.id/api/countries/${country}`
        }
        const res = await axios.get(url);
        const data = {
            confirmed:res.data.confirmed,
            recovered:res.data.recovered,
            deaths:res.data.deaths,
            lastUpdate:res.data.lastUpdate
        }
        return  data;
    } catch (error) {
        
    }
}
export const fetchDaily = async ()=>{
    try {
        const res = await axios.get(`${url}/daily`)
        //console.log(res.data)
        const data =  res.data.map(({confirmed,deaths,recovered,reportDate})=>({
            confirmed,
            deaths,
            recovered,
            reportDate
        }));
       // console.log(data);
        return data;
    } catch (error) {   
    }
}
export const fetchCountries = async ()=>{
    try {
        const res = await axios.get('https://covid19.mathdro.id/api/countries')
       // console.log(res.data.countries)
        return res.data.countries;
    } catch (error) {
        
    }
}