import React from 'react';
import {useContext} from 'react';
import { themeContext } from './ThemeProvider';

const Home = (props) => {

    const {list, addtocart } = useContext(themeContext)
    console.log( "home",useContext(themeContext))

    console.log(props)
    return (
        <div>
        <div className="App">
        {list.map(item => 
        <div className="box">
          <img src={item.image} />
          {/* <span>{item.name}</span> */}
          <p onClick={()=>addtocart(item)}>{item.detail}</p>
          <p>{item.price}</p>
          {/* <p dangerouslySetInnerHTML={ {__html: item.description.substr(0, 210) }}></p> */}
          
        </div>
        )}
    </div>
        </div>
    );
};

export default Home;