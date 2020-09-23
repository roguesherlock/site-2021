import React from "react";
import ToggleTheme from "./ToggleTheme";

export default function Footer() {
  return (
    <div className="flex">
      <div className="fixed z-10 bottom-0 left-0">
        <ToggleTheme />
      </div>
    </div>
  );
}
