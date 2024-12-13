export const formatTimestamp = (timestamp) => {
  return new Date(timestamp * 1000).toISOString();
};

export const getBlockAge = (timestamp) => {
  const blockTime = timestamp * 1000;
  const now = Date.now();
  const ageInSeconds = Math.floor((now - blockTime) / 1000);
  
  if (ageInSeconds < 60) return `${ageInSeconds} seconds ago`;
  if (ageInSeconds < 3600) return `${Math.floor(ageInSeconds / 60)} minutes ago`;
  if (ageInSeconds < 86400) return `${Math.floor(ageInSeconds / 3600)} hours ago`;
  return `${Math.floor(ageInSeconds / 86400)} days ago`;
};