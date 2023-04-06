import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {addNumber,subNumber} from '../store/modules/counter'
class Profles extends PureComponent {
  render() {
    const {counter} = this.props;
    return (
      <div>Profles :{counter}
      <div>
      <button onClick={()=>this.addNumber(1)}>+1</button>
      <button onClick={()=>this.addNumber(2)}>+2</button>
      <button onClick={()=>this.addNumber(3)}>+3</button>
      </div>
      <div>
      <button onClick={()=>this.subNumber(1)}>-1</button>
      <button onClick={()=>this.subNumber(2)}>-2</button>
      <button onClick={()=>this.subNumber(3)}>-3</button>
      </div>
      </div>
    )
  }
  addNumber(num)
  {
   this.props.addNumber(num)
  }
  subNumber(num)
  {
    this.props.subNumber(num)
  }
}
const mapStateToProps=(state)=>({
  counter:state.counter.counter
})
const mapDispatchToProps=(dispatch)=>({
  addNumber(num)
  {
    dispatch(addNumber(num))
  },
  subNumber(num)
  {
    dispatch(subNumber(num))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Profles)
