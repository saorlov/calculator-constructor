import { configureStore } from "@reduxjs/toolkit";
import { componentsSlice } from "./componentsSlice";
import { draggedSlice } from "./draggedComponentsSlice";
import {activeSlice} from "./activeSlice";
import {calcState} from "./calcSlice";

export const calculatorStore = configureStore({
    reducer: {
        components: componentsSlice.reducer,
        dragged: draggedSlice.reducer,
        active: activeSlice.reducer,
        calc: calcState.reducer
    },
})

export type CalculatorState = ReturnType<typeof calculatorStore.getState>
export type CalculatorDispatch = typeof calculatorStore.dispatch