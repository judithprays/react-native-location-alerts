import React, { Component } from 'react';
import { Fetch } from 'react-data-fetching'
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Moment } from 'react-moment';
import 'moment-timezone';

// access_token = '54439341.688ae00.74302597d11742d8aa26077448a8fc68'

state = {
    loaded: false,
    data: null,
    comments: [],
}

import moment from 'moment';
var now = moment().format();

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      data: null,
      error: null, 
     };
  }

  componentDidMount() {
    fetch('https://contact.plaid.com/jobs', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": "Judith Prays",
        "email": "judithprays@gmail.com",
        "resume": "https://www.linkedin.com/in/judith-prays-1b361631/",
        "github": "github.com/judithprays", 
        "twitter": "@judithprays", 
        "website": "http://www.duhstudio.com/judith.html" }),
    });



    // this.watchId = navigator.geolocation.watchPosition(
    //   (position) => {
    //     this.setState({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //       error: null,
    //     });
    //   },
    //   (error) => this.setState({ error: error.message }),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    // );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {

    var SampleNameArray = [ "Killin", "it"];

    // Get Time Difference between local time and UTC
    var timedifference = new Date().getTimezoneOffset();

    // Convert to hours
    timedifference = timedifference/60;


    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Fetch
              url="https://api.sunrise-sunset.org/json?lat=34.0521145&lng=-118.3811206"
            >
              {({ data }) => (<Text>{data.results.sunset}</Text>)}
            </Fetch>
            <Text>{now}</Text>
            <Text>{timedifference}</Text>
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