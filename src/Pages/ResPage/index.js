import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({

}))


export default function ResPage() {
    const classes = useStyles()

    return (
        <>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={4}
          onChange={(event, newValue) => {
            //setValue(newValue);
            console.log('set value')
          }}
        />
        </>
    )
}

