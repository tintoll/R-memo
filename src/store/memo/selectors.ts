import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.memo;

const MemoListSelector = createSelector(baseSelector, state =>
  [...state.memoList].sort(
    (a, b) => new Date(b.create_at).getTime() - new Date(a.create_at).getTime(),
  ),
);

const SelectedMemoListSelector = createSelector(baseSelector, state =>
  state.memoList.find(memo => memo.selected),
);

export { SelectedMemoListSelector, MemoListSelector };
