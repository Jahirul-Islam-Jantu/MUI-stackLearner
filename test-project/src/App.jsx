import {useEffect} from 'react';
import getPlayList from "./api/index.js";
import usePlayList from "./hook/usePlayList.jsx";

const App = () => {
    const {getPlayListById, playlists} = usePlayList()
    useEffect(()=>{
        getPlayListById('PL_XxuZqN0xVASsjyqiNzgjUWHbDkN2Scy')
    },[])

    console.log('playlists',playlists)


    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default App;