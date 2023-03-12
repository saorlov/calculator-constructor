import ClockFace from "../components/functional/clock-face/ClockFace";
import Signs from "../components/functional/signs-panel/Signs";
import Numbers from "../components/functional/numbers-panel/Numbers";
import EqualPanel from "../components/functional/equal-panel/EqualPanel";

export const signs = [
    {
        name: 'concat',
        value: '+',
    },
    {
        name: 'subtract',
        value: '-',
    },
    {
        name: 'multiply',
        value: 'X',
    },
    {
        name: 'divide',
        value: '/',
    },
]

export const numbers =[
    {
        name: 'one',
        value: '1',
    },
    {
        name: 'two',
        value: '2',
    },
    {
        name: 'three',
        value: '3',
    },
    {
        name: 'four',
        value: '4',
    },
    {
        name: 'five',
        value: '5',
    },
    {
        name: 'six',
        value: '6',
    },
    {
        name: 'seven',
        value: '7',
    },
    {
        name: 'eight',
        value: '8',
    },
    {
        name: 'nine',
        value: '9',
    },
    {
        name: 'zero',
        value: '0',
    },
    {
        name: 'coma',
        value: ',',
    },
]

export const equal = [
    {
        name: 'equal',
        value: '=',
    }
]

export const components = new Map()
components.set("clock-face", ClockFace)
components.set("signs", Signs)
components.set("numbers", Numbers)
components.set("equal-sign", EqualPanel)