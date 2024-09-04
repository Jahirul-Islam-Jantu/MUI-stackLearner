import {useState} from "react";
import getPlayList from "../api/index.js";


const UsePlayList = () => {
    const [state, setState] = useState({
        playLists:{},
        recentPlayLists:[],
        favourites: [],
    })
    const getPlayListById =async (playListId, force=false) => {
        if(state.playLists[playListId]){
            return
        }
        let result = await getPlayList(playListId)

        let cid, ct

        result = result.map(item =>{
            const {channelId, title, description, thumbnails: {medium}, channelTitle,} = item.snippet
            if (!cid){
                cid = channelId
            }
            if (!ct){
                ct = channelTitle
            }
            return {
                title,
                description,
                thumbnail: medium,
                contentDetails: item.contentDetails,
            }
        })
        setState(prev =>({
            ...prev,
            playList: {
                ...prev.playLists,
                [playListId]: {
                    items: result,
                    playListId: playListId,
                    channelId: cid,
                    channelTitle: ct,
                }
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