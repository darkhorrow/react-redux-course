import React, {useState, useEffect} from 'react'
import StarWarsGalleryDisplay from './starwarsgallerydisplay';

function StarWarsGallery({characters, addCharacters, lastPage, changePage}) {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [charactersList, setCharacters] = useState(characters);
    const [page, setPage] = useState(lastPage)

    const fetchCharacters = () => {
        if(status !== 'idle') return;
        if(!page) {
            setStatus('error');
            return;
        }

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(page);
            const data = await response.json();
            setData(data);
            setCharacters([...charactersList, ...data.results]);
            addCharacters(data.results)
            setStatus('fetched');
        }

        fetchData();
    }

    useEffect(fetchCharacters);

    return (
        <>
            <button onClick={()=>{changePage(data.next); setPage(data.next); setStatus('idle')}}>Next page</button>
            <StarWarsGalleryDisplay characters={charactersList}/>
        </>
    )
}

export default StarWarsGallery
