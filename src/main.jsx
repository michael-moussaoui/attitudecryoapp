import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ProSidebarProvider>
			<App />
		</ProSidebarProvider>
	</React.StrictMode>
);
