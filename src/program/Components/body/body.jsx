import React, {Component} from 'react';
import './body.css';
import { connect } from 'react-redux';
import { setArray } from '../../../redux/reducers/array';
import { setNum } from '../../../redux/reducers/searchNum';
import { resetArray } from '../Functions/reset';
import { setBars } from '../../../redux/reducers/arrayBars';
import { setMax } from '../../../redux/reducers/maxValue';
import { randomNum } from '../Functions/randomNum';
import { colorReset } from '../Functions/colorReset';
import Resize from './Bars/Bars';

class Body extends Component {

  componentDidMount() {
    this.props.setArray(resetArray(this.props.maxValue,this.props.arrayBars));
    setTimeout(()=>{
      this.searchNumber();
    },100)
  } 




  searchNumber(){
    this.props.setNum(this.props.array[randomNum(0,this.props.arrayBars-1)]);
  }

  searchNumberCheck(){
    if(this.props.array.length === 0) return;
    if(this.props.searchNumber === 0) return;
    if(!this.props.array.includes(this.props.searchNumber))
    {
      this.searchNumber();
      colorReset(this.props.arrayBars);
    }
    
  }

  render(){
    setTimeout(()=>{
      this.searchNumberCheck();
    },100)
    return      (
      <div className ="hero-body">
        <div className= "container">
          <Resize />
      </div>
     </div>

    );
  }
 }

 const mapStateToProps = (state) => {
   return {
     array: state.array,
     searchNumber: state.searchNumber,
     arrayBars: state.arrayBars,
     maxValue: state.maxValue
   }
 }

const mapDispatchToProps = () => {
  return {
    setArray,
    setNum,
    setBars,
    setMax
  }
}

export default connect(mapStateToProps,mapDispatchToProps())(Body)
