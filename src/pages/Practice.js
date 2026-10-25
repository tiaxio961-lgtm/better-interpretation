
import { useEffect, useState } from "react";
import PracticeExercise from "../components/PracticeExercise";
import "./Practice.css";

const Practice = () => {
    const [exercises, setExercises] = useState([]);
    const [level, setLevel] = useState("Easy");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/practice.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not load exercises.");
                }
                return response.json();
            })
            .then((data) => setExercises(data))
            .catch(() => setError("Unable to load practice exercises."));
    }, []);

    const filteredExercises = exercises.filter(
        (exercise) => exercise.level === level
    );

    return (
        <main className="practice-page">
            <h1 className="page-title">PRACTICE YOUR NOTE-TAKING</h1>

            <section className="practice-intro">
                <h2>Take notes as quickly as possible!</h2>

                <p>
                    Try to write down the important information without writing
                    every single word. Start with easy and work your way up.
                </p>
            </section>

            <div className="level-buttons">
                <button onClick={() => setLevel("Easy")}>Easy</button>
                <button onClick={() => setLevel("Normal")}>Normal</button>
                <button onClick={() => setLevel("Hard")}>Hard</button>
            </div>

            <div id="practice-list">
                {error && <p>{error}</p>}

                {!error && exercises.length === 0 && (
                    <p>Loading practice exercises...</p>
                )}

                {filteredExercises.map((exercise) => (
                    <PracticeExercise
                        key={exercise._id}
                        exercise={exercise}
                    />
                ))}
            </div>
        </main>
    );
};

export default Practice;
