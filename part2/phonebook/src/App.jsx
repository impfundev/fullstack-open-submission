import { useState } from "react";

const Filter = ({ handler }) => {
  return (
    <>
      <form>
        <div>
          filter shown with <input onChange={handler} />
        </div>
      </form>
    </>
  );
};

const PersonForm = ({
  submit,
  nameValue,
  nameHandler,
  numberValue,
  numberHandler,
}) => {
  return (
    <>
      <form onSubmit={submit}>
        <div>
          name: <input value={nameValue} onChange={nameHandler} />
        </div>
        <div>
          number: <input value={numberValue} onChange={numberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const Persons = ({ persons, filter }) => {
  return (
    <>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return false;
    } else if (newName.length === 0) {
      alert("name cannot be empty");
      return false;
    } else if (newNumber.length === 0) {
      alert("number cannot be empty");
      return false;
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        important: Math.random() > 0.5,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFillterChange = (event) => {
    setFilterText(event.target.value);
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handler={handleFillterChange} />

      <h3>add a new</h3>

      <PersonForm
        submit={addPerson}
        nameValue={newName}
        nameHandler={handleNameChange}
        numberValue={newNumber}
        numberHandler={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filterText} />
    </div>
  );
};

export default App;
