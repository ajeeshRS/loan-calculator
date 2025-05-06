import { Box, Button, Typography } from "@mui/material";

function ErrorPage() {
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
      <Button variant="outlined">Go to Home</Button>
    </Box>
  );
}

export default ErrorPage;
