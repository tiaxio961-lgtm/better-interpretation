import "./Home.css";

const Home = () => {
    return (
        <main className="home-page">

            <section className="hero">
                <div className="hero-text">
                    <h1>INTERPRET WITH<br />ACCURACY!</h1>

                    <p>
                        learn practical techniques with a professional interpreter.
                    </p>

                    <a className="small-button" href="/better-interpretation/practice">
                        start learning
                    </a>
                </div>

                <img src={process.env.PUBLIC_URL + "/images/main.png"} alt="Two people communicating" />
            </section>

            <section className="matters">
                <h2>WHY INTERPRETING MATTERS</h2>

                <div className="matter-row">
                    <div className="matter-text">
                        <h3>Accuracy</h3>
                        <p>
                            A professional interpreter should deliver the complete
                            message without adding, removing, or changing information.
                            Accuracy helps make sure both people understand exactly
                            what was said.
                        </p>
                    </div>

                    <img src={process.env.PUBLIC_URL + "/images/accuracy.png"} alt="Accuracy" />
                </div>

                <div className="matter-row">
                    <div className="matter-text">
                        <h3>Clarity</h3>
                        <p>
                            Interpret the speaker's message in a way that is easy to understand
                            while keeping the same meaning, tone, and intent. Clear
                            communication helps prevent confusion and misunderstandings.
                        </p>
                    </div>

                    <img src={process.env.PUBLIC_URL + "/images/clarity.png"} alt="People communicating" />
                </div>

                <div className="matter-row">
                    <div className="matter-text">
                        <h3>Professionalism</h3>
                        <p>
                            Stay calm, respectful, and neutral while interpreting.
                            Professionalism is especially important in medical, legal,
                            financial, and other situations where accurate communication
                            can have a major impact.
                        </p>
                    </div>

                    <img src={process.env.PUBLIC_URL + "/images/professionalism.png"} alt="Professional interpreter" />
                </div>
            </section>

            <section className="learning" id="learn">
                <div className="learning-intro">
                    <h2>
                        READY TO<br />
                        BECOME A<br />
                        BETTER<br />
                        INTERPRETER?
                    </h2>

                    <p>
                        Improve your accuracy,
                        confidence, and
                        professionalism with
                        techniques used by
                        professional interpreters.
                    </p>
                </div>

                <div className="learning-options">
                    <div className="learning-card">
                        <h3>Note-Taking</h3>
                        <p>
                            Learn simple techniques to capture important
                            information quickly and accurately.
                        </p>
                    </div>

                    <div className="learning-card">
                        <h3>Listening &amp; Memory</h3>
                        <p>
                            Improve your ability to listen, remember,
                            and deliver the complete message.
                        </p>
                    </div>

                    <div className="learning-card">
                        <h3>Practice Exercises</h3>
                        <p>
                            Build your interpreting skills through realistic
                            practice and exercises.
                        </p>
                    </div>

                    <div className="learning-card">
                        <h3>Common Mistakes</h3>
                        <p>
                            Learn what to avoid when interpreting and
                            how to correct common mistakes.
                        </p>
                    </div>

                    <a className="start-button" href="/better-interpretation/practice">
                        Start Learning &rarr;
                    </a>
                </div>
            </section>

        </main>
    );
};

export default Home;