import { useState } from 'react';

const CountButton =(props) => { 

  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count +1);

  return (
    <button className="border  rounded-md p-3 w-40 inline-block" onClick={handleClick}>
      {count}
    </button>
  )
}

export default CountButton ;

