import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../components/ui/SearchBox';

const Search = () => (
  <div className="row">
    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <h1>yazar veya başlık ara</h1>
      <p className="u-gap-bottom">
        yazar aramak için başına "<strong>@</strong>" koyunuz.
      </p>

      <div className="u-gap-bottom-normal">
        <SearchBox />
      </div>

      <p>
        Örn.
        {' '}
        <Link to={`/baslik?q=galatasaray`}>galatasaray</Link>,
        {' '}
        <Link to={`/baslik?q=beşiktaş`}>beşiktaş</Link>,
        {' '}
        <Link to={`/baslik?q=recep tayyip erdoğan`}>recep tayyip erdoğan</Link>,
        {' '}
        <Link to={`/yazar?q=ssg`}>@ssg</Link>,
        {' '}
        <Link to={`/yazar?q=kanzuk`}>@kanzuk</Link>
      </p>
    </div>
  </div>
);

export default Search;
