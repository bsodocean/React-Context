import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from '../../components/SongForm/NewSongForm';

const Songlist = () => {
    const [songs, setSongs] = useState([
        { title: 'Goofy' , id: 1},
            { title: 'Ahh' , id: 2},
                { title: 'Uncle' , id: 3}
    ]);
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuidv1() }]);
    }
    useEffect(() => {
        
    })
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default Songlist;