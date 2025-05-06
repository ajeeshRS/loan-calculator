import { Box, Typography } from "@mui/material";

function NotFoundPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: { md: "23px", xs: "16px" } }}
      >
        404 Page not Found
      </Typography>
    </Box>
  );
}

export default NotFoundPage;
