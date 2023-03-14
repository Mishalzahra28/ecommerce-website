import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

function useHttp(contentUrl, contentType) {
  const [data, setData] = useState([]);
  let productList = null;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch(contentUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log(responseData);
      const products = [];

      function pushData(key) {
        products.push({
          id: key,
          title: responseData[key].title,
          url: responseData[key].url,
          price: responseData[key].price,
          type: responseData[key].type,
          ref1: responseData[key].ref1,
          ref2: responseData[key].ref2,
          ref3: responseData[key].ref3,
        });
      }

      for (const key in responseData) {
        if (responseData[key].type === contentType) {
          pushData(key);
        } else if (contentType === "") {
          pushData(key);
        }
      }
      if (products === []) {
        setIsEmpty(true);
      }
      setData(products);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHasError(true);
    });
  }, [contentType]);

  if (isLoading) {
    productList = <h2 style={{ fontWeight: "700" }}>Loading...</h2>;
  }
  if (!isLoading && hasError) {
    productList = (
      <h2 style={{ fontWeight: "700", color: "red" }}>ERROR LOADING DATA</h2>
    );
  }
  if (!isLoading && isEmpty) {
    productList = <h1 style={{ fontWeight: "700" }}>No Series found</h1>;
  }

  if (!isLoading && !hasError) {
    productList = data.map((products) => (
      <ProductItem
        id={products.id}
        title={products.title}
        url={products.url}
        price={products.price}
        ref1={products.ref1}
        ref2={products.ref2}
        ref3={products.ref3}
      />
    ));
  }

  return productList;
}
export default useHttp;
