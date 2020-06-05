import React, { Component } from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
    return (
      <div>
        <button onClick={() => {
          props.changeText('按钮被点击了');
        }}
        >
          {props.btnText}
        </button>
      </div>
    );
  };
  // 映射store.getState()的数据到PageMain
  const mapStateToProps = (state) => {
    return {
      btnText: state.pageMain.btnText,
    };
  };
  // 映射使用了store.dispatch的函数到 PageMain
  const mapDispatchToProps = (dispatch) => {
    return {
      changeText: (text) => {
        dispatch(changeBtnText(text));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
