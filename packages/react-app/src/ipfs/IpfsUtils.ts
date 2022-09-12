export const collect = async (source: AsyncIterable<Uint8Array>) => {
  const vals = [];
  for await (const val of source) {
    vals.push(val);
  }
  return vals;
};
