import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container, Link, Toolbar, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function SocialFooter() {
  const theme = useTheme();

  const social = [
    { icon: FacebookIcon, href: "https://www.facebook.com/share/RJKbDpdybBKjDeo3/" },
    { icon: InstagramIcon, href: "https://www.instagram.com/polomusicaleartena" }
  ]

  return (
    <div style={{ backgroundColor: "#252b39", position: "sticky", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ backgroundColor: "#252b39", borderTop: "2px solid #BDD054" }}
        >
          <Typography variant="h7" sx={{ color: "#BDD054" }}>Seguici sui nostri social</Typography>
          {social.map(s => (
            <Link
              color={theme.palette.secondary.main}
              noWrap
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 1, flexShrink: 0, cursor: "pointer", padding: "8px 8px 2px 8px" }}
              underline="none"
            >
              <s.icon sx={{ fontSize: { xl: "40px", lg: "40px", md: "40px", sm: "30px", xs: "30px" } }} />
            </Link>
          ))}
        </Toolbar>
      </Container>
    </div>
  )
}

export default SocialFooter;