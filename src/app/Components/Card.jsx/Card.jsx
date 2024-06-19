// components/Card.js


const Card = () => {
  return (
    <div className="Card py-4 shadow">
      <div className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Nxt Mix</p>
        <small className="text-default-500">Sample 01</small>
        <h4 className="font-bold text-large">Frontend Card</h4>
      </div>
      <div className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover"
          src="https://zensushitogo.com/wp-content/uploads/2020/12/ZTG_TheBlackBoxPack_web.png"
          width={370}
          height={150} // Ensure to add a height for the image to maintain the aspect ratio
        />
      </div>
    </div>
  );
};

export default Card;
