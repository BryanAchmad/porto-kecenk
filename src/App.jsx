import { useState } from "react";
import Header from "./content/Header";
import "./App.css";
import Main from "./content/Main";

function App() {
    return (
        <>
            <div
                style={{
                    width: "1440px",
                    display: "flex",
                    margin: "0 auto",
                    height: "100vh",
                    gap: "80px",
                }}
            >
                {/* asdasdasda */}
                <Header />
                <Main />
                {/* <Main /> */}
            </div>
        </>
    );
}

export default App;
