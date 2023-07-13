import React from 'react'

const Set2 = () => {
    const pos = [
        { top: '5vh', right: '11vw' },
        { top: '10vh', right: '10vw' },
        { top: '15vh', right: '9vw' },
        { top: '20vh', right: '8vw' },
        { top: '25vh', right: '7vw' },
        { top: '30vh', right: '6vw' },
        { top: '35vh', right: '5vw' },
        { top: '40vh', right: '6vw' },
      ];

  return (
    <>
       {pos.map((position, index) => (
        <div
          key={index}
          className="circle"
          style={{
            top: position.top,
            right: position.right,
            width: `${900 - index * 100}px`,
            height: `${900 - index * 100}px`,
            borderRadius: '50%',
            // animation: `rotate ${6 - index}s linear infinite`,
          }}
        ></div>
      ))}
    </>
  )
}

export default Set2