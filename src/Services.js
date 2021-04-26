import logo from './logo.svg';
//import './App.css';
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
function Services() {
  
    const fecthItems = () => {
        fetch('https://fortnite-api.com/v1/playlists').then((response)=>{
            console.log('Response =>',response);
            return response.json();
        }).then((data)=>{
            console.log('Data =>',data);
            setItems(data.data);
        }).catch((e)=>{
            console.log('Error =>',e);
        });
    }
    
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fecthItems();
    },[]);

    return (
    <div>
      <header className="App-header">
        <h1>Services Page</h1>
        {
            items.map(item => (
                <Link to={`/services/${item.id}`} key={item.id}>
                <p>{item.id}</p>
                </Link>
                
            ))
        }
      </header>
    </div>
  );
}

export default Services;
