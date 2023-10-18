import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
export default function Photo() {
    // get all photos

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(res => setPhotos(res));
    }, [])



    // let [count, setCount] = useState(0)
    return (
        <div>
            {/* <p>You click: {count}</p>
            <button onClick={() => setCount(++count)}>Click me</button> */}
            <Row>
                {
                    photos.map(p => (
                        <Col xs={12} sm={3} md={6} >
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant='top' src={p.thumnail} />
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>

                                    <Card.Link href={`/photo/${p.id}`}>Detail</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }


            </Row>
        </div>
    )
}