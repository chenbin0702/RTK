import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
 class Text extends PureComponent {

  render() {
    const {banner,recommand} = this.props;
    return (
      <div>
        <div>
          轮播图
          <ul>
            {
              banner.map((item,index)=>{
                return(
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>

        <div>
          商品介绍
          <ul>
            {
              recommand.map((item,index)=>{
                return(
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  banner:state.home.banner,
  recommand:state.home.recommand
})
export default connect(mapStateToProps)(Text)
