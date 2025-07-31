export function countVowels(names: string[]) {
  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  names.join('').toLowerCase().split('').forEach((char) => {
    if (char in counts) counts[char as keyof typeof counts]++;
  });

  return counts;
}
