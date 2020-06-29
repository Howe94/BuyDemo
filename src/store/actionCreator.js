/*
* 在这里定义页面store所执行（dispatch）的方法，然后store会直接匹配reducer定义的方法
* */
//数据添加
export const addItem = (val) => ({
	type: 'add_list',  //这里的type要匹配上reducer
	val: val //这个是数据
});
//删除数据
export const deleteItem = (val) => ({
	type: 'delete_list',  //这里的type要匹配上reducer
	val: val //这个是数据
});
//注册弹框标识 DialogShow
export const DialogShow = (val) => ({
	type: 'dialog_show',  //这里的type要匹配上reducer
	val: val //这个是数据
});
