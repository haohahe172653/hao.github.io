import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function DetailPhoto() {
    const { id } = useParams()
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/" + id)
            .then(res => res.json())
            .then(res => setPhotos(res));
    }, [id])
    return (
        <div>
            <h4>Id: {id}</h4>
            <h3>Title: {photos.title}</h3>
            <div>Album: {photos.albumId}</div>
        </div>
    )
}