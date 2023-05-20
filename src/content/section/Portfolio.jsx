import React from "react";

const Portfolio = () => {
    return (
        <section
            className="portfolio"
            id="portfolio"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                // padding: "20px",
            }}
        >
            <div
                className="card content-portfolio first-portfolio"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 auto",
                    gap: "8px",
                }}
            >
                <div className="date-experience" style={{ flexBasis: "30%" }}>
                    <span style={{ color: "lightgray" }}>2023</span>
                </div>
                <div
                    className="desc-experience"
                    style={{
                        flexBasis: "70%",
                        margin: "0 auto",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <h4 style={{ margin: "0" }}>
                        <strong>SIMKKN UMM</strong>
                    </h4>
                    <p style={{ margin: "0" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quaerat reiciendis neque eius, possimus excepturi
                        consequuntur, tempore ipsum sunt, autem laboriosam dolor
                        eos nihil velit veniam laudantium voluptate recusandae
                        nulla quas.
                    </p>
                    <div className="tech-stack">
                        <span className="badge">ReactJs</span>
                        <span className="badge">JavaScript 2</span>
                        <span className="badge">NodeJs</span>
                        <span className="badge">MongoDB</span>
                        <span className="badge">MUI</span>
                        <span className="badge">AWS Lambda</span>
                    </div>
                </div>
            </div>
            <div
                className="card content-portfolio first-portfolio"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 auto",
                    gap: "8px",
                }}
            >
                <div className="date-experience" style={{ flexBasis: "30%" }}>
                    <span style={{ color: "lightgray" }}>2023</span>
                </div>
                <div
                    className="desc-experience"
                    style={{
                        flexBasis: "70%",
                        margin: "0 auto",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <h4 style={{ margin: "0" }}>
                        <strong>SIMKKN UMM</strong>
                    </h4>
                    <p style={{ margin: "0" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quaerat reiciendis neque eius, possimus excepturi
                        consequuntur, tempore ipsum sunt, autem laboriosam dolor
                        eos nihil velit veniam laudantium voluptate recusandae
                        nulla quas.
                    </p>
                    <div className="tech-stack">
                        <span className="badge">Go</span>
                        <span className="badge">MongoDB</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
