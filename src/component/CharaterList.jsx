const CharaterList = (props) => {
  let listItems = props.charaters.map(i =>
      <li className="border-b w-full p-3 hover:bg-gray-100 last:border-none" key={i.id}>
        <span className='font-bold'> Name: </span><span className="text-dark-700">{i.name}</span> <span className='font-bold'> Age :</span> {i.age}
       </li>
  )
  return (
    <section className="h-auto space-y-4 bg-gray-100 w-full py-4">
      <h2 className='text-center text-xl px-2 text-gray-600'># Practice Rendering List</h2>
      <ul className='bg-white border  flex flex-col mx-auto w-[360px]'>
        {listItems}
      </ul>
    </section>
  )
}


export default CharaterList;