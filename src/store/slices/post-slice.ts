import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PickerImage, PostData} from 'types';

type PostState = {
  title: string;
  status: string;
  description: string;
  uri: string;
  postData: PostData[];
};

const initialState: PostState = {
  title: '',
  status: '',
  description: '',
  uri: '',
  postData: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setUri: (state, action: PayloadAction<string>) => {
      state.uri = action.payload;
    },
    setPostData: (state, action: PayloadAction<PostData>) => {
      state.postData = [...state.postData, action.payload];
    },
  },
});

const {actions, reducer} = postSlice;

export const {setTitle, setDescription, setUri, setStatus, setPostData} =
  actions;

export default reducer;
