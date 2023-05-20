import React from "react";
import "./Main.css";

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
                gap: "100px",
            }}
        >
            <div
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
                    Back in 2012, I decided to try my hand at creating custom
                    Tumblr themes and tumbled head first into the rabbit hole of
                    coding and web development. Fast-forward to today, and I’ve
                    had the privilege of building software for an advertising
                    agency, a start-up, a student-led design studio, and a huge
                    corporation.
                </p>
                <p>
                    My main focus these days is building products and leading
                    projects for our clients at Upstatement. In my free time
                    I've also released an online video course that covers
                    everything you need to know to build a web app with the
                    Spotify API.
                </p>
                <p>
                    When I’m not at the computer, I’m usually rock climbing,
                    hanging out with my wife and two cats, or running around
                    Hyrule searching forKorok seeds K o r o k s e e d s .
                </p>
            </div>
            <div
                className="experience"
                id="experience"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <div
                    className="content-experience first-experience"
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
                        <span>2022-20-11</span>
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
                            <strong>Fullstack Software Engineer</strong>
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
                    className="content-experience first-experience"
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
                        <span>2022-20-11</span>
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
                            <strong>Fullstack Software Engineer</strong>
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
                    className="content-experience first-experience"
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
                        <span>2022-20-11</span>
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
                            <strong>Fullstack Software Engineer</strong>
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
            </div>
        </div>
    );
};

export default Main;
