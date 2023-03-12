import {createSlice} from "@reduxjs/toolkit";

const activeState = {
    active: false
}

export const activeSlice = createSlice({
    name: 'active-slice',
    initialState: activeState,
    reducers: {
        toggleActive(state) {
            state.active = !state.active
            return state
        }
    }
})

export const activityActions = activeSlice.actions