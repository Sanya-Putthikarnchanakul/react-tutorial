import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },    
    cardTop: {
        marginTop: '2rem'
    },
    handCursor: {
        cursor: 'pointer'
    }
}));

const HomeIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
};

const MDIIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
        </SvgIcon>
    );
};

const Route1 = () => {
    const classes = useStyles();

    return (
        <>
            <div className='container'>               
                <Card>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>All Icon Themes</h3>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Filled Themes</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <DeleteIcon />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Outlined Themes</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <DeleteOutlinedIcon />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Rounded Themes</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <DeleteRoundedIcon />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>TwoTone Themes</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <DeleteTwoToneIcon />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Sharp Themes</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <DeleteSharpIcon />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.cardTop}>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>SVG Icon Color</h3>
                        <Grid container>
                            <Grid item xs={2}><HomeIcon className={classes.handCursor} /></Grid>
                            <Grid item xs={2}><HomeIcon className={classes.handCursor} color='primary' /></Grid>
                            <Grid item xs={2}><HomeIcon className={classes.handCursor} color='secondary' /></Grid>
                            <Grid item xs={2}><HomeIcon className={classes.handCursor} color='action' /></Grid>
                            <Grid item xs={2}><HomeIcon className={classes.handCursor} color='disabled' /></Grid>
                            <Grid item xs={2}><HomeIcon className={classes.handCursor} style={{ color: green[500] }} /></Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.cardTop}>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>SVG Icon Size</h3>
                        <Grid container>
                            <Grid item xs={3}><HomeIcon className={classes.handCursor} /></Grid>
                            <Grid item xs={3}><HomeIcon className={classes.handCursor} fontSize="small" /></Grid>
                            <Grid item xs={3}><HomeIcon className={classes.handCursor} fontSize="large" /></Grid>
                            <Grid item xs={3}><HomeIcon className={classes.handCursor} style={{ fontSize: 40 }} /></Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.cardTop}>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>MDI Icon</h3>
                        <MDIIcon className={classes.handCursor} />
                    </CardContent>
                </Card>

                <Card className={classes.cardTop}>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>Google Material Icon</h3>
                        <Icon className={classes.handCursor}>star</Icon>
                    </CardContent>
                </Card>

                <Card className={classes.cardTop}>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>Google Material Icon Color</h3>
                        <Grid container>
                            <Grid item xs={2}><Icon className={classes.handCursor}>star</Icon></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor} color='primary'>star</Icon></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor} color='secondary'>star</Icon></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor} style={{ color: green[500] }}>star</Icon></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor} fontSize="small">star</Icon></Grid>                           
                            <Grid item xs={2}><Icon className={classes.handCursor} style={{ fontSize: 30 }}>star</Icon></Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.cardTop}>
                    <CardContent>
                        <h3 style={{ textDecoration: 'underline' }}>Font Awesome Icon</h3>
                        <Grid container>
                            <Grid item xs={2}><Icon className='fa fa-plus-circle'/></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor + 'fa fa-plus-circle'} color='primary'/></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor + 'fa fa-plus-circle'} color='secondary'/></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor + 'fa fa-plus-circle'} style={{ color: green[500] }}/></Grid>
                            <Grid item xs={2}><Icon className={classes.handCursor + 'fa fa-plus-circle'} fontSize="small"/></Grid>                           
                            <Grid item xs={2}><Icon className={classes.handCursor + 'fa fa-plus-circle'} style={{ fontSize: 30 }}/></Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <div className={classes.root}>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="contained" disabled>
                        Disabled
                    </Button>
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Link
                    </Button>
                </div>
            </div>
        </>
    )
};

export default Route1;