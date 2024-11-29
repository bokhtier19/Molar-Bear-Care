import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import SmoothScrolling from "./components/SmoothScrolling.tsx";
import AnimationProvider from "./context/AnimationContext.jsx";

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <AnimationProvider>
            <SmoothScrolling>
                <App />
            </SmoothScrolling>
        </AnimationProvider>
    </HashRouter>
);
