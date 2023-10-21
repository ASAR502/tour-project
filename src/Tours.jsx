import Tour from "./tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <p>Our Tours</p>
      <div>
        {tours.map((data) => (
          <div key={data.id}>
            <Tour data={data} removeTour={removeTour} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tours;
