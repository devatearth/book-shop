import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./booksCarousel.css";
import BookComponent  from '../bookComponent/bookComponent'
const BooksCarousel = (props) => {
  const { activeAuthorBooks } = props;
  const [activeBooks, setActiveBooks] = useState([]);
  useEffect(() => {
    const bookstemp = [...activeAuthorBooks];
    const bookSubArray = [];
    for (var i = 1; i <= bookstemp.length; i++) {
      var index = Math.ceil(i / 4);
      if (!bookSubArray[index - 1]) {
        bookSubArray[index - 1] = [];
      }
      bookSubArray[index - 1].push(bookstemp[i - 1]);
    }
    setActiveBooks(bookSubArray);
  }, [activeAuthorBooks]);
  return (
    <Carousel
      className="BooksCarouselMain"
      autoPlay={false}
      infiniteLoop={false}
      showIndicators={false}
      showStatus={false}
    >
      {activeBooks.length >0 ?  activeBooks.map((itemArray,index) => (
        <div className="bookCarouselItems" key={index}>
          {itemArray.map((item) => (
            <BookComponent item={item} key={`index${item.id}`}/>
          ))}
        </div>
      )) :  <div className="bookCarouselItems"><h3>No books available</h3></div>}
    </Carousel>
  );
};

export default BooksCarousel;
