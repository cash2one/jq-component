/**
 * Created by shunq-wang on 2017/1/5.
 */
import * as types from '../constant/ActionTypes';
//数量加
export function add() {
    return {
        type: types.INDEX_ADD
    }
}

//数量减
export function del() {
    return {
        type: types.INDEX_DEL
    }
}

//初始化加数【redux传参方式】
export function init(param) {
    return {
        type: types.INDEX_INIT,
        param
    }
}