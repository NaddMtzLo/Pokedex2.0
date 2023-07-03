import React from 'react'

const Pagination = ({pagesInBlock}) => {
  return (
     <ul>
      {
        pagesInBlock.map(numberPage => <li key={numberPage}>hghjhhn</li>)
      }
    </ul>
  )
}

export default Pagination