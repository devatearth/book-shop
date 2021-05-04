import { useEffect, useState } from "react";
import "./authorDetails.css";
import { useSelector, useDispatch } from "react-redux";
import CommonHeader from "../../components/commonHeader/commonHeader";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  BsXCircle,
  BsSearch,
  BsChevronLeft,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import AuthorDetailsComponent from "../../components/authorDetails/authorDetails";
import BooksCarousel from "../../components/booksCarousel/booksCarousel";
import {
  getFilteredBooks,
  applyFilterOnBooks,
  addBookDetails,
} from "../../actions/authorDetailsActions";
import Modal from "react-bootstrap/Modal";
function AuthorDetails() {
  const history = useHistory();
  const params = useParams();
  const {
    activeAuthorID,
    activeAuthorBooks,
    authors,
    allAuthors,
  } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const [searchBook, setSearchBook] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState({});
  const [bookAddObj, setBookAddObj] = useState({
    id: Math.random().toString(),
    name: "",
    author_id: params.id,
    description: "",
    ISBN: "9745992342",
    publish_year: "2020",
    publisher: "",
    page_count: 200,
    language: "English",
    price: 0,
    img: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setBookAddObj({
      id: Math.random().toString(),
      name: "",
      author_id: params.id,
      description: "",
      ISBN: "9745992342",
      publish_year: "2020",
      publisher: "",
      page_count: 200,
      language: "English",
      price: 0,
      img: "",
    });
  };
  const handleShow = () => setShowModal(true);
  const inputChange = (event, field, fieldType) => {
    const bookObj = { ...bookAddObj };
    if (fieldType == "input") {
      bookObj[field] = event.target.value;
    } else if (fieldType == "image") {
      var file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // bookObj[field] = reader.result;
        setBookAddObj({ ...bookAddObj, img: reader.result });
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
    setBookAddObj(bookObj);
  };
  const validateBookForm = () => {
    return true;
  };
  const submitBook = (e) => {
    e.preventDefault();
    const valid = validateBookForm();
    if (valid) {
      console.log("form can be added");
      dispatch(addBookDetails(bookAddObj));
      handleClose();
    } else {
      console.log("form cannot be added");
    }
  };
  useEffect(() => {
    const authorsTemp = [...authors];
    const currentAuthorTemp = authors.filter((item) => {
      return item.id === (activeAuthorID ? activeAuthorID : params.id);
    });
    setCurrentAuthor(currentAuthorTemp[0]);
    if (!activeAuthorID) {
      dispatch(getFilteredBooks(params.id));
    }
  }, []);
  const getAuthorsBooks = () => {
    setSearchBook("");
    dispatch(applyFilterOnBooks("", params.id));
  };
  const applyAuthorBookFilter = () => {
    dispatch(applyFilterOnBooks(searchBook, params.id));
  };
  const getFilterKeyword = (event) => {
    setSearchBook(event.target.value);
  };
  const gobackToAuthor = () => {
    history.goBack();
  };

  return (
    <>
      <CommonHeader title="Hi Admin" />
      <div className="authorHead">
        <div className="authorHead_Title">
          <BsChevronLeft
            className="bookheader_backicon"
            onClick={gobackToAuthor}
          />
          {currentAuthor.author_name}'s Books
        </div>
        <div className="authorHead_Search">
          <Form.Control
            className="authorHead_SearchInp"
            type="text"
            placeholder="Search for books"
            value={searchBook}
            onChange={(event) => getFilterKeyword(event)}
          />
          {searchBook ? (
            <BsXCircle
              className="authorHead_SearchIcon"
              onClick={getAuthorsBooks}
            />
          ) : (
            <BsSearch className="authorHead_SearchIcon" />
          )}
        </div>
        <div className="authorHead_Filter">
          <Button
            className="FilterButton authorFilterButton"
            onClick={applyAuthorBookFilter}
          >
            Filter
          </Button>
        </div>
      </div>
      <AuthorDetailsComponent currentAuthor={currentAuthor} />
      <div className="authorDetailszbookshead">Books</div>
      <BooksCarousel activeAuthorBooks={activeAuthorBooks} />
      <span className="carouselAddnewBookIcon">
        <BsFillPlusCircleFill
          className="carouselAddnewBookIcon_plus"
          onClick={handleShow}
        />
      </span>

      {/* onHide={handleClose}  */}
      <Modal show={showModal} animation={false} onHide={handleClose} centered>
        <Modal.Body>
          <Form onSubmit={submitBook}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Book title
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  required
                  value={bookAddObj.name}
                  onChange={(event) => inputChange(event, "name", "input")}
                />
                <div className="ErroMessage"></div>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  required
                  value={bookAddObj.description}
                  onChange={(event) =>
                    inputChange(event, "description", "input")
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Col sm="6">
                <Form.File
                  id="exampleFormControlFile1"
                  label="Example file input"
                  accept="image/*"
                  onChange={(event) => inputChange(event, "img", "image")}
                  required={true}
                />
              </Col>
              <Col xs="4">
                <img src={bookAddObj.img} style={{ width: "60px" }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={bookAddObj.price}
                  onChange={(event) => inputChange(event, "price", "input")}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Publisher
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={bookAddObj.publisher}
                  onChange={(event) => inputChange(event, "publisher", "input")}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Published
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="addBookModalBtn addBookModalBtn_cancel"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="addBookModalBtn addBookModalBtn_submit"
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthorDetails;
