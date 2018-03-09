import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
} from 'react-native';
Dimensions = require('Dimensions');//获取屏幕的宽高
width = Dimensions.get('window').width;//屏幕的宽度
height = Dimensions.get('window').height;//屏幕的高度

export default class JsonXXX extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((row1, row2) => row1 !== row2)
            }),
            load: false
        }
    }
    render() {
        /**
         * 因为数据时异步加载， 用load判断是否正在加载 如果加载完毕重新刷新界面改变load值
         */
        if (!this.state.load) {
            return <Text>加载中...</Text>
        }
        return (this.renderView(this.state.dataSource))
    }
    renderView() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
    renderRow(rowData) {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: rowData.url }}
                       style={{ width: width/3, height: height / 4, marginTop: 5 }}
                />
                <Text>{rowData.publishedAt}</Text>
                <Text>{rowData.type}</Text>
            </View>
        )
    }
    componentDidMount() {
        this.getDataFromFetch();
    }
    getDataFromFetch() {
        fetch('http://gank.io/api/search/query/listview/category/福利/count/10/page/1')//请求地址
            .then((response) => response.json())//取数据
            .then((responseText) => {//处理数据
                //通过setState()方法重新渲染界面
                this.setState({
                    //改变加载ListView
                    load: true,
                    //设置数据源刷新界面
                    dataSource: this.state.dataSource.cloneWithRows(responseText.results),
                })

            })
            .catch((error) => {
                console.warn(error);
            }).done();

      /*  fetch('https://mywebsite.com/endpoint/', {//Post请求
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })

        })*/
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