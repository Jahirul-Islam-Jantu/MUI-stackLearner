import React, {useEffect} from 'react';
import getPlayList from "./api/index.js";
import usePlayList from "./hook/usePlayList.jsx";

const App = () => {
    const {getPlayListById, playlists} = usePlayList()
    useEffect(()=>{
        getPlayListById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl')
    },[])

    console.log('playlists',playlists)


    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default App;