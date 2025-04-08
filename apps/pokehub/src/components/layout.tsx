import { Container, Typography } from "@pokehub/components";
import { AppBar, Toolbar, Box } from "@mui/material";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokédex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {title && (
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
        )}
        <Box sx={{ pt: 2 }}>{children}</Box>
      </Container>
    </>
  );
}
