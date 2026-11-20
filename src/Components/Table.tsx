
const Table = ({data,DeleteData,handleOpenEdit}:{data:}) => {
  return (
    <table className="gap-[10px]">
    <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((e,i)=>{
        return   <tr key={e.id}>
        <td>{i+1}</td>
      <td>{e.name}</td>
      <td>{e.age}</td>
      <td><button onClick={()=>DeleteData(e.id)}>delete</button>
      <button onClick={()=>handleOpenEdit(e)}>edit</button></td>
      </tr>
      })
    }
    </tbody>
  </table>
  )
}

export default Table