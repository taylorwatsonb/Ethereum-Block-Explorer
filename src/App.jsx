import React, { useEffect } from 'react';
import { BlockDisplay } from './components/BlockDisplay';
import { BlockSearch } from './components/BlockSearch';
import { ErrorMessage } from './components/ErrorMessage';
import { useBlockData } from './hooks/useBlockData';
import { DEFAULT_BLOCK_NUMBER } from './config/constants';

function App() {
  const { block, error, isLoading, fetchBlock } = useBlockData();

  useEffect(() => {
    fetchBlock(DEFAULT_BLOCK_NUMBER);
  }, [fetchBlock]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Ethereum Block Explorer</h1>
        <BlockSearch onSearch={fetchBlock} isLoading={isLoading} />
        <ErrorMessage message={error} />
        <BlockDisplay block={block} />
      </div>
    </div>
  );
}

export default App;