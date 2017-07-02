import React from 'react';

import LinkButton from '../components/ui/LinkButton';

import './Home.css';

const Home = () => (
  <div className="Home row">
    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <h1>ekşiwords</h1>
      <p className="u-gap-bottom">
        ekşiwords <strong>2017</strong> yılı içerisinde ekşisözlük'de yazılmış
        başlık ve entry'lerde kullanılan kelimelerin istatistiklerini çıkaran
        bir çalışmadır.
      </p>

      <LinkButton to="/arama" primary className="u-gap-right-normal">
        yazar veya başlık ara
      </LinkButton>
      <LinkButton to="/genel" secondary>genel istatistikler</LinkButton>
    </div>
  </div>
);

export default Home;
