
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import PracticeExercise from "../components/PracticeExercise";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Practice.css";

const API_URL =
    "https://hello-world-server-q0ic.onrender.com/api/practice";

const emptyForm = {
    title: "",
    level: "Easy",
    text: "",
    img_name: "",
    notes: ""
};

const Practice = () => {
    const [exercises, setExercises] = useState([]);
    const [level, setLevel] = useState("Easy");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const [selectedExercise, setSelectedExercise] = useState(null);
    const [form, setForm] = useState(emptyForm);
    const [formMessage, setFormMessage] = useState("");
    const [formError, setFormError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not load exercises.");
                }
                return response.json();
            })
            .then((data) => {
                if (!Array.isArray(data)) {
                    throw new Error("Invalid server response.");
                }
                setExercises(data);
                setError("");
            })
            .catch((err) => {
                console.error(err);
                setError("Unable to load practice exercises.");
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!selectedExercise) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedExercise(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedExercise]);

    const filteredExercises = exercises.filter(
        (exercise) => exercise.level === level
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));

        setFormError("");
        setFormMessage("");
    };

    const validateForm = () => {
        if (
            form.title.trim().length < 3 ||
            form.title.trim().length > 100
        ) {
            return "Title must be between 3 and 100 characters.";
        }

        if (!["Easy", "Normal", "Hard"].includes(form.level)) {
            return "Please select a valid difficulty.";
        }

        if (form.text.trim().length < 10) {
            return "Practice text must be at least 10 characters.";
        }

        return "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormError("");
        setFormMessage("");

        const validationError = validateForm();

        if (validationError) {
            setFormError(validationError);
            return;
        }

        const newExercise = {
            title: form.title.trim(),
            level: form.level,
            text: form.text.trim(),
            img_name: form.img_name.trim(),
            notes: form.notes
                .split("\n")
                .map((note) => note.trim())
                .filter(Boolean)
        };

        setSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newExercise)
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Could not add exercise."
                );
            }

            setExercises((previous) => [
                ...previous,
                result.exercise
            ]);

            setLevel(result.exercise.level);
            setForm({ ...emptyForm });
            setFormMessage("Practice exercise added successfully!");
        } catch (err) {
            setFormError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

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
                {["Easy", "Normal", "Hard"].map((option) => (
                    <button
                        key={option}
                        className={level === option ? "active" : ""}
                        onClick={() => setLevel(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div id="practice-list" className="practice-grid">
                {loading && <p>Loading practice exercises...</p>}

                {error && (
                    <p className="error-message">{error}</p>
                )}

                {!loading && !error &&
                    filteredExercises.length === 0 && (
                        <p>No exercises available for this level.</p>
                    )}

                {!loading && !error &&
                    filteredExercises.map((exercise) => (
                        <div
                            key={exercise._id}
                            className="practice-clickable-card"
                        >
                            <button
                                type="button"
                                className="practice-card-open"
                                onClick={() => setSelectedExercise(exercise)}
                                aria-label={`View details for ${exercise.title}`}
                            >
                                View Details: {exercise.title}
                            </button>

                            <PracticeExercise exercise={exercise} />
                        </div>
                    ))}
            </div>

            <section className="practice-add-section">
                <h2>Add a New Practice Exercise</h2>

                <p>
                    Create your own note-taking challenge and
                    share it with other learners!
                </p>

                <form
                    className="practice-add-form"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="exercise-title">
                        Exercise Title
                    </label>
                    <input
                        id="exercise-title"
                        name="title"
                        type="text"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Example: Doctor Appointment"
                        minLength={3}
                        maxLength={100}
                        required
                    />

                    <label htmlFor="exercise-level">
                        Difficulty Level
                    </label>
                    <select
                        id="exercise-level"
                        name="level"
                        value={form.level}
                        onChange={handleChange}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Normal">Normal</option>
                        <option value="Hard">Hard</option>
                    </select>

                    <label htmlFor="exercise-text">
                        Practice Text
                    </label>
                    <textarea
                        id="exercise-text"
                        name="text"
                        value={form.text}
                        onChange={handleChange}
                        placeholder="Enter the information students should practice taking notes on..."
                        rows={5}
                        minLength={10}
                        required
                    />

                    <label htmlFor="exercise-image">
                        Image Path (Optional)
                    </label>
                    <input
                        id="exercise-image"
                        name="img_name"
                        type="text"
                        value={form.img_name}
                        onChange={handleChange}
                        placeholder="images/notetake.png"
                    />

                    <label htmlFor="exercise-notes">
                        Important Notes (Optional)
                    </label>
                    <textarea
                        id="exercise-notes"
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        placeholder={"Enter one note per line\nExample: Appointment at 9:30 AM"}
                        rows={4}
                    />

                    {formError && (
                        <p className="error-message" role="alert">
                            {formError}
                        </p>
                    )}

                    {formMessage && (
                        <p className="practice-success" role="status">
                            {formMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="practice-submit-button"
                        disabled={submitting}
                    >
                        {submitting
                            ? "Adding Exercise..."
                            : "Add Practice Exercise"}
                    </button>
                </form>
            </section>

            {selectedExercise && (
                <div
                    className="practice-modal-overlay"
                    onClick={() => setSelectedExercise(null)}
                >
                    <section
                        className="practice-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="practice-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="practice-modal-close"
                            onClick={() => setSelectedExercise(null)}
                            aria-label="Close details"
                        >
                            ×
                        </button>

                        <h2 id="practice-modal-title">
                            {selectedExercise.title}
                        </h2>

                        <span className="practice-level-label">
                            {selectedExercise.level}
                        </span>

                        <p>{selectedExercise.text}</p>

                        {selectedExercise.notes?.length > 0 && (
                            <>
                                <h3>Important Notes</h3>
                                <ul>
                                    {selectedExercise.notes.map((note, index) => (
                                        <li key={index}>{note}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </section>
                </div>
            )}

            <ContactForm />
        </main>
    );
};

export default Practice;

