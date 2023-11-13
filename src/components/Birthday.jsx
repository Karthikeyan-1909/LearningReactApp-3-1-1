const Birthday = ({ name, age, image }) => {
  return (
    <div style={{ display: "flex", gap: "3rem" }}>
      <img src={image} style={{ height: "5rem" }} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Birthday;
