import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/Main';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default Routes;
