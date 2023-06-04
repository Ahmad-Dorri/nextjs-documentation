'use client';
import React from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>error is happening man!</h2>
      <button onClick={() => reset()}>try again </button>
    </div>
  );
};

export default Error;
