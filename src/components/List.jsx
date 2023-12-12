import { Fragment } from 'react'
import ListItem from './ListItem'

const List = ({ items, handleDelete }) => {
  return (
    <div>
      <h2>My list</h2>
      <ul>
        {items.map(({ id, name }, index) => (
          <Fragment key={id}>
            <ListItem name={name} isError={index % 2 === 0} />
            <button onClick={() => handleDelete(id)} type='button'>
              Delete
            </button>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default List
