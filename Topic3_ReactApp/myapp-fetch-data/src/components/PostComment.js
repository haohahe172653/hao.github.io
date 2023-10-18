import React, { useEffect, useState } from "react";
import { BrowserRouter as useParams } from 'react-router-dom'
import { Card, Col, Row } from "react-bootstrap";

export default function Comment() {
    const { id } = useParams();
    console.log('id = ', id);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
    };

    return (
        <div>
            <div className="text-center">
                <h2>List of Comments</h2>
                <p>Post ID: {id}</p>
            </div>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>

                {
                    data.map(p => (
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.body}</td>
                        </tr>
                    ))
                }
            </table>
            <Row>
                {
                    data.map(p => (
                        <Col xs={12} sm={3} md={6} >
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Link href={`/photo/?albumId=${p.id}`}>Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}
