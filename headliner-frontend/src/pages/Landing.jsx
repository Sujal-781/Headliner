import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroPreview from "../assets/hero-preview.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #0F1020 0%, #1B1D36 60%)"
            : "linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 60%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE — TEXT */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography
                variant="h3"
                fontWeight={800}
                lineHeight={1.2}
              >
                Stay Ahead with the <br />
                <Box component="span" color="primary.main">
                  News That Matters
                </Box>
              </Typography>

              <Typography variant="h6" color="text.secondary">
                Curated headlines, trending stories, and real-time updates —
                all in one place.
              </Typography>

              <Typography color="text.secondary">
                Whether you're into tech, politics, sports, or lifestyle,
                our smart engine brings you the most relevant articles,
                tailored to your interests.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  width: "fit-content",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                }}
                onClick={() => navigate("/auth")}
              >
                Get Started →
              </Button>
            </Stack>
          </Grid>

          {/* RIGHT SIDE — IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Decorative background shape */}
              <Box
                sx={{
                  position: "absolute",
                  width: 420,
                  height: 420,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  opacity: 0.15,
                  zIndex: 0,
                }}
              />

              {/* Image */}
              <Box
                  component="img"
                  src={heroPreview}
                  alt="App preview"
                  sx={{
                    width: "100%",
                    maxWidth: 380,
                    borderRadius: 4,
                    boxShadow: 10,
                    position: "relative",
                    zIndex: 1,
                  }}
                />

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
