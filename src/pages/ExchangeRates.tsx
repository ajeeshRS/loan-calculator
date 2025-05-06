import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import type { Currency } from "../utils/types";
import { currencies } from "../components/Dashboard";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ErrorPage from "./ErrorPage";

function ExchangeRates() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [toCurrency, setToCurrency] = useState<Currency>("INR");

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const url = import.meta.env.VITE_EXCHANGE_RATE_API_URL;

  const { loading, data, err } = useFetch(`${url}/${currency}`);

  // err ui
  if (!loading && err) {
    return <ErrorPage />;
  }

  // loading fallback ui
  if (loading) {
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
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const handleConversion = () => {
    setToValue(parseFloat((fromValue * data[toCurrency]).toFixed(2)));
  };

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
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Convert currency
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          pt: "20px",
        }}
      >
        {/* from currency select input */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            required
            value={fromValue}
            onChange={(e) => setFromValue(parseInt(e.target.value))}
            type="number"
            label="From value"
            defaultValue={0}
          />
          <FormControl sx={{ m: 1, minWidth: 80, mr: "20px" }}>
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
        </Box>

        {/* to currency select input */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            required
            value={toValue}
            onChange={(e) => setToValue(parseInt(e.target.value))}
            type="number"
            label="To value"
            defaultValue={0}
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={toCurrency}
              defaultValue="USD"
              onChange={(e: SelectChangeEvent) =>
                setToCurrency(e.target.value as Currency)
              }
              autoWidth
              label="Currency"
            >
              {currencies.map((c, i) => (
                <MenuItem value={currencies[i]}>{c}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Button variant="contained" onClick={handleConversion}>
        Convert
      </Button>
    </Box>
  );
}

export default ExchangeRates;
