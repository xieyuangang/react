import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { StackNavigator} from 'react-navigation';
export default class detailPage  extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { state } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>{state.params.user}</Text>
                <Button
                    onPress={() => navigate('Detai2', { user: 'Lucy' })}
                    title="跳转+传参"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});