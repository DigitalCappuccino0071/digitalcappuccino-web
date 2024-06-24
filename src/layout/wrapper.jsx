import React from 'react';
import ReactQueryProvider from '../components/ReactQueryProvider';

const Wrapper = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
};

export default Wrapper;
