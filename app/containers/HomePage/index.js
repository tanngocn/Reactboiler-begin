import React /* { useEffect */, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>Homepage</div>
    </article>
  );
}

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default compose(
  // withConnect,
  memo,
)(HomePage);
