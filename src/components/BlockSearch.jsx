import React, { useState } from 'react';

export const BlockSearch = ({ onSearch, isLoading }) => {
  const [blockNumber, setBlockNumber] = useState('15221026');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(parseInt(blockNumber));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 max-w-md mx-auto">
      <div className="flex gap-4">
        <input
          type="number"
          value={blockNumber}
          onChange={(e) => setBlockNumber(e.target.value)}
          placeholder="Enter block number"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          min="0"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </form>
  );
};