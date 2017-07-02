import React from 'react';

import LinkButton from '../components/ui/LinkButton';

const NotFound = () => (
  <div className="NotFound u-text-center">
    <h1 className="u-gap-bottom">aradığın içerik burada değil</h1>

    <LinkButton to="/arama" secondary>
      arama yap
    </LinkButton>
  </div>
);

export default NotFound;
