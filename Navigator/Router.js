import { createStackNavigator,createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from './Pages/Home/index';
import User from './Pages/User/index';
import Profile from './Pages/Profile/index';
import PostDetail from './Pages/Home/PostDetail';
import UserDetail from './Pages/User/UserDetail';
import App from '../App';


const PostTab = createStackNavigator({
  Post: { screen: Home },
});

const TodoStore = createStackNavigator({
  App: { screen: App },
});

const UserTab = createStackNavigator({
  User: { screen: User },
});

const ProfileTab = createStackNavigator({
  Profile: { screen: Profile },
});

const TabBar = createBottomTabNavigator({
  PostTab,
  UserTab,
  ProfileTab,
  TodoStore
},{
    tabBarOptions: {
      activeTinColor: '#e91e63',
      labelStyle: {
        fontSize: 20,
      },
      style: {
        backgroundColor: '#fff',
      },
    }
  });

const AppNavigator = createStackNavigator({
  TabBar: {screen: TabBar,navigationOptions:{header:null}},
  PostDetail: { screen: PostDetail },
  UserDetail: { screen: UserDetail },
  TodoStoreDetail: { screen: App}
});

export default createAppContainer(AppNavigator);