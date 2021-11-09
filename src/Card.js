import './Card.scss';

export default function Card({ card, handleSelect, disabled, flipped}) {
    
    const handleClick = () => {
        if(!disabled) {
            handleSelect(card);
        }
    }

    return (
        <div className="card">
           <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt={`front of card id: ${card.id}`} />
              <img className="back" src="././photos/card.jpg" alt="cover" onClick={handleClick} />
           </div> 
        </div>
    )
}
