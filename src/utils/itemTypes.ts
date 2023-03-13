import { type Key } from 'react'

export const ItemTypes = {
  COMPONENT: 'calculatorComponent'
}

export interface CalculatorElement {
  _id: Key
  name: string
  element: Array<{
    name: string
    value: string
  }>
  dragged: boolean
  active: boolean
}

export interface ElementType {
  name: string
  value: string
}
