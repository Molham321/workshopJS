const __isFund = (array: any[], item: any): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return true;
    }
  }
  return false;
};
