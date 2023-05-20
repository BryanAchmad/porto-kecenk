import React from "react";
import p5 from "p5";

export default function Sketch() {
    let canvas;

    // p5.js setup function
    const setup = (p5) => {
        // Create the canvas
        canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    };

    // p5.js draw function
    const draw = (p5) => {
        // Set the background color
        // p5.background(220);

        // Draw your desired background shapes or patterns
        // For example, you can draw a circle
        // p5.fill(255, 0, 0);
        // p5.ellipse(p5.width / 2, p5.height / 2, 200, 200);
        for (var y = 0; y <= p5.height; y += 15) {
            for (var x = 0; x <= p5.width; x += 15) {
                if (x % 30 == 0) {
                    // right line
                    p5.line(x, y, x + 9, y - 9);
                    // randomize color
                    p5.stroke(p5.random(0, 255));
                } else {
                    // left line
                    p5.line(x, y, x + 9, y + 9);
                    p5.stroke(p5.random(0, 255));
                }
            }
        }
    };

    // p5.js windowResized function
    const windowResized = (p5) => {
        // Resize the canvas when the window size changes
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    // p5.js instance mode
    new p5((p) => {
        p.setup = () => setup(p);
        p.draw = () => draw(p);
        p.windowResized = () => windowResized(p);
    });

    // Remove the canvas when the component is unmounted
    React.useEffect(() => {
        return () => {
            canvas.remove();
        };
    }, []);

    return null;
}
