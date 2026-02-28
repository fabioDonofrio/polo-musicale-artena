import React, { useState } from "react";
import {
    Box,
    Grid,
    Dialog,
    DialogContent,
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PhotoGrid = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleOpen = (index) => {
        setSelectedIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedIndex(null);
    };

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <>
            <Grid container spacing={1}>
                {images.map((img, index) => (
                    <Grid item xs={4} sm={3} md={2} key={index}>
                        <Box
                            onClick={() => handleOpen(index)}
                            sx={{
                                position: "relative",
                                width: "100%",
                                paddingTop: "100%",
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                        >
                            <Box
                                component="img"
                                src={img}
                                alt={`photo-${index}`}
                                loading="lazy"
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogContent
                    sx={{
                        position: "relative",
                        p: 0,
                        backgroundColor: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Close */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            color: "#fff",
                            zIndex: 2,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Freccia sinistra - SOLO desktop */}
                    {!isMobile && (
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: "absolute",
                                left: 16,
                                color: "#fff",
                                zIndex: 2,
                            }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    )}

                    {/* Immagine */}
                    {selectedIndex !== null && (
                        <Box
                            component="img"
                            src={images[selectedIndex]}
                            alt="preview"
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "80vh",
                                objectFit: "contain",
                            }}
                        />
                    )}

                    {/* Freccia destra - SOLO desktop */}
                    {!isMobile && (
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: "absolute",
                                right: 16,
                                color: "#fff",
                                zIndex: 2,
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PhotoGrid;