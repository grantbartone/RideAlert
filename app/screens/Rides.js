import React from 'react';
import { View, StatusBar, FlatList, Alert } from 'react-native';

import rides from '../data/rides.json';
import { RouteDetails } from '../components/RouteDetails';
import { RidesItem, Separator } from '../components/RidesItem';

const Rides = () => {
  const handleRideItemPress = (item) => {
    Alert.alert(
      `"${item.display_name}" ride clicked!`,
      `Are you sure you want to open the Lyft app to hail this "${item.display_name}" ride?`,
      [
        { text: 'No', onPress: () => console.log('Lyft click canceled'), style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('Hailing Lyft: ', item) },
      ],
    );
  };

  const handleRefresh = () => {
    console.log('refresh the data');
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <RouteDetails destination={rides.destination} />
      <FlatList
        data={rides.cost_estimates}
        renderItem={({ item }) => (
          <RidesItem
            ride={item}
            onPress={() => handleRideItemPress(item)}
          />
        )}
        keyExtractor={item => item.ride_type}
        ItemSeparatorComponent={Separator}
        refreshing={false}
        onRefresh={() => handleRefresh()}
      />
    </View>
  );
};

export default Rides;
