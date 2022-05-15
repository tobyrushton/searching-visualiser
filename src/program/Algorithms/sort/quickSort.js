import '../../Components/body/body.css';
import {speed} from '../../Components/Header/slider/slider'
import { colours } from '../../../colourScheme'

export async function completeQuickSort(array,setRunning, returnArrayLength, setArray){
    const arrayBars = document.getElementsByClassName('array-bar')
    setRunning(true)
    try{
        await quickSort(array,0,array.length-1,returnArrayLength,setArray, arrayBars)
    }catch(e){
        return true
    }
    setRunning(false)
    return new Promise((resolve)=>{
        resolve();
    })
}

function swap(array, leftIndex, rightIndex){
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}


async function partition(array, left, right, returnArrayLength, setArray, arrayBars) {
    let pivot   = array[Math.floor((right + left) / 2)], 
        i = left, 
        j = right; 
    while (i <= j) {
        let barOneStyle;
        let barTwoStyle;
        while (array[i] < pivot) {
            if(i>=returnArrayLength()) break;
            barOneStyle = arrayBars[i].style
            barOneStyle.backgroundColor = colours.secondary
            await waitTime(speed/2)
            barOneStyle.backgroundColor = colours.primary;
            i++;
        }
        while (array[j] > pivot) {
            if(j>=returnArrayLength()) break
            barOneStyle = arrayBars[j].style
            barOneStyle.backgroundColor = colours.secondary;
            await waitTime(speed/2)
            barOneStyle.backgroundColor = colours.primary;
            j--;
        }
        if (i <= j) {
            if(j<returnArrayLength() && i <returnArrayLength())
            {
                barOneStyle = arrayBars[i].style
                barTwoStyle = arrayBars[j].style
                barOneStyle.backgroundColor = colours.secondary
                barTwoStyle.backgroundColor = colours.secondary
                await waitTime(speed/2)
                barOneStyle.backgroundColor = colours.primary
                barTwoStyle.backgroundColor = colours.primary
            }
            swap(array, i, j);
            setArray([...array])
            i++;
            j--;
        }
    }
    return new Promise((resolve)=>{
        resolve(i)
    })
}


async function quickSort(array, left, right,returnArrayLength,setArray, arrayBars ) {
    let index;
    if (array.length > 1) {
        index = await partition(array, left, right, returnArrayLength, setArray, arrayBars);
        if (left < index - 1) { 
            await quickSort(array, left, index - 1, returnArrayLength, setArray, arrayBars);
        }
        if (index < right) { 
            await quickSort(array, index, right, returnArrayLength, setArray, arrayBars);
        }
    }
    return new Promise((resolve)=>{
        resolve();
    });
}

async function waitTime(interval){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, interval)
    })
}