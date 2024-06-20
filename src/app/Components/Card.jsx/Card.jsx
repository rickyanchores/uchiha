// components/Card.js


const Card = ({image}) => {
  return (
    <div className="Card">
        <img
          alt="Card background"
          className="object-cover"
          src={image}
          width={420}
          height={150} // Ensure to add a height for the image to maintain the aspect ratio
        />
      </div>
  );
};

export default Card;
