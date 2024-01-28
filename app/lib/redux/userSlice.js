import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    storeUser(state, { payload }) {
      state.user.id = payload.id
      state.user.name = payload.name
      state.user.email = payload.email
      state.user.createdAt = payload.createdAt
    }
  }
})

export const { storeUser } = userSlice.actions 