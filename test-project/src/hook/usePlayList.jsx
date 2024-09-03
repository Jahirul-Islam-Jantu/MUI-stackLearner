import {useState} from "react";
import getPlayList from "../api/index.js";


const UsePlayList = () => {
    const [state, setState] = useState({
        playLists:{},
        recentPlayLists:[],
        favourites: [],
    })
    const getPlayListById =async (playListId) => {
        const result = await getPlayList(playListId)
        setState(prev =>({
            ...prev,
            playList: {
                ...prev.playLists,
                [playListId]: result
            }
        })
        )
    }
    const addToFavourites = (playListId) => {
        setState(prev => ({
            ...prev,
            favourites: [...prev, playListId]
        }))
    }
    const addToRecent = (playListId)=>{
        setState(prev => ({
            ...prev,
            recentPlayLists:[...prev, playListId]
        }))
    }
    const getPlayListByIds = (ids=[])=>{
        return ids.map(id=>state.playLists[id])
    }
    return{
        playlists: state.playLists,
        favourites: getPlayListByIds(state.favourites),
        recentPlayLists: getPlayListByIds(state.recentPlayLists),
        getPlayListById,
        addToFavourites,
        addToRecent,
    }
};

export default UsePlayList;