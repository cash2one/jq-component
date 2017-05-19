/**
 * Created by shunq-wang on 2017/1/5.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /**
         *state,add,del是哪里的？
         **/
        const {state}=this.props;
        const {add,del}=this.props.actions;
        return (
            <View style={styles.container}>
                <Text>Redux-加法运算</Text>
                <View style={styles.item}>
                    <Text>合 计:</Text>
                    <Text style={{color: 'red'}}>{state.sum}</Text>
                </View>
                <View style={[styles.item, {top: 10}]}>
                    <TouchableWithoutFeedback onPress={add} >
                        <View style={styles.touch}>
                            <Text style={styles.but}>+</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={del}>
                        <View style={styles.touch}>
                            <Text style={styles.but}>-</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row'
    },
    but: {
        fontSize: 14,
    },
    touch: {
        width: 50,
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#888586',
        marginRight: 10,
        marginLeft: 10,
        borderColor: '#888586',
        justifyContent:'center',
        alignItems:'center'
    }


});
export default Index;
