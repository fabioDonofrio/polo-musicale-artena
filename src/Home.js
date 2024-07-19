import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
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
        main: '#3b414d',
        contrastText: "#ffffff"
      },
      secondary: {
        main: '#BDD054',
        contrastText: "#252b39"
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
            gap: "0px"
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            justifyContent: 'center', 
            overflowX: 'auto', 
            gap: "40px",
            position: "sticky" ,
            backgroundColor: defaultTheme.palette.primary.light,
            color: defaultTheme.palette.primary.contrastText,
            fontFamily: "League Gothic",
            fontSize: "25px"
          }
        }
      }
    }
  });

  const ZoomCard = styled(Card)({
    '&:hover': {
      transition: 'transform 1s',
      transform: 'scale(1.02)',
      transformOrigin: 'top left',
      borderBottom: '5px solid #BDD054'
    }
  })

  const ZoomLink = styled(Link)({
    borderBottom: '2px solid transparent',
    '&:hover': {
      transition: 'transform 0.5s',
      transform: 'scaleX(1.2)',
      borderBottom: '2px solid #BDD054'
    }
  })

  const toolbarPages = ["Chi siamo", "Corsi", "Docenti", "Contatti"];
  const cardsPages = ["SCUOLA DI BASE", "PRE AFAM", "CORSO DI STRUMENTO"];
  const headerHeight = "199px";

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", position: "sticky", top: "0", width: "100%", height: headerHeight, backgroundColor: defaultTheme.palette.background.default }}>
        <img src={logo} height={headerHeight}/>
      </div>
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "24px"}}>
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ top: headerHeight} }
          >
            {toolbarPages.map((page) => (
              <ZoomLink
                color="inherit"
                noWrap
                key={page}
                variant="body2"
                href={page}
                sx={{ p: 1, flexShrink: 0 , fontFamily: "inherit", fontSize: "inherit" }}
                underline="none"
              >
                {page}
              </ZoomLink>
            ))}
          </Toolbar>
        <Card>
          <Grid container>
            <Grid item xl={3} lg={3}>
              <CardContent>
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
            </Grid>
            <Grid item xl={6} lg={6}>
              <CardMedia
                component="img"
                image={piano}
                alt="piano description"
              />
            </Grid>
            <Grid item xl={3} lg={3}>
              <CardContent>
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
            </Grid>
          </Grid>
        </Card>
        <Grid container spacing={3}>
          {cardsPages.map(section => (
            <Grid item xl={4} lg={4}>
              <ZoomCard sx={{ position: "relative"}}>
                <CardMedia
                  component="img"
                  image={piano}
                  alt="piano description"
                />
                <CardContent sx={{ position: "absolute", top: "45%", left: "2%"}}>
                  <Typography component="div" variant="h4" sx={{ textTransform: "uppercase"}}>
                    {section}
                  </Typography>
                </CardContent>
              </ZoomCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}