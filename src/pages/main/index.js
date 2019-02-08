import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./../../components/NavBar/index";
import SideBar from "./../../components/SideBar/index";
import MapComponent from "./../../components/Map/index";
import * as FoursquareAPI from "./../../services/foursquareApi";
import escapeRegExp from "escape-string-regexp";
import "./../../styles/global";

const lat = -22.3569919;
const lng = -47.3990678;

class Main extends Component {
  state = {
    sidebarActive: false,
    locations: [],
    query: ""
  };

  componentDidMount() {
    FoursquareAPI.getVenues(lat, lng).then(venues => {
      if (!venues) return;
      const locations = venues.map(venue => {
        return {
          id: venue.id,
          name: venue.name,
          lat: venue.location.lat,
          lng: venue.location.lng,
          formattedAddress: venue.location.formattedAddress[0],
          isMarkerShown: false
        };
      });

      this.setState({ locations: locations });
    });
  }

  toogleSidebar = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  };

  filterLocations = query => {
    const match = new RegExp(escapeRegExp(query), "i");
    return this.state.locations.filter(loc => match.test(loc.name));
  };

  updateQuery = query => {
    this.setState({ query: query });
  };

  toogleMarkerLocation = location => {
    location.isMarkerShown = !location.isMarkerShown;
    this.setState({ locations: this.state.locations });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          render={() => (
            <div className="app-content">
              <SideBar
                SidebarActive={this.state.sidebarActive}
                OnChangeText={this.updateQuery}
                OnClickText={this.toogleMarkerLocation}
                query={this.state.query}
                OnToogleSidebar={this.toogleSidebar}
                locations={this.filterLocations(this.state.query)}
              />
              <div className="content">
                <NavBar OnToogleSidebar={this.toogleSidebar} />
                <MapComponent
                  lat={lat}
                  lng={lng}
                  locations={this.filterLocations(this.state.query)}
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
