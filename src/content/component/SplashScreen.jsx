import React, { useEffect } from "react";
import "./SplashScreen.css";
const SplashScreen = ({ navigateTo }) => {
    useEffect(() => {
        // Simulate a delay of 2 seconds before navigating to another screen
        const timeout = setTimeout(() => {
            navigateTo(); // Call the navigateTo function passed as a prop
        }, 2000);

        return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }, [navigateTo]);

    return (
        <div style={{ margin: "0 auto" }}>
            <h1>Hi There! &#128102;</h1>
            <span className="splash-loading"></span>
        </div>
    );
};

export default SplashScreen;
