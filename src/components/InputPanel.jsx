import React from 'react';

const InputPanel = ({ query, setQuery, onSubmit, loading }) => {
  return (
    <div className="mt-4">
      <textarea
        className="w-full h-24 p-3 border border-gray-300 rounded"
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={onSubmit}
        className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default InputPanel;
