const wordSizeTransformer = (data, minSize = 12, maxSize = 72) => {
  if (!data.length) {
    return [];
  }

  const counts = data.map(item => item.count);
  const max = Math.max(...counts);

  return data.map(item => {
    const size = item.count * maxSize / max;

    return {
      text: item.word,
      size: size > minSize ? size : minSize,
    };
  });
};

export default wordSizeTransformer;
