import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [cats, setCatState] = useState(null);

    const getRequest = async () => {    
    const url = `https://api.thecatapi.com/v1/breeds`;
		// const url = `https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=4e2b4a7f-8b0c-474e-84c1-cf1db8af301a`;

		const response = await fetch(url);
		const responseJson = await response.json();
    
    setCatState(responseJson);
	};
  
  console.log(cats);

  useEffect (() => {
    getRequest();
   },[]);

  return (
    <div className='container-fluid cat-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
        Test
			</div>
		</div>
  );
}

export default App;
