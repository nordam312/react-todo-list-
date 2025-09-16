import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function AccordionUsage() {
  const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  return (
    <Container maxWidth="sm">
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Switch
              {...label}
              value={checked}
              onChange={handleChange}
              defaultChecked
            />
          </AccordionDetails>
        </Accordion>
      </div>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <div>Hello</div>
      </Slide>
    </Container>
  );
}
