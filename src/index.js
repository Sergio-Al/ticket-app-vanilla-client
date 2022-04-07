import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TicketApp from "./TicketApp";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<TicketApp/>);