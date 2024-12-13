export const formatBlockInfo = (block) => ({
  hash: block.hash,
  number: block.number,
  timestamp: block.timestamp,
  transactionCount: block.transactions.length,
  miner: block.miner,
  gasUsed: block.gasUsed.toString(),
  gasLimit: block.gasLimit.toString(),
  baseFeePerGas: block.baseFeePerGas?.toString() || 'N/A'
});