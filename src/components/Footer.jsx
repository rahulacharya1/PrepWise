import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {

    useEffect(() => {
        if (document.title === "PrepWise" || !document.title.includes("|")) {
            document.title = "PrepWise | AI Interview Prep & Coding Practice";
        }

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && !metaDesc.getAttribute("content")) {
            metaDesc.setAttribute("content", "Start your journey to a dream tech job with PrepWise. AI-powered behavioral, technical, and coding interview preparation.");
        }
    }, []);
    
    return (
        <footer className="relative border-t border-gray-200 bg-white overflow-hidden">
            {/* Subtle background glow for a "Modern SaaS" look */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center my-4 gap-4">
                    <Link to="/" className="text-2xl font-black tracking-tight text-indigo-600">
                        Prep<span className="text-gray-900">Wise</span>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        The intelligent interview preparation platform designed to help you land your dream job with AI-driven insights.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 flex justify-center items-center">
                    <p className="text-xs font-medium text-gray-500 my-4">
                        © 2026 PrepWise Inc. Made with ❤️ for developers.
                    </p>
                </div>
            </div>
        </footer>
    );
}
