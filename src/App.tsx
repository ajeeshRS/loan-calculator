import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./utils/theme";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navbar toggleTheme={toggleTheme} />}>
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
