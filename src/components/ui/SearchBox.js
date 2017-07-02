import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();

    const value = this.search.value;

    if (value.startsWith('@')) {
      this.props.dispatch(push(`/yazar?q=${value.replace(/^@/, '')}`));
      return;
    }

    this.props.dispatch(push(`/baslik?q=${value}`));
  }

  render() {
    return (
      <form onSubmit={this.handleSearch} className="SearchBox">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <input
              type="text"
              className="SearchBox__input"
              placeholder="bir başlık ya da @kullanıcı adı gir"
              required
              ref={ref => {
                this.search = ref;
              }}
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 u-text-center u-hidden-mobile">
            <button className="SearchBox__button" />
          </div>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchBox);
