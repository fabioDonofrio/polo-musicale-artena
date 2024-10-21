import React, { useRef, useState } from "react";
import AppBar from "./AppBar";
import { Card, CardContent, Container, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SocialFooter from "./SocialFooter";

const Contacts = (props) => {
  const [noteTranslation, setNoteTranslation] = useState();

  const ZoomLink = styled(Link)({
    borderBottom: '2px solid transparent',
    '&:hover': {
      transition: 'transform 0.5s',
      transform: 'scaleX(1.2)',
      borderBottom: '2px solid #BDD054'
    }
  })

  const MovingNote = noteTranslation
    ? styled(MusicNoteIcon)({
      animationDuration: "3s",
      animationName: "sliding-vertically",
      animationIterationCount: "infinite",
    })
    : MusicNoteIcon;

  const contact = (hrefType, value) => (
    <div onClick={() => setNoteTranslation(true)} style={{ marginLeft: "20px", marginLeft: "5px" }}>
      <span>
        {hrefType === "tel"
          ? <CallIcon sx={{ color: "#BDD054", fontSize: "35px" }} />
          : <AlternateEmailIcon sx={{ color: "#BDD054", fontSize: "35px" }} />
        }
        {hrefType === "tel" && <sup><MovingNote sx={{ color: "#BDD054", verticalAlign: "super", fontSize: "20px" }} /></sup>}
      </span>
      <ZoomLink
        color="inherit"
        noWrap
        href={`${hrefType}:${value}`}
        underline="none"
      >
        <Typography
          variant="string"
          sx={{ marginLeft: "10px", verticalAlign: "super" }}
        >
          {value}
        </Typography>
      </ZoomLink>
    </div>
  )

  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth="xl" sx={{ paddingBottom: "10px" }}>
        <Grid container>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Card sx={{ padding: "1% 2%", marginRight: { xl: "2%", lg: "2%", md: "2%", xs: "0" }, marginBottom: "1%", minHeight: "500px" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Typography variant="h4" sx={{ color: "#BDD054" }}>Iscrizione ai corsi</Typography>
                <Typography variant="string">Vieni a trovarci nella nostra sede all'interno di un polo multifunzionale dedicato alle professioni artistiche. Ti aspettiamo!</Typography>
                <div style={{ marginLeft: "20px", marginLeft: "5px" }}>
                  <PlaceIcon sx={{ color: "#BDD054", fontSize: "35px" }} />
                  <Typography variant="string" sx={{ marginLeft: "10px", verticalAlign: "super", color: "#BDD054" }}>Museikè</Typography>
                  <Typography variant="string" sx={{ marginLeft: "10px", verticalAlign: "super" }}>(piano terra del Granaio Borghese)</Typography>
                </div>
                <div style={{ marginLeft: "20px", marginLeft: "5px" }}>
                  <AccessTimeIcon sx={{ color: "#BDD054", fontSize: "35px", paddingRight: "3px" }} />
                  <Typography variant="string" sx={{ marginLeft: "10px", verticalAlign: "super" }}>Lunedì, martedì, giovedì, venerdì:</Typography>
                  <Typography variant="string" sx={{ marginLeft: "10px", verticalAlign: "super", color: "#BDD054" }}>16:00 - 19:00</Typography>
                </div>
                <Typography variant="h4" sx={{ color: "#BDD054" }}>Contatti</Typography>
                {contact("tel", "3284571854")}
                {contact("tel", "3284288891")}
                {contact("mailto", "polomusicaleartena@gmail.com")}
              </CardContent>
            </Card>

          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.7851928929367!2d12.910148276354322!3d41.74073347256526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13257bf24a8fb7e1%3A0x4f79bcadccf6f8bb!2sAssociazione%20Borgo%20dell&#39;Arte%20-%20Museik%C3%A8%20museum!5e0!3m2!1sit!2sit!4v1729338589752!5m2!1sit!2sit"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>
      </Container>
      <SocialFooter />
    </React.Fragment>
  );
};

export default Contacts;