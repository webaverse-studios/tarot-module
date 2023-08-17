const React = window.react;
const { useState, useEffect } = React;

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

  // Cups Suit
  { name: 'Ace of Cups', image: 'https://character-image.s3.amazonaws.com/c01.jpg'},
  { name: '2 of Cups', image: 'https://character-image.s3.amazonaws.com/c02.jpg'},
  { name: '3 of Cups', image: 'https://character-image.s3.amazonaws.com/c03.jpg'},
  { name: '4 of Cups', image: 'https://character-image.s3.amazonaws.com/c04.jpg'},
  { name: '5 of Cups', image: 'https://character-image.s3.amazonaws.com/c05.jpg'},
  { name: '6 of Cups', image: 'https://character-image.s3.amazonaws.com/c06.jpg'},
  { name: '7 of Cups', image: 'https://character-image.s3.amazonaws.com/c07.jpg'},
  { name: '8 of Cups', image: 'https://character-image.s3.amazonaws.com/c08.jpg'},
  { name: '9 of Cups', image: 'https://character-image.s3.amazonaws.com/c09.jpg'},
  { name: '10 of Cups', image: 'https://character-image.s3.amazonaws.com/c10.jpg'},
  { name: 'Page of Cups', image: 'https://character-image.s3.amazonaws.com/c11.jpg'},
  { name: 'Knight of Cups', image: 'https://character-image.s3.amazonaws.com/c12.jpg'},
  { name: 'Queen of Cups', image: 'https://character-image.s3.amazonaws.com/c13.jpg'},
  { name: 'King of Cups', image: 'https://character-image.s3.amazonaws.com/c14.jpg'},

  // Pentacles Suit
  { name: 'Ace of Pentacles', image: 'https://character-image.s3.amazonaws.com/p01.jpg'},
  { name: '2 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p02.jpg'},
  { name: '3 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p03.jpg'},
  { name: '4 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p04.jpg'},
  { name: '5 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p05.jpg'},
  { name: '6 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p06.jpg'},
  { name: '7 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p07.jpg'},
  { name: '8 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p08.jpg'},
  { name: '9 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p09.jpg'},
  { name: '10 of Pentacles', image: 'https://character-image.s3.amazonaws.com/p10.jpg'},
  { name: 'Page of Pentacles', image: 'https://character-image.s3.amazonaws.com/p11.jpg'},
  { name: 'Knight of Pentacles', image: 'https://character-image.s3.amazonaws.com/p12.jpg'},
  { name: 'Queen of Pentacles', image: 'https://character-image.s3.amazonaws.com/p13.jpg'},
  { name: 'King of Pentacles', image: 'https://character-image.s3.amazonaws.com/p14.jpg'},

  // Swords Suit
  { name: 'Ace of Swords', image: 'https://character-image.s3.amazonaws.com/s01.jpg'},
  { name: '2 of Swords', image: 'https://character-image.s3.amazonaws.com/s02.jpg'},
  { name: '3 of Swords', image: 'https://character-image.s3.amazonaws.com/s03.jpg'},
  { name: '4 of Swords', image: 'https://character-image.s3.amazonaws.com/s04.jpg'},
  { name: '5 of Swords', image: 'https://character-image.s3.amazonaws.com/s05.jpg'},
  { name: '6 of Swords', image: 'https://character-image.s3.amazonaws.com/s06.jpg'},
  { name: '7 of Swords', image: 'https://character-image.s3.amazonaws.com/s07.jpg'},
  { name: '8 of Swords', image: 'https://character-image.s3.amazonaws.com/s08.jpg'},
  { name: '9 of Swords', image: 'https://character-image.s3.amazonaws.com/s09.jpg'},
  { name: '10 of Swords', image: 'https://character-image.s3.amazonaws.com/s10.jpg'},
  { name: 'Page of Swords', image: 'https://character-image.s3.amazonaws.com/s11.jpg'},
  { name: 'Knight of Swords', image: 'https://character-image.s3.amazonaws.com/s12.jpg'},
  { name: 'Queen of Swords', image: 'https://character-image.s3.amazonaws.com/s13.jpg'},
  { name: 'King of Swords', image: 'https://character-image.s3.amazonaws.com/s14.jpg'},

  // Wands Suit
  { name: 'Ace of Wands', image: 'https://character-image.s3.amazonaws.com/w01.jpg'},
  { name: '2 of Wands', image: 'https://character-image.s3.amazonaws.com/w02.jpg'},
  { name: '3 of Wands', image: 'https://character-image.s3.amazonaws.com/w03.jpg'},
  { name: '4 of Wands', image: 'https://character-image.s3.amazonaws.com/w04.jpg'},
  { name: '5 of Wands', image: 'https://character-image.s3.amazonaws.com/w05.jpg'},
  { name: '6 of Wands', image: 'https://character-image.s3.amazonaws.com/w06.jpg'},
  { name: '7 of Wands', image: 'https://character-image.s3.amazonaws.com/w07.jpg'},
  { name: '8 of Wands', image: 'https://character-image.s3.amazonaws.com/w08.jpg'},
  { name: '9 of Wands', image: 'https://character-image.s3.amazonaws.com/w09.jpg'},
  { name: '10 of Wands', image: 'https://character-image.s3.amazonaws.com/w10.jpg'},
  { name: 'Page of Wands', image: 'https://character-image.s3.amazonaws.com/w11.jpg'},
  { name: 'Knight of Wands', image: 'https://character-image.s3.amazonaws.com/w12.jpg'},
  { name: 'Queen of Wands', image: 'https://character-image.s3.amazonaws.com/w13.jpg'},
  { name: 'King of Wands', image: 'https://character-image.s3.amazonaws.com/w14.jpg'},
];

