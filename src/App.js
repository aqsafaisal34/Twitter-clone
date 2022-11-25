import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "./assets/download.png";
import post1Img from "./assets/post1.jpg";
import post2Img from "./assets/post2.jpg";
import post3Img from "./assets/post3.jpg";
import profileImg from "./assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faArrowUpFromBracket,
  faComment,
  faHouse,
  faUser,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="leftSide">
            <img src={logo} alt="" width="40px" />
            <div className="list">
              <ul>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="Icon"
                    active
                    size="md"
                  />
                  Home
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faHashtag}
                    className="Icon"
                    active
                    size="md"
                  />
                  Explore
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faBell}
                    className="Icon"
                    active
                    size="md"
                  />
                  Notifications
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="Icon"
                    active
                    size="md"
                  />
                  Messages
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="Icon"
                    active
                    size="md"
                  />
                  Bookmarks
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faList}
                    className="Icon"
                    active
                    size="md"
                  />
                  Lists
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="Icon"
                    active
                    size="md"
                  />
                  Profile
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="Icon"
                    active
                    size="md"
                  />
                  More
                </li>
              </ul>
              <button id="tweet">Tweet</button>
            </div>
          </Col>
          <Col lg={6} className="center">
            <div className="header">
              <h3>Home</h3>
              <div className="section">
                <img className="profile" src={profileImg} alt="" />
                <h2>What's happening?</h2>
              </div>
              <button>Tweet</button>
              <hr />
            </div>
            <div className="posts">
            <div className="userinfo">
            <img className="profile" src={profileImg} alt="" />
            <h3>Aqsa Faisal</h3></div>
          <img className="post1" src={post1Img} alt="" />
            <p className="reaction">
            <ul>
            <li>100 <FontAwesomeIcon icon={faHeart} className="icon1" /></li>
            <li>50 <FontAwesomeIcon icon={faComment} className="icon1" /></li>
            <li> 2<FontAwesomeIcon icon={faRetweet} className="icon1" /></li>
            <li> <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon1" /></li>
            </ul>
            </p>
          </div>
          <hr />
          <div className="posts">
            <img className="profile" src={profileImg} alt="" />
            <h3>Aqsa Faisal</h3>
          <img className="post2" src={post2Img} alt="" />
            <p className="reaction">
            <ul>
            <li>100 <FontAwesomeIcon icon={faHeart} className="icon1" /></li>
            <li>50 <FontAwesomeIcon icon={faComment} className="icon1" /></li>
            <li> 2<FontAwesomeIcon icon={faRetweet} className="icon1" /></li>
            <li> <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon1" /></li>
            </ul>
            </p>
          </div>
          <hr />
          <div className="posts">
            <img className="profile" src={profileImg} alt="" />
            <h3>Aqsa Faisal</h3>
          <img className="post3" src={post3Img} alt="" />
            <p className="reaction">
            <ul>
            <li>100 <FontAwesomeIcon icon={faHeart} className="icon1" /></li>
            <li>50 <FontAwesomeIcon icon={faComment} className="icon1" /></li>
            <li> 2<FontAwesomeIcon icon={faRetweet} className="icon1" /></li>
            <li> <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon1" /></li>
            </ul>
            </p>
          </div>
          <hr />
          
          
          </Col>
          <Col className="rightSide">
          <div className="searchBar">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          </div>
          <div className="trends">
            <h3>Trends for you</h3>
            <span>Trending in Pakistan</span>
            <h5>#Pakistan Zindabad</h5>
            <span>5,917 tweets</span>
            <hr/>
             <span>Trending</span>
            <h5>#FIFA WorldCup</h5>
            <span>50,100 tweets</span>
            <hr/>
            <span>Trending</span>
            <h5>#Qatar</h5>
            <span>100k tweets</span>
            <hr/>
            <span>Trending in Pakistan</span>
            <h5>LSA</h5>
            <span>1,100 tweets</span>
            <hr/>
            <h6>Show More</h6>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
