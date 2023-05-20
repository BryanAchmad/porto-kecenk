import React from "react";
import "./Main.css";
import Portfolio from "./section/Portfolio";

const Main = () => {
    return (
        <div
            className="main-content"
            style={{
                flexBasis: "50%",
                padding: "20px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
            }}
        >
            <section
                className="description"
                id="about"
                style={{
                    paddingTop: "80px",
                    paddingRight: "20px",
                    paddingLeft: "20px",
                }}
            >
                <span> The bad the good and the kepentingan kepentingan</span>{" "}
                sudah sex belum hari ini?
                <p>
                    Hey there! I'm a programmer from Malang, Indonesia, and I
                    absolutely love diving into new things. I thrive on
                    challenges that push me to my limits because they keep me
                    motivated and engaged. On the flip side, I easily get bored
                    with mundane or repetitive tasks. But you know what? That
                    boredom drives me to find innovative solutions and approach
                    problems from unique angles. So, I'm always up for new and
                    exciting projects that keep me on my toes!
                </p>
            </section>
            <section
                className="experience"
                id="experience"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <div
                    className="card content-experience first-experience"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 auto",
                    }}
                >
                    <div
                        className="date-experience"
                        style={{ flexBasis: "30%" }}
                    >
                        <span>2021 - now</span>
                    </div>
                    <div
                        className="desc-experience"
                        style={{
                            flexBasis: "70%",
                            margin: "0 auto",
                            padding: "0",
                        }}
                    >
                        <h4 style={{ margin: "0" }}>
                            <strong>Software Engineer</strong>
                        </h4>
                        <h6 style={{ margin: "0", color: "lightgrey" }}>
                            ICUBE
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quaerat reiciendis neque eius, possimus
                            excepturi consequuntur, tempore ipsum sunt, autem
                            laboriosam dolor eos nihil velit veniam laudantium
                            voluptate recusandae nulla quas.
                        </p>
                        <div className="tech-stack">
                            <span className="badge">PHP</span>
                            <span className="badge">Magento 2</span>
                            <span className="badge">Docker</span>
                            <span className="badge">MySQL</span>
                        </div>
                    </div>
                </div>
                <div
                    className="card content-experience first-experience"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 auto",
                    }}
                >
                    <div
                        className="date-experience"
                        style={{ flexBasis: "30%" }}
                    >
                        <span>2021</span>
                    </div>
                    <div
                        className="desc-experience"
                        style={{
                            flexBasis: "70%",
                            margin: "0 auto",
                            padding: "0",
                        }}
                    >
                        <h4 style={{ margin: "0" }}>
                            <strong>Fullstack Developer</strong>
                        </h4>
                        <h6 style={{ margin: "0", color: "lightgrey" }}>
                            Jagoan Hosting
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quaerat reiciendis neque eius, possimus
                            excepturi consequuntur, tempore ipsum sunt, autem
                            laboriosam dolor eos nihil velit veniam laudantium
                            voluptate recusandae nulla quas.
                        </p>
                        <div
                            className="tech-stack"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                            }}
                        >
                            <span className="badge">Javascript</span>
                            <span className="badge">WHMCS</span>
                            <span className="badge">Webpack</span>
                            <span className="badge">HTML/CSS</span>
                            <span className="badge">JQuery</span>
                        </div>
                    </div>
                </div>
                <div
                    className="card content-experience first-experience"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 auto",
                    }}
                >
                    <div
                        className="date-experience"
                        style={{ flexBasis: "30%" }}
                    >
                        <span>2019</span>
                    </div>
                    <div
                        className="desc-experience"
                        style={{
                            flexBasis: "70%",
                            margin: "0 auto",
                            padding: "0",
                        }}
                    >
                        <h4 style={{ margin: "0" }}>
                            <strong>Software Engineer</strong>
                        </h4>
                        <h6 style={{ margin: "0", color: "lightgrey" }}>
                            Codelaris
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quaerat reiciendis neque eius, possimus
                            excepturi consequuntur, tempore ipsum sunt, autem
                            laboriosam dolor eos nihil velit veniam laudantium
                            voluptate recusandae nulla quas.
                        </p>
                        <div className="tech-stack">
                            <span className="badge">PHP</span>
                            <span className="badge">Javascript</span>
                            <span className="badge">Webpack</span>
                        </div>
                    </div>
                </div>
            </section>
            <Portfolio />
        </div>
    );
};

export default Main;
