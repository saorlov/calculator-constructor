import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { CalculatorState, CalculatorDispatch } from '../store/calculator-store'

export const useCalculatorDispatch: () => CalculatorDispatch = useDispatch
export const useCalculatorSelector: TypedUseSelectorHook<CalculatorState> = useSelector
