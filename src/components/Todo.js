import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function Todo() {
  return (
    <Card
    className="todoCard"
      sx={{
        minWidth: 275,
        background: "#90ca90",
        color: "white",
        marginTop: 5,
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Typography variant="h5" sx={{ textAlign: "right" }}>
              المهمة الاولى
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "right" }}>
              التفاصيل الخاصة بالمهمة
            </Typography>

          </Grid>

          {/* Action Buttons */}
          <Grid
            size={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton
              className="iconButton"
              style={{
                color: "#8bc34a",
                background: "white",
                border: "solid #8bc34a 3px",
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              style={{
                color: "#1769aa",
                background: "white",
                border: "solid #1769aa 3px",
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              aria-label="delete"
              style={{
                color: "#b23c17",
                background: "white",
                border: "solid #b23c17 3px",
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          {/* Action Buttons END*/}
        </Grid>
      </CardContent>
    </Card>
  );
}
