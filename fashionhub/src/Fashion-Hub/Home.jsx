import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getData } from "./fashionHubApi";
import ProductCard from "./ProductCard";
const Home = () => {
  // const [data, setData] = useState();
  // const fetchData = async () => {
  //   const allData = await getData();
  //   setData(allData);
  // };
  const baseUrl = " ";

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data; 
  };

  const queryResult = useQuery("fastionHubUser", getData);
  const { isLoading, isFetching, error, data: userData, status } = queryResult;
  console.log("userDataHome>>>", userData);
  return (
    <div>
      <ProductCard userData={userData} />
    </div>
  );
};

export default Home;
