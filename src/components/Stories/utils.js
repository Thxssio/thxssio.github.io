export const estimateReadingTime = (text, wordsPerMinute = 200) => {
  if (!text) return "1 min read";
  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;
  if (!words) return "1 min read";
  const minutes = Math.max(1, Math.ceil(words / Math.max(wordsPerMinute, 120)));
  return `${minutes} min read`;
};
