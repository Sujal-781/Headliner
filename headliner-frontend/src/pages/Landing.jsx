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
       <Grid
            container
            spacing={6} // ⬅️ MORE GAP BETWEEN IMAGE & STATS
            alignItems="center"
          >

          
          {/* LEFT SIDE — TEXT */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h3" fontWeight={800} lineHeight={1.2}>
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

          {/* RIGHT SIDE — IMAGE + STATS */}
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={-3} // ⬅️ MORE GAP BETWEEN IMAGE & STATS
              alignItems="center"
            >

              
              {/* IMAGE */}
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* Glow */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: 500,
                      height: 480,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      opacity: 0.15,
                      zIndex: 0,
                    }}
                  />

                  <Box
                    component="img"
                    src={heroPreview}
                    alt="App preview"
                    sx={{
                      width: "100%",
                      maxWidth: 440,
                      borderRadius: 4,
                      boxShadow: 10,
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Grid>

              {/* STATS */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  pl: { sm: 76, md: 33 }, // ⬅️ PUSH STATS AWAY FROM IMAGE
                }}
              >
                <Stack spacing={4}>

                  <Stat
                    value="50K+"
                    label="Articles indexed daily"
                    glow="#9F8CFF"
                  />
                  <Stat
                    value="100+"
                    label="Trusted news sources"
                    glow="#6EC1E4"
                  />
                  <Stat
                    value="< 1s"
                    label="Average refresh time"
                    glow="#7CF7C1"
                  />
                </Stack>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

/* STAT CARD */
const Stat = ({ value, label, glow }) => (
  <Box
    sx={{
      px: 5,
      py: 2.5,
      borderRadius: 4,
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: `0 0 30px ${glow}`,
      },
    }}
  >
    <Typography
      variant="h5"
      fontWeight={800}
      sx={{
        color: glow,
        textShadow: `0 0 16px ${glow}`,
      }}
    >
      {value}
    </Typography>

    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
  </Box>
);

export default Landing;
