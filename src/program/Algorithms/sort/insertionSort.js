import '../../Components/body/body.css';
import {speed} from '../../Components/Header/slider/slider'
import { colours } from '../../../colourScheme'

export const completeInsertionSort = async(array,setRunning,returnArrayLength,setArray) =>{

    setRunning(true)
    try{
        await insertionSort(array,returnArrayLength,setArray)
    }
    catch(err){
        return true
    }
    setRunning(false)
}


const insertionSort = async(arr,returnArrayLength,setArray) => {
    let n = arr.length
    const arrayBars = document.getElementsByClassName('array-bar')

        for (let i = 1; i < n; i++) {
            if(i>=returnArrayLength()) continue
            let current = arr[i]
            let j = i-1
            while ((j > -1) && (current < arr[j])) {
                const barOneIdx = j
                const barTwoIdx = j+1
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                barOneStyle.backgroundColor = colours.secondary
                barTwoStyle.backgroundColor = colours.secondary
                await wait(speed/2)
                barOneStyle.backgroundColor = colours.primary
                barTwoStyle.backgroundColor = colours.primary
                arr[j+1] = arr[j]
                j--
                setArray([...arr])
            }
            arr[j+1] = current
        }

    return new Promise(resolve=>resolve())
}

const wait = async(interval) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },interval)
    })
}