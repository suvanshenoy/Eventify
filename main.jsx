import "./admin-panel/tw-styles.css";
import "./admin-panel/styles.css";
import "./landing-page/styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
