/**
 * Created by shunq-wang on 2017/1/5.
 */
/**
 * Created by zhang on 2016/8/22.
 * 状态收集类
 */
'use strict';
import { combineReducers } from 'redux';
import IndexReducer from './IndexReducer';
const RootReducer = combineReducers({
    IndexReducer,
});
export default RootReducer;