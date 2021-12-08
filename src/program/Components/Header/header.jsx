import React, { Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { setArray } from '../../../redux/reducers/array';
import { setNum } from '../../../redux/reducers/searchNum';
import { setMax } from '../../../redux/reducers/maxValue';
import { setBars } from '../../../redux/reducers/arrayBars';
import { setSortedStatus } from '../../../redux/reducers/sortedStatus';
import { incrementCount, resetCount} from '../../../redux/reducers/count';
import { getBinarySearchAnimations } from '../../Algorithms/binary.js';
import {getLinearSearchAnimations} from '../../Algorithms/linear.js'
import {getJumpSearchAnimations} from '../../Algorithms/jump.js';
import {getFibonacciSearchAnimations} from '../../Algorithms/fibonacci.js';
import {searchAnimation} from '../Functions/animations.js'
import { colorReset } from '../Functions/colorReset';
import { resetArray } from '../Functions/reset';
import { randomNum } from '../Functions/randomNum';
import { connect } from 'react-redux';
import ReverseSlider from './slider/slider';
import { speed } from './slider/slider';


class Header extends Component {

  linearSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayBars-1);
    const animations = getLinearSearchAnimations(this.props.array,this.props.searchNumber)
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
  }
  
  fibonacciSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayBars-1);
    this.sortArray();
    let animations = getFibonacciSearchAnimations(arraySort(this.props.array),this.props.searchNumber)
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
  }

  jumpSearch(){
    this.props.resetCount();
    colorReset(this.props.arrayBars-1);
    this.sortArray();
    let animations = getJumpSearchAnimations(arraySort(this.props.array), this.props.searchNumber)
    searchAnimation(animations,speed);
    this.displayComparisons(animations.length)
  }

  binarySearch(){
    this.props.resetCount();
    colorReset(this.props.arrayBars-1);
    this.sortArray();
    let animations  = getBinarySearchAnimations(arraySort(this.props.array), this.props.searchNumber)
    searchAnimation(animations, speed);
    this.displayComparisons(animations.length)
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
    colorReset(this.props.arrayBars-1);
    this.props.setArray(resetArray(this.props.maxValue,this.props.arrayBars));
    this.props.setSortedStatus(false);
    setTimeout(()=>{
      this.props.setNum(this.props.array[randomNum(0,this.props.arrayBars-1)]);
    })
  }


  refreshSearch(){
    this.props.setNum(this.props.array[randomNum(0,this.props.arrayBars-1)]);
  }

  sortArray(){
    this.props.setArray(arraySort(this.props.array));
    this.props.setSortedStatus(true);
  }


  render(){
    let COUNT = this.props.counter.comparisonCount;
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body2" align="left">
            <Button color="inherit" onClick = {()=> this.reset()}>refresh array</Button>
            <Button color = "inherit" onClick = {()=> this.sortArray()}> sort array</Button>
            COMPARISONS: {COUNT}
            </Typography>
            <Typography />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}  textAlign = "cente" align="center">
            <Button color="inherit" onClick = {()=> this.linearSearch()}>linear</Button>
            <Button color="inherit" onClick = {()=> this.fibonacciSearch()}>fibonacci</Button>
            <Button color="inherit" onClick = {()=> this.binarySearch()}>binary</Button>
            <Button color="inherit" onClick = {()=> this.jumpSearch()}>jump</Button>
            </Typography>
            <ReverseSlider />
            <Typography variant ="caption" align="right">
            <Button color="inherit" onClick = {()=> this.refreshSearch()}>refresh search number</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    array: state.array,
    searchNumber: state.searchNumber,
    maxValue: state.maxValue,
    arrayBars: state.arrayBars,
    sortedStatus: state.sortedStatus,
    counter: state.counter,
  }
}

const mapDispatchToProps = () => {
 return {
   setArray,
   setNum,
   setBars,
   setMax,
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