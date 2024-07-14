import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import piano from './piano.jpeg';
import violino from './violino.jpg';

function Courses(props) {

  return (
    <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                corso pianoforte
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                informazioni
                </Typography>
                <Typography variant="subtitle1" paragraph>
                descrizione
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={piano}
            />
            </Card>
        </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                corso violino
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                informazioni
                </Typography>
                <Typography variant="subtitle1" paragraph>
                descrizione
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={violino}
            />
            </Card>
        </CardActionArea>
        </Grid>
    </Grid>
  );
}

Courses.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Courses;
