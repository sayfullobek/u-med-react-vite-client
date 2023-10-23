import { Link } from "react-router-dom"
import { Checkbox } from "../components/CheckBox"
import { AuthBtn } from "../utils/StyleUtil"

export const Diseases = ({link, img, loading, diseases}) => {

    return(
        <div className="container" style={{position:'relative', height:'96vh'}}>
            {loading?(
                <>
                    {diseases.style===0?(
                        <>Yo'q</>
                    ):(
                        <>
                        <img width={"100%"} src={img} alt=""/>
                    <div className="mt-3" style={{width:'100%',height:'45vh', overflow: 'auto'}}>
                        {diseases.map(item=>(
                             <div className="app mt-1">
                                 <Checkbox label={item.name}/>
                            </div>
                        ))}
                    </div>
                    <Link to={link} style={AuthBtn} className='btn'>Keyingisi...</Link>
                        </>
                    )}
                </>
            ):(
                <>loading...</>
            )}
        </div>
    )
}