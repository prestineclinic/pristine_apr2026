import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We offer Physiotherapy, Osteopathy, Neuro & Pediatric Rehabilitation, PNF Therapy, and Pilates. We treat conditions like cervical pain, sciatica, frozen shoulder, knee osteoarthritis, tennis elbow, and more."
  },
  {
    question: "What are your clinic hours?",
    answer: "We're open Monday to Saturday, 10 AM – 8:30 PM and Sunday 9 AM – 1 PM."
  },
  {
    question: "Where is the clinic located?",
    answer: "We're located at No 50 hig, KHB Colony, Koramangala 8th Block, Koramangala, Bengaluru, Karnataka 560095."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book by clicking the 'Book Now' button on our website, or call us directly at +91 6364 635 943. You can also email us at prestine.clinic@gmail.com."
  },
  {
    question: "What conditions do you treat?",
    answer: "We treat cervical and lower back pain, knee osteoarthritis, postural pain, sciatica, tennis elbow, golfer's elbow, frozen shoulder, ligament sprains, stroke recovery, and Guillain-Barré Syndrome."
  },
  {
    question: "What should I expect on my first visit?",
    answer: "Your first visit includes a comprehensive assessment of your condition, medical history review, and a personalized treatment plan. Please bring any relevant medical reports or imaging."
  },
];

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello! I am your PristinePhysio assistant. How can I help you today?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFAQClick = (faq: FAQ) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', text: faq.question },
      { role: 'bot', text: faq.answer }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-panel w-[350px] sm:w-[400px] h-[500px] rounded-2xl flex flex-col overflow-hidden mb-4 shadow-2xl border-slate-200"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">PristinePhysio Support</h3>
                  <p className="text-[11px] text-white/90">Quick Answers • FAQ</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-start gap-2 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  {msg.role === 'bot' && (
                    <div className="p-2 rounded-full bg-white border border-slate-200 text-slate-700">
                      <Bot size={14} />
                    </div>
                  )}
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user'
                      ? "bg-primary text-white rounded-tr-none shadow-sm"
                      : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Buttons */}
            <div className="p-3 bg-white border-t border-slate-100 overflow-y-auto max-h-[160px]">
              <p className="text-[11px] text-slate-600 mb-2 font-medium uppercase tracking-wide">Select a question</p>
              <div className="flex flex-wrap gap-2">
                {FAQ_LIST.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleFAQClick(faq)}
                    className="text-xs text-left bg-slate-100 hover:bg-primary hover:text-white text-slate-700 px-3 py-2 rounded-xl transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
