import '../../../Components/body/body.css';
import {speed} from '../../../Components/Header/slider/slider'

const SECONDARY_COLOR = 'red';
const PRIMARY_COLOR = 'black'

export async function completeHeapSort(array,setRunning,returnArrayLength,setArray){
    const arrayBars = document.getElementsByClassName('array-bar')
    setRunning(true);
    try{
      await heapSort(array,returnArrayLength,setArray,arrayBars)
    }catch(e){
        return false;
    }
    setRunning(false);

    return new Promise((resolve)=>resolve())
}

const buildMaxHeap = async(arr,returnArrayLength,setArray,arrayBars) => {
    // Get index of the middle element
    let i = Math.floor(arr.length / 2 - 1);
  
    // Build a max heap out of
    // All array elements passed in
    while (i >= 0) {
      await heapify(arr, i, arr.length,returnArrayLength,setArray,arrayBars);
      i--
    }

    return new Promise((resolve)=> resolve())
  }
  
  const heapify = async(heap, i, max, returnArrayLength,setArray, arrayBars) => {
    let index;
    let leftChild;
    let rightChild;
  
    while (i < max) {
      index = i;
  
      // Get the left child index 
      // Using the known formula
      leftChild = 2 * i + 1;
      
      // Get the right child index 
      // Using the known formula
      rightChild = leftChild + 1;
  
      // If the left child is not last element 
      // And its value is bigger
      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }
  
      // If the right child is not last element 
      // And its value is bigger
      if (rightChild < max && heap[rightChild] > heap[index]) {
        index = rightChild;
      }
  
      // If none of the above conditions is true
      // Just return
      if (index === i) {
        return;
      }
  
      // Else swap elements
      await swap(heap, i, index,setArray, arrayBars, returnArrayLength);
  
      // Continue by using the swapped index
      i = index;
    }

    return new Promise((resolve)=> resolve())
  }
  
  const swap = async(arr, firstItemIndex, lastItemIndex,setArray,arrayBars, returnArrayLength) => {
    const temp = arr[firstItemIndex];

    if(lastItemIndex >= returnArrayLength()) return;


    const barOneStyle = arrayBars[firstItemIndex].style
    const barTwoStyle = arrayBars[lastItemIndex].style;
    barOneStyle.backgroundColor = SECONDARY_COLOR
    barTwoStyle.backgroundColor = SECONDARY_COLOR
    await waitTime(speed/2)
    barOneStyle.backgroundColor = PRIMARY_COLOR
    barTwoStyle.backgroundColor = PRIMARY_COLOR
  
    // Swap first and last items in the array
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
    setArray([...arr]);

    return new Promise((resolve)=>resolve())
  }
  
  const heapSort = async(arr, returnArrayLength,setArray, arrayBars) => {
    // Build max heap
    await buildMaxHeap(arr,returnArrayLength,setArray,arrayBars);
  
    // Get the index of the last element
    let lastElement = arr.length - 1;
  
    // Continue heap sorting until we have
    // One element left
    while (lastElement > 0) {
      await swap(arr, 0, lastElement,setArray, arrayBars,returnArrayLength);
      await heapify(arr, 0, lastElement, returnArrayLength,setArray, arrayBars);
      lastElement--
    }
    
    // Return sorted array
    return new Promise((resolve)=>resolve());
  }

async function waitTime(interval){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },interval);
    })
}