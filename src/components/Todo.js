import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
//others
import { TodosContext } from "../contexts/todosContext";
import { useContext } from "react";
import { useState } from "react";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

  const handleCloseDialog = (type) => {
    if (type === "delete") {
      setOpenDeleteDialog(false);
    } else {
      setOpenEditDialog(false);
    }
  };

  const handleDeleteConfirm = () => {
    const updateTodos = todos.filter((t) => {
      return t.id !== todo.id;
    });

    setTodos(updateTodos);
  };

  const handleUpdateConfirm = () => {
    const updateTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: updatedTodo.title, details: updatedTodo.details };
      }
      else{
        return t
      }
    });
    setTodos(updateTodos);
    setOpenEditDialog(false)
  };

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        style={{
          direction: "rtl",
        }}
        onClose={() => {
          handleCloseDialog("delete");
        }}
        open={openDeleteDialog}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل انت متاكد من حذف المهمة"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد اتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDialog("delete");
            }}
          >
            اغلاق
          </Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            نعم , قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/* End Delete Dialog */}

      {/* Edit Dialog */}
      <Dialog
        style={{
          direction: "rtl",
        }}
        onClose={() => {
          handleCloseDialog("edit");
        }}
        open={openEditDialog}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>تعديل مهمة</DialogTitle>
        <DialogContent
          style={{
            direction: "rtl",
          }}
        >
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="title"
              label="عنوان المهمة"
              fullWidth
              value={updatedTodo.title}
              onChange={(e) => {
                setUpdatedTodo({ ...updatedTodo, title: e.target.value });
              }}
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="details"
              name="details"
              label="التفاصيل"
              value={updatedTodo.details}
              onChange={(e) => {
                setUpdatedTodo({ ...updatedTodo, details: e.target.value });
              }}
              fullWidth
              variant="standard"
            />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDialog("edit");
            }}
          >
            الفاء
          </Button>
          <Button
            type="submit"
            form="subscription-form"
            onClick={handleUpdateConfirm}
          >
            قم بالتعديل
          </Button>
        </DialogActions>
      </Dialog>
      {/* End Edit Dialog */}

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
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                {todo.details}
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
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
                onClick={() => {
                  const updateTodos = todos.map((t) => {
                    if (t.id === todo.id) {
                      t.isCompleted = !t.isCompleted;
                    }
                    return t;
                  });
                  setTodos(updateTodos);
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
                onClick={() => {
                  setOpenEditDialog(true);
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
                onClick={() => {
                  setOpenDeleteDialog(true);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            {/* Action Buttons END*/}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
