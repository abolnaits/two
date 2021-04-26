import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function Item(props) {
    
    console.log(props);

    useEffect(()=>{
        fecthItem();
        console.log('Match =>',props.match);
    },[]);

    const [item,setItem] = useState({
        images:{}
    });
    const fecthItem = ()=>{
        fetch(`https://fortnite-api.com/v1/playlists/${props.match.params.id}`).then((response)=>{
            console.log('Response =>',response);
            return response.json();
        }).then((data)=>{
            console.log('Data =>',data);
            setItem(data.data);
        }).catch((e)=>{
            console.log('Error =>',e);
        });
    }

    return (
    <div>
      <header className="App-header">
        <h1>Item Page</h1>
        <p>{item.id}</p>
        <p>{item.description}</p>
        <img src={item.images.missionIcon} className="test"/>        

      </header>
    </div>
  );
}

export default Item;
