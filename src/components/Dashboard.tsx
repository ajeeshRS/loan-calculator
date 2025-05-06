import { Box, Button, TextField, Typography } from "@mui/material";

function Dashboard() {
  const styles = {
    inputBox: {
      mr: { md: "10px", sm: "10px" },
      mt: { xs: "15px" },
    },
    heading: {
      fontSize: "28px",
    },
  };

  return (
    <Box
      className="dashboard"
      sx={{
        paddingLeft: { xs: "25px", sm: "30px" },
        paddingRight: { xs: "25px", sm: "20px" },
        mt: "20px",
      }}
    >
      <Typography
        style={styles.heading}
        sx={{ fontSize: { xs: "20px", sm: "28px" }, mb: 2 }}
      >
        Loan Calculator Dashboard
      </Typography>
      <Box className="input_form" sx={{ flexDirection: { sm: "column" } }}>
        <Box>
          <TextField
            required
            type="number"
            sx={styles.inputBox}
            label="Loan Amount"
            defaultValue={100000}
          />
          <TextField
            required
            type="number"
            sx={styles.inputBox}
            label="Interest Rate (%)"
            defaultValue={8.5}
          />
          <TextField
            required
            type="number"
            sx={styles.inputBox}
            className="input_box"
            label="Term (In Years)"
            defaultValue={5}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "15px",
            marginRight: "25px",
            outline: "0px",
            border: "0px",
            mt: "15px",
            ":hover": { bgcolor: "#4088D8" },
            ":focus": { outline: "0px", border: "0px" },
          }}
        >
          Calculate
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
