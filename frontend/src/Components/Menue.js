import React from 'react';
import Navbar from '../Navbar/navbar';
import { Card } from 'react-bootstrap';
import Dish1 from '../Images/food1.jpeg';
import Dish2 from '../Images/food2.jpeg';
import Dish3 from '../Images/food3.jpeg';
import Dish4 from '../Images/food4.jpeg';
import Dish5 from '../Images/food5.jpeg';
import Dish6 from '../Images/food6.jpeg';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Course = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/" className="text-dark text-primary custom-link text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link
                    to="/Course"
                    className="custom-link text-primary fw-bold text-decoration-none">
                    Course
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3" style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish1}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>mini rice meel</Card.Title>
              <Card.Text>₹60</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish2}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>roti</Card.Title>
              <Card.Text>₹50</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish3}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>fruit salad</Card.Title>
              <Card.Text>₹50</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3"  style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish4}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>idli</Card.Title>
              <Card.Text>₹30</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish5}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>chicken</Card.Title>
              <Card.Text>₹200</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Dish6}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>dosa</Card.Title>
              <Card.Text>₹50</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
