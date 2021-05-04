import "./authorDetails.css";
import avatarBoy from "../../assets/images/avatarBoy.png";
import avatarGirl from "../../assets/images/avatarGirl.png";
import { Row, Col } from "react-bootstrap";
const AuthorDetailsComponent = (props) => {
  const { currentAuthor } = props;
  return (
    <Row className="authorDetailsWrapper">
      <Col xs={3}>
        <img className="authorDetailsImg" src={currentAuthor.gender == "male" ? avatarBoy :avatarGirl} />
      </Col>
      <Col xs={9} className="authorDetailsDesc">
        <div className="authorDetailsnameAu">{currentAuthor.author_name}</div>
        <div className="authorDetailsDes">{currentAuthor.about}</div>
      </Col>
    </Row>
  );
};
export default AuthorDetailsComponent;
