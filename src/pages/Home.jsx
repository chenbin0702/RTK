import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import {getData} from '../store/modules/home.js'
 class Home extends PureComponent {
 
  render() {
    let {counter}=this.props
    return (
      <div>Home {counter}</div>
    )
  }
  componentDidMount()
  {
    this.props.getDataList()

  }
}

const mapStateToProps=(state)=>({
  counter:state.counter.counter
})
const mapDispatchToProps= (dispatch) =>({
  getDataList()
  {
    dispatch(getData())
  },

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)