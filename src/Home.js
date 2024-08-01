import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Container from '@mui/material/Container';
import piano from "./piano.jpeg";
import AppBar from './AppBar'
import SocialFooter from './SocialFooter';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();

  const ZoomCard = styled(Card)({
    borderBottom: '7px solid rgba(255,255,255, 0.3)',
    '&:hover': {
      transition: 'transform 1s',
      transform: 'scale(1.02)',
      transformOrigin: 'top left',
      borderBottom: '7px solid #BDD054'
    }
  })

  const cardsPages = ["SCUOLA DI BASE", "PRE AFAM", "CORSO DI STRUMENTO"];

  return (
    <React.Fragment>
      <AppBar />
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
                sx={{ height: "300px" }}
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
            <Grid item xl={4} lg={4} md={4} sm={6}>
              <ZoomCard sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={piano}
                  alt="piano description"
                />
                <CardContent sx={{ position: "absolute", top: "45%", left: "2%" }}>
                  <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }}>
                    {section}
                  </Typography>
                </CardContent>
              </ZoomCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SocialFooter />
    </React.Fragment>
  )
}