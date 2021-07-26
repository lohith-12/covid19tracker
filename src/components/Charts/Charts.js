import React, { Component } from 'react'
import {Line,Bar} from 'react-chartjs-2'
import {fetchDaily} from '../../Api/index'
import cls from './Charts.module.css'
class Charts extends Component {
    state={
        data:[]
    }
    async componentDidMount(){
        const fetchData = await fetchDaily()
        this.setState({
            data:fetchData
        })
    }
       options = {
            scales: {
                yAxes: [
                {
                    ticks: {
                    beginAtZero: true,
                    },
                },
                ],
            },
            };
    render() {
        var lineData;
        if(this.state.data){
        lineData = {
            labels:this.state.data.map(({reportDate})=>reportDate),
            datasets:[
                {
                    label:"Infected",
                    data: this.state.data.map(({confirmed})=>confirmed.total ),
                    borderColor: 'rgba(0, 0, 255, 0.5)',
                },
                {
                    label:"Deaths",
                    data: this.state.data.map(({deaths})=>deaths.total ),
                    borderColor: 'rgba(255, 0, 0, 0.2)',
                }
            ]
        }
    }
    var bardata;
    if(this.props.data){
        const {confirmed,recovered,deaths}=this.props.data;
        if(!confirmed) return <p>loading</p> ;
         bardata = {
            labels:['Infected','Recoverd','Deaths'],
                            datasets:[
                    {
                        label : 'people',
                        backgroundColor:[
                            'rgba(201, 201, 230, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                    data:[confirmed.value,recovered.value,deaths.value]
                    }]}
            
        }
        return (
                <div className={cls.container}>
                    {this.props.country?<Bar data ={bardata}/>:<Line data={lineData}/>}
                </div>
        )
}
}
export default  Charts