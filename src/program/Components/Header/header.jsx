import React, { Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { setArray, setSortedStatus, setSearchNumber } from '../../../redux/reducers/arrayInfo';
import { incrementCount, resetCount} from '../../../redux/reducers/count';
import { getBinarySearchAnimations } from '../../Algorithms/binary.js';
import {getLinearSearchAnimations} from '../../Algorithms/linear.js'
import {getJumpSearchAnimations} from '../../Algorithms/jump.js';
import {getFibonacciSearchAnimations} from '../../Algorithms/fibonacci.js';
import { getInterpolationSearchAnimations } from '../../Algorithms/interpolation';
import {searchAnimation} from '../Functions/animations.js'
import { colorReset } from '../Functions/colorReset';
import { resetArray } from '../Functions/reset';
import { randomNum } from '../Functions/randomNum';
import { connect } from 'react-redux';
import ReverseSlider from './slider/slider';
import { speed } from './slider/slider';

let buttonDisabled = false; 


class Header extends Component {

  buttonChange(length){
    buttonDisabled = true; 
    buttonUpdate(length).then((change)=>{
      buttonDisabled = change;
    })
  }

  linearSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayInfo.arrayLength-1);
    const animations = getLinearSearchAnimations(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber)
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
    this.buttonChange(animations.length);
  }
  
  fibonacciSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayInfo.arrayLength-1);
    this.sortArray();
    let animations = getFibonacciSearchAnimations(arraySort(this.props.arrayInfo.array),this.props.arrayInfo.searchNumber)
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
    this.buttonChange(animations.length);
  }

  jumpSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayInfo.arrayLength-1);
    this.sortArray();
    let animations = getJumpSearchAnimations(arraySort(this.props.arrayInfo.array), this.props.arrayInfo.searchNumber)
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
    this.buttonChange(animations.length);
  }

  binarySearch(){
    this.props.resetCount();
    colorReset(this.props.arrayInfo.arrayLength-1);
    this.sortArray();
    let animations  = getBinarySearchAnimations(arraySort(this.props.arrayInfo.array), this.props.arrayInfo.searchNumber)
    searchAnimation(animations, speed);
    this.displayComparisons(animations.length)
    this.buttonChange(animations.length);
  }
  
  interpolationSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayInfo.arrayLength-1);
    this.sortArray();
    let animations = getInterpolationSearchAnimations(arraySort(this.props.arrayInfo.array), this.props.arrayInfo.searchNumber);
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
    this.buttonChange(animations.length);
  }
  
  displayComparisons(animations){
    for(let i =0;i<animations;i++){
      setTimeout(()=>{
        setTimeout(()=>{
          this.props.incrementCount();
        },speed)
      },i*speed)
    }
  }



  reset(){
    colorReset(this.props.arrayInfo.arrayLength-1);
    this.props.setArray(resetArray(this.props.arrayInfo.height,this.props.arrayInfo.arrayLength));
    this.props.setSortedStatus(false);
    setTimeout(()=>{
      this.props.setSearchNumber(this.props.arrayInfo.array[randomNum(0,this.props.arrayInfo.arrayLength-1)]);
    })
  }

  refreshSearch(){
    this.props.setSearchNumber(this.props.arrayInfo.array[randomNum(0,this.props.arrayInfo.arrayLength-1)]);
  }

  sortArray(){
    this.props.setArray(arraySort(this.props.arrayInfo.array));
    this.props.setSortedStatus(true);
  }


  render(){
    let COUNT = this.props.counter.comparisonCount;

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body2" align="left">
            <Button color="inherit" disabled = {buttonDisabled} onClick = {()=> this.reset()}>refresh array</Button>
            <Button color = "inherit" disabled = {buttonDisabled} onClick = {()=> this.sortArray()}> sort array</Button>
            </Typography>
            <Typography sx={{fontSize: 14, display: {xs: 'none', md:'block'}}}>
            COMPARISONS: {COUNT}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}  textAlign = "cente" align="center">
            <Button color="inherit" disabled = {buttonDisabled} onClick = {()=> this.linearSearch()}>linear</Button>
            <Button color="inherit" disabled = {buttonDisabled} onClick = {()=> this.fibonacciSearch()}>fibonacci</Button>
            <Button color="inherit" disabled = {buttonDisabled}  onClick = {()=> this.binarySearch()}>binary</Button>
            <Button color="inherit" disabled = {buttonDisabled} onClick = {()=> this.jumpSearch()}>jump</Button>
            <Button color="inherit" disabled = {buttonDisabled} onClick = {()=> this.interpolationSearch()}>interpolation</Button>
            </Typography>
            <ReverseSlider />
            <Typography variant ="caption" align="right">
            <Button color="inherit" disabled = {buttonDisabled} onClick = {()=> this.refreshSearch()}>refresh search number</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    arrayInfo: state.arrayInfo,
  }
}

const mapDispatchToProps = () => {
 return {
   setArray,
   setSearchNumber,
   setSortedStatus,
   incrementCount,
   resetCount,
 }
}

export default connect(mapStateToProps,mapDispatchToProps())(Header)

function  arraySort(array) {

  array = array.slice().sort((a, b) => a-b)
  return array;

}



async function buttonWait(length){
  return new Promise((resolve,reject)=> {
    setTimeout(function(){
      resolve()
    },speed*length)
  })
}

async function buttonUpdate(length){
  await buttonWait(length);
  return false; 
}
