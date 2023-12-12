const ListItem = ({ name, isError = false }) => {
  /*   if (isError) {
    return (
      <li style={{ color: 'tomato' }}>
        <h2>{name}</h2>
      </li>
    )
  } else {
    return (
      <li style={{ color: 'limegreen' }}>
        <p>{name}</p>
      </li>
    )
  } */

  return (
    <li style={{ color: isError ? 'tomato' : 'limegreen' }}>
      {isError ? <h2>{name}</h2> : <p>{name}</p>}
      {isError && <p>There is a problem here</p>}
    </li>
  )
}

export default ListItem
