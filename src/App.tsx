import React from 'react';
import logo from './logo.svg';
import './App.css';

type Student = {
  id: string
  name: string
};

function findByIdAndUpdateMutable (
  id: string,
  name: string,
  students: Student[]
) {
  for (const student of students) {
    if (student.id === id) {
      student.name = name;
    }
  }
}

function findByIdAndUpdateImmutableItem (
  id: string,
  name: string,
  students: Student[]
) {
  let studentIndex = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      studentIndex = i;
      break;
    }
  }

  if (studentIndex < 0) {
    return;
  }

  students[studentIndex] = {
    ...students[studentIndex],
    name: name
  };
}

function findByIdAndUpdateImmutableFor (
  id: string,
  name: string,
  students: Student[]
): Student[] {
  let studentIndex = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      studentIndex = i;
      break;
    }
  }

  if (studentIndex < 0) {
    return students;
  }

  const newStudents: Student[] = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      newStudents.push({
        ...students[i],
        name: name
      });
    } else {
      newStudents.push(students[i]);
    }
  }

  return newStudents;
}

function findByIdAndUpdateFunctionalImmutable (
  id: string,
  name: string,
  students: Student[]
): Student[] {
  return students.map(student => student.id === id
    ? { ...student, name }
    : student
  );
}

function App() {
  const students: Student[] = [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
