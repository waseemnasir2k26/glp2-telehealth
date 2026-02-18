'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Image, Shield } from 'lucide-react';
import { mockMessages } from '@/lib/mock-data';
import { formatDateTime } from '@/lib/utils';

interface Message {
  id: string;
  sender: string;
  senderType: 'patient' | 'provider';
  content: string;
  timestamp: string;
  read: boolean;
}

export default function MessageThread() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: `MSG-${Date.now()}`,
      sender: 'Sarah Mitchell',
      senderType: 'patient',
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-semibold text-sm">EC</span>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">Dr. Emily Chen</h3>
            <p className="text-sm text-text-secondary">Internal Medicine</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-xs font-medium text-green-700">HIPAA Encrypted</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${message.senderType === 'patient' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message.senderType === 'patient' ? 'order-2' : 'order-1'}`}>
              <div
                className={`px-4 py-3 rounded-2xl ${
                  message.senderType === 'patient'
                    ? 'bg-primary text-white rounded-br-md'
                    : 'bg-gray-100 text-text-primary rounded-bl-md'
                }`}
              >
                <p className="leading-relaxed">{message.content}</p>
              </div>
              <p className={`text-xs text-text-secondary mt-1 ${message.senderType === 'patient' ? 'text-right' : ''}`}>
                {formatDateTime(message.timestamp)}
                {!message.read && message.senderType === 'provider' && (
                  <span className="ml-2 text-primary font-medium">• New</span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-gray-100">
        <div className="flex items-end gap-3">
          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-4 py-3 pr-24 bg-gray-50 border-0 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-2">
              <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
                <Image className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-text-secondary mt-2 text-center">
          Messages are encrypted end-to-end and stored securely per HIPAA guidelines
        </p>
      </div>
    </div>
  );
}
