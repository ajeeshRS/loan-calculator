import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { getAmortizationSchedule } from "../utils/utils";
import { toast } from "sonner";
import DataTable from "./DataTable";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { AmortizationScheduleRow, Currency } from "../utils/types";

function Dashboard() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termInYears, setTermInYears] = useState(3);
  const [emi, setEmi] = useState(0);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [schedules, setSchedules] = useState<AmortizationScheduleRow[]>([]);

  const theme = useTheme();

  const currencies = ["USD", "EUR", "INR", "CAD", "GBP", "JPY", "AUD"];

  const styles = {
    inputBox: {
      mr: { md: "10px", sm: "10px" },
      mt: { xs: "15px" },
    },
    heading: {
      fontSize: "28px",
    },
  };

  const handleInputChange = (
    fn: (value: number) => void,
    inputValue: number
  ) => {
    fn(inputValue);
  };

  const handleReset = () => {
    setLoanAmount(0);
    setInterestRate(0);
    setTermInYears(0);
    setSchedules([]);
    setEmi(0);
  };

  const handleCalculate = () => {
    if (!loanAmount || !interestRate || !termInYears) {
      toast.error("All fields are required!");
    }

    const { emi, schedules } = getAmortizationSchedule(
      loanAmount,
      interestRate,
      termInYears
    );
    console.log(emi, schedules);
    setEmi(emi);
    setSchedules(schedules);
  };

  const renderCurrencySymbol = (currency: Currency) => {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "INR":
        return "₹";
      case "CAD":
        return "$";
      case "GBP":
        return "£";
      case "JPY":
        return "¥";
      case "AUD":
        return "$";
      default:
        return null;
    }
  };

  return (
    <Box
      className="dashboard"
      sx={{
        padding: { xs: "10px", sm: "10px", md: "100px" },
        minHeight: "100vh",
        mt: { md: "20px", xs: "50px", sm: "50px" },
      }}
    >
      <Typography
        style={styles.heading}
        sx={{
          fontSize: { xs: "20px", sm: "28px" },
          mb: 2,
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
        }}
      >
        Loan Calculator Dashboard
      </Typography>
      <Box className="input_form" sx={{ flexDirection: { sm: "column" } }}>
        {/* input fields */}
        <Box>
          <TextField
            required
            value={loanAmount}
            onChange={(e) =>
              handleInputChange(setLoanAmount, parseInt(e.target.value))
            }
            type="number"
            sx={styles.inputBox}
            label="Loan Amount"
            defaultValue={100000}
          />
          <TextField
            required
            value={interestRate}
            onChange={(e) =>
              handleInputChange(setInterestRate, parseFloat(e.target.value))
            }
            type="number"
            sx={styles.inputBox}
            label="Interest Rate (%)"
            defaultValue={8.5}
          />
          <TextField
            required
            value={termInYears}
            onChange={(e) =>
              handleInputChange(setTermInYears, parseInt(e.target.value))
            }
            type="number"
            sx={styles.inputBox}
            className="input_box"
            label="Term (In Years)"
            defaultValue={5}
          />
        </Box>
        <Button
          variant="contained"
          onClick={handleCalculate}
          sx={{
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
      {/* render table and monthly emi only when schedules array is non empty and emi not equal to zero */}
      {schedules.length > 0 && emi !== 0 && (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              pt: "30px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
            >
              {`Monthly EMI : ${renderCurrencySymbol(currency)}${emi}`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                pt: "30px",
              }}
            >
              {/* currency select input */}
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={currency}
                  defaultValue="USD"
                  onChange={(e: SelectChangeEvent) =>
                    setCurrency(e.target.value as Currency)
                  }
                  autoWidth
                  label="Currency"
                >
                  {currencies.map((c, i) => (
                    <MenuItem value={currencies[i]}>{c}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* reset button */}
              <Button variant="outlined" onClick={handleReset}>
                Reset table
              </Button>
            </Box>
          </Box>
          {/* rendering data table with emi schedule and currency passed as props */}
          <DataTable rows={schedules} currency={currency} />
        </>
      )}
    </Box>
  );
}

export default Dashboard;
