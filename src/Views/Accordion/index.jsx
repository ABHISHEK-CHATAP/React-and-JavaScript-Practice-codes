import React, { useState } from 'react'

const index = () => {

  const items = [
    {
      id: 1,
      title: "item 1",
      content: "this is mine item 1 content",
    },
    {
      id: 1,
      title: "item 2",
      content: "this is mine item 2 content",
    },
     {
      id: 3,
      title: "item 3",
      content: "this is mine item 3 content",
    },
    {
      id: 4,
      title: "item 4",
      content: "this is mine item 4 content",
    }
  ];



  const [expandedIndex, setExpandedIndex] = useState(false);

  const toggleItem = (index) => {
    if (index === expandedIndex) {
      // for closing 
      setExpandedIndex((prev)=> !prev);
      console.log("CLOSE : index === expandedIndex")
    } else {
      // for opening
      setExpandedIndex(index);
      console.log("OPEN : index === expandedIndex")
    }
      // console.log("div index", index)
  };



  return (
   <>
   <div style={{position:"absolute",top:"50%",left:"50%"}}>
      {items.map((item, index) => (
        <div key={index} >
          <button onClick={() => toggleItem(index)}>{item.title}</button>
          {index === expandedIndex && <div>{item.content}</div>}
        </div>
      ))}
    </div>
   </>
  )
}

export default index
