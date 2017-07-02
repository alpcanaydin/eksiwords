import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { isFetched, isLoading, isFailed } from '../util/stateHelpers';
import { request } from '../redux/modules/general';

import List from '../components/shared/List';
import LinkButton from '../components/ui/LinkButton';
import Loading from '../components/shared/Loading';
import Failed from '../components/shared/Failed';

class GeneralTopics extends Component {
  componentWillMount() {
    if (!isFetched(this.props.general)) {
      this.props.request();
    }
  }

  render() {
    const { general } = this.props;

    if (isLoading(general)) {
      return <Loading />;
    }

    if (isFailed(general)) {
      return <Failed />;
    }

    return (
      <div className="General">
        <h1>başlıklarda en çok kullanılan kelimeler</h1>

        <List data={general.data.mostUsedTopicWords} />

        <div className="u-gap-top">
          <LinkButton to="/genel" secondary>
            genel istatistikler
          </LinkButton>
        </div>
      </div>
    );
  }
}

GeneralTopics.propTypes = {
  general: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    general: state.general,
  }),
  dispatch => bindActionCreators({ request }, dispatch),
)(GeneralTopics);
