import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2),
    },
}));

export default function Dashboard() {

const classes = useStyles();

    return(
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h3">
                Chat app
                </Typography>
                <Typography component="h5">
                Topic Placeholder.
                </Typography>
            </Paper>
        </div>
    )
}
