import { useState } from 'react'
import List from './components/List'
import { v4 as uuidv4 } from 'uuid'
import Counter from './components/Counter'

const students = ['Marine', 'Catherine', 'Miguel', 'Jesus']

function App() {
  const [studentsWithId, setStudentsWithId] = useState(
    students.map(student => ({ name: student, id: uuidv4() }))
  )

  const handleDelete = currentId => {
    console.log(currentId)
    setStudentsWithId(studentsWithId.filter(currentStudent => currentStudent.id !== currentId))
  }

  return (
    <div>
      <Counter />
      <List items={studentsWithId} handleDelete={handleDelete} />
    </div>
  )
}

export default App
