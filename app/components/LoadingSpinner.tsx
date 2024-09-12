import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center h-32">
    <div className="border-t-transparent border-solid animate-spin border-blue-500 border-4 rounded-full w-12 h-12"></div>
  </div>
);

export default LoadingSpinner;