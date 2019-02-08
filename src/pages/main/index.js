import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import NavBar from '../../components/NavBar/index';
import SideBar from '../../components/SideBar/index';
import MapComponent from '../../components/Map/index';
import * as FoursquareAPI from '../../services/foursquareApi';
import '../../styles/global';

const lat = -22.3569919;
const lng = -47.3990678;

class Main extends Component {
  state = {
    sidebarActive: false,
    locations: [],
    query: '',
  };

  componentDidMount() {
    FoursquareAPI.getVenues(lat, lng).then((venues) => {
      if (!venues) return;
      const locations = venues.map(venue => ({
        id: venue.id,
        name: venue.name,
        lat: venue.location.lat,
        lng: venue.location.lng,
        formattedAddress: venue.location.formattedAddress[0],
        isMarkerShown: false,
      }));

      this.setState({ locations });
    });
  }

  toogleSidebar = () => {
    const { sidebarActive } = this.state;
    this.setState({ sidebarActive: !sidebarActive });
  };

  filterLocations = (query) => {
    const { locations } = this.state;
    const match = new RegExp(escapeRegExp(query), 'i');
    return locations.filter(loc => match.test(loc.name));
  };

  updateQuery = (query) => {
    this.setState({ query });
  };

  toogleMarkerLocation = (location) => {
    const { locations } = this.state;

    location.isMarkerShown = !location.isMarkerShown;
    this.setState({ locations });
  };

  render() {
    const { sidebarActive, query } = this.state;
    return (
      <div className="app">
        <Route
          path="/"
          render={() => (
            <div className="app-content">
              <SideBar
                SidebarActive={sidebarActive}
                OnChangeText={this.updateQuery}
                OnClickText={this.toogleMarkerLocation}
                query={query}
                OnToogleSidebar={this.toogleSidebar}
                locations={this.filterLocations(query)}
              />
              <div className="content">
                <NavBar OnToogleSidebar={this.toogleSidebar} />
                <MapComponent
                  lat={lat}
                  lng={lng}
                  locations={this.filterLocations(query)}
                  OnMarkerClick={this.toogleMarkerLocation}
                />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
