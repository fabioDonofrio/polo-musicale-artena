import React from "react";
import PhotoGrid from "./common/PhotoGrid";
import { eventImages } from "./events_images/event_images";
import AppBar from "./AppBar";
import { Card, CardContent, Container, Typography } from "@mui/material";
import SocialFooter from "./SocialFooter";

function Events() {
  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "24px" }}>
        <Card>
          <CardContent>
            <Typography component="div" variant="h3">
              CROSS POLO SOUND 2026
            </Typography>
            <Typography variant="string" component="div">
              <span style={{ fontStyle: "italic" }}>Cross Polo Sound</span> è un campus universitario internazionale con studenti del Queens Collage - City University di New York e studenti della Regione Lazio.
              Il progetto è finanziato da Lazio Disco nell'ambito delle politiche di sostegno alla formazione per gli studenti universitari.
            </Typography>
          </CardContent>
        </Card>
        <PhotoGrid images={eventImages.cps_2025} />;
      </Container>
      <SocialFooter />
    </React.Fragment>
  )
}

export default Events;