import * as React  from 'react'
import * as ReactDom  from 'react-dom'
import App from './app'
import { store } from 'store/index';
import { Provider } from 'react-redux';
import Loading from '@cpt/loading'
// import { Router, Route, Link } from 'react-router'
const render=()=>{
    ReactDom.render(
        <Provider store= {store}>
        <App/>
        <Loading/>
        </Provider>,
        document.querySelector('#app') as HTMLElement
    )
}
render()


