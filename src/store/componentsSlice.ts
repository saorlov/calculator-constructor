import { createSlice } from '@reduxjs/toolkit'
import { type Key } from 'react'
import { equal, numbers, signs } from '../utils/arrays'

const componentsState = [
  {
    _id: Math.floor(Math.random() * 10000000),
    name: 'clock-face',
    element: [],
    dragged: false,
    active: false
  },
  {
    _id: Math.floor(Math.random() * 10000000),
    name: 'signs',
    element: signs,
    dragged: false,
    active: false
  },
  {
    _id: Math.floor(Math.random() * 10000000),
    name: 'numbers',
    element: numbers,
    dragged: false,
    active: false
  },
  {
    _id: Math.floor(Math.random() * 10000000),
    name: 'equal-sign',
    element: equal,
    dragged: false,
    active: false
  }
]

export const componentsSlice = createSlice({
  name: 'draggable-components',
  initialState: componentsState,
  reducers: {
    markAsDragged (state, action: { type: string, payload: Key }) {
      state[state.findIndex(el => el._id === action.payload)].dragged = true
      return state
    },
    unmarkDragged (state, action: { type: string, payload: Key }) {
      state[state.findIndex(el => el._id === action.payload)].dragged = false
      return state
    }
  }
})

export const componentsActions = componentsSlice.actions
