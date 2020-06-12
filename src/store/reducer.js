//默认的对象值
let defaultState = {
    jobList: [
        {
            name: '高志雄',
            job: '前端开发工程师'
        }
    ],
    a:[]

}

// 深度拷贝数据
const deepCopy = content => JSON.parse(JSON.stringify(content));


/*
* 这里的state是拿的上面默认值库，action会进行匹配操作类型
* 这里使用了es6语法 function(state = defaultState , action){}
* */
export default (state = defaultState, action) => {
    if (action.type === "add_list") {
        //拷贝数据，官方不推荐直接修改state，因拷贝出来修改之后再赋值回去
        let newState = deepCopy(state);
        newState.jobList.push(action.val); //添加数据
        return newState
    }
    if (action.type === "delete_list") {
        //拷贝数据，官方不推荐直接修改state，因拷贝出来修改之后再赋值回去
        let newState = deepCopy(state);
        // newState.jobList.splice(action.val,1)
        newState = newState.jobList.filter((item, ind) => {
            // return ind !== action.val;
            
        })
        return newState
    }
    return state;  //最终拿到返回的newState
}
