import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Todo from "./Todo";
import "../App.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


// Create a custom theme with your desired primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#60ac60", // Orange color - change this to your preferred color
      // You can also define light, dark, and contrastText if needed
      // light: "#ff8a65",
      // dark: "#d84315",
      // contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Alexandria"],
  },
});

export default function TodoList() {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography
              variant="h2"
              style={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              مهامي
            </Typography>
            <Divider />
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              style={{ direction: "ltr", marginTop: "20px" }}
            >
              <ToggleButton value="ios">غير منجز</ToggleButton>
              <ToggleButton value="android">المنجز</ToggleButton>
              <ToggleButton value="web">الكل</ToggleButton>
            </ToggleButtonGroup>

            {/* ALL TODOES */}
            <Todo />
            {/* END ALL TODOES */}

            {/* INPUT + ADD BUTTON */}
            <Grid container style={{ marginTop: "10px" }} spacing={2}>
              <Grid size={8}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="عنوان مهمة"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid
                size={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                {" "}
                <Button variant="contained" style={{width:"100%"}}>اضافة</Button>
              </Grid>
              {/* Action Buttons END*/}
            </Grid>
            {/* END INPUT + ADD BUTTON */}
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
