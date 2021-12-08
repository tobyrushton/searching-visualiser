import React, {useState, useEffect} from "react";
import { setBars } from "../../../../redux/reducers/arrayBars";
import { setArray } from '../../../../redux/reducers/array'
import { useDispatch, useSelector } from "react-redux";
import { randomNum } from "../../Functions/randomNum";
import '../body.css'

const PRIMARY_COLOR = 'black';


function useWindowSize(){
  const [size,setSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    };
    window.addEventListener('resize', handleResize)
  }, []);
  return size; 
}

function barsCalc(width){
  const arrayLength = Math.floor(width/4.15);
  return arrayLength;
}

function maxCalc(height){
  var max = Math.floor(height/1.25);
  if (max>730)max = 730;
  return max;
}

function arrayResize(length,array,max,sorted,heightUpdate){
    var auxArray = []; 
    const start = array.length+1; 
    if(array.length === 0)return array;
    if(length>array.length){
        auxArray = [...array];
        for(let i =start-1;i<length-1;i++){
          const temp = randomNum(5,max);
          auxArray.push([temp]);
        }
    }else{
        for(let i = 0;i<length;i++){
          auxArray.push(array[i]);
        }
    }

    if(sorted === true){
      return arraySort(auxArray);
    } else return auxArray;
}

function Resize(){

  const realBars = useSelector((state)=>state.arrayBars);
  const dispatch = useDispatch();
  const [height,width] = useWindowSize();
  const max = maxCalc(height);
  const bars = barsCalc(width);
  var update = false;
  const sorted = useSelector((state)=> state.sortedStatus);

  useEffect(()=>{
    if(realBars !== bars) dispatch(setBars(bars));
  })
  const array = arrayResize(bars,useSelector((state)=> state.array),max,sorted);

  if(array.length !== useSelector((state)=> state.array.length)){
    update = true;
  }else{update = false}


  useEffect(()=>{
    if(update === true){
      dispatch(setArray(array));
    }
  })
  return(
      <>
      {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}>&nbsp;</div>
            ))}
      </>
  )
}


export default Resize

function  arraySort(array) {

  array = array.slice().sort((a, b) => a-b)
  return array;

}