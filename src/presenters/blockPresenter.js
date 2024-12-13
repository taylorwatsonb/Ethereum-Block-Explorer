import { formatTimestamp, getBlockAge } from '../utils/dateUtils.js';
import { formatBlockInfo } from '../utils/blockUtils.js';
import { logger } from '../utils/logger.js';

export class BlockPresenter {
  static present(block) {
    const formattedBlock = formatBlockInfo(block);
    
    logger.info('\nBlock Details:');
    logger.info('------------------------');
    logger.info(`Block Number: ${formattedBlock.number}`);
    logger.info(`Hash: ${formattedBlock.hash}`);
    logger.info(`Timestamp: ${formatTimestamp(formattedBlock.timestamp)}`);
    logger.info(`Age: ${getBlockAge(formattedBlock.timestamp)}`);
    logger.info(`Miner: ${formattedBlock.miner}`);
    logger.info(`Transactions: ${formattedBlock.transactionCount}`);
    logger.info(`Gas Used: ${formattedBlock.gasUsed}`);
    logger.info(`Gas Limit: ${formattedBlock.gasLimit}`);
    logger.info(`Base Fee: ${formattedBlock.baseFeePerGas}`);
    logger.info('------------------------');
  }
}