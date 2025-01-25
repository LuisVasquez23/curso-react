import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#ffc302",
    },
    secondary: {
      main: "#444444",
    },
    error: {
      main: red.A400,
    },
  },
});
