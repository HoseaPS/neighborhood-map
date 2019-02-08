import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({
  SidebarActive, OnChangeText, OnClickText, query, locations,
}) => (
  <div className={SidebarActive ? 'sidebar' : 'sidebar hidden'}>
    <div className="input-wrapper">
      <input
        className="location-search"
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={event => OnChangeText(event.target.value)}
      />
    </div>
    <ol className="location-list" role="tablist">
      {locations.map(marker => (
        <li key={marker.id} role="tab">
          <button
            type="button"
            className={marker.isMarkerShown ? 'location selected' : 'location'}
            tabIndex="0"
            onClick={() => OnClickText(marker)}
          >
            {marker.name}
          </button>
        </li>
      ))}
    </ol>
  </div>
);

SideBar.propTypes = {
  SidebarActive: PropTypes.bool.isRequired,
  OnChangeText: PropTypes.func.isRequired,
  OnClickText: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SideBar;
