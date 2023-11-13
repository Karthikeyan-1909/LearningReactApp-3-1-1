import Birthday from "./Birthday";

const List = ({ people }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "40rem",
        margin: "3rem auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}>
      <h2>{people.length} birthdays today</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {people.map(({ id, name, age, image }) => {
          return <Birthday name={name} age={age} image={image} key={id} />;
        })}
      </div>
    </div>
  );
};

export default List;
