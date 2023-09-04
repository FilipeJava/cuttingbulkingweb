import Link from "next/link"



export default function Button({ children, icon, variant = "primary", element = "link", ...props }) {


    const estilo = {

        primary: "bg-pink-600 py-1 px-4 rounded hover:bg-pink-800",
        secondary: "border-2 border-slate-500 py-1 px-4 rounded hover:bg-slate-600"
    }

    const variantClass = estilo[variant]


    return (

        <>
            {element === "link" ?

                <Link href="#" {...props} className={variantClass}>
                    {icon}
                    {children}</Link>

                :

                <div className={variantClass}>
                    {icon}
                        <input type="submit" value={children}  />
                </div>
                

            }


        </>


    )
}
