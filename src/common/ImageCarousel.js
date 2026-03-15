import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ImageCarousel = ({ items, height = 400 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoPlay] = useState(true);

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

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length, autoplay]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
      onTouchStart={() => setAutoPlay(false)}
      onTouchEnd={() => setAutoPlay(true)}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
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
                  maxWidth: { xl: "720px", lg: "720px", md: "720px", sm: "720px", xs: "100%" },
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />

              {/* Titolo trasparente */}
              {item.title && (
                <Typography
                  className="carouselTitle"
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    position: "absolute",
                    top: "40%",
                    color: "#fff",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    opacity: 1,
                    transition: "opacity 0.4s ease",
                    zIndex: 2,
                    fontStyle: "italic",
                    textShadow: "0 4px 10px rgba(0,0,0,1)"
                  }}
                >
                  {item.title}
                </Typography>
              )}
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
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 3,
        }}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor:
                index === currentIndex
                  ? "#fff"
                  : "rgba(255,255,255,0.4)",
              transition: "all 0.3s",
              transform:
                index === currentIndex ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;