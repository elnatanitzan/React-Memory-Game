import { useState, useEffect } from 'react';
import Card from './Card';
import './App.scss';

const cardImage = [
  { "src": '././photos/1.png', matched: false },
  { "src": '././photos/2.png', matched: false },
  { "src": '././photos/3.png', matched: false },
  { "src": '././photos/4.png', matched: false },
  { "src": '././photos/5.png', matched: false },
  { "src": '././photos/6.png', matched: false }
];

function App() {

  const [cards, setCards] = useState([]);
  const [steps, setSteps] = useState(0);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // set new game
  const shuffelCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setSelectedOne(null)
    setSelectedTwo(null)
    setCards(shuffledCards)
    setSteps(0)
  }

  const handleSelect = (card) => {
    console.log(card)
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card)    
  }

  // handle 2 selections
  useEffect(() => {

    if (selectedOne && selectedTwo) {
        setDisabled(true)
    
        if (selectedOne.src === selectedTwo.src) {
          selectedOne.matched = true;
          selectedTwo.matched = true;

          setCards(cards)
          resetTurn()
        } else {
            setTimeout(() => resetTurn(), 1000)
        }  
    }
  }, [selectedOne, selectedTwo, cards]);

  // reset selection & count steps
  const resetTurn = () => {
    setSelectedOne(null)
    setSelectedTwo(null)
    setSteps(prevSteps => prevSteps + 1)
    setDisabled(false)
  }

  // start new game
  useEffect(() => {
    shuffelCards()
  }, [])
  
  return (
    <div className="App">

      <header>
        <h2>Memory Game</h2>
        <h4>React using Hooks</h4>
      </header>

      <div className="main">
        <div className="cards">
          {cards.map(card => (
            <Card
            key={card.id}
            card={card}
            handleSelect={handleSelect}
            disabled={disabled}
            flipped={card === selectedOne || card === selectedTwo || card.matched}
            />
            ))}
        </div>
      </div>

      <footer>
        <span>
          <p>Steps: </p>
          <p className="steps">{steps}</p>
        </span>
        <div className="new-game">
          <button onClick={shuffelCards}>New Game</button>
        </div>
      </footer>
           
    </div>
  );
}
export default App