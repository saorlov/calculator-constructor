import { createSlice } from "@reduxjs/toolkit";
import { Key } from "react";
import { CalculatorElement } from "../utils/itemTypes";

interface ActionAdd {
    type: string,
    payload: CalculatorElement
}

interface ActionReorder  {
    type: string,
    payload: {
        element: CalculatorElement,
        elementAfter: Key
    }
}


const draggedState: CalculatorElement[] = []


export const draggedSlice = createSlice({
    name: 'dragged',
    initialState: draggedState,
    reducers: {
        addElement(state, action: ActionAdd) {
            if (state.findIndex((el: CalculatorElement) => el._id === action.payload._id) === -1) {
                state.push(action.payload)
                return state
            }

            state.splice(state.findIndex(el => el._id === action.payload._id), 1)
            state.push(action.payload)
            return state
        },
        changeOrder(state, action: ActionReorder) {
            if (state.findIndex((el: CalculatorElement) => el._id === action.payload.element._id) === -1) {
                state.splice(state.findIndex(el => el._id === action.payload.elementAfter), 0, action.payload.element)
                return state
            }

            state.splice(state.findIndex(el => el._id === action.payload.element._id), 1)
            state.splice(state.findIndex(el => el._id === action.payload.elementAfter), 0, action.payload.element)
        }
    }
})

export const draggedActions = draggedSlice.actions