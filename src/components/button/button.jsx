import "./button.css";

import { Button } from "@mui/material";

export default function Login(props) {
  return (
    <Button
      className="login"
      variant="contained"
      href="#contained-buttons"
    >
      {" "}
      {props.children}{" "}
    </Button>
  );
}

export function Login2(props) {
  return (
     <Button
      variant="contained"
      href="#contained-buttons"
    >
      {" "}
      {props.children}{" "}
    </Button>
  )
}
