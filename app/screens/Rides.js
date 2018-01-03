import React, { Component } from 'react';
import { View, StatusBar, FlatList, Alert } from 'react-native';
import { PropTypes } from 'prop-types';
import { Location, Permissions } from 'expo';
// import fetch from 'isomorphic-fetch';

import ridesData from '../data/rides.json';
import { RouteDetails } from '../components/RouteDetails';
import { RidesItem, Separator } from '../components/RidesItem';

export default class Rides extends Component {
  static propTypes = {
    destination: PropTypes.object,
  };

  constructor(props) {
    super(props);

    const { destination } = props;
    this.state = {
      destination,
      locationResult: null,
      rides: {},
    };
  }

  componentWillMount() {
    this.getLocationAsync();
  }

  // TODO: Handle all location permissions use cases
  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        ...this.state,
        locationResult: 'Permission to access location was denied',
      });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({ ...this.state, locationResult: location });

    this.getRides();
  }

  // TODO: fetch ride from Lyft
  getRides = () => {
    // const location = this.state.locationResult;
    // fetch('')
    //   .then(res => res.json())
    //   .then((result) => {
    //     console.log('Lyft API fetch result: ', result);
    //   });
    this.setState({ ...this.state, rides: ridesData.cost_estimates });
  };

  handleRideItemPress(item) {
    Alert.alert(
      `"${item.display_name}" ride clicked!`,
      `Are you sure you want to open the Lyft app to hail this "${item.display_name}" ride?`,
      [
        { text: 'No', onPress: () => console.log('Lyft click canceled'), style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('Hailing Lyft: ', item) },
      ],
    );
  }

  handleRefresh() {
    console.log('refresh the data');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <RouteDetails destination={this.state.destination} />
        <FlatList
          data={this.state.rides}
          renderItem={({ item }) => (
            <RidesItem
              ride={item}
              onPress={() => this.handleRideItemPress(item)}
            />
            )}
          keyExtractor={item => item.ride_type}
          ItemSeparatorComponent={Separator}
          refreshing={false}
          onRefresh={() => this.handleRefresh()}
        />
      </View>
    );
  }
}
