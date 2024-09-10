import * as React from 'react';
import logo from "./logo-pma.webp";
import { Box, Link, Toolbar, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Home from '@mui/icons-material/Home';

function AppBar(props) {

  const toolbarPages = [
    { icon: Home, href: "/" },
    { title: "Chi siamo", href: "/chi-siamo" },
    { title: "Corsi", href: "/corsi" },
    { title: "Laboratori", href: "/laboratori" },
    { title: "Docenti", href: "/docenti" },
    { title: "Contatti", href: "/contatti" },
  ];

  const ZoomLink = styled(Link)({
    borderBottom: '2px solid transparent',
    '&:hover': {
      transition: 'transform 0.5s',
      transform: 'scaleX(1.2)',
      borderBottom: '2px solid #BDD054'
    }
  })

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{
      display: "flex", flexDirection: "column", paddingBottom: "24px",
      position: "sticky", top: "0", zIndex: 1
    }}>
      <Box
        onClick={() => navigate("/")}
        sx={{
          textAlign: "center",
          width: "100%",
          height: { xs: "100px", sm: "100px", md: "200px", lg: "200px", xl: "200px" },
          backgroundColor: theme.palette.background.default,
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        <img src={logo} style={{ height: "100%", objectFit: "fill" }} />
      </Box>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ top: { xs: "50px", sm: "50px", md: "200px", lg: "200px", xl: "200px" }, zIndex: 1 }}
      >
        {toolbarPages.map((page) => (
          <ZoomLink
            color="inherit"
            component={RouterLink}
            noWrap
            key={page.title}
            variant="body2"
            to={page.href}
            sx={{ p: 1, flexShrink: 0, fontFamily: "inherit", fontSize: "inherit", padding: "10px", display: "flex", alignItems: "center" }}
            underline="none"
          >
            {page.title && (
              <Typography
                variant="h7"
                sx={{ fontSize: { xs: "18px", sm: "18px", md: "unset", lg: "unset", xl: "unset" } }}
              >
                {page.title}
              </Typography>
            )}
            {page.icon && <page.icon />}
          </ZoomLink>
        ))}
      </Toolbar>
    </Container>
  );
}

export default AppBar;
