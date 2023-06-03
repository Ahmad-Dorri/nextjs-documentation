'use server';
import React from 'react';
import ClientComponent from './ClientComponent';

const ServerComponent = () => {
  return (
    <div>
      <ClientComponent />
    </div>
  );
};

export default ServerComponent;
