
import { useState } from "react";

const PracticeExercise = ({ exercise }) => {
    const [showNotes, setShowNotes] = useState(false);

    return (
        <section className="practice-level">
            <h2>{exercise.level} - {exercise.title}</h2>

            <img
                className="practice-image"
                src={process.env.PUBLIC_URL + "/" + exercise.img_name}
                alt="Note-taking example"
            />

            <p className="practice-text">
                {exercise.text}
            </p>

            <button
                className="notes-button"
                type="button"
                onClick={() => setShowNotes(!showNotes)}
                aria-expanded={showNotes}
            >
                {showNotes ? "Hide Important Notes" : "Show Important Notes"}
            </button>

            {showNotes && (
                <div className="answer">
                    <h3>Important Notes</h3>

                    <ul>
                        {exercise.notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default PracticeExercise;
