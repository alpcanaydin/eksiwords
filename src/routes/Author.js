import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import { emptyStateItem, isFetched, isLoading, isFailed } from '../util/stateHelpers';
import { request } from '../redux/modules/author';

import List from '../components/shared/List';
import LinkButton from '../components/ui/LinkButton';
import Loading from '../components/shared/Loading';
import Failed from '../components/shared/Failed';

class Author extends Component {
  componentWillMount() {
    if (!this.props.q) {
      this.props.push('/arama');
      return;
    }

    if (!isFetched(this.props.author)) {
      this.props.request(this.props.q);
    }
  }

  render() {
    const { author } = this.props;

    if (isLoading(author)) {
      return <Loading />;
    }

    if (isFailed(author)) {
      return <Failed />;
    }

    if (author.data.totalUsedEntryWords === 0) {
      return (
        <div className="u-text-center">
          <h1 className="u-gap-bottom">{author.data.author} için sonuç bulunamadı</h1>

          <LinkButton to="/arama" secondary>
            yeni arama yap
          </LinkButton>
        </div>
      );
    }

    return (
      <div className="Author">
        <h1>@{author.data.author} ({author.data.totalUsedEntryWords.toLocaleString()} kelime)</h1>

        <List data={author.data.mostUsedEntryWords} />

        <div className="u-gap-top">
          <LinkButton to="/arama" secondary>
            yeni arama yap
          </LinkButton>
        </div>
      </div>
    );
  }
}

Author.propTypes = {
  author: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  q: PropTypes.string,
};

Author.defaultProps = {
  q: '',
};

export default connect(
  (state, { location }) => {
    const query = queryString.parse(location.search);

    return {
      author: state.author[query.q] || emptyStateItem,
      q: query.q,
    };
  },
  dispatch => bindActionCreators({ request, push }, dispatch),
)(Author);
