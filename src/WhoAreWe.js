import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import granaio from './granaio.webp';
import AppBar from './AppBar';
import Container from '@mui/material/Container';
import SocialFooter from './SocialFooter';

function WhoAreWe() {

  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "24px" }}>
        <Card>
          <Grid container>
            <Grid item xl={3} lg={3} md={3}>
              <CardContent>
                <Typography component="div" variant="h3" sx={{ textTransform: "uppercase", textAlign: "center " }}>
                  POLO MUSICALE ARTENA P.M.A.
                </Typography>
                <Typography component="div" variant="string">
                  Il Polo Musicale Artena è
                  un’associazione creata e formata
                  esclusivamente da docenti diplomati
                  e laureati nei migliori Conservatori
                  italiani con l’unico scopo di
                  preparare tecnicamente ed
                  artisticamente ogni allievo.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sx={{ height: "700px" }}>
              <CardMedia
                component="img"
                image={granaio}
                sx={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3}>
              <CardContent>
                <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }}>
                  CHI SIAMO
                </Typography>
                <Typography component="div" variant="h6">
                  La scuola
                </Typography>
                <Typography variant="string" component="div">
                  Il Polo Musicale Artena nasce dall'esigenza di ripristinare la scuola di base del Conservatorio rispettando la tradizione, integrando l'evoluzione
                </Typography>
                <Typography component="div" variant="h6">
                  Il progetto
                </Typography>
                <Typography variant="string" component="div">
                  Il polo sarà gestito dalla nostra Associazione in collaborazione con il Conservatorio Licinio Refice di Frosinone. Seguiremo gli allievi nella
                  loro preparazione fino al coseguimento della Laurea di Triennio e Biennio di strumento.
                </Typography>
                <Typography component="div" variant="h6">
                  I corsi
                </Typography>
                <Typography variant="string" component="div">
                  I corsi si divideranno in livelli e potranno frequentare le nostre lezioni tutti, senza alcun limite di età.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <SocialFooter />
    </React.Fragment>
  );
}

WhoAreWe.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default WhoAreWe;
