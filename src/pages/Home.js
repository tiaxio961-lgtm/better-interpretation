
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import LearningCard from "../components/LearningCard";
import "./Home.css";

const learningOptions = [
    {
        title: "Note-Taking",
        description: "Learn simple techniques to capture important information quickly and accurately."
    },
    {
        title: "Listening & Memory",
        description: "Improve your ability to listen, remember, and deliver the complete message."
    },
    {
        title: "Practice Exercises",
        description: "Build your interpreting skills through realistic practice and exercises."
    },
    {
        title: "Common Mistakes",
        description: "Learn what to avoid when interpreting and how to correct common mistakes."
    }
];

const Home = () => {
    return (
        <main className="home-page">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h1>
                        INTERPRET WITH<br />
                        ACCURACY!
                    </h1>

                    <p>
                        Learn practical techniques with a professional interpreter.
                    </p>

                    <Link className="small-button" to="/practice">
                        Start Learning
                    </Link>
                </div>

                <img
                    src={process.env.PUBLIC_URL + "/images/main.png"}
                    alt="Two people communicating"
                />
            </section>

            {/* Why Interpreting Matters */}
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

                    <img
                        src={process.env.PUBLIC_URL + "/images/accuracy.png"}
                        alt="Accuracy"
                    />
                </div>

                <div className="matter-row">
                    <div className="matter-text">
                        <h3>Clarity</h3>
                        <p>
                            Interpret the speaker's message in a way that is easy
                            to understand while keeping the same meaning, tone,
                            and intent. Clear communication helps prevent
                            confusion and misunderstandings.
                        </p>
                    </div>

                    <img
                        src={process.env.PUBLIC_URL + "/images/clarity.png"}
                        alt="People communicating"
                    />
                </div>

                <div className="matter-row">
                    <div className="matter-text">
                        <h3>Professionalism</h3>
                        <p>
                            Stay calm, respectful, and neutral while interpreting.
                            Professionalism is especially important in medical,
                            legal, financial, and other situations where accurate
                            communication can have a major impact.
                        </p>
                    </div>

                    <img
                        src={process.env.PUBLIC_URL + "/images/professionalism.png"}
                        alt="Professional interpreter"
                    />
                </div>
            </section>

            {/* Project Part 10:
                Custom JavaScript slideshow built from scratch
                using React useState. No slideshow library used.
            */}
            <Slideshow />

            {/* Learning Section */}
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

                    {/* Reusable component for learning cards */}
                    {learningOptions.map((option) => (
                        <LearningCard
                            key={option.title}
                            title={option.title}
                            description={option.description}
                        />
                    ))}

                    <Link className="start-button" to="/practice">
                        Start Learning &rarr;
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default Home;
