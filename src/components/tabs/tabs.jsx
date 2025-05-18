import "./tabs.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function Tabss() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="box" sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab className="tab" label="Ближний восток" />
        <Tab className="tab" label="Азия" />
        <Tab className="tab" label="Латинская Америка" />
        <Tab className="tab" label="Африка" />
      </Tabs>
    </Box>
  );
}
