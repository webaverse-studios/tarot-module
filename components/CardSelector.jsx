const React = window.react;
const { useState, useEffect } = React;

const cards = [
  { name: 'The Fool', image: 'https://tcm390.github.io/tarot-image/m00.jpg'},
  { name: 'The Magician', image: 'https://tcm390.github.io/tarot-image/m01.jpg'},
  { name: 'The High Priestess', image: 'https://tcm390.github.io/tarot-image/m02.jpg'},
  { name: 'The Empress', image: 'https://tcm390.github.io/tarot-image/m03.jpg'},
  { name: 'The Emperor', image: 'https://tcm390.github.io/tarot-image/m04.jpg'},
  { name: 'The Hierophant', image: 'https://tcm390.github.io/tarot-image/m05.jpg'},
  { name: 'The Lovers', image: 'https://tcm390.github.io/tarot-image/m06.jpg'},
  { name: 'The Chariot', image: 'https://tcm390.github.io/tarot-image/m07.jpg'},
  { name: 'Strength', image: 'https://tcm390.github.io/tarot-image/m08.jpg'},
  { name: 'The Hermit', image: 'https://tcm390.github.io/tarot-image/m09.jpg'},
  { name: 'Wheel of Fortune', image: 'https://tcm390.github.io/tarot-image/m10.jpg'},
  { name: 'Justice', image: 'https://tcm390.github.io/tarot-image/m11.jpg'},
  { name: 'The Hanged Man', image: 'https://tcm390.github.io/tarot-image/m12.jpg'},
  { name: 'Death', image: 'https://tcm390.github.io/tarot-image/m13.jpg'},
  { name: 'Temperance', image: 'https://tcm390.github.io/tarot-image/m14.jpg'},
  { name: 'The Devil', image: 'https://tcm390.github.io/tarot-image/m15.jpg'},
  { name: 'The Tower', image: 'https://tcm390.github.io/tarot-image/m16.jpg'},
  { name: 'The Star', image: 'https://tcm390.github.io/tarot-image/m17.jpg'},
  { name: 'The Moon', image: 'https://tcm390.github.io/tarot-image/m18.jpg'},
  { name: 'The Sun', image: 'https://tcm390.github.io/tarot-image/m19.jpg'},
  { name: 'Judgment', image: 'https://tcm390.github.io/tarot-image/m20.jpg'},
  { name: 'The World', image: 'https://tcm390.github.io/tarot-image/m21.jpg'},

  // Cups Suit
  { name: 'Ace of Cups', image: 'https://tcm390.github.io/tarot-image/c01.jpg'},
  { name: '2 of Cups', image: 'https://tcm390.github.io/tarot-image/c02.jpg'},
  { name: '3 of Cups', image: 'https://tcm390.github.io/tarot-image/c03.jpg'},
  { name: '4 of Cups', image: 'https://tcm390.github.io/tarot-image/c04.jpg'},
  { name: '5 of Cups', image: 'https://tcm390.github.io/tarot-image/c05.jpg'},
  { name: '6 of Cups', image: 'https://tcm390.github.io/tarot-image/c06.jpg'},
  { name: '7 of Cups', image: 'https://tcm390.github.io/tarot-image/c07.jpg'},
  { name: '8 of Cups', image: 'https://tcm390.github.io/tarot-image/c08.jpg'},
  { name: '9 of Cups', image: 'https://tcm390.github.io/tarot-image/c09.jpg'},
  { name: '10 of Cups', image: 'https://tcm390.github.io/tarot-image/c10.jpg'},
  { name: 'Page of Cups', image: 'https://tcm390.github.io/tarot-image/c11.jpg'},
  { name: 'Knight of Cups', image: 'https://tcm390.github.io/tarot-image/c12.jpg'},
  { name: 'Queen of Cups', image: 'https://tcm390.github.io/tarot-image/c13.jpg'},
  { name: 'King of Cups', image: 'https://tcm390.github.io/tarot-image/c14.jpg'},

  // Pentacles Suit
  { name: 'Ace of Pentacles', image: 'https://tcm390.github.io/tarot-image/p01.jpg'},
  { name: '2 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p02.jpg'},
  { name: '3 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p03.jpg'},
  { name: '4 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p04.jpg'},
  { name: '5 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p05.jpg'},
  { name: '6 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p06.jpg'},
  { name: '7 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p07.jpg'},
  { name: '8 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p08.jpg'},
  { name: '9 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p09.jpg'},
  { name: '10 of Pentacles', image: 'https://tcm390.github.io/tarot-image/p10.jpg'},
  { name: 'Page of Pentacles', image: 'https://tcm390.github.io/tarot-image/p11.jpg'},
  { name: 'Knight of Pentacles', image: 'https://tcm390.github.io/tarot-image/p12.jpg'},
  { name: 'Queen of Pentacles', image: 'https://tcm390.github.io/tarot-image/p13.jpg'},
  { name: 'King of Pentacles', image: 'https://tcm390.github.io/tarot-image/p14.jpg'},

  // Swords Suit
  { name: 'Ace of Swords', image: 'https://tcm390.github.io/tarot-image/s01.jpg'},
  { name: '2 of Swords', image: 'https://tcm390.github.io/tarot-image/s02.jpg'},
  { name: '3 of Swords', image: 'https://tcm390.github.io/tarot-image/s03.jpg'},
  { name: '4 of Swords', image: 'https://tcm390.github.io/tarot-image/s04.jpg'},
  { name: '5 of Swords', image: 'https://tcm390.github.io/tarot-image/s05.jpg'},
  { name: '6 of Swords', image: 'https://tcm390.github.io/tarot-image/s06.jpg'},
  { name: '7 of Swords', image: 'https://tcm390.github.io/tarot-image/s07.jpg'},
  { name: '8 of Swords', image: 'https://tcm390.github.io/tarot-image/s08.jpg'},
  { name: '9 of Swords', image: 'https://tcm390.github.io/tarot-image/s09.jpg'},
  { name: '10 of Swords', image: 'https://tcm390.github.io/tarot-image/s10.jpg'},
  { name: 'Page of Swords', image: 'https://tcm390.github.io/tarot-image/s11.jpg'},
  { name: 'Knight of Swords', image: 'https://tcm390.github.io/tarot-image/s12.jpg'},
  { name: 'Queen of Swords', image: 'https://tcm390.github.io/tarot-image/s13.jpg'},
  { name: 'King of Swords', image: 'https://tcm390.github.io/tarot-image/s14.jpg'},

  // Wands Suit
  { name: 'Ace of Wands', image: 'https://tcm390.github.io/tarot-image/w01.jpg'},
  { name: '2 of Wands', image: 'https://tcm390.github.io/tarot-image/w02.jpg'},
  { name: '3 of Wands', image: 'https://tcm390.github.io/tarot-image/w03.jpg'},
  { name: '4 of Wands', image: 'https://tcm390.github.io/tarot-image/w04.jpg'},
  { name: '5 of Wands', image: 'https://tcm390.github.io/tarot-image/w05.jpg'},
  { name: '6 of Wands', image: 'https://tcm390.github.io/tarot-image/w06.jpg'},
  { name: '7 of Wands', image: 'https://tcm390.github.io/tarot-image/w07.jpg'},
  { name: '8 of Wands', image: 'https://tcm390.github.io/tarot-image/w08.jpg'},
  { name: '9 of Wands', image: 'https://tcm390.github.io/tarot-image/w09.jpg'},
  { name: '10 of Wands', image: 'https://tcm390.github.io/tarot-image/w10.jpg'},
  { name: 'Page of Wands', image: 'https://tcm390.github.io/tarot-image/w11.jpg'},
  { name: 'Knight of Wands', image: 'https://tcm390.github.io/tarot-image/w12.jpg'},
  { name: 'Queen of Wands', image: 'https://tcm390.github.io/tarot-image/w13.jpg'},
  { name: 'King of Wands', image: 'https://tcm390.github.io/tarot-image/w14.jpg'},
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
    display: !finishCardSelect ? 'flex' : (isSelected ? 'flex' : 'none'),
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

    backgroundImage: `url(${isSelected && finishCardSelect ? card.image : 'https://tcm390.github.io/tarot-image/back.jpg'})`,
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