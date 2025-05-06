import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { md: "23px", xs: "16px" },
          mb: "25px",
        }}
      >
        Something went wrong
      </Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </Box>
  );
}

export default ErrorPage;
