import React from "react";
import { render } from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn: process.env.REACT_APP_DSN || "",
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
