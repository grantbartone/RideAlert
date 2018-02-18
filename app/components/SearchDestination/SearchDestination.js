import React from 'react';
import { Dimensions } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';

// import styles from './styles';
const WINDOW = Dimensions.get('window');

const SearchDestination = () => {
  const handleChangeText = () => {
    console.log('Search text changed.');
  };

  // return (
  //     <SearchBar
  //       containerStyle={styles.containerStyle}
  //       inputStyle={styles.inputStyle}
  //       lightTheme
  //       clearIcon
  //       onChangeText={() => handleChangeText()}
  //       placeholder="Ride Destination"
  //       autoCorrect={false}
  //       autoCapitalize="none"
  //       returnKeyType="search"
  //     />
  // );

  return (
    <GooglePlacesAutocomplete
      placeholder="Ride Destination"
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType="search"
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data);
        console.log(details);
      }}
      getDefaultValue={() =>
        '' // text input default value
      }
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyCjH7PsN2ebHH2-cxHHJu9xHU_-nCPV9aY',
        language: 'en', // language of the results
        // types: '(cities)', // default: 'geocode'
      }}
      styles={{
        container: {
          width: '95%',
        },
        listView: {
          // flex: 1,
          backgroundColor: 'blue',
          // position: 'absolute',
          // width: WINDOW.width,
          // height: WINDOW.height,
        },
        touchableHighlight: {
          backgroundColor: 'orange',
        },
        textInputContainer: {
          backgroundColor: '#FFF',
          borderRadius: 5,
          marginTop: 25,
          paddingTop: 0,
          paddingBottom: 0,
        },
        textInput: {
          height: 30,
          margin: 8,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 10,
          paddingRight: 30,
          fontSize: 16,
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
          backgroundColor: 'black',
        },
      }}
      currentLocation // Will add a 'Current location' button at the top of the predefined places list
      /* currentLocationLabel="Current location" */
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food',
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_3',
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      /* predefinedPlaces={[homePlace, workPlace]} */
      debounce={200}
      autoCorrect={false}
    />
  );
};

export default SearchDestination;
