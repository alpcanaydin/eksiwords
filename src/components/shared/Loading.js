import React from 'react';

import image from '../../img/loading.svg';

import './Loading.css';

const Loading = () => (
  <div className="Loading">
    <img src={image} alt="yükleniyor" />
    <h3>yükleniyor...</h3>
  </div>
);

export default Loading;
