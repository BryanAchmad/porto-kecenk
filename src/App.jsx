import { useState } from "react";
import Header from "./content/Header";
import "./App.css";
import Main from "./content/Main";
import Sketch from "./content/component/Sketch";
import SplashScreen from "./content/component/SplashScreen";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    const navigateToMainScreen = () => {
        setShowSplash(false);
    };
    return (
        <>
            {showSplash ? (
                <SplashScreen navigateTo={navigateToMainScreen} />
            ) : (
                <div
                    style={{
                        width: "1440px",
                        display: "flex",
                        margin: "0 auto",
                        height: "100vh",
                        gap: "80px",
                        position: "relative",
                    }}
                >
                    {/* <div style={{ position: "absolute", zIndex: "1", display:  }}> */}
                    <Header />
                    <Main />
                    {/* </div> */}
                    {/* <Sketch style={{ position: "relative", zIndex: "0" }} /> */}
                    {/* asdasdasda */}

                    {/* <Main /> */}
                </div>
            )}
        </>
    );
}

export default App;
