import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    paper: {
        height: 140,
        width: 100,
    }
}));

const Route2 = () => {
    const [spacing, setSpacing] = useState(2);

    const classes = useStyles();

    const handleChange = (e) => {
        setSpacing(Number(e.target.value));
    };

    return (
        <>
            <div className='container' style={{ border: '1px solid black' }}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={spacing}>
                            {[0, 1, 2].map((value) => (
                                <Grid key={value} item xs={12} md={4}>
                                    <Paper className={classes.paper} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.control}>
                            <Grid container>
                                <Grid item>
                                    <FormLabel>spacing</FormLabel>
                                    <RadioGroup
                                        name="spacing"
                                        aria-label="spacing"
                                        value={spacing.toString()}
                                        onChange={handleChange}
                                        row
                                    >
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                            <FormControlLabel
                                                key={value}
                                                value={value.toString()}
                                                control={<Radio />}
                                                label={value.toString()}
                                            />
                                        ))}
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Route2;