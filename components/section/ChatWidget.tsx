'use client';

import { useEffect } from 'react';

type ChatWidgetProps = {
  iframeUrl: string;
};

export default function ChatWidget({ iframeUrl }: ChatWidgetProps) {
  useEffect(() => {
    const toggleButton = document.getElementById('chatToggle');
    const chatContainer = document.getElementById('chatContainer');

    const toggleChat = () => {
      if (!chatContainer) return;
      chatContainer.classList.toggle('hidden');
    };

    toggleButton?.addEventListener('click', toggleChat);
    return () => toggleButton?.removeEventListener('click', toggleChat);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          id="chatToggle"
          className="p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      <div
        id="chatContainer"
        className="fixed bottom-20 right-6 w-96 h-[600px] bg-white shadow-xl rounded-lg hidden"
      >
        <iframe
          src={iframeUrl}
          className="w-full h-full rounded-lg"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
}
