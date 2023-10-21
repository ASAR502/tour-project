import React, { useState } from "react";

function Tour({ data, removeTour }) {
  const [readMore, setReadMore] = useState(true);

  return (
    <>
      <p>single tour component</p>
      <ul>
        {data.map((dat) => {
          return (
            <>
              <li key={dat.id}>
                <p>{dat.peice}</p>
                <img src={dat.image} alt="data is fetching " />
                {dat.name}
                <p>
                  {readMore ? dat.info : `${dat.info.substring(0, 200)}...`}
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "  read more"}
                  </button>
                </p>

                <button onClick={() => removeTour(dat.id)}>
                  Not interested
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default Tour;
