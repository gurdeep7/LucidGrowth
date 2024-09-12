"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import SslInfo from '@/app/components/SslInfo';
import { fetchSslInfo } from '@/app/slices/sslSlice';

const HomePage: React.FC = () => {
  const [domain, setDomain] = useState<string>('');
  const dispatch = useDispatch();
  const { sslInfo, loading, error } = useSelector((state: RootState) => state.ssl);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
  };

  const handleSubmit = () => {
    if (!domain) {
      alert('Please enter a valid domain');
      return;
    }
    //@ts-ignore
    dispatch(fetchSslInfo(domain));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">SSL Certificate Checker</h1>
      <div className="flex flex-col items-center mb-4">
        <input 
          type="text" 
          value={domain} 
          onChange={handleInputChange} 
          className="w-full md:w-2/3 lg:w-1/2 p-2 border border-gray-300 rounded-md mb-2"
          placeholder="Enter domain name (e.g., example.com)" 
        />
        <button 
          onClick={handleSubmit} 
          className="w-full md:w-1/3 lg:w-1/4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Check SSL
        </button>
      </div>

      {loading && <LoadingSpinner />}

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {sslInfo && !loading && <SslInfo sslInfo={sslInfo} />}
    </div>
  );
};

export default HomePage;
