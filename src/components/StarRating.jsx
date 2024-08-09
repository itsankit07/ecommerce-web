import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<MdStar key={i} className="text-yellow-500" />);
      } else if (i - rating < 1) {
        stars.push(<MdStarHalf key={i} className="text-yellow-500" />);
      } else {
        stars.push(<MdStarBorder key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
