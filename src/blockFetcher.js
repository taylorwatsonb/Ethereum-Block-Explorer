import { Alchemy } from 'alchemy-sdk';
import { ALCHEMY_CONFIG } from './config.js';

export class BlockFetcher {
  constructor() {
    this.alchemy = new Alchemy(ALCHEMY_CONFIG);
  }

  async fetchBlock(blockNumber) {
    try {
      const block = await this.alchemy.core.getBlock(blockNumber);
      return block;
    } catch (error) {
      console.error('Failed to fetch block:', error.message);
      throw error;
    }
  }
}