import React from "react";
import PhotoGrid from "./common/PhotoGrid";
import AppBar from "./AppBar";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import SocialFooter from "./SocialFooter";
import { eventsData } from "./constants/eventsData";
import { eventImages } from "./constants/events_images/event_images";
import { useParams } from "react-router-dom";
import formatItalianDate from "./utils/DateUtils";

function Event() {

  const { id } = useParams();
  const event = eventsData.find((event) => event.id === id);

  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "24px" }}>
        <div key={event.id}>
          <Typography component="div" variant="h3" sx={{ marginBottom: "20px" }}>
            {event.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xl: "row", lg: "row", md: "row", sm: "row", xs: "column" },
              alignItems: "stretch",
              gap: "10px",
              marginBottom: "20px"
            }}
          >
            <Box sx={{ flex: 1, minWidth: { xl: "30%", lg: "30%", md: "30%", sm: "30%", xs: "100%" }, color: "white" }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  backgroundColor: "#BDD054",
                  color: "white",
                  textShadow: "0px 0px 10px black",
                  textAlign: "center",
                  padding: "10px 0",
                }}
              >
                {event.dates.map(d => formatItalianDate(d)).join(' - ')}
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="string" component="div" sx={{ whiteSpace: "pre-line" }}>
                    {event.description.split('*').map((part, i) =>
                      i % 2 === 1 ? <em key={i}>{part}</em> : part
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <PhotoGrid images={eventImages[event.id].detail} />
          </Box>
        </div>
      </Container>
      <SocialFooter />
    </React.Fragment>
  );
}

export default Event;