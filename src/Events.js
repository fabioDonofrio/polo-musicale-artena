import React from "react";
import PhotoGrid from "./common/PhotoGrid";
import { eventImages } from "./events_images/event_images";
import AppBar from "./AppBar";
import { Container } from "@mui/material";

function Events() {
  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "24px" }}>
        <PhotoGrid images={eventImages.cps_2025} />;
      </Container>
    </React.Fragment>
  )
}

export default Events;