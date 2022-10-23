import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { counterActions } from "./store/countSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(counterActions.increment());
  };
  const handleDec = () => {
    dispatch(counterActions.decrement());
  };
  const handleAddBy = () => {
    dispatch(counterActions.addBy(10));
  };
  const handleCReset = () => {
    dispatch(counterActions.reset());
  };
  return (
    <React.Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6">React Redux Counter</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h1" color="initial">
        {counter}
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 3 }}
          onClick={handleCReset}
        >
          RESET
        </Button>
      </Typography>
      <ButtonGroup variant="contained" color="secondary">
        <Button onClick={handleInc}>Increment</Button>
        <Button onClick={handleDec}>Decrement</Button>
        <Button onClick={handleAddBy}>Add by 10</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default App;
