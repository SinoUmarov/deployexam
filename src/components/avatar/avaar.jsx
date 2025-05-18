import "./avatar.css";

export default function Avatar({ src, name, profession, display, width }) {
  return (
    <div
      className="user"
      style={{
        display: "flex",
        flexDirection: display,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img src={src} alt="" />
      <div style={{width: width}} className="userInfo">
        <h4>{name}</h4>
        <p>{profession}</p>
      </div>
    </div>
  );
}
