import React from "react";
import ReactDOM from "react-dom/client";


const AppLayout = () => {
    return(
        <div class="app">
            food delivery app
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)