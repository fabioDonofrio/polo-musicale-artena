import * as React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Container from '@mui/material/Container';
// import piano from "./piano.webp";
import collageHome from "./collageHome.webp";
import collageHomeSm from "./collageHomeSm.webp";
import AppBar from './AppBar'
import SocialFooter from './SocialFooter';
import { useTheme } from '@mui/material/styles';
import corsoDiBase from "./corsoDiBase.webp";
import corsoPreAfam from "./corsoPreAfam.webp";
import corsoDiStrumento from "./corsoDiStrumento.webp";
import conservatorio from "./conservatorio.webp";
import regione from "./regione.png";
// import { useNavigate } from "react-router-dom";
import { Close } from '@mui/icons-material';
// import FaceFeed from './FaceFeed';
// import InstagramPosts from './InstagramPosts'; 

export default function Home() {
  const [selectedCard, setSelectedCard] = React.useState();
  const theme = useTheme();
  // const navigate = useNavigate();

  const ZoomCard = styled(Card)({
    borderBottom: '7px solid rgba(255,255,255, 0.3)',
    '&:hover': {
      transition: 'transform 1s',
      transform: 'scale(1.02)',
      transformOrigin: 'top left',
      borderBottom: '7px solid #BDD054'
    }
  })

  const BlurCardMedia = styled(CardMedia)({
    WebkitFilter: "blur(0px)",
    MozFilter: "blur(0px)",
    OFilter: "blur(0px)",
    MsFilter: "blur(0px)"
  })

  const cardsPages = [
    {
      name: "SCUOLA DI BASE",
      image: corsoDiBase,
      modalDescription: "I corsi base sono stati istituiti al fine di offrire agli studenti, in possesso di competenze strumentali /musicali primarie o ancora da acquisire, l’opportunità di proseguire o di iniziare la loro preparazione strumentale e musicale all’interno di un contesto da sempre dedicato alla musica. La possibilità di vivere fin dall’inizio a stretto contatto con tanti altri giovani musicisti e tante Scuole strumentali e musicali costituisce una occasione unica nel sistema formativo italiano di tradizione. I Corsi Base si concludono con un Esame di Certificazione. Gli studi possono poi continuare con l’ iscrizione ai Corsi Propedeutici AFAM.",
      size: { xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }
    },
    {
      name: "PRE AFAM",
      image: corsoPreAfam,
      modalDescription: "I corsi propedeutici AFAM sono stati istituiti al fine di offrire agli studenti, già in possesso di competenze strumentali /musicali, l'opportunità di completare o di perfezionare la loro preparazione all'esame di ammissione al Triennio Accademico AFAM di 1° livello.",
      size: { xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }
    },
    {
      name: "CORSI PROFESSIONALI DI STRUMENTO",
      image: corsoDiStrumento,
      modalDescription: "corsi di strumento personalizzati sulla base delle esigenze e preparazione del singolo studente",
      size: { xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }
    },
    // { name: "LABORATORI", image: corsoDiStrumento, modalDescription: "La nostra associazione offre una varietà di laboratori pensati per tutti gli appassionati di musica, dai principianti ai musicisti più esperti." }
  ];

  const handleSectionClick = (section) => setSelectedCard(section);

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
        open={!!selectedCard}
        onClose={() => setSelectedCard()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Close sx={{ float: "right", cursor: "pointer" }} onClick={() => setSelectedCard()} />
          <Typography component="div" variant="h6">
            Descrizione
          </Typography>
          {selectedCard && selectedCard.modalDescription}
        </Box>

      </Modal>
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "24px", zIndex: 0 }}>
        <Card>
          <Grid container >
            <Grid item xl={12} lg={12} md={12} sm={12} sx={{ position: "relative" }}>
              <BlurCardMedia
                component="img"
                image={collageHome}
                alt="piano description"
                sx={{
                  height: { xl: "300px", lg: "300px", md: "300px", sm: "300px", xs: "375px" },
                  display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" }
                }}
              />
              <BlurCardMedia
                component="img"
                image={collageHomeSm}
                alt="piano description"
                sx={{
                  height: { xl: "300px", lg: "300px", md: "300px", sm: "300px", xs: "375px" },
                  display: { xl: "none", lg: "none", md: "none", sm: "block", xs: "block" }
                }}
              />
              <CardContent sx={{ position: "absolute", top: "6%", left: "2%" }}>
                <Typography component="div" variant="h2" sx={{ textTransform: "uppercase" }}>
                  POLO MUSICALE ARTENA
                </Typography>
              </CardContent>
              <CardContent sx={{ position: "absolute", bottom: "0%", left: "2%" }}>
                <div style={{ backgroundColor: "rgba(50, 50, 50, 0.8)", width: "100%", borderRadius: "3px", padding: "0 10px" }}>
                  <Typography component="div" variant="h6">
                    Scuola di base del Conservatorio L. Refice di Frosinone
                  </Typography>
                  <Typography component="div" variant="string">
                    Il Polo Musicale Artena è un’associazione culturale creata e formata esclusivamente da docenti diplomati e laureati nei migliori Conservatori italiani con l’unico scopo di preparare tecnicamente ed artisticamente ogni allievo.
                  </Typography>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <Grid container spacing={3}>
          {cardsPages.map(section => (
            <Grid item {...section.size}>
              <ZoomCard sx={{ position: "relative", width: "100%" }}>
                <CardActionArea component="button" onClick={() => handleSectionClick(section)}>
                  <CardMedia
                    component="img"
                    image={section.image}
                    alt="piano description"
                    sx={{ height: "250px" }}
                  />
                  <CardContent sx={{ position: "absolute", top: "0%", left: "0%", minHeight: "123px" }}>
                    <Typography component="div" variant="h3" sx={{ textTransform: "uppercase" }}>
                      {section.name}
                    </Typography>
                    {(section.name === "SCUOLA DI BASE" || section.name === "PRE AFAM") &&
                      <Typography component="div" variant="h7" sx={{ textTransform: "uppercase", fontSize: "18px" }}>
                        in collaborazione con
                      </Typography>
                    }
                  </CardContent>
                  {(section.name === "SCUOLA DI BASE" || section.name === "PRE AFAM") &&
                    <img src={conservatorio} style={{ position: "absolute", bottom: "5%", left: "35%" }} />
                  }
                </CardActionArea>
              </ZoomCard>
            </Grid>
          ))}
        </Grid>
        <Grid container >
        </Grid>
        <Card>
          <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <Typography component="div" variant="h5">
              “La musica aiuta a
              non sentire dentro il
              silenzio che c'è fuori.”
            </Typography>
            <Typography component="div" variant="h5">
              J.S.BACH
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <Typography component="div" variant="string">
              Scuola di educazione musicale iscritta all'elenco regionale della Regione Lazio
            </Typography>
            <CardMedia
              sx={{ width: "214px" }}
              component="img"
              image={regione}
              alt="piano description"
            />
          </CardContent>
        </Card>
      </Container>
      {/* <InstagramPosts /> */}
      <SocialFooter />
    </React.Fragment>
  )
}