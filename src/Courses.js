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
import armoniaClassica from './armoniaClassica.webp';
import hdRecording from './hdRecording.webp';
import coro from './coro.jpg';
import storiaDellaMusica from './storiaDellaMusica.jpg';
import propedeuticaMusicale from './propedeuticaMusicale.jpeg';
import banda from './banda.webp';
import linguaInglese from './linguaInglese.webp';
import AppBar from './AppBar';
import { Box, Container, Grow, Modal } from '@mui/material';
import { styled } from "@mui/system";
import SocialFooter from './SocialFooter';
import { Close } from '@mui/icons-material';

function Courses(props) {

  const [selectedCourse, setSelectedCourse] = React.useState();
  const courses = [
    { image: keyboard, title: "pianoforte classico & tastiere", description: "", teachers: "Alessio Pizzotti, Tiziano Palombi" },
    { image: piano, title: "pianoforte jazz", description: "", teachers: "Edoardo Petretti" },
    { image: opera, title: "canto lirico", description: "", teachers: "Maria di Re" },
    { image: microphone, title: "canto pop", description: "", teachers: "Annalaura Talpa" },
    { image: bass, title: "contrabbasso / basso", description: "", teachers: "Giuseppe Talone" },
    { image: guitar, title: "chitarra classica / moderna / jazz", description: "", teachers: "Fabio Perciballi, Lorenzo Mirra" },
    { image: drums, title: "batteria & percussioni", description: "", teachers: "Simone Talone, Adolfo Valeri" },
    { image: trumpet, title: "tromba", description: "", teachers: "Mario Caporilli" },
    { image: trombone, title: "trombone", description: "", teachers: "Federico Cecchini" },
    { image: accordion, title: "fisarmonica", description: "", teachers: "Pietro Roffi" },
    { image: violin, title: "violino", description: "", teachers: "Margherita Musto, Rachele Mancini" },
    { image: cello, title: "violoncello", description: "", teachers: "Angelo Maria Santisi, Andrea Savino" },
    { image: sax, title: "sax", description: "", teachers: "Danilo Raponi" },
    { image: flute, title: "flauto", description: "", teachers: "Ilaria Latini" },
    { image: oboe, title: "oboe", description: "", teachers: "Floria Girolami" },
    { image: clarinet, title: "clarinetto", description: "", teachers: "Massimo Caturelli" }
  ]

  const labs = [
    { image: solfeggio, title: "solfeggio", description: "", teachers: "" },
    { image: armoniaClassica, title: "armonia classica", description: "", teachers: "Massimo Caturelli" },
    { image: coro, title: "coro", description: "", teachers: "Maria di Re" },
    { image: hdRecording, title: "hd recording", description: "", teachers: "Tiziano Palombi" },
    { image: storiaDellaMusica, title: "storia della musica", description: "", teachers: "" },
    { image: propedeuticaMusicale, title: "propedeutica musicale", description: "", teachers: "Irene Mele" },
    { image: banda, title: "banda", description: "", teachers: "Federico Cecchini" },
    { image: linguaInglese, title: "lingua inglese", description: "", teachers: "" }
  ]

  const ZoomCard = styled(Card)({
    borderBottom: '7px solid rgba(255,255,255, 0.3)',
    '&:hover': {
      transition: 'transform 1s',
      transform: 'scale(1.02)',
      transformOrigin: 'top left',
      borderBottom: '7px solid #BDD054'
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
              Docenti
            </Typography>
            <Typography variant="string" component="div">
              {selectedCourse && selectedCourse.teachers}
            </Typography>
          </Box>
        </Grow>
      </Modal>
      <Container maxWidth="xl" sx={{ paddingBottom: "10px" }}>
        <Grid container spacing={2}>
          {((props.showLabs && labs) || courses).map(c => (
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
              <CardActionArea component="button" onClick={() => { if (c.teachers) setSelectedCourse(c) }}>
                <ZoomCard
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center"
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
