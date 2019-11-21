import React from 'react';
import { Helmet } from 'react-helmet';
export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      Feature page
    </div>
  );
}
