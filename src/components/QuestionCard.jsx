import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiBookmark, FiClock, FiLayers } from "react-icons/fi";

export default function QuestionCard({ question, answer, level }) {
    const [open, setOpen] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const config = {
        Easy: { color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
        Medium: { color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
        Hard: { color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
    };

    const theme = config[level] || config.Medium;

    return (
        <motion.div 
            layout
            className={`group bg-white rounded-[2rem] border-2 transition-all duration-300 ${
                open ? "border-indigo-500 shadow-[0_20px_40px_rgba(79,70,229,0.08)]" : "border-gray-100 shadow-sm hover:border-gray-200"
            }`}
        >
            {/* Clickable Area */}
            <div 
                className="p-6 cursor-pointer" 
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                        {/* Question Meta */}
                        <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg border ${theme.bg} ${theme.color} ${theme.border}`}>
                                {level}
                            </span>
                            <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-bold">
                                <FiClock /> 2 min read
                            </div>
                        </div>

                        <h3 className={`text-lg font-black leading-tight transition-colors ${open ? "text-indigo-600" : "text-gray-900"}`}>
                            {question}
                        </h3>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setBookmarked(!bookmarked);
                            }}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                bookmarked ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-gray-50 text-gray-400 hover:text-indigo-600"
                            }`}
                        >
                            <FiBookmark className={bookmarked ? "fill-current" : ""} />
                        </button>
                        
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 ${open ? "rotate-180 bg-indigo-50 text-indigo-600" : "bg-gray-50 text-gray-400"}`}>
                            <FiChevronDown size={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Expandable Answer Section */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-8 pt-2 border-t border-gray-50">
                            <div className="bg-gray-50/50 p-6 rounded-[1.5rem] border border-gray-100">
                                <div className="flex items-center gap-2 text-indigo-600 mb-4">
                                    <FiLayers className="text-sm" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Suggested Answer</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
