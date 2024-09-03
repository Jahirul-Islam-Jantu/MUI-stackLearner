import axios from "axios";

const key = 'AIzaSyDPqV1EeRKTDuz1RTt_WSWD1NfPKyU52Dc'


const getPlayList = async (playListId, pageToken, result=[]) => {
    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet,status&maxResults=50&playlistId=${playListId}&pageToken=${pageToken}`;
}
export default getPlayList