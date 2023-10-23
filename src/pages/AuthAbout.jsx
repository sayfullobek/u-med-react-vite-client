import { Link } from "react-router-dom"
import { AuthBtn } from "../utils/StyleUtil"

export const AuthAbout = ({link}) => {
    const arr = [
        {name:"Ism", placeholder:'Ismingizni kiriting', type:'text'},
        {name:"Familiya", placeholder:'Familiyangizni kiriting', type:'text'},
        {name:"Otangizni ismi", placeholder:'Otangizni ismini kiriting', type:'text'},
        {name:"Tug'ilgan kuningizni tanlang", placeholder:'', type:'date'},
    ]
    return(
        <div className="container" style={{position:'relative', height:'96vh'}}>
            <h4 className="text-center text-primary pt-5">Ma'lumotlaringizni kiriting</h4>
            <form className="mt-5">
                {arr.map(item=>(
                    <>
                        <label htmlFor="name" className="mt-3">
                            {item.name}
                        </label>
                        <input type={item.type} placeholder={item.placeholder} className="form-control"/>
                    </>
                ))}
            </form>
            <Link to={link} style={AuthBtn} className='btn'>Keyingisi...</Link>
        </div>
    )
}