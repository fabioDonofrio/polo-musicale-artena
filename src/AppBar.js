import * as React from 'react';
import logo from "./logo-pma.webp";
import { Box, Link, Toolbar, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from "react-router-dom";

function AppBar(props) {
  const headerHeight = "199px";

  const toolbarPages = [
    { title: "Chi siamo", href: "/chi-siamo" },
    { title: "Corsi", href: "/corsi" },
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
          height: headerHeight,
          backgroundColor: theme.palette.background.default,
          zIndex: 1,
          cursor: "pointer",
          display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }
        }}
      >
        <img src={logo} height={headerHeight} />
      </Box>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ top: headerHeight, zIndex: 1, }}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            textAlign: "center",
            backgroundColor: theme.palette.background.default,
            zIndex: 1,
            cursor: "pointer",
            display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" }
          }}
        >
          <img src={logo} height="30px" />
        </Box>
        {toolbarPages.map((page) => (
          <ZoomLink
            color="inherit"
            component={RouterLink}
            noWrap
            key={page.title}
            variant="body2"
            to={page.href}
            sx={{ p: 1, flexShrink: 0, fontFamily: "inherit", fontSize: "inherit" }}
            underline="none"
          >
            <Typography
              variant='h7'
            >
              {page.title}
            </Typography>
          </ZoomLink>
        ))}
      </Toolbar>
    </Container>
  );
}

export default AppBar;
