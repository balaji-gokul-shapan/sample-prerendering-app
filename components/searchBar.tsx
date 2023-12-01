'use client';
import Input from './input';
import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  selData: any;
  onFilterData: (filteredData: any) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  selData,
  onFilterData,
}) => {
  const [value, setValue] = useState('');
  const [filterData, setFilterData] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const filteredDatas = selData.filter((item: any) =>
      String(item.title.toLowerCase()).includes(
        event.target.value.toLowerCase()
      )
    );
    if (filteredDatas.length === 0) {
      return <p>No data found</p>;
    }
    setFilterData(filteredDatas);
    onFilterData(filteredDatas); // Pass the filtered data to the parent component
  };

  return (
    <>
      <Input
        style={{ float: 'right', marginRight: '30px' }}
        type="text"
        name="searchBar"
        value={value}
        onChange={handleInputChange}
        placeHolder="Enter Text"></Input>
    </>
  );
};
