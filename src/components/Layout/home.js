import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    home: {
        textAlign: "center"
	}
}));

export default function Home() {
    const classes = useStyles();


    return <h1 className={classes.home}>Sign in to view users!</h1>;
}