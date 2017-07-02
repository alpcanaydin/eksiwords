import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { isFetched, isLoading, isFailed } from '../util/stateHelpers';
import { request } from '../redux/modules/general';

import LinkButton from '../components/ui/LinkButton';
import Loading from '../components/shared/Loading';
import Failed from '../components/shared/Failed';

class General extends Component {
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
        <h1>genel istatistikler</h1>

        <div>
          <h5 className="u-inline-block">toplam başlık sayısı:</h5>
          {' '}
          <strong className="u-text-primary">
            {general.data.totalTopics.toLocaleString()}
          </strong>
        </div>

        <div>
          <h5 className="u-inline-block">toplam entry sayısı:</h5>
          {' '}
          <strong className="u-text-primary">
            {general.data.totalEntries.toLocaleString()}
          </strong>
        </div>

        <div>
          <h5 className="u-inline-block">başlıklardaki kelime sayısı:</h5>
          {' '}
          <strong className="u-text-primary">
            {general.data.totalUsedTopicWords.toLocaleString()}
          </strong>
        </div>

        <div>
          <h5 className="u-inline-block">entry'lerdeki kelime sayısı:</h5>
          {' '}
          <strong className="u-text-primary">
            {general.data.totalUsedEntryWords.toLocaleString()}
          </strong>
        </div>

        <div className="u-gap-top">
          <LinkButton to="/genel/basliklar" secondary className="u-gap-right-normal">
            başlıklarda en çok kullanılan kelimeler
          </LinkButton>
          <LinkButton to="/genel/entryler" secondary>
            entry'lerde en çok kullanılan kelimeler
          </LinkButton>
        </div>
      </div>
    );
  }
}

General.propTypes = {
  general: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    general: state.general,
  }),
  dispatch => bindActionCreators({ request }, dispatch),
)(General);
