
import "./Tips.css";

const Tips = () => {
    return (
        <main className="tips-page">

            <h1 className="page-title">COMMON MISTAKES &amp; TIPS</h1>

            <section className="mistakes">
                <h2>THREE COMMON MISTAKES</h2>

                <img
                    src={process.env.PUBLIC_URL + "/images/three common.png"}
                    alt="Three common interpreting mistakes"
                />
            </section>

            <section className="quick-tips">
                <h2>QUICK TIPS</h2>

                <img
                    src={process.env.PUBLIC_URL + "/images/quick tip.png"}
                    alt="Quick interpreting tips"
                />
            </section>

            <section className="accuracy-speed">
                <h2>ACCURACY OVER SPEED</h2>

                <p>
                    Interpreting quickly does not matter if the message is wrong.
                    Focus on delivering the complete and accurate meaning first.
                </p>
            </section>

            <section className="tips-remember">
                <h2>REMEMBER</h2>

                <p>
                    <strong>Do not add.</strong><br />
                    <strong>Do not subtract.</strong><br />
                    <strong>Do not change the meaning.</strong>
                </p>

                <img
                    src={process.env.PUBLIC_URL + "/images/remember.png"}
                    alt="Important interpreting reminder"
                />
            </section>

        </main>
    );
};

export default Tips;
