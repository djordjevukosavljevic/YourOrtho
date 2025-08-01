export default function Contacts() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2 >
            <form className="w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded"
                />

                 <input
                    type="text"
                    placeholder="Your Lastname"
                    className="w-full p-3 border rounded"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded"
                />
                <input
                    type="number"
                    placeholder="Your Mobile Number"
                    className="w-full p-3 border rounded"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border rounded"
                />

                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border rounded"
                    rows={4}
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
            <p className="mt-6 text-gray-600 text-center">📍 Belgrade | ☎️ +38162231689 | ✉️ <a href="mailto:djordje.vukosavljevic01@gmail.com">vvukosavljevic@gmail.com</a></p>
        </div>
    );
}
