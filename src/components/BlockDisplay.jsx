import React from 'react';
import { formatTimestamp, getBlockAge } from '../utils/dateUtils';

export const BlockDisplay = ({ block }) => {
  if (!block) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Block #{block.number}</h2>
      <div className="space-y-3">
        <InfoRow label="Hash" value={block.hash} />
        <InfoRow label="Timestamp" value={`${formatTimestamp(block.timestamp)} (${getBlockAge(block.timestamp)})`} />
        <InfoRow label="Miner" value={block.miner} />
        <InfoRow label="Transactions" value={block.transactions.length} />
        <InfoRow label="Gas Used" value={block.gasUsed.toString()} />
        <InfoRow label="Gas Limit" value={block.gasLimit.toString()} />
        <InfoRow label="Base Fee" value={block.baseFeePerGas?.toString() || 'N/A'} />
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 py-2">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800 break-all">{value}</span>
  </div>
);