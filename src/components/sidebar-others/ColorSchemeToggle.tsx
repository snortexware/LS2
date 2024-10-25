import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, sx, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // Set the default mode to dark only when the component is first mounted
  React.useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("mode")) {
      // Only set to dark mode if there's no prior choice saved in localStorage
      setMode("dark");
    }
  }, [setMode]);

  if (!mounted) {
    return (
      <IconButton
        size="sm"
        variant="outlined"
        color="neutral"
        {...other}
        sx={sx}
        disabled
      />
    );
  }

  return (
    <IconButton
      data-screenshot="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      {...other}
      onClick={(event) => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        // Save the user's theme preference
        localStorage.setItem("mode", newMode);
        onClick?.(event);
      }}
      sx={[
        mode === "dark"
          ? { "& > *:first-child": { display: "none" } }
          : { "& > *:first-child": { display: "initial" } },
        mode === "light"
          ? { "& > *:last-child": { display: "none" } }
          : { "& > *:last-child": { display: "initial" } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DarkModeRoundedIcon />
      <LightModeIcon />
    </IconButton>
  );
}
