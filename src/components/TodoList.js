import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

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
            <Typography variant="h2">مهامي</Typography>
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
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
