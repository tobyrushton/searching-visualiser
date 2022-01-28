import React, { Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { setArray, setSortedStatus, setSearchNumber } from '../../../redux/reducers/arrayInfo';
import { incrementCount, resetCount} from '../../../redux/reducers/count';
import { getBinarySearchAnimations } from '../../Algorithms/search/binary.js';
import {getLinearSearchAnimations} from '../../Algorithms/search/linear.js'
import {getJumpSearchAnimations} from '../../Algorithms/search/jump.js';
import {getFibonacciSearchAnimations} from '../../Algorithms/search/fibonacci.js';
import { getInterpolationSearchAnimations } from '../../Algorithms/search/interpolation';
import { completeMergeSort } from '../../Algorithms/sort/merge/mergeSort';
import {searchAnimation} from '../Functions/animations.js'
import { colorReset } from '../Functions/colorReset';
import { resetArray } from '../Functions/reset';
import { randomNum } from '../Functions/randomNum';
import { setRunning } from '../../../redux/reducers/running';
import { connect } from 'react-redux';
import ReverseSlider from './slider/slider';
import {completeBubbleSort } from '../../Algorithms/sort/bubble/bubbleSort.js';
import {completeQuickSort} from '../../Algorithms/sort/quick/quickSort'
import {completeHeapSort} from '../../Algorithms/sort/heap/heapSort'


class Header extends Component {

  constructor(props){
    super(props);
      this.state = {
        mode: 'none',
        modeSearch: 'none',
        modeSort: 'none',
        buttonDisabled: false,
    };
  }


  componentWillUnmount(){
    this.setState({modeSort: 'none'})
    this.setState({modeSearch: 'none'})
    this.props.setSortedStatus(false);
    this.props.resetCount();
  }

  async searchAnimation(type){
    let animations;
    if(type >1 && type <6) this.sortArray();
    await waitTime(200); //delay to allow the sorted array to be set so that the animations are able to take use the sorted array instead of unsorted.
    switch(type){
      case 1:
        animations = getLinearSearchAnimations(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber)
        break;
      case 2:
        animations = getFibonacciSearchAnimations(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber);
        break;
      case 3:
        animations = getBinarySearchAnimations(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber);
        break;
      case 4:
        animations = getJumpSearchAnimations(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber);
        break;
      case 5:
        console.log(1)
        animations = getInterpolationSearchAnimations(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber);
        console.log(animations)
        break;
      default:
        break;
    }
    colorReset()
    this.props.resetCount();
    this.setState({buttonDisabled : true});
    searchAnimation(animations,this.props.setRunning,this.props.incrementCount,this.returnArrayLength).then((res)=>{
      if(res) return
      this.afterAnimation();
    })
  }

  afterAnimation(){
    this.setState({buttonDisabled : false});
    if(this.state.mode === 'sort') this.props.setSortedStatus(true);
  }

  beforeAnimation(){
    this.setState({buttonDisabled: true});
    colorReset();
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


  sortAnimation(type){
    switch(type){
      case 1:
        this.beforeAnimation();
        completeMergeSort([...this.props.arrayInfo.array],this.props.setArray,this.returnArrayLength,this.props.setRunning)
        .then((res)=>{
          if(res) return
          this.afterAnimation()
        })
        break;
      
      case 2:
        this.beforeAnimation();
        completeBubbleSort([...this.props.arrayInfo.array],this.props.setArray,this.returnArrayLength,this.props.setRunning)
        .then((res)=>{
          if(res) return
          this.afterAnimation();
        })
        break;
      
      case 3:
        this.beforeAnimation();
        completeQuickSort([...this.props.arrayInfo.array],this.props.setRunning,this.returnArrayLength,this.props.setArray)
        .then((res)=>{
          if(res) return
          this.afterAnimation();
        })
        break;

      case 4:
        this.beforeAnimation()
        completeHeapSort([...this.props.arrayInfo.array],this.props.setRunning,this.returnArrayLength,this.props.setArray)
        .then((res)=>{
          if(res) return
          this.afterAnimation()
        })
        break
      
      default:
        break;

    }
  }

  modeChoice(mode,change){
    switch(mode){
      case 1:
        this.setState({mode: 'search',modeSearch:'inline-block'})
        break;
      case 2:
        this.setState({mode:'sort',modeSort:'inline-block'})
        break;
      default:
        break
    }
  }

  changeMode(){
    if(this.state.mode === 'sort') this.setState({mode:'search',modeSearch:'inline-block',modeSort:'none'})
    else this.setState({mode:'sort', modeSearch: 'none', modeSort:'inline-block'})
  }

  returnArrayLength = () => this.props.arrayInfo.arrayLength


  render(){
    let COUNT = this.props.counter.comparisonCount;

    let sliderDisplay = false;
    let componentsDisplay = 'none';
    let initialButtons = 'inline-block'
    if(this.state.mode === 'search' || this.state.mode === 'sort'){
      sliderDisplay = true;
      componentsDisplay = 'inline-block';
      initialButtons = 'none';
    } 

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="left">
            <Button color = "inherit" style ={{display:componentsDisplay}} onClick={()=>{this.changeMode()}}> {this.state.mode} </Button>
            <Button color="inherit" style={{display: componentsDisplay}} disabled = {this.state.buttonDisabled} onClick = {()=> this.reset()}>refresh array</Button>
            <Button color = "inherit" style={{display: this.state.modeSearch}} disabled = {this.state.buttonDisabled} onClick = {()=> this.sortArray()}> sort array</Button>
            </Typography>
            <Typography style={{display: this.state.modeSearch}} sx={{fontSize: 14, display: {xs: 'none', md:'block'}}}>
            COMPARISONS: {COUNT}
            </Typography>
            <Typography variant="h6"  style={{display: this.state.modeSearch}} component="div" sx={{ flexGrow: 1}}  textAlign = "center" align="center">
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.searchAnimation(1)}>linear</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.searchAnimation(2)}>fibonacci</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled}  onClick = {()=> this.searchAnimation(3)}>binary</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.searchAnimation(4)}>jump</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.searchAnimation(5)}>interpolation</Button>
            </Typography>
            <Typography variant="h6" style={{display:initialButtons}} component="div" sx={{flexGrow:1}} textAlign = "center" align="center">
              <Button color="inherit" onClick ={()=> this.modeChoice(1)}>Search</Button>
              <Button color="inherit" onClick = {()=>this.modeChoice(2)}>Sort</Button>
            </Typography>
            <Typography variant="h6" style={{display: this.state.modeSort}} component="div" sx={{ flexGrow: 1}}  textAlign = "center" align="center">
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.sortAnimation(1) }>merge sort</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.sortAnimation(2) }>bubble sort</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.sortAnimation(3) }>quick sort</Button>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.sortAnimation(4) }>heap sort</Button>
            </Typography>
            <ReverseSlider display={sliderDisplay}/>
            <Typography variant ="caption" align="right" style={{display: this.state.modeSearch}}>
            <Button color="inherit" disabled = {this.state.buttonDisabled} onClick = {()=> this.refreshSearch()}>refresh search number</Button>
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
    headerInfo: state.headerInfo,
  }
}

const mapDispatchToProps = () => {
 return {
   setArray,
   setSearchNumber,
   setSortedStatus,
   incrementCount,
   resetCount,
   setRunning,
 }
}

export default connect(mapStateToProps,mapDispatchToProps())(Header)

function arraySort(array) {

  array = array.slice().sort((a, b) => a-b)
  return array;

}

async function waitTime(interval){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },interval)
  })
}
