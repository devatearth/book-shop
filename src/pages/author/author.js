import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./author.css";
import {
  getAuthors,
  getAuthorBooks,
  applyAuthorFilterAction,
  resetAuthorFilterAction,
  setAuthorSearchKeywordAction
} from "../../actions/AuthorActions";
import AuthorCard from "../../components/authorCard/authorCard";
import { Row, Col, Form, Button } from "react-bootstrap";
import CommonHeader from "../../components/commonHeader/commonHeader";
import { BsSearch ,BsXCircle} from "react-icons/bs";




function Author() {
  const [searchAuthor, setSearchAuthor] = useState("");
  const { isAuthorized } = useSelector((state) => state.login);
  const { authors, activeAuthorID, activeAuthorBooks,authorSearch } = useSelector(
    (state) => state.author
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthors(authors));
    setSearchAuthor(authorSearch);
  }, []);
  const getAuthorsData = () =>{
    dispatch(resetAuthorFilterAction());
    setSearchAuthor("");
  }
  const toggleCardModel = async (id) => {
    const { activeAuthorID } = await dispatch(getAuthorBooks(id));
    console.log(activeAuthorID);
  };
  const applyAuthorFilter = () => {
    dispatch(applyAuthorFilterAction(searchAuthor));
  };
  const getFilterKeyword = (event) =>{
    setSearchAuthor(event.target.value);
    dispatch(setAuthorSearchKeywordAction(event.target.value))
  }
  return (
    <>
      <CommonHeader title="Hi Admin" />
      <div className="authorHead">
        <div className="authorHead_Title">Authors</div>
        <div className="authorHead_Search">
          <Form.Control
            className="authorHead_SearchInp"
            type="text"
            placeholder="Search for authors"
            value={searchAuthor}
            onChange={(event)=>getFilterKeyword(event)}
          />
          {searchAuthor ? <BsXCircle className="authorHead_SearchIcon" onClick={getAuthorsData}/> :<BsSearch className="authorHead_SearchIcon" />}

        </div>
        <div className="authorHead_Filter">
          <Button className="FilterButton authorFilterButton" onClick={applyAuthorFilter}>Filter</Button>
        </div>
      </div>
      <Row className="cardContainer">
        {authors.map((item, index) => (
          <Col key={item.id}>
            <AuthorCard
              author={item}
              index={index + 1}
              dispatch={dispatch}
              activeAuthorID={activeAuthorID}
              activeAuthorBooks={activeAuthorBooks}
              toggleCardModel={toggleCardModel}
              className="authorCard"
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Author;
