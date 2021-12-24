import React, { useState } from "react";

const List = ({ people }) => {
  const [guys, setGuys] = useState(people);
  const removeItem = (id) => {
    console.log("THE ID:", id, "THE PEOPLE", guys);
    let newPeople = guys.filter((person) => person.id !== id);
    setGuys(newPeople);
  };
  return (
    <>
      <h3>{guys.length} birthdays today</h3>
      {guys.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button type='button' onClick={() => removeItem(id)}>
              remove
            </button>
          </article>
        );
      })}
      <button onClick={() => setGuys([])}>Clear All</button>
    </>
  );
};

export default List;
