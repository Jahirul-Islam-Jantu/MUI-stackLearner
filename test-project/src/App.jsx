import React, {useEffect} from 'react';
import getPlayList from "./api/index.js";

const App = () => {
    useEffect(()=>{
        getPlayList('PL_XxuZqN0xVASsjyqiNzgjUWHbDkN2Scy').then(
            (res)=>{
                console.log(res)
            }
        )
    },[])




    return (
        <div>

        </div>
    );
};

export default App;