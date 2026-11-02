
import "./Basics.css";

const Basics = () => {
    return (
        <main className="basics-page">

            <h1 className="page-title">INTERPRETING BASICS</h1>

            <section className="basics-intro">
                <p>
                    Interpreting is more than translating words.
                    The goal is to understand the speaker's message
                    and deliver the same complete meaning.
                </p>
            </section>

            <section className="basic-steps">
                <h2>THE THREE BASIC STEPS</h2>

                <div className="steps-content">
                    <div className="steps-text">

                        <div className="step">
                            <h3>1. Listen</h3>
                            <p>
                                Listen carefully to the entire message before
                                interpreting. Pay attention to important details,
                                tone, names, numbers, and dates.
                            </p>
                        </div>

                        <div className="step">
                            <h3>2. Understand</h3>
                            <p>
                                Make sure you understand what the speaker means,
                                not just the individual words they are saying.
                            </p>
                        </div>

                        <div className="step">
                            <h3>3. Interpret</h3>
                            <p>
                                Deliver the same complete message in the other
                                language without changing the meaning.
                            </p>
                        </div>

                    </div>

                    <img
                        src={process.env.PUBLIC_URL + "/images/three masic.png"}
                        alt="Three basic interpreting steps"
                    />
                </div>
            </section>

            <section className="basics-remember">
                <h2>REMEMBER</h2>

                <p>Listen to the complete message.</p>
                <p>Understand what the speaker means.</p>
                <p>Deliver the same complete message.</p>
            </section>

        
{/* Part 10: Embedded educational video */}
<section className="basics-video">
    <h2>Learn More About Interpreting</h2>

    <p>
        Watch this video to learn more about interpreting
        and how communication works between languages.
    </p>

    <iframe
    src="https://www.youtube.com/embed/igMRX1dV3fQ?start=188"
    title="Interpreting Educational Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
></iframe>
</section>

        </main>
    );
};

export default Basics;
