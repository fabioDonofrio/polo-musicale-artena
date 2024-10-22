import * as React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Container from '@mui/material/Container';
import piano from "./piano.webp";
import AppBar from './AppBar'
import SocialFooter from './SocialFooter';
import { useTheme } from '@mui/material/styles';
import corsoDiBase from "./corsoDiBase.webp";
import corsoPreAfam from "./corsoPreAfam.webp";
import corsoDiStrumento from "./corsoDiStrumento.webp";
import conservatorio from "./conservatorio.jpg";
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

  const cardsPages = [
    { name: "SCUOLA DI BASE", image: corsoDiBase, modalDescription: "I Corsi Base sono corsi liberi e sono stati istituiti dal Conservatorio Licinio Refice al fine di offrire agli studenti, in possesso di competenze strumentali /musicali primarie o ancora da acquisire, l’opportunità di proseguire o di iniziare la loro preparazione strumentale e musicale all’interno di un contesto da sempre dedicato alla musica. La possibilità di vivere fin dall’inizio a stretto contatto con tanti altri giovani musicisti e tante Scuole strumentali e musicali costituisce una occasione unica nel sistema formativo italiano di tradizione. I Corsi Base si concludono con un Esame di Certificazione. Gli studi possono poi continuare con l’ iscrizione ai Corsi Propedeutici AFAM." },
    { name: "PRE AFAM", image: corsoPreAfam, modalDescription: "I Corsi Propedeutici AFAM sono stati istituiti dal Conservatorio Licinio Refice al fine di offrire agli studenti, già in possesso di competenze strumentali /musicali, l'opportunità di completare o di perfezionare la loro preparazione all'esame di ammissione al Triennio Accademico AFAM di 1° livello." },
    { name: "CORSI DI STRUMENTO PERSONALIZZATI", image: corsoDiStrumento, modalDescription: "Corsi di strumento personalizzati sulla base delle esigenze e preparazione del singolo studente" },
    { name: "LABORATORI", image: corsoDiStrumento, modalDescription: "La nostra associazione offre una varietà di laboratori pensati per tutti gli appassionati di musica, dai principianti ai musicisti più esperti." }
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
            <Grid item xl={3} lg={3} md={3} sm={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <CardContent>
                <Typography component="div" variant="h5">
                  “La musica aiuta a
                  non sentire dentro il
                  silenzio che c'è fuori.”
                </Typography>
                <Typography component="div" variant="h5">
                  J.S.BACH
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xl={9} lg={9} md={9} sm={12} sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={piano}
                alt="piano description"
                sx={{ height: { xl: "250px", lg: "250px", md: "250px", sm: "250px", xs: "375px" } }}
              />
              <CardContent sx={{ position: "absolute", top: "0%", left: "2%" }}>
                <Typography component="div" variant="h2" sx={{ textTransform: "uppercase" }}>
                  POLO MUSICALE ARTENA
                </Typography>
                <div style={{ backgroundColor: "rgba(50, 50, 50, 0.5)", width: "100%", borderRadius: "3px", padding: "0 10px" }}>
                  <Typography component="div" variant="h6">
                    Scuola di base del Conservatorio L. Refice di Frosinone
                  </Typography>
                  <Typography component="div" variant="string">
                    Il Polo Musicale Artena è un’associazione creata e formata esclusivamente da docenti diplomati e laureati nei migliori Conservatori italiani con l’unico scopo di preparare tecnicamente ed artisticamente ogni allievo.
                  </Typography>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <Grid container spacing={3}>
          {cardsPages.map(section => (
            <Grid item xl={6} lg={6} md={6} sm={6}>
              <ZoomCard sx={{ position: "relative" }}>
                <CardActionArea component="button" onClick={() => handleSectionClick(section)}>
                  <CardMedia
                    component="img"
                    image={section.image}
                    alt="piano description"
                    sx={{ maxHeight: "300px" }}
                  />
                  <CardContent sx={{ position: "absolute", bottom: "55%", left: "0%", minHeight: "123px" }}>
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
                    <img src={conservatorio} style={{ position: "absolute", bottom: "10%", left: "35%" }} />
                  }
                </CardActionArea>
              </ZoomCard>
            </Grid>
          ))}
        </Grid>
        <Grid container >
        </Grid>
      </Container>
      {/* <InstagramPosts /> */}
      <SocialFooter />
    </React.Fragment>
  )
}