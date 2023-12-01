'use client'
import React, { useState } from 'react';

export const FilterHook = ({ handleFilterData }: { handleFilterData: (filteredData: any) => void }) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const updateFilteredData = (data: any) => {
      setFilteredData(data);
      handleFilterData(data);
      console.log('filteredData: ', filteredData);

  };

  // Your desired JSX code goes here

  return null; // Replace this with your actual component JSX
};

