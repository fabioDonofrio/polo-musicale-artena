import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import piano from './piano.webp';
import drums from './drums.webp';
import trumpet from './trumpet.webp';
import trombone from './trombone.webp';
import accordion from './accordion.webp';
import bass from './bass.webp';
import solfeggio from './solfeggio.webp';
import microphone from './microphone.jpg';
import guitar from './guitar.webp';
import keyboard from './keyboard.jpg';
import sax from './sax.webp';
import oboe from './oboe.webp';
import cello from './cello.webp';
import violin from './violin.webp';
import opera from './opera.webp';
import flute from './flute.webp';
import clarinet from './clarinet.webp';
import propedeutica from './propedeutica.webp';
import AppBar from './AppBar';
import { Box, Container, Grow, Modal } from '@mui/material';
import { styled } from "@mui/system";
import SocialFooter from './SocialFooter';
import { Close } from '@mui/icons-material';

function Courses(props) {

  const [selectedCourse, setSelectedCourse] = React.useState();
  const courses = [
    { image: propedeutica, title: "propedeutica musicale", description: "", teacher: "Irene Mele" },
    { image: keyboard, title: "pianoforte classico & tastiere", description: "", teacher: "Alessio Pizzotti" },
    { image: piano, title: "pianoforte jazz", description: "", teacher: "Edoardo Petretti" },
    { image: opera, title: "canto lirico", description: "", teacher: "Maria di Re" },
    { image: microphone, title: "canto pop", description: "", teacher: "Annalaura Talpa" },
    { image: bass, title: "contrabbasso / basso", description: "", teacher: "Giuseppe Talone" },
    { image: guitar, title: "chitarra classica & moderna", description: "", teacher: "Fabio Perciballi" },
    { image: drums, title: "batteria & percussioni", description: "", teacher: "Simone Talone" },
    { image: trumpet, title: "tromba", description: "", teacher: "Mario Caporilli" },
    { image: trombone, title: "trombone", description: "", teacher: "Federico Cecchini" },
    { image: accordion, title: "fisarmonica", description: "", teacher: "Pietro Roffi" },
    { image: violin, title: "violino", description: "", teacher: "Margherita Musto" },
    { image: cello, title: "violoncello", description: "", teacher: "Angelo Maria Santisi" },
    { image: sax, title: "sax", description: "", teacher: "Danilo Raponi" },
    { image: flute, title: "flauto", description: "", teacher: "Ilaria Latini" },
    { image: oboe, title: "oboe", description: "", teacher: "Floria Girolami" },
    { image: clarinet, title: "clarinetto", description: "", teacher: "Massimo Caturelli" }
  ]

  const labs = [
    { image: solfeggio, title: "solfeggio", description: "", teacher: "" }
  ]

  const ZoomCard = styled(Card)({
    borderBottom: '7px solid rgba(255,255,255, 0.3)',
    '&:hover': {
      transition: 'transform 1s',
      transform: 'scale(1.02)',
      transformOrigin: 'top left',
    }
  })


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    padding: "20px"
  };

  return (
    <React.Fragment>
      <AppBar />
      <Modal
        open={!!selectedCourse}
        onClose={() => setSelectedCourse()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grow in={!!selectedCourse}>
          <Box style={style}>
            <Close sx={{ float: "right", cursor: "pointer" }} onClick={() => setSelectedCourse()} />
            <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }}>
              {selectedCourse && selectedCourse.title}
            </Typography>
            {selectedCourse && selectedCourse.description && (
              <React.Fragment>
                <Typography component="div" variant="h6">
                  Corso
                </Typography>
                <Typography variant="string" component="div">
                  {selectedCourse && selectedCourse.description}
                </Typography>
              </React.Fragment>
            )}
            <Typography component="div" variant="h6">
              Docente
            </Typography>
            <Typography variant="string" component="div">
              {selectedCourse && selectedCourse.teacher}
            </Typography>
          </Box>
        </Grow>
      </Modal>
      <Container maxWidth="xl" sx={{ paddingBottom: "10px" }}>
        <Grid container spacing={2}>
          {((props.showLabs && labs) || courses).map(c => (
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
              <CardActionArea component="button" onClick={() => setSelectedCourse(c)}>
                <ZoomCard
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    ...(selectedCourse && selectedCourse.title === c.title) && {
                      borderBottom: '7px solid #BDD054',
                      transform: 'scale(1.02)',
                      transformOrigin: 'top left',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={c.image}
                    sx={{ height: "200px" }}
                  />
                  <CardContent sx={{ position: "absolute", bottom: "0" }}>
                    <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }} >
                      {c.title}
                    </Typography>
                  </CardContent>
                </ZoomCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

      </Container>
      <SocialFooter />
    </React.Fragment>
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
