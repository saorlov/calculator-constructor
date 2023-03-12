import { createSlice } from "@reduxjs/toolkit";

const calcInitialState = {
    inputValue: '',
    storedValue: '',
    operation: '',
    finished: false
}

const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","]
const signs = ["+", "-", "X", "/"]

export const calcState = createSlice({
    name: 'calc',
    initialState: calcInitialState,
    reducers: {
        handleInputAction: (state, action) => {
            if (symbols.includes(action.payload)) {
                if (state.finished) {
                    state.inputValue = ''
                    state.finished = false
                }
                if (action.payload === ',') {
                    if (!state.inputValue.includes('.')) {
                        state.inputValue = state.inputValue + '.'
                        if (state.inputValue === '.') {
                            state.inputValue = state.inputValue.replace(/^\./, '0.')
                        }
                    }

                    return state
                }

                state.inputValue = state.inputValue + action.payload

                if (/^0+/.test(state.inputValue)) {
                    state.inputValue = state.inputValue.replace(/0+/, '0')
                }

                if (/^0+[^.](.*)/.test(state.inputValue)) {
                    state.inputValue = state.inputValue.replace(/0+/, '')
                }

                return state
            }

            if (signs.includes(action.payload)) {
                if (state.finished) {
                    state.inputValue = ''
                    state.finished = false
                }
                if (state.operation === '') {
                    state.operation = action.payload
                    if (state.inputValue === '') {
                        state.storedValue = '0'
                    }
                    if (state.inputValue !== '') {
                        state.storedValue = state.inputValue
                        state.finished = true
                    }
                    return state
                }
                if (state.operation !== '') {
                    if (state.inputValue === '') {
                        state.inputValue = '0'
                    }
                    switch (state.operation) {
                        case "+": {
                            state.inputValue = `${parseFloat(state.storedValue) + parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = action.payload
                            state.finished = true
                            return state
                        }
                        case "-": {
                            state.inputValue = `${parseFloat(state.storedValue) - parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = action.payload
                            state.finished = true
                            return state
                        }
                        case "X": {
                            state.inputValue = `${parseFloat(state.storedValue) * parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = action.payload
                            state.finished = true
                            return state
                        }
                        case "/": {
                            if (state.inputValue === '0') {
                                state.inputValue = 'НЕ ОПРЕДЕЛНО'
                                state.storedValue = ''
                                state.operation = ''
                                state.finished = true
                                return state
                            }
                            state.inputValue = `${parseFloat(state.storedValue) / parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = action.payload
                            state.finished = true
                            return state
                        }
                        default: {
                            state.operation = action.payload
                            state.inputValue = state.storedValue
                            state.finished = true
                            return state
                        }
                    }
                }
            }
            if (action.payload === '=') {
                if (state.storedValue === '') {
                    state.finished = true
                    state.operation = ''
                    return state
                }
                if (state.inputValue === '') {
                    state.inputValue = '0'
                }
                if (state.operation !== '') {
                    switch (state.operation) {
                        case "+": {
                            state.inputValue = `${parseFloat(state.storedValue) + parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = '='
                            state.finished = true
                            return state
                        }
                        case "-": {
                            state.inputValue = `${parseFloat(state.storedValue) - parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = '='
                            state.finished = true
                            return state
                        }
                        case "X": {
                            state.inputValue = `${parseFloat(state.storedValue) * parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = '='
                            state.finished = true
                            return state
                        }
                        case "/": {
                            if (state.inputValue === '0') {
                                state.inputValue = 'НЕ ОПРЕДЕЛНО'
                                state.storedValue = ''
                                state.operation = ''
                                state.finished = true
                                return state
                            }
                            state.inputValue = `${parseFloat(state.storedValue) / parseFloat(state.inputValue)}`
                            state.storedValue = state.inputValue
                            state.operation = '='
                            state.finished = true
                            return state
                        }
                    }
                }
            }

            if (action.payload === 'backspace') {
                if (state.inputValue.length > 1) {
                    state.inputValue = state.inputValue.slice(0, state.inputValue.length - 2)
                    return state
                }
                state.inputValue = ''
                return state
            }
        },
        clearAll: (state) => {
            state.inputValue = ''
            state.storedValue = ''
            state.operation = ''
        },
    }
})

export const calcActions = calcState.actions