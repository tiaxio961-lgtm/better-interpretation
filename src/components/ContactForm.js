
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./ContactForm.css";

const ContactForm = () => {
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setSending(true);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error("Could not send your message.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <h2>CONTACT US</h2>

            <p>
                Have a question about interpreting or note-taking?
                Send us a message!
            </p>

            {/* Part 10: Web3Forms contact form
                React Library #1: React Hot Toast */}

            <form onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="access_key"
                    value="YOUR_WEB3FORMS_ACCESS_KEY"
                />

                <label htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />

                <label htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />

                <label htmlFor="contact-message">Message</label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                />

                <button type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                </button>
            </form>

            <Toaster position="top-center" />
        </section>
    );
};

export default ContactForm;
