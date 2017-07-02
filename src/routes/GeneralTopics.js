import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { isFetched, isLoading, isFailed } from '../util/stateHelpers';
import { request } from '../redux/modules/general';

import wordSizeTransformer from '../util/wordSizeTransformer';

import Cloud from '../components/shared/Cloud';
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

    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return (
      <div className="General">
        <h1>başlıklarda en çok kullanılan kelimeler</h1>

        <Cloud
          width={width - 150}
          height={height - 200}
          fontFamily="Source Sans Pro"
          data={wordSizeTransformer(general.data.mostUsedTopicWords)}
        />

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