const Card = ({ index, card, onClick, selectedCards}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedCards.includes(index);
  const finishCardSelect = selectedCards.length >= 3;

  const preloadStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    overflow: 'hidden',
    background: `url(${card.image}) no-repeat -9999px -9999px`,
  };
  

  const cardStyle = {
    width: isSelected && finishCardSelect ? '300px' : '100px',
    height: isSelected && finishCardSelect ? '450px' : '150px',
    margin: isSelected && finishCardSelect ? '0 auto' : '-30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: finishCardSelect ? 'default' : 'pointer',
    transform: isSelected ? 'translateY(-10px)' : (isHovered ? 'translateY(-5px)' : 'none'),
    transition: 'all 0.5s ease',
    opacity: finishCardSelect ? (isSelected ? 1 : 0.0) : 1.0,
  };

  const imageStyle = {
    width: '100%', 
    height: '100%', 
    borderRadius: '10px',
    border: isSelected && finishCardSelect ? '0px' : '2px solid white',
    filter: isSelected ? 'brightness(100%) contrast(100%)' : 'brightness(90%) contrast(80%)',
    transform: isSelected && finishCardSelect ? 'rotateY(0deg)' : 'rotateY(180deg)',
    transition: 'all 0.5s ease',

    backgroundImage: `url(${isSelected && finishCardSelect ? card.image : 'https://m.media-amazon.com/images/I/51LhKlEtAmL._SX331_BO1,204,203,200_.jpg'})`,
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
  const [active, setActive] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

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
    if (selectedCards.length >= 3) {
      setTimeout(async () => {
        const cardNames = [cardData[selectedCards[0]].name, cardData[selectedCards[1]].name, cardData[selectedCards[2]].name];
        const cardImages = [cardData[selectedCards[0]].image, cardData[selectedCards[1]].image, cardData[selectedCards[2]].image]
        const data = {cardNames: cardNames, cardImages: cardImages}
        window.hooks.emit('card-selector:finish', data);
        setActive(false);
      }, 2000);
    }
  }, [selectedCards])

  useEffect(() => {
    if (!active) {
      setSelectedCards([]);
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
    flexWrap: 'wrap',
    width: '70%',
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
            onClick = {() => {
              if (selectedCards.includes(index)) {
                setSelectedCards(selectedCards.filter(item => item !== index)); 
              } else {
                setSelectedCards([...selectedCards, index]); 
              }
            }
            }
            selectedCards = {selectedCards}
          />
        ))}
      </div>
    </div>
  );
};
export default CardSelector;