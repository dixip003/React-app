import React, { useCallback, useEffect } from 'react'

export const ButtonComp = ({message, count})=> {
  const getMessage = useCallback(() => console.log('getMessage', message), [message])
  // const getMessage = () => {console.log('getMessage', message)}

  useEffect(() => {
    console.log('rendering methode')
  }, [getMessage])

  console.log('rendering comp')

  return (
    <div> 
      {count}
      <button onClick={getMessage} > Request Message </button>
    </div>
  )
}
