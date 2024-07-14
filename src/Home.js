import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import logo from "./logo pma.png";
import piano from "./piano.jpeg";

export default function Home() {
  let defaultTheme = createTheme({
    palette: {
      background: {
        default: '#252b39',
      }, 
      primary: {
        main: '#ffffff1a',
        contrastText: "#ffffff"
      },
      secondary: {
        main: '#252b39',
      },
    }
  });


  defaultTheme = createTheme(defaultTheme, {
    typography: {
      h3: {
        fontFamily: "League Gothic",
        padding: "7px 0",
        color: "#BDD054"
      },
      h4: {
        fontFamily: "League Gothic",
        padding: "5px 0"
      },
      h6 : {
        fontFamily: "DM Serif Display",
        color: "#BDD054",
        fontWeight: "bold"
      },
      string: {
        fontFamily: "DM Serif Display"
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: defaultTheme.palette.primary.main,
            color: defaultTheme.palette.primary.contrastText
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }
        }
      }
    }
  });


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <div style={{ textAlign: "center", position: "sticky", top: "0", width: "100%", backgroundColor: defaultTheme.palette.background.default }}>
          <img src={logo} width="400"/>
        </div>
        <Card sx={{ display: 'flex',  flexDirection: { xs: "column", md: "row"} }}>
          <CardContent sx={{ flex: '1 1 33%' }}>
            <Typography component="div" variant="h3" sx={{ textTransform: "uppercase"}}>
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
          <CardMedia
            component="img"
            sx={{ flex: '1 1 33%' }}
            image={piano}
            alt="piano description"
          />
          <CardContent sx={{ flex: '1 1 33%' }}>
            <Typography component="div" variant="h4" sx={{ textTransform: "uppercase"}}>
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
        </Card>
      </Container>
    </ThemeProvider>
  )
}