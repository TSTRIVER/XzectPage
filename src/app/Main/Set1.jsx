import React from 'react'

const Set1 = () => {
    const pos1 = [
        { top: '5vh', left: '11vw' },
        { top: '10vh', left: '10vw' },
        { top: '15vh', left: '9vw' },
        { top: '20vh', left: '8vw' },
        { top: '25vh', left: '7vw' },
        { top: '30vh', left: '6vw' },
        { top: '35vh', left: '5vw' },
        { top: '40vh', left: '4vw' },
      ];

  return (
    <>
       {pos1.map((position, index) => (
        <div
          key={index}
          className="circle"
          style={{
            top: position.top,
            left: position.left,
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

export default Set1