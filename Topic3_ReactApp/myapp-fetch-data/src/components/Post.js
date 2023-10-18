import React, { useEffect, useState } from "react";

import { Card, Col, Row } from "react-bootstrap";

export default function Post() {
    const [rootData, setRootData] = useState([]);
    const [data, setData] = useState([]);
    // const { id } = useParams();
    // let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    // let flag = id === undefined || id === null;
    // if (flag) {
    //     url = 'https://jsonplaceholder.typicode.com/posts'
    // }

    let url = `https://jsonplaceholder.typicode.com/posts`;
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        event.persist()
        setSearchQuery(event.target.value)
        console.log('search query: ', searchQuery);

        if (event.target.value === '') {
            setData(rootData)
            return;
        }

        var searchResult = rootData.filter(p => p.title.startsWith(event.target.value));
        setData(searchResult)
    };

    useEffect((event) => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         fetchData();
    //     }, 8000);

    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // });


    const fetchData = () => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRootData(data);
                setData(data);
            })
    };



    // console.log('url 2: ' + url);
    // console.log('id = ' + id);
    // console.log('flag = ' + flag);
    // console.log('data = ', data);

    // var result;
    // if (flag) {
    //     result =
    //         <div>
    //             <input
    //                 type="text"
    //                 value={searchQuery}
    //                 onChange={handleInputChange}
    //                 placeholder="Search..."
    //             />
    //             <Row>
    //                 {
    //                     data.map(p => (
    //                         <Col xs={12} sm={3} md={6}>
    //                             <Card style={{ width: '100%' }}>
    //                                 <Card.Body>
    //                                     <Card.Title>{p.title}</Card.Title>
    //                                     <Card.Title>{p.body.substring(15)}</Card.Title>
    //                                     <Card.Link href={`/post/${p.id}`}>Detail</Card.Link>
    //                                     <Card.Link href={`/post/${p.id}/comments`}>Comments</Card.Link>
    //                                 </Card.Body>
    //                             </Card>
    //                         </Col>
    //                     ))
    //                 }
    //             </Row>
    //         </div>
    // } else {
    //     result =
    //         <div>
    //             <table border={1}>
    //                 <tr>
    //                     <th>User ID</th>
    //                     <th>ID</th>
    //                     <th>Title</th>
    //                     <th>Body</th>
    //                 </tr>
    //                 <tr>
    //                     <td>{data.userId}</td>
    //                     <td>{data.id}</td>
    //                     <td>{data.title}</td>
    //                     <td>{data.body}</td>
    //                 </tr>
    //             </table>
    //         </div>
    // }

    return (
        <div>
            <input
                type="text"
                // value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <Row>
                {
                    data.map(p => (
                        <Col xs={12} sm={3} md={6}>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Title>{p.body.substring(15)}</Card.Title>
                                    <Card.Link href={`/post/${p.id}`}>Detail</Card.Link>
                                    <Card.Link href={`/post/${p.id}/comments`}>Comments</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );

}