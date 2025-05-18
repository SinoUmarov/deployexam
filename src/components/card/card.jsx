import "./card.css";

export default function Card({ src, title, children }) {
  return (
    <div className="numbers">
      <img src={src} alt="" />

      <div className="numbersInfo">
        <h3>{title}</h3>
        <p className="lorem">{children}</p>
      </div>
    </div>
  );
}

export function Invest({ src, title }) {
  return (
    <div className="invest">
      <img src={src} alt="" />
      <p>{title}</p>
    </div>
  );
}

export function Number({ src, children }) {
  return (
    <div className="invest">
      <img src={src} alt="" />
      <p>{children}</p>
    </div>
  );
}

export function NewCard({ src, title, children }) {
  return (
    <div className="newCard">
      <img className="imgNew" src={src} alt="" />
      <div className="newCardChild">
        <h4>{title}</h4>
        <p className="lorem">{children}</p>
        <p style={{ color: "gray" }}>22.11.2022</p>
      </div>
    </div>
  );
}
