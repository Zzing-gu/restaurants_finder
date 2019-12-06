import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import Card from './card'
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 40,
        //overflow: "scroll",
        
    }
}))


export default function CardPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
        </div>
    )
}

