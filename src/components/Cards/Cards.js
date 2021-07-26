import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import cls from './Cards.module.css'
import Moment from 'react-moment';
import CountUp from 'react-countup'
import cx from 'classnames'
export const Cards = ({data}) => {
   
   const {confirmed,recovered,deaths,lastUpdate} = data;
    if(!confirmed) return <p>Loading</p>
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item  component={Card}   className={cx(cls.card,cls.infected)}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                         Infected cases
                    </Typography>
                     <Typography variant="h5" >
                        <CountUp start={0} end={confirmed.value} duration={1.5} separator=","/>
                    </Typography>
                    <Typography color="textPrimary">
                        <strong>LastUpdated:{' '}</strong>
                        <Moment format="DD/MM/YYYY">
                            {lastUpdate}
                        </Moment> 
                    </Typography>
                    
                </CardContent>
            </Grid>
            <Grid item   component={Card}  className={cx(cls.card,cls.recovered)}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                         recovered cases
                    </Typography>
                     <Typography variant="h5">
                       <CountUp start={0} end={recovered.value} duration={1.5} separator=","/>
                    </Typography>
                    <Typography color="textPrimary">
                        <strong>LastUpdated:{' '}</strong>
                        <Moment format="DD/MM/YYYY">
                            {lastUpdate}
                        </Moment> 
                    </Typography>
                    
                </CardContent>
            </Grid>
            <Grid item  component={Card}  className={cx(cls.card,cls.deaths)}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                         deaths
                    </Typography>
                     <Typography variant="h5">
                       <CountUp start={0} end={deaths.value} duration={1.5} separator=","/>
                    </Typography>
                    <Typography color="textPrimary">
                        <strong>LastUpdated:{' '}</strong>
                        <Moment format="DD/MM/YYYY">
                            {lastUpdate}
                        </Moment> 
                    </Typography>
                    
                </CardContent>
            </Grid>
        </Grid>
    )
}
