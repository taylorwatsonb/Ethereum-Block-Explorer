import { BlockFetcher } from './blockFetcher.js';
import { TARGET_BLOCK } from './config.js';

async function main() {
  try {
    const fetcher = new BlockFetcher();
    const block = await fetcher.fetchBlock(TARGET_BLOCK);
    
    console.log('\nBlock Details:');
    console.log('------------------------');
    console.log(`Block Number: ${block.number}`);
    console.log(`Hash: ${block.hash}`);
    console.log(`Timestamp: ${new Date(block.timestamp * 1000).toISOString()}`);
    console.log(`Miner: ${block.miner}`);
    console.log(`Transactions Count: ${block.transactions.length}`);
    console.log(`Gas Used: ${block.gasUsed.toString()}`);
    console.log('------------------------');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();