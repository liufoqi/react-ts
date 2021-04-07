import * as React  from 'react'
// import {hot} from  'react-hot-loader'
import routers from  '../router'
import {HashRouter as Router,Switch,Route,Link } from 'react-router-dom'
/** 
* @hot 热更新的模块
*/
interface RouteType{
    path:string,
    component:any,
  }
export default function (props:any){
    return <Router>
    <Switch> 
    {
      routers.map((item:RouteType)=>{
        return <Route  key={item.path+'router'} exact path={item.path}  component={item.component}></Route>
      })
    }
    </Switch>
</Router>

}