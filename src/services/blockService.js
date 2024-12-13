import { Alchemy } from 'alchemy-sdk';
import { settings } from '../config/alchemy.js';
import { ERROR_MESSAGES } from '../config/constants.js';
import { logger } from '../utils/logger.js';

export class BlockService {
  constructor() {
    this.alchemy = new Alchemy(settings);
  }

  async getBlock(blockNumber) {
    if (!blockNumber || blockNumber < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_BLOCK_NUMBER);
    }

    try {
      logger.debug(`Fetching block ${blockNumber}`);
      const block = await this.alchemy.core.getBlock(blockNumber);
      
      if (!block) {
        throw new Error(`Block ${blockNumber} not found`);
      }

      return block;
    } catch (error) {
      logger.error('Error in getBlock:', error.message);
      throw new Error(`${ERROR_MESSAGES.BLOCK_FETCH_FAILED}: ${error.message}`);
    }
  }
}