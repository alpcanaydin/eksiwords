import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import { emptyStateItem, isFetched, isLoading, isFailed } from '../util/stateHelpers';
import { request } from '../redux/modules/topic';

import List from '../components/shared/List';
import LinkButton from '../components/ui/LinkButton';
import Loading from '../components/shared/Loading';
import Failed from '../components/shared/Failed';

class Topic extends Component {
  componentWillMount() {
    console.log(this.props);
    if (!this.props.q) {
      this.props.push('/arama');
      return;
    }

    if (!isFetched(this.props.topic)) {
      this.props.request(this.props.q);
    }
  }

  render() {
    const { topic } = this.props;

    if (isLoading(topic)) {
      return <Loading />;
    }

    if (isFailed(topic)) {
      return <Failed />;
    }

    if (topic.data.totalUsedEntryWords === 0) {
      return (
        <div className="u-text-center">
          <h1 className="u-gap-bottom">{topic.data.topic} için sonuç bulunamadı</h1>

          <LinkButton to="/arama" secondary>
            yeni arama yap
          </LinkButton>
        </div>
      );
    }

    return (
      <div className="Topic">
        <h1>{topic.data.topic} ({topic.data.totalUsedEntryWords} kelime)</h1>

        <List data={topic.data.mostUsedEntryWords} />

        <div className="u-gap-top">
          <LinkButton to="/arama" secondary>
            yeni arama yap
          </LinkButton>
        </div>
      </div>
    );
  }
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  q: PropTypes.string,
};

Topic.defaultProps = {
  q: '',
};

export default connect(
  (state, { location }) => {
    const query = queryString.parse(location.search);

    return {
      topic: state.topic[query.q] || emptyStateItem,
      q: query.q,
    };
  },
  dispatch => bindActionCreators({ request, push }, dispatch),
)(Topic);
