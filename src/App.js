import React, { useState } from 'react';
import ChatBubble from './components/ChatBubble';
import InputPanel from './components/InputPanel';
import AnswerPanel from './components/AnswerPanel';
import CitationModal from './components/Modal/CitationModal';
import { mockResponses } from './mocks/responses.mock';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); // holds full chat list
  const [showModal, setShowModal] = useState(false);
  const [activeCitation, setActiveCitation] = useState(null);


  const handleSubmit = () => {
  if (!query.trim()) return;
  setLoading(true);

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * mockResponses.length);
    const mockResponse = mockResponses[randomIndex];

    const newPair = {
      question: query,
      answer: mockResponse.answer,
      citations: mockResponse.citations,
    };

    setHistory((prev) => [...prev, newPair]);
    setQuery('');
    setLoading(false);
  }, 1000);
};

  const handleCitationClick = (citation) => {
    setActiveCitation(citation);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Lexi Legal Assistant</h1>

        <div className="space-y-4 mb-6 max-h-[70vh] overflow-y-auto pr-2">
          {history.map((item, idx) => (
            <div key={idx}>
              <ChatBubble sender="user">{item.question}</ChatBubble>
              <ChatBubble sender="assistant">
                <AnswerPanel
                  answer={item.answer}
                  citation={item.citations[0]}
                  onCitationClick={() => handleCitationClick(item.citations[0])}
                />
              </ChatBubble>
            </div>
          ))}
        </div>

        <InputPanel
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
          loading={loading}
        />

        {activeCitation && (
          <CitationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            citation={activeCitation}
          />
        )}
      </div>
    </div>
  );
}

export default App;
