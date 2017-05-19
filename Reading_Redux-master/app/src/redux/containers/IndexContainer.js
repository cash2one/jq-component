/**
 * Created by shunq-wang on 2017/1/5.
 */
import React from 'react';
import { connect } from 'react-redux';

import Index from '../../pages/Index';
import {bindActionCreators} from 'redux';
import * as IndexAction from '../actions/IndexAction';
class IndexContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Index
                {...this.props}
            />
        );
    }
}
export default connect(state => ({
        state: state.IndexReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(IndexAction, dispatch)
    })
)(IndexContainer);

