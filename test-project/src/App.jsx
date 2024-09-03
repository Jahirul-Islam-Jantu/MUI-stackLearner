import React, {useEffect} from 'react';
import getPlayList from "./api/index.js";

const App = () => {
    useEffect(()=>{
        getPlayList('PLe28tn1x4EIZE0Rp8xakXrvPY7m63_6Oc').then(
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