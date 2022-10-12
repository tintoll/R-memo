export const saveMemoData = (memoData: MemoItem[]) => {
  localStorage.setItem('memo', JSON.stringify(memoData));
};

export const loadMemoData = (): MemoItem[] => {
  const memoData = localStorage.getItem('memo');
  if (memoData) {
    return JSON.parse(memoData);
  } else {
    return [];
  }
};
