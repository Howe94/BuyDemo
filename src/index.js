import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick'
import Route from './router'
import {Provider} from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import store from './store'
import * as serviceWorker from './serviceWorker';

/**
 * fastclick:移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick
 * 参阅： https://www.jianshu.com/p/150c305f6930
 * 
 * react-redux：
 * connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
 * React-Redux 提供Provider组件，可以让容器组件拿到state
 * 参阅：https://www.jianshu.com/p/ad7eddb23d66
 * 
 * react-hot-loader：因为 hot-loader 并不会刷新网页，而仅仅是替换你修改的部分
 */



FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}
render(Route)
serviceWorker.unregister();
