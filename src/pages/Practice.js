
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import PracticeExercise from "../components/PracticeExercise";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Practice.css";

const Practice = () => {
    const [exercises, setExercises] = useState([]);
    const [level, setLevel] = useState("Easy");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://hello-world-server-q0ic.onrender.com/api/practice")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not load exercises.");
                }
                return response.json();
            })
            .then((data) => {
                setExercises(data);
                setError("");
            })
            .catch((err) => {
                console.error("Error loading exercises:", err);
                setError("Unable to load practice exercises.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filteredExercises = exercises.filter(
        (exercise) => exercise.level === level
    );

    return (
        <main className="practice-page">
            <h1 className="page-title">
                PRACTICE YOUR NOTE-TAKING
            </h1>

            <section className="practice-intro">
                <h2>Take notes as quickly as possible!</h2>

                <p>
                    Try to write down the important information
                    without writing every single word.
                    Start with easy and work your way up.
                </p>

                <p>
                    <span
                        className="practice-help"
                        data-tooltip-id="practice-tip"
                        data-tooltip-content="Focus on names, numbers, dates, and important details instead of writing every word."
                        tabIndex={0}
                    >
                        Need a note-taking tip? ⓘ
                    </span>
                </p>

                <Tooltip id="practice-tip" />
            </section>

            <div className="level-buttons">
                <button
                    className={level === "Easy" ? "active" : ""}
                    onClick={() => setLevel("Easy")}
                >
                    Easy
                </button>

                <button
                    className={level === "Normal" ? "active" : ""}
                    onClick={() => setLevel("Normal")}
                >
                    Normal
                </button>

                <button
                    className={level === "Hard" ? "active" : ""}
                    onClick={() => setLevel("Hard")}
                >
                    Hard
                </button>
            </div>

            <div id="practice-list">
                {loading && (
                    <p>Loading practice exercises...</p>
                )}

                {error && (
                    <p className="error-message">{error}</p>
                )}

                {!loading && !error && filteredExercises.length === 0 && (
                    <p>No exercises available for this level.</p>
                )}

                {!loading && !error &&
                    filteredExercises.map((exercise) => (
                        <PracticeExercise
                            key={exercise._id}
                            exercise={exercise}
                        />
                    ))
                }
            </div>

            <ContactForm />
        </main>
    );
};

export default Practice;
