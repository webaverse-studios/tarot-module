const React = window.react;
const { useState, useEffect } = React;

const Card = ({ index, card, onClick, selectedIndex}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = index === selectedIndex;
  const finishCardSelect = selectedIndex !== null;

  const preloadStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    overflow: 'hidden',
    background: `url(${card.image}) no-repeat -9999px -9999px`,
  };
  

  const cardStyle = {
    width: isSelected ? '300px' : '100px',
    height: isSelected ? '450px' : '150px',
    margin: isSelected ? '0 auto' : '-30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: finishCardSelect ? 'default' : 'pointer',
    transform: isHovered || isSelected ? 'translateY(-5px)' : 'none',
    transition: 'all 0.5s ease',
    opacity: finishCardSelect ? (isSelected ? 1 : 0.0) : 1.0, // Adjust the opacity of other cards when a card is focused
  };

  const imageStyle = {
    width: '100%', // Adjust image width to fit within the card
    height: '100%', // Maintain image aspect ratio
    borderRadius: '10px',
    border: finishCardSelect ? '0px' : '2px solid white',
    filter: isSelected ? 'brightness(100%) contrast(100%)' : (isHovered ? 'brightness(100%) contrast(100%)' : 'brightness(90%) contrast(80%)'),
    transform: isSelected ? 'rotateY(0deg)' : 'rotateY(180deg)',
    transition: 'all 0.5s ease',

    backgroundImage: `url(${isSelected ? card.image : 'https://m.media-amazon.com/images/I/51LhKlEtAmL._SX331_BO1,204,203,200_.jpg'})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onClick={finishCardSelect ? null : onClick}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={preloadStyle} />
      <div style={imageStyle}/>
      {/* <img
        src={isSelected ? card.url : 'https://m.media-amazon.com/images/I/51LhKlEtAmL._SX331_BO1,204,203,200_.jpg'}
        alt="Card Image"
        style={imageStyle}
      /> */}
    </div>
  );
};


const CardSelector = () => {
  
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [active, setActive] = useState(false);
  const [cardData, setCardData] = useState([]);

  const cards = [
    { name: 'The Fool', image: 'https://character-image.s3.amazonaws.com/m00.jpg'},
    { name: 'The Magician', image: 'https://character-image.s3.amazonaws.com/m01.jpg'},
    { name: 'The High Priestess', image: 'https://character-image.s3.amazonaws.com/m02.jpg'},
    { name: 'The Empress', image: 'https://character-image.s3.amazonaws.com/m03.jpg'},
    { name: 'The Emperor', image: 'https://character-image.s3.amazonaws.com/m04.jpg'},
    { name: 'The Hierophant', image: 'https://character-image.s3.amazonaws.com/m05.jpg'},
    { name: 'The Lovers', image: 'https://character-image.s3.amazonaws.com/m06.jpg'},
    { name: 'The Chariot', image: 'https://character-image.s3.amazonaws.com/m07.jpg'},
    { name: 'Strength', image: 'https://character-image.s3.amazonaws.com/m08.jpg'},
    { name: 'The Hermit', image: 'https://character-image.s3.amazonaws.com/m09.jpg'},
    { name: 'Wheel of Fortune', image: 'https://character-image.s3.amazonaws.com/m10.jpg'},
    { name: 'Justice', image: 'https://character-image.s3.amazonaws.com/m11.jpg'},
    { name: 'The Hanged Man', image: 'https://character-image.s3.amazonaws.com/m12.jpg'},
    { name: 'Death', image: 'https://character-image.s3.amazonaws.com/m13.jpg'},
    { name: 'Temperance', image: 'https://character-image.s3.amazonaws.com/m14.jpg'},
    { name: 'The Devil', image: 'https://character-image.s3.amazonaws.com/m15.jpg'},
    { name: 'The Tower', image: 'https://character-image.s3.amazonaws.com/m16.jpg'},
    { name: 'The Star', image: 'https://character-image.s3.amazonaws.com/m17.jpg'},
    { name: 'The Moon', image: 'https://character-image.s3.amazonaws.com/m18.jpg'},
    { name: 'The Sun', image: 'https://character-image.s3.amazonaws.com/m19.jpg'},
    { name: 'Judgment', image: 'https://character-image.s3.amazonaws.com/m20.jpg'},
    { name: 'The World', image: 'https://character-image.s3.amazonaws.com/m21.jpg'},
  ];

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
  
    const handleCardActivation = () => {
      setActive(true);
      const shuffledData = shuffleArray(cards);
      setCardData(shuffledData);
    };

    window.hooks.on('card-selector:activate', () => {
      handleCardActivation();
    })
  }, [])

  useEffect(() => {
    if (selectedIndex !== null) {
      setTimeout(async () => {
        const data = {cardName: cardData[selectedIndex].name, cardImage: cardData[selectedIndex].image}
        window.hooks.emit('card-selector:finish', data);
        setActive(false);
      }, 2000);
    }
  }, [selectedIndex])

  useEffect(() => {
    if (!active) {
      setSelectedIndex(null);
    }
  }, [active])

  
  
  const mainOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.)',
    zIndex: -1,
    display: active ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  return (
    <div 
      style={mainOverlayStyle} 
    >
      <div style={cardContainerStyle} className={'focusAppOnHover'} >
        {cardData.map((card, index) => (
          <Card
            key = {index}
            index = {index}
            card = {card}
            onClick = {() => setSelectedIndex(index)}
            selectedIndex={selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};
export default CardSelector;