import {useState,useEffect} from 'react';
import CommonHeader from "../../components/commonHeader/commonHeader";
import { Form, Row, Col, Button } from "react-bootstrap";
import { BsXCircle, BsSearch, BsChevronLeft,BsFillPlusCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import BookComponent from '../../components/bookComponent/bookComponent'
import {getAllBooksAction,applytBookAuthorFilterAction} from '../../actions/guestActions'
import './guest.css'
const Guest = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {books} = useSelector((state)=>state.guest)
    const [bookKeyword, setBookKeyword] = useState("");
    const [authorKeyword, setAuthorKeyword] = useState("");

    const gobackToprevPage = () => {
        history.goBack();
      };   
    const getFilterKeyword = (event, secton) =>{
        if(secton == "author"){
            setAuthorKeyword(event.target.value)
        }
        else if(secton == "books"){
            setBookKeyword(event.target.value)
        }
    }
    const clearAuthorSearch = () =>{
        setAuthorKeyword("");
        dispatch(applytBookAuthorFilterAction("",bookKeyword))
    }
    const clearBookSearch = () =>{
        setBookKeyword("")
        dispatch(applytBookAuthorFilterAction(authorKeyword,""))
    }
    const applyAuthorBookFilter =()=>{
        dispatch(applytBookAuthorFilterAction(authorKeyword,bookKeyword))
    }
    useEffect(() => {
        dispatch(getAllBooksAction())
    }, [])
  return (
    <>
      <CommonHeader title="Hi, Guest" />
      <div className="authorHead">
        <div className="authorHead_Title">
          <BsChevronLeft
            className="bookheader_backicon"
            onClick={gobackToprevPage}
          />
          Authors's Books
        </div>
        <div className="authorHead_Search">
          <Form.Control
            className="authorHead_SearchInp"
            type="text"
            placeholder="Search for author"
            value={authorKeyword}
            onChange={(event) => getFilterKeyword(event,'author')}
          />
          {authorKeyword ? (
            <BsXCircle
              className="authorHead_SearchIcon"
              onClick={clearAuthorSearch}
            />
          ) : (
            <BsSearch className="authorHead_SearchIcon" />
          )}
        </div>
        <div className="authorHead_Search">
          <Form.Control
            className="authorHead_SearchInp"
            type="text"
            placeholder="Search for books"
            value={bookKeyword}
            onChange={(event) => getFilterKeyword(event,'books')}
          />
          {bookKeyword ? (
            <BsXCircle
              className="authorHead_SearchIcon"
              onClick={clearBookSearch}
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
      <div className="bookComponentWrapper">
      {books.map(item=>
          (<BookComponent  item={item} key={IIRFilterNode.id}/>)
      )}
      </div>
    </>
  );
};

export default Guest;
