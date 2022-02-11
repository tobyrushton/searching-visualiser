import '../../../Components/body/body.css'
import {speed} from '../../../Components/Header/slider/slider';

const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = 'black'
//bubble sort changed to be asynchronous due to performance issues (website freezes for a few seconds when bubble sort started)

export async function completeBubbleSort(array,setArray,returnArrayLength,setRunning){
    setRunning(true)
    try{
        await bubbleSort(array,setArray,returnArrayLength)
    }catch(e){
        return true
    }
    setRunning(false)
    return new Promise((resolve)=>{resolve()})
}

async function bubbleSort(array,setArray, returnArrayLength){
    let swapped;
    do {
        swapped = false;
        //define array bars
        let len = (returnArrayLength()<array.length) ? returnArrayLength() : array.length;
        const arrayBars = document.getElementsByClassName('array-bar')
        for (let i = 0; i < len; i++) {
            len = (returnArrayLength()<array.length) ? returnArrayLength() : array.length;
            //define array bars one and 2
            const barOneIdx = i;
            const barTwoIdx = (i === len-1) ? i:i+1;
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            //change colours of the both
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
            if (array[i] >  array[i + 1]) {
                //swap values of these arrays.
                let current = array[i];
                array[i] = array[i + 1];
                array[i + 1] = current;
                swapped = true;
                setArray([...array]);
            }
            await waitTime(speed/2) //waits for timer to continue loop.
            //revert the colours.
            barOneStyle.backgroundColor = PRIMARY_COLOR
            barTwoStyle.backgroundColor = PRIMARY_COLOR
        }
    } while (swapped);
    return new Promise((resolve)=>{
        resolve();
    })
}

async function waitTime(interval){
    return new Promise((resolve)=> {
      setTimeout(()=>{
        resolve()
      },interval)
    })
}