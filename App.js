import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons'

import Home from "./src/Home";
import Verification from "./src/Verification";
import Register from "./src/Register";
import School from "./src/School";
import Image from "./src/Image";
import Class from "./src/Class";
import ExamCorner from "./src/Drawer/ExamCorner";
import Subscription from "./src/Drawer/Subscription";
import DrawerContent from "./src/Drawer/DrawerContent";
import Biology from "./src/Biology";
import SubjectDetails from "./src/SubjectDetails";
import Recent from "./src/bottomTab/Recent";
import Profile from "./src/bottomTab/Profile";
import Chatbar from "./src/Chatbar";

// import BottomTabNavigator from "./src/bottomTab/BottomTabNavigator";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="School"
        component={School}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Image"
        component={Image}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Class"
        component={Class}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Biology"
        component={Biology}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="SubjectDetails"
        component={SubjectDetails}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Drawer"
        component={MyDrawer} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Chatbar"
        component={Chatbar}
        options={{
          headerShown: false
        }} />

      {/* <Stack.Screen
        name="Bottomtab"
        component={MyBottomTab}
        options={{
          headerShown: false
        }} /> */}

    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name='ExamCorner'
        component={ExamCorner}
        options={{
          headerShadowVisible: false
        }} />

      <Drawer.Screen
        name='Subscription'
        component={Subscription}
        options={{
          headerShadowVisible: false
        }} />


    </Drawer.Navigator>
  )
}

// function MyBottomTab() {
//   return (
//     <BottomTab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: { fontSize: 12 },
//         tabBarItemStyle: { width: 100 },
//         tabBarStyle: { backgroundColor: 'white' }
//       }}>


//       <BottomTab.Screen
//         name="Recent"
//         component={Recent}
//         options={{
//           tabBarActiveTintColor: 'blue',
//           tabBarInactiveTintColor: 'white',
//           tabBarIcon: ({ focused }) =>
//             focused ? <Icon name="play-arrow" size={20} color="#14be75" /> : <Icon name="play-arrow" size={20} color="black" />
//         }} />

//     </BottomTab.Navigator>
//   )

// }

export default function App() {

  return (
    <NavigationContainer>
      <Mystack />

    </NavigationContainer>
  )
}

