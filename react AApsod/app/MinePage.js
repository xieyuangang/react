import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
export default class MinePage extends Component {

    static  navigationOptions={
        title: '我的',
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
        <Image
        style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
        />
        ),
        headerTitleStyle: {
            alignSelf:'center'
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Detail', { user: 'Lucy' })}
                    title="跳转+传参"
                />
                <Button
                    onPress={() => navigate('Detai2', { user: 'ga' })}
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
    },
    icon:{
        width:20,
        height:20
    }
});