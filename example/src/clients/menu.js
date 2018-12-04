import React from "react";
import { FormattedMessage } from "react-intl";

const menu = [
  {
    label: <FormattedMessage id="client.menu.label" />,
    to: "/clients",
    role: "ADMIN_ROLE"
  }
];

export default menu;
