import React from "react";
import { IconComponent } from "./components";

export const CustomIcon = ({ link, component, ariaLabel }) => (
  <IconComponent
    href={link}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener"
  >
    {component}
  </IconComponent>
);
