import { useState, useEffect } from "react";
import personService from "./services/persons";

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

const Persons = ({ persons, filter, setPersons }) => {
  const confirmDelete = (person) => {
    if (confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id).then(() => {
        const returnedPerson = persons.filter((p) => p.id !== person.id);
        setPersons(returnedPerson);
      });
    }
  };
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
              <button onClick={() => confirmDelete(person)}>delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");
  let personObject;
  const personId =
    parseInt(persons.map((p) => p.id).slice(persons.length - 1)) + 1;
  if (personId) {
    personObject = {
      name: newName,
      number: newNumber,
      important: Math.random() > 0.5,
      id: personId.toString(),
    };
  } else {
    personObject = {
      name: newName,
      number: newNumber,
      important: Math.random() > 0.5,
      id: JSON.stringify(persons.length + 1),
    };
  }

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const existingPerson = {
          ...persons.find((p) => p.name === newName),
          number: newNumber,
        };
        personService
          .update(existingPerson.id, existingPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id !== existingPerson.id ? p : returnedPerson
              )
            );
          });
        return;
      }
    } else if (newName.length === 0) {
      alert("name cannot be empty");
      return false;
    } else if (newNumber.length === 0) {
      alert("number cannot be empty");
      return false;
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
      });
      console.log("New Number has been added", persons);
    }
  };

  const updatePerson = (id) => {};

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFillterChange = (event) => {
    setFilterText(event.target.value);
  };

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

      <Persons persons={persons} filter={filterText} setPersons={setPersons} />
    </div>
  );
};

export default App;
