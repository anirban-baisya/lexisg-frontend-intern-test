import React from 'react';

const AnswerPanel = ({ answer, citation, onCitationClick }) => {
  return (
    <>
      <p>{answer}</p>
      <div className="mt-3">
        <p className="text-sm font-semibold">Citation:</p>
        <button
          onClick={onCitationClick}
          className="text-blue-600 underline mt-1 hover:text-blue-800"
        >
          {citation.text} ({citation.source})
        </button>
      </div>
    </>
  );
};

export default AnswerPanel;
