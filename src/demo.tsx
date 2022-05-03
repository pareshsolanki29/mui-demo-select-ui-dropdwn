import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { paperClasses } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#000",
          color: "#fff"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        [`& .${paperClasses.root}`]: {
          borderRadius: 0,
          paddingBottom: 0
        }
      }
    }
  }
});

export default function GlobalThemeOverride() {
  return (
    <ThemeProvider theme={theme}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        variant="standard"
        value={10}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </ThemeProvider>
  );
}
