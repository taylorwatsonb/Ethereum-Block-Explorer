import { useState, useCallback } from 'react';
import { BlockService } from '../services/blockService';

export const useBlockData = () => {
  const [block, setBlock] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const blockService = new BlockService();

  const fetchBlock = useCallback(async (blockNumber) => {
    setIsLoading(true);
    setError('');
    
    try {
      const blockData = await blockService.getBlock(blockNumber);
      setBlock(blockData);
    } catch (err) {
      setError(err.message);
      setBlock(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { block, error, isLoading, fetchBlock };
};