import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { loadMemoData, saveMemoData } from 'store/localStroage';
import { MemoState } from './types';

export const initialState: MemoState = {
  memoList: loadMemoData(),
};

const slice = createSlice({
  name: 'memo',
  initialState: initialState,
  reducers: {
    addMemo: {
      reducer: (state, action: PayloadAction<MemoItem>) => {
        state.memoList.push(action.payload);
        for (const memo of state.memoList) {
          if (memo.id === action.payload.id) continue;
          if (memo.selected) memo.selected = false;
        }

        saveMemoData(state.memoList);
      },
      prepare: (content: string, preview: string) => {
        const id = nanoid();
        return {
          payload: {
            id: id,
            content: content,
            preview: preview,
            selected: true,
            create_at: new Date().toString(),
          },
        };
      },
    },
    selectMemo: (state, action: PayloadAction<{ id: string }>) => {
      for (const memo of state.memoList) {
        if (memo.id === action.payload.id) {
          memo.selected = true;
        } else {
          memo.selected = false;
        }
      }
      saveMemoData(state.memoList);
    },
    saveMemo: (
      state,
      action: PayloadAction<{ content: string; preview: string }>,
    ) => {
      const content = action.payload.content;
      const preview = action.payload.preview;

      const memo = state.memoList.find(memo => memo.selected);
      if (memo) {
        memo.content = content;
        memo.preview = preview;
        memo.create_at = new Date().toString();
      }
      saveMemoData(state.memoList);
    },
    deleteMemo: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const fileteredMemoList = state.memoList.filter(memo => memo.id !== id);
      state.memoList = fileteredMemoList;

      const sortedMemos = [...state.memoList].sort(
        (a, b) =>
          new Date(b.create_at).getTime() - new Date(a.create_at).getTime(),
      );
      if (sortedMemos.length > 0) {
        const memo = state.memoList.find(memo => memo.id === sortedMemos[0].id);
        if (memo) {
          memo.selected = true;
        }
      }
      saveMemoData(state.memoList);
    },
  },
});

//export const { actions: MemoActions } = slice;
export const useMemoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { MemoActions: slice.actions };
};
