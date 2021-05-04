import './bookComponent.css'
import {
  BsSearch
} from "react-icons/bs";
const BookComponent = (props) => {
  const setActiveBookForView = (bookID) =>{
    console.log(bookID)
  }
    const {item} = props;
  return (
    <div className="bookCarouselItemDiv" key={item.id}>
      {item.publish_year == "2020" && (
        <div className="bookCarouselItemDiv_new">NEW</div>
      )}

      <div className="bookCarouselItemDiv_topWrap">
        <img className="bookCarouselItemDiv_book" src={item.img} />
        <div className="hoverBookiconzDiv showOnBookHover"><BsSearch className="hoverBookiconzIcon"/></div>
        <div className="bookCarouselItemDiv_name" key={item.id}>
          {item.name}
        </div>
      </div>

      <div className="bookCarouselItemDiv_bottomWrap">
        <div className="bookCarouselItemDiv_Yr hideOnBookHover">{item.publish_year}</div>
        <div className="bookCarouselItemDiv_Price hideOnBookHover">RS.{item.price}</div>

        <div className="bookCarouselItemDiv_bottomWrap bookHoverDescr showOnBookHover">
          {item.description.substring(0,200)}
      </div>
      </div>
    </div>
  );
};

export default BookComponent;
