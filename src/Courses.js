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
import microphone from './microphone.webp';
import guitar from './guitar.webp';
import keyboard from './keyboard.webp';
import sax from './sax.webp';
import oboe from './oboe.webp';
import cello from './cello.webp';
import violin from './violin.webp';
import opera from './opera.webp';
import flute from './flute.webp';
import clarinet from './clarinet.webp';
import armoniaClassica from './armoniaClassica.webp';
import hdRecording from './hdRecording.webp';
import coro from './coro.webp';
// import storiaDellaMusica from './storiaDellaMusica.webp';
// import propedeuticaMusicale from './propedeuticaMusicale.webp';
import banda from './banda.webp';
import linguaInglese from './linguaInglese.webp';
import AppBar from './AppBar';
import { /* Box,*/ Container, Link /* Grow, Modal */ } from '@mui/material';
import { styled } from "@mui/system";
import SocialFooter from './SocialFooter';
import { Link as RouterLink } from "react-router-dom";
// import { Close } from '@mui/icons-material';

function Courses(props) {

  const courses = [
    { image: keyboard, title: "pianoforte classico & tastiere", description: "", teachers: ["Alessio Pizzotti", "Tiziano Palombi"] },
    { image: piano, title: "pianoforte jazz", description: "", teachers: ["Edoardo Petretti"] },
    { image: opera, title: "canto lirico", description: "", teachers: ["Maria Di Re"] },
    { image: microphone, title: "canto pop", description: "", teachers: ["Annalaura Talpa"] },
    { image: bass, title: "contrabbasso / basso", description: "", teachers: ["Giuseppe Talone"] },
    { image: guitar, title: "chitarra classica / moderna / jazz", description: "", teachers: ["Lorenzo Mirra"] },
    { image: drums, title: "batteria & percussioni", description: "", teachers: ["Simone Talone", "Adolfo Valeri"] },
    { image: trumpet, title: "tromba", description: "", teachers: ["Mario Caporilli"] },
    { image: trombone, title: "trombone", description: "", teachers: ["Federico Cecchini"] },
    { image: accordion, title: "fisarmonica", description: "", teachers: ["Pietro Roffi"] },
    { image: violin, title: "violino", description: "", teachers: ["Margherita Musto", "Rachele Mancini"] },
    { image: cello, title: "violoncello", description: "", teachers: ["Angelo Maria Santisi", "Andrea Savino"] },
    { image: sax, title: "sax", description: "", teachers: ["Danilo Raponi"] },
    { image: flute, title: "flauto", description: "", teachers: ["Ilaria Latini"] },
    { image: oboe, title: "oboe", description: "", teachers: ["Floria Girolami"] },
    { image: clarinet, title: "clarinetto", description: "", teachers: ["Massimo Caturelli"] },
    { image: solfeggio, title: "solfeggio", description: "", teachers: ["Alessio Pizzotti"] },
    { image: armoniaClassica, title: "armonia classica", description: "", teachers: ["Massimo Caturelli"] },
  ]
  const [coursesCollapse, setCoursesCollapse] = React.useState(new Array(courses.length).fill(true));
  const [isHovered, setIsHovered] = React.useState(null);
  // const [selectedCourse, setSelectedCourse] = React.useState();

  const labs = [
    { image: coro, title: "coro", description: "", teachers: ["Maria Di Re", "Alessio Pizzotti"] },
    { image: banda, title: "banda", description: "", teachers: ["Federico Cecchini"] },
    { image: hdRecording, title: "hd recording", description: "", teachers: ["Tiziano Palombi"] },
    // { image: storiaDellaMusica, title: "storia della musica", description: "", teachers: "" },
    // { image: propedeuticaMusicale, title: "propedeutica musicale", description: "", teachers: "Irene Mele" },
    { image: linguaInglese, title: "lingua inglese", description: "", teachers: ["Giulia De Castris"] }
  ]

  // const ZoomCard = styled(Card)({
  //   borderBottom: '7px solid rgba(255,255,255, 0.3)',
  //   '&:hover': {
  //     transition: 'transform 1s',
  //     transform: 'scale(1.02)',
  //     transformOrigin: 'top left',
  //     borderBottom: '7px solid #BDD054'
  //   }
  // })


  const ZoomLink = styled(Link)({
    borderBottom: '2px solid transparent',
    '&:hover': {
      transition: 'transform 0.5s',
      transform: 'scaleX(1.2)',
      borderBottom: '2px solid #BDD054'
    }
  })

  const ZoomCard = styled(Card)({
    borderBottom: '7px solid rgba(255,255,255, 0.3)',
    '&:hover': {
      borderBottom: '7px solid #BDD054',
      '.card-content-title': { display: 'none' },
      '.card-content-collapse': {
        width: "60%", /* Quando hover sul div padre, larghezza 30% */
        opacity: 0.9 /* Rende visibile il div */
      }
    },
    '.card-content-collapse.hover-touch': {
      width: "60%", /* Quando hover sul div padre, larghezza 30% */
      opacity: 0.9 /* Rende visibile il div */
    },
    '.card-content-title.hover-touch': { display: 'none' },
  })

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   backgroundColor: 'white',
  //   boxShadow: 24,
  //   p: 4,
  //   padding: "20px"
  // };

  const handleCourseCollapse = (index) => {
    const newCoursesCollapse = [...coursesCollapse];
    newCoursesCollapse[index] = !newCoursesCollapse[index];
    setCoursesCollapse(newCoursesCollapse);
  }

  return (
    <React.Fragment>
      <AppBar />
      {/* <Modal
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
      </Modal> */}
      <Container maxWidth="xl" sx={{ paddingBottom: "10px" }}>
        <Grid container spacing={2}>
          {((props.showLabs && labs) || courses).map((c, index) => (
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
              <CardActionArea component="button" onClick={() => handleCourseCollapse(index)}>
                <ZoomCard
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
                    ...(isHovered && isHovered.title === c.title) && { borderBottom: '7px solid #BDD054' }
                  }}
                  className={`card ${isHovered && isHovered.title === c.title ? 'hover-touch' : ''}`}
                  onTouchStart={() => setIsHovered(c)}  // Quando l'utente tocca il div, mostra il figlio
                  onTouchEnd={() => setIsHovered(null)}
                >
                  <div className="card-content-wrapper" style={{ width: "100%" }}>
                    <CardMedia
                      component="img"
                      image={c.image}
                      sx={{ height: "250px", objectFit: "cover" }}
                    />
                    <CardContent className={`card-content-title ${isHovered && isHovered.title === c.title ? 'hover-touch' : ''}`} sx={{ position: "absolute", bottom: "0" }}>
                      <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }} >
                        {c.title}
                      </Typography>
                    </CardContent>
                  </div>
                  <CardContent
                    className={`card-content-collapse ${isHovered && isHovered.title === c.title ? 'hover-touch' : ''}`}
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      width: 0, /* Partenza con larghezza 0 */
                      height: "100%", /* Altezza del 100% rispetto al div padre */
                      backgroundColor: "white", /* Colore di esempio */
                      opacity: 0, /* Inizialmente invisibile */
                      transition: "width 0.3s linear, opacity 0.3s ease"
                    }}
                  >
                    <Typography component="div" variant="h4" sx={{ textTransform: "uppercase", color: "black" }}>
                      {c.title}
                    </Typography>
                    <Typography component="div" variant="h6">
                      Docenti
                    </Typography>
                    <Typography variant="string" component="div" sx={{ color: "black" }}>
                      {c.teachers.map(t =>
                        <div style={{ marginTop: "10px" }}>
                          <ZoomLink
                            color="inherit"
                            component={RouterLink}
                            noWrap
                            key={t}
                            variant="string"
                            to={`/docenti/${t}`}
                            underline="none"
                          >{t}</ZoomLink>
                        </div>
                      )}
                    </Typography>
                  </CardContent>
                </ZoomCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

      </Container>
      <SocialFooter />
    </React.Fragment >
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
