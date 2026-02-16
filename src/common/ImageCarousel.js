import React, { useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ImageCarousel = ({ items, height = 400 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          transition: "transform 0.6s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => {
          const imageSrc = isMobile
            ? item.imageMobile || item.imageDesktop
            : item.imageDesktop;

          return (
            <Box
              key={index}
              component={Link}
              to={item.link}
              sx={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              {/* Background blur */}
              <Box
                component="img"
                src={imageSrc}
                alt=""
                aria-hidden
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(20px) brightness(0.7)",
                  transform: "scale(1.1)",
                }}
              />

              {/* Immagine principale */}
              <Box
                component="img"
                src={imageSrc}
                alt={item.alt || `slide-${index}`}
                loading="lazy"
                sx={{
                  position: "relative",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  zIndex: 1,
                }}
              />
            </Box>
          );
        })}
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "#fff",
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "#fff",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
