"use client";
import * as React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);

  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      <FormControlLabel
        sx={{
          display: "block",
          color: "#344054",
          fontFamily: "inter",
          fontSize: "14px",
          fontWeight: "500",
          fontSize: "normal",
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="error"
            thumbIcon={
              loading ? (
                <RadioButtonCheckedIcon style={{ color: "white" }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ color: "white" }} />
              )
            }
          />
        }
        label="Denied"
      />
    </div>
  );
}
