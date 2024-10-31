
import { FiMapPin } from 'react-icons/fi';
import ContactBar from './ContactBar';

function HeroSection() {

    function copyText() {
        // Get the email text from the span element
        const emailText = document.getElementById("email").innerText;

        // Copy the email text to the clipboard
        navigator.clipboard.writeText(emailText)
            .then(() => {
                alert("Email copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    }

    return (
        <>
            <div className="bg-theme p-8 rounded-b-3xl bottom-rounded">
                <ContactBar/>

                <div className="md:hidden flex items-center justify-center">
                    <img src="https://placehold.co/400x400" className="rounded-full border-2 border-white sm:w-1/3 w-1/2" />
                </div>

                <div className="grid grid-cols-12 gap-4 py-4">
                    <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
                        <p className="md:text-lg font-semibold whitespace-nowrap">
                            👋 Hello, I'm Rohit
                        </p>

                        <p className="text-3xl md:text-6xl font-extrabold">
                            Creating intuitive apps to make life simpler.
                        </p>
                        <p className="text-2xl md:text-5xl font-bold text-gray-700">
                            Currently exploring React and Flutter to bring impactful ideas to life.
                        </p>
                        <div className="bg-black text-white rounded-full py-2 px-4 w-24 text-center my-4 font-bold cursor-pointer" onClick={() => window.location.href = "mailto:rohitdhall987@gmail.com?subject=Hiring%20Inquiry"}>
                            Hire Me
                        </div>
                        <div className="flex items-center gap-2">
                            <FiMapPin  />
                            <span>Karnal, Haryana</span>
                        </div>
                    </div>
                    <div className="hidden col-span-4 md:flex justify-end items-center">
                        <img className="w-full max-w-xs h-auto rounded-3xl" src="https://placehold.co/400x700" alt="Profile" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default HeroSection;
