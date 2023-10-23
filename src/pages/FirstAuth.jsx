import { Link } from 'react-router-dom'
import { AuthBtn } from '../utils/StyleUtil'
export const FirstAuth = ({link, img}) => {
    return(
            <div className="container" style={{position:'relative', height:'96vh'}}>
                <img width={"100%"} src={img} alt=""/>
                <Link to={link} style={AuthBtn} className='btn btn-primary'>Keyingisi...</Link>
            </div>
    )
}