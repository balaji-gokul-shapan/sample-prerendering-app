'use client';
import Image from 'next/image';
import React, { useState, } from 'react';

import Link from 'next/link';

import { SearchBar } from '../components/searchBar';
import useSWR from 'swr';

interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function Products() {
  // const router = useRouter();
  const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);



  const [filteredData, setFilteredData] = useState([]);
  let customData = filteredData.length > 0 ? filteredData : data;

  const handleFilterData = (filteredData: any) => {
    setFilteredData(filteredData);
  };

  if (error) {
    return <div>Error loading products</div>;
  }

  if (!data) {
    return <div>Loading products...</div>;
  }

  return (
    <>
      <h1>Products Details</h1>

      <Link href={`/`}>Home</Link>
      <SearchBar selData={data} onFilterData={handleFilterData} />

      {customData.map((item: ProductProps, index: number) => (
        <div key={index}>
          <Image
            src={item.image}
            style={{ backgroundSize: 'cover' }}
            alt={item.title}
            width={200}
            height={100}
          />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link href={`/products/${item.id}`}>Click Here</Link>
        </div>
      ))}
    </>
  );
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
};