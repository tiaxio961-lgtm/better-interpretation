
import "./Notes.css";

const Notes = () => {
    return (
        <main className="notes-page">

            <h1 className="page-title">NOTE-TAKING TECHNIQUES</h1>

            <section className="notes-intro">
                <div className="notes-intro-text">
                    <p>
                        Good notes help interpreters remember important
                        information without trying to write down every word.
                    </p>

                    <p>
                        Good note taking technique is crucial to be a good interpreter,
                        and remember, that they do not have to understand what
                        you write just you.
                    </p>
                </div>

                <img
                    src={process.env.PUBLIC_URL + "/images/notebook.png"}
                    alt="Notebook with notes"
                />
            </section>

            <section className="why-notes">
                <h2>WHY TAKE NOTES?</h2>

                <div className="why-notes-content">
                    <div className="note-icon">&#9998;</div>

                    <p>
                        Interpreters often need to remember names, numbers, dates,
                        and important details. Short notes can help you remember
                        the message while still focusing on the speaker. You should
                        always try to take notes during this type of situation.
                        Because these numbers could very much pop up again during
                        the same conversation. It will save you a lot of energy to
                        just write it down the first time.
                    </p>
                </div>
            </section>

            <section className="note-example">
                <h2>NOTE-TAKING EXAMPLE</h2>

                <p className="example-info">
                    what that means is that you should use symbols,
                    arrows ABC the capital letter or whatever letter to help you
                    remember. The whole sentence could be a p h arrow o u s
                    (a person help me to open up the shop.)
                </p>

                <div className="example-row">
                    <div className="example-card">
                        <h3>Speaker says:</h3>

                        <p>
                            "Your appointment is scheduled for
                            Monday at 9:30 in the morning."
                        </p>
                    </div>

                    <div className="example-arrow">&rarr;</div>

                    <div className="example-card">
                        <h3>Interpreter's notes:</h3>

                        <p className="short-notes">
                            Appt &rarr; Mon &rarr; 9:30 AM
                        </p>

                        <img
                            src={process.env.PUBLIC_URL + "/images/notetake.png"}
                            alt="Note-taking example"
                        />
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Notes;
