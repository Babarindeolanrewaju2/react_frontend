import React from 'react';

const Home = (props) => {
    console.log(props)
    return (
        <div>
        <div className="App">
        {props.list.map(item => 
        <div className="box">
          <img src={item.image} />
          {/* <span>{item.name}</span> */}
          <p onClick={()=>props.addtocart( item)}>{item.detail}</p>
          <p>{item.price}</p>
          {/* <p dangerouslySetInnerHTML={ {__html: item.description.substr(0, 210) }}></p> */}
          
        </div>
        )}
    </div>
        </div>
    );
};

export default Home;