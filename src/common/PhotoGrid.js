import React, { useState } from "react";
import {
    Box,
    Grid,
    Dialog,
    DialogContent,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PhotoGrid = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            {/* GRID */}
            <Grid container spacing={1}>
                {images.map((img, index) => (
                    <Grid item xs={4} sm={3} md={2} key={index}>
                        <Box
                            onClick={() => handleOpen(img)}
                            sx={{
                                position: "relative",
                                width: "100%",
                                paddingTop: "100%", // quadrato
                                overflow: "hidden",
                                cursor: "pointer",
                                "&:hover img": {
                                    transform: "scale(1.05)",
                                },
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
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* MODALE */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
            >
                <DialogContent
                    sx={{
                        position: "relative",
                        p: 0,
                        backgroundColor: "black",
                    }}
                >
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

                    {selectedImage && (
                        <Box
                            component="img"
                            src={selectedImage}
                            alt="preview"
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "80vh",
                                objectFit: "contain",
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PhotoGrid;
