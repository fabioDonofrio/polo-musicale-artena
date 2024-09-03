import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container, Link, Toolbar } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function SocialFooter() {
  const theme = useTheme();

  const social = [
    { icon: FacebookIcon, href: "https://www.facebook.com/share/RJKbDpdybBKjDeo3/" },
    { icon: InstagramIcon, href: "https://www.instagram.com/polomusicaleartena" }
  ]

  return (
    <Container maxWidth="xl" sx={{}}>
      <Toolbar
        component="nav"
        variant="dense"
      >
        {social.map(s => (
          <Link
            color={theme.palette.secondary.main}
            noWrap
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
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