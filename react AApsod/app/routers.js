
import {StackNavigator} from "react-navigation";
import MainPage from './mainPage';
import DetailPagDe from './details/detailPage'
import DetailPagDe2 from './TiaoZhuan'

const routers = StackNavigator({
    Main: {
        screen: MainPage,
    },
    Detail: {
        screen: DetailPagDe,
    },
    Detai2: {
        screen: DetailPagDe2,
    }
});
module.exports = routers;