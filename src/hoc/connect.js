import store from '../store'
import {PureComponent} from 'react'
export default function connect(mapStateToProps,mapDispatchToProps)
{
   return function(WapperComponent)
   {
    class NewComponnent extends PureComponent
    {
      constructor()
      {
        super()
        this.state=mapStateToProps(store.getState())
      }
      componentDidMount()
      {
       this.unsubscribe= store.subscribe(()=>{
          this.setState(mapStateToProps(store.getState()))
        })
      }
      componentWillUnmount()
      {
        this.unsubscribe()
      }
     render(){
      const stateObj=mapStateToProps(store.getState())
      const dispatchObj=mapDispatchToProps(store.dispatch)
      return <WapperComponent {...this.props} {...stateObj} {...dispatchObj}></WapperComponent>
     }
    }
    return NewComponnent
   }
}