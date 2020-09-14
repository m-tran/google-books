import React, { useState, useEffect } from 'react';
import './App.css';
import Search from "./components/Search";
import BookCard from "./components/Card";
import useFetch from "./handlers/useFetch";

function App() {
  const [query, setQuery] = useState({
    search: ""
  });
  const [result, setResult] = useState([]);

  const editQuery = (e) => {
    setQuery({...query, [e.target.name]:e.target.value})
  }

  const SubmitQuery = (e) => {
    e.preventDefault();
    useFetch(query).then((res) => {
      console.log(res.data.items);
      const data = res.data.items;
      return data;
    })
    .then((data) => {
      return setResult(data);
    });
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  let card = result.map((item, i) => {
    console.log(item);
    return (<BookCard 
            key={item.id} 
            bookTitle={item.volumeInfo && item.volumeInfo.title} 
            author={item.volumeInfo && item.volumeInfo.authors} 
            image={item.volumeInfo && item.volumeInfo.imageLinks.thumbnail} 
            description={item.volumeInfo && item.volumeInfo.description}
          />)
  });

  return (
    <div className="App">
      <Search editQuery={editQuery} submitQuery={SubmitQuery}/>
      {card}
    </div>
  );
}

export default App;
