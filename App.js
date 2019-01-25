import React, { Component } from 'react';
import { Fetch } from 'react-data-fetching'
import { View, Text, StyleSheet, Alert } from 'react-native';

// access_token = '54439341.688ae00.74302597d11742d8aa26077448a8fc68'

state = {
    loaded: false,
    data: null,
    comments: [],
}

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null, 
     };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {

    var SampleNameArray = [ "Killin", "it", "😍"];

    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Fetch
              url="https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400"
            >
              {({ data }) => (<Text>{data.results.sunrise}</Text>)}
            </Fetch>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {SampleNameArray.map((item, key)=>(
         <Text key={key}> { item } </Text>)
         )}
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );

  }
}

export default GeolocationExample;