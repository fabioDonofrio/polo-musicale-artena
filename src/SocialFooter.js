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
    <Container maxWidth="xl" sx={{ position: "sticky", bottom: 0 }}>
      <Toolbar
        component="nav"
        variant="dense"
      >
        <Typography variant="string" sx={{ color: "#BDD054" }}>Segui le nostre pagine per le ultime novità e le date dei prossimi concerti</Typography>
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
            <s.icon />
          </Link>
        ))}
      </Toolbar>
    </Container>
  )
}

export default SocialFooter;