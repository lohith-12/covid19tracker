import React, { Component } from 'react'
import Charts  from './components/Charts/Charts'
import { Cards } from './components/Cards/Cards'
import cls from './App.module.css'
import {fetchData} from './Api/index'
import CountryPicker from './components/CountryPicker/CountryPicker'
class App extends Component {
  state ={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountrychange = async (country)=>{
    console.log(country);
  
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country})
    
  }
  render() {
    const {data,country} = this.state
    return (
      <div className={cls.container} >
        <img className={cls.image} src="https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png" alt="covid19tracker"/>
        <hr style={{width:'100%',marginBottom:'20px'}}/>
      <Cards data={data}/>
        <CountryPicker handleCountrychange={this.handleCountrychange}/>
        <Charts data={data} country={country} />
      </div>
    )
  }
}
export default App
