import React, { Component } from 'react'
import {fetchCountries} from '../../Api/index'
import {FormControl,NativeSelect} from '@material-ui/core'
import cls from './CountryPicker.module.css'
class CountryPicker extends Component {
    state={
        data:[]
    }
    async componentDidMount(){
        const res = await fetchCountries();
        this.setState({
            data:res
        })
        //console.log(res);
    }

    render() {
        //console.log(this.state.data[0])

        var options;
        if(this.state.data.length){
       options = this.state.data.map(({name})=>(
            <option key={name} value = {name}>{name}</option>
        ))
        }
        return (
           <FormControl className={cls.formControl}>
               <NativeSelect default="" onChange={(e)=>{
                   this.props.handleCountrychange(e.target.value)
               }}>
                   <option value = "">Global</option>
                    {options}
               </NativeSelect>
           </FormControl>
        )
    }
}
export default CountryPicker