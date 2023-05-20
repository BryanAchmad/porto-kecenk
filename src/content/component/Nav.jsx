import React, { useEffect, useState } from "react";

export default function Nav() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0% 0px 0% 0px",
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav style={{ marginTop: "80px" }}>
            <ul
                style={{
                    display: "flex",
                    flexDirection: "column",
                    listStyleType: "none",
                    padding: "0",
                    gap: "20px",
                }}
            >
                <li>
                    <a href="#about">
                        <span
                            className={`nav-indicator ${
                                active === "about" ? "active" : ""
                            }`}
                        ></span>
                        <span className="">About</span>
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <span
                            className={`nav-indicator ${
                                active === "experience" ? "active" : ""
                            }`}
                        ></span>
                        <span className="">Experience</span>
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        <span
                            className={`nav-indicator ${
                                active === "portfolio" ? "active" : ""
                            }`}
                        ></span>
                        <span className="">Portfolio</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
