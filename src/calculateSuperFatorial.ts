export const calculateSuperFatorial = () => {
  const cache: {
    [key: number]: number
  } = {};

  return (vlFatorial: number) => {
    const calculateRecursive = (ft: number): number => {
      if (ft === 0) return 1;
      if (cache[ft]) return cache[ft];

      const result = ft * calculateRecursive(ft - 1);
      cache[ft] = result;

      return result;
    }

    let rs = 1;

    for (let value = 1; value <= vlFatorial; value++) {
      rs *= calculateRecursive(value);
    }

    return rs;
  }
};