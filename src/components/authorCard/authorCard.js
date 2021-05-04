import { Card, Button, Row, Col } from "react-bootstrap";
import boyAvatar from "../../assets/images/avatarBoy.png";
import girlAvatar from "../../assets/images/avatarGirl.png";
import "./authorCard.css";
import { BsArrowRight, BsDashCircle } from "react-icons/bs";
import {useHistory} from 'react-router-dom';
const AuthorCard = (props) => {
  const { author, index,activeAuthorBooks,activeAuthorID,toggleCardModel } = props;
  const history = useHistory();
  const gotoAuthorDetils = (id) =>{
    history.push(`/author/${id}`);
  }
  return (
    <>
      <Card className="cardWrapp_container">
        <div
          className="authorCardBG"
          style={{
            backgroundColor:
              index % 3 == 0
                ? "#7FFFD4"
                : index % 2 == 0
                ? "#8A2BE2"
                : "#FFB6C1",
          }}
        ></div>
        <Card.Body className="cardBody_cus">
          <img
            className="authorCardImg"
            src={author.gender === "male" ? boyAvatar : girlAvatar}
          />
          <Card.Title>{author.author_name}</Card.Title>
          <Card.Text className="cardBodytextDec">{author.about}</Card.Text>
          <Row className="cardBottomWrap">
            <Col className="carddate" xs={8}>
              Last updated : 03/05/2021
            </Col>
            <Col className="cardArrow" xs={4}>
              <BsArrowRight
                className="cardArrowRight"
                onClick={() => toggleCardModel(author.id)}
              />
            </Col>
          </Row>
        </Card.Body>
        {activeAuthorID === author.id && (
          <div className="cardOnClickDetails">
            <BsDashCircle
              className="cradHoverCloseIcon"
              onClick={() => toggleCardModel("")}
            />
            <Card.Title className="cardHoverTitle">{author.author_name}</Card.Title>
            <Row className="cardHoverDetailsBody">
                <Col xs={4} className="colorWhite">Total Books</Col>
                <Col xs={8} className="colorWhite">{':  '}{activeAuthorBooks.length}</Col>
                <Col xs={4} className="colorWhite">Books</Col>
                <Col xs={8} className="colorWhite"> {':  '}{
                    activeAuthorBooks.map((item,index)=>
                        <span key={item.id}>{item.name}{activeAuthorBooks.length-1 !== index ? ', ':''}</span>
                    )
                }</Col>                
            </Row>
            <Button className="FilterButton filterButtoncardHover" onClick={()=>gotoAuthorDetils(author.id)}>More</Button>
          </div>
        )}
      </Card>
    </>
  );
};

export default AuthorCard;
