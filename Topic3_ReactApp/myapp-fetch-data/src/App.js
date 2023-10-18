import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Album, Photo, Post, Comment } from './components/Index'
import { Col, Container, Row } from 'react-bootstrap'
import DetailPhoto from './components/DetailPhoto';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col>
            <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col md={2} xs={12}>
            <ul>
              <li><Link to={'/album'}>Albums</Link></li>
              <li><Link to={'/photo'}>Photo</Link></li>
              <li><Link to={'/post'}>Post</Link></li>

            </ul>
          </Col>
          <Col md={10} xs={12}>
            <Routes>
              <Route path='/' element={<Photo />} />
              <Route path='/album' element={<Album />} />
              <Route path='/photo' element={<Photo />} />
              <Route path='/photo/:id' element={<DetailPhoto />} />
              <Route path='/post' element={<Post />} />
              <Route path='/comment' element={<Comment />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
