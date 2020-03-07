import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import api from "../../utils/api"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 50
    },
    input: {
        marginTop: 25
    }
});

export default function WelCard() {
    const classes = useStyles();
    const [show, setShow] = useState("")

    // onsubmit = {(e) => 
    // e.preventDefault();
    // show = input.value
    // api.get(show)
    // .then(data{
    //     renderDataCard(data)
    // })
    // }

    return (
        <Card className={classes.root}>
            <CardContent>

                <Typography variant="h5" component="h2">
                    Welcome!
        </Typography>

                <Typography variant="body2" component="p">
                    Welcome to WatchWhere! This site utilizes the Guidebox API which allows you, the user, to search for a show and see which streaming service its on and a link to that show.
        </Typography>
        <form>
        <Input className={classes.input} />
        </form>
            </CardContent>
        </Card>
    );
}


