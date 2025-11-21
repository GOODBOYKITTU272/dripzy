import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { askDripzyAI } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Yo! I'm the Dripzy AI. Ask me how you can earn cashback or how the weeks work." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await askDripzyAI(input);
    const modelMsg: ChatMessage = { role: 'model', text: responseText };

    setMessages(prev => [...prev, modelMsg]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-drip-black border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] animate-fade-in-up">
        {/* Header */}
        <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-drip-neon rounded-full flex items-center justify-center">
              <Bot size={18} className="text-black" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Dripzy Assistant</h3>
              <span className="text-xs text-drip-neon flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-drip-neon rounded-full animate-pulse"></span> Online
              </span>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`
                  max-w-[85%] p-3 rounded-2xl text-sm
                  ${msg.role === 'user'
                    ? 'bg-drip-neon text-black rounded-tr-none'
                    : 'bg-zinc-800 text-gray-200 rounded-tl-none border border-white/5'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white/5 border-t border-white/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about weeks, earnings..."
              className="flex-1 bg-black/50 border border-white/10 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:border-drip-neon transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-drip-neon text-black p-2 rounded-full hover:bg-lime-300 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-500">Powered by Gemini 1.5 Flash</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;