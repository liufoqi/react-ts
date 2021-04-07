
import * as React from 'react'
// import Loading from '@cpt/loading'
// import Loadable from 'react-loadable'
interface RouteType{
  path:string,
  component:any,
}
const router:Array<RouteType>=[
  {
    path:'/',
    component:()=>import('@vw/main'),
  },
  {
    path:'/home',
    component:()=>import('@vw/home'),
  },
]
export default router