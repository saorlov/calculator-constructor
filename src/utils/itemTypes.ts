import { Key } from "react";

export const ItemTypes = {
    COMPONENT: 'calculatorComponent'
}

export type CalculatorElement = {
    _id: Key,
    name: string,
    element: Array<{
        name: string,
        value: string
    }>,
    dragged: Boolean,
    active: Boolean,
}

export type ElementType = {
    name: string,
    value: string
}
