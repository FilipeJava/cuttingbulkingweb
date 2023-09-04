



export default function TextInput({label,id, ...props}){
    return(
        <div className="flex flex-col gap-1 my-2">
            <label className="text-slate-100 font-semibold" htmlFor={id}>{label}</label>
            <input  className="bg-slate-900 p-2 rounded outline-none focus:ring-pink-600 focus:ring-1" type="text" {...props} id={id}/>
        </div>
        
    )
}