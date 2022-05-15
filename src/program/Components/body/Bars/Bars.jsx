import React, {useState, useEffect} from "react";
import { setLength, setArray } from "../../../../redux/reducers/arrayInfo";
import { useDispatch, useSelector } from "react-redux";
import { randomNum } from "../../Functions/randomNum";
import { colours } from '../../../../colourScheme'
import '../body.css'

function useWindowSize(){
  const [size,setSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
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


function arrayResize(length,array,max,sorted,running){
  if (running){
    if(length < array.length){
      let auxArray = [];
      for(let i =0;i<length;i++) auxArray.push(array[i]);
      return auxArray;
    }
    return array;
  }
    let auxArray = []; 
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

  const realBars = useSelector((state)=>state.arrayInfo.arrayLength);
  const dispatch = useDispatch();
  const width = useWindowSize();
  const max = useSelector((state)=> state.arrayInfo.height);
  const bars = barsCalc(width);
  let update = false;
  const sorted = useSelector((state)=> state.arrayInfo.sorted);

  const running = useSelector((state)=> state.running.running);

  const array = arrayResize(bars,useSelector((state)=> state.arrayInfo.array),max,sorted,running)


  if(array.length !== useSelector((state)=> state.arrayInfo.array.length)) update = true;
  else update = false
  if(running) update = false; 

  useEffect(()=>{
    if(realBars !== bars ) dispatch(setLength(bars));
    if(update) dispatch(setArray(array))
  })
  return(
      <>
      {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: colours.primary,
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