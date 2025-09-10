import { memo, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("")
    const [age, setAge] = useState("")
    const [data, setData] = useState([])
    const [editing, setEditing] = useState(null)



    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Number(age) < 0){
            return alert("xato")
        }
        if (data.some((item) => item.text.toLowerCase() === text.toLowerCase())) {
            return alert("Bu ism allaqachon mavjud!");
        }
        if (editing) {
            const uptadeItem = {
                id: editing.id,
                text,
                age
            }
            setData((prev)=> prev.map((i)=> i.id === editing.id ? uptadeItem : i))
            setAge("")
            setText("")
            setEditing(null)
        } else{
            let regis = {
                id:Date.now(),
                text,
                age: Number(age)
            }
            console.log(regis);
            
            setData((prev)=> [...prev, regis])
        }
    }

    const handleDelete = (id)=>{
        setData((prev)=> prev.filter((i)=> i.id !== id))
    }

    const handleUptade = (item)=>{
        setText(item.text)
        setAge(item.age)
        setEditing(item)
    }
  return (
    <div className="flex gap-6 items-start">
      
      <div className="mb-10 bg-slate-100 p-6 rounded-xl w-[300px] sticky top-24">
        <h2 className="text-xl mb-4">Users</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <input
          value={text} onChange={(e)=> setText(e.target.value)}
            className="border bg-white border-slate-200 rounded-lg py-2 px-4 "
            type="text"
            placeholder="Name"
          />
          <input
          value={age} onChange={(e)=> setAge(Number(e.target.value))}
            className="border bg-white border-slate-200 rounded-lg py-2 px-4 "
            type="number"
            placeholder="age"
          />

          <button className="border cursor-pointer hover:opacity-60 border-slate-200 rounded-lg py-2 px-4 bg-white">
          {editing ? "Update" : "create"}
          </button>
        </form>
      </div>

      <div className="flex-1 grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        {
          data?.map((i)=>(
        <div className="p-4 bg-slate-100 shadow rounded-xl" key={i.id}>
          <div className="bg-slate-300 h-40 rounded-xl grid place-items-center">
            <span className="text-5xl text-slate-500">{i.text[0]}</span>
          </div>
          <div className=" mt-4">
            <h3 className="text-xl">{i.text}</h3>
            <strong className="my-2 text-gray-800">{i.age} years old</strong>

            <div className="flex gap-2 mt-4">
              <button className="py-0.5 border rounded-lg text-sm flex-1 text-red-500" onClick={()=> handleDelete(i.id)}>
                Delete
              </button>
              <button className="py-0.5 border rounded-lg text-sm flex-1 text-green-700" onClick={()=> handleUptade(i)} >
                Update
              </button>
            </div>
          </div>
        </div>

          ))
        }
        
      </div>
    </div>
  );
};

export default memo(Hero);
