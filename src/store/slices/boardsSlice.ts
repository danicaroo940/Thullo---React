import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

interface BoardState {
  boards: any[];
  columns: any[];
  loading: boolean;
  error: any;
}

const initialState: BoardState = {
  boards: [],
  columns: [],
  loading: false,
  error: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setLoandingBoards: (state, action) => {
      state.loading = action.payload;
    },
    getBoardsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.boards = action.payload;
    },
    getBoardsFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default boardsSlice.reducer;
export const { setLoandingBoards, getBoardsSuccess, getBoardsFailure } =
  boardsSlice.actions;
