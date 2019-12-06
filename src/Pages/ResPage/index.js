import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import FoodCard from './foodcard'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 40,
    //overflow: "scroll",
    
}
}))


export default function ResPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>

        </div>
    )
}

{/* <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={4}
          onChange={(event, newValue) => {
            //setValue(newValue);
            console.log('set value')
          }}
        /> */}