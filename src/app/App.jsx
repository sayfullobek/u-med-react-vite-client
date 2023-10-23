import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FirstAuth } from '../pages/FirstAuth'
import { AuthLayout } from '../layout/AuthLayout'
import { FirstAuthImg, SecondAuthImg } from '../pages/ImgUtil'
import { Diseases } from '../pages/Diseases'
import { useEffect, useState } from 'react'
import { GetAll } from '../configs/service/AppService'
import { APP_API } from '../configs/AppApi'
import { AuthAbout } from '../pages/AuthAbout'

function App() {
  const [loading, setLoading] = useState(true)
  const [diseases, setDiseases] = useState([])
  // const location = useLocation().pathname
  // console.log(location);
  
  const getAll = async () => {
    try{
        let res;
        // if (location==="auth-diseases"){
          // res = await GetAll(APP_API.diseases)
          // setDiseases(res)
        // }
        setLoading(true)
    }catch(err){}
  }

  // useEffect(()=>{
  //   getAll()
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<FirstAuth link={"/second-auth"} img={FirstAuthImg}/>}/>
          <Route path='/second-auth' element={<FirstAuth link={"/third-auth"} img={SecondAuthImg}/>}/>
          <Route path='/third-auth' element={<FirstAuth link={"/auth-diseases"} img={SecondAuthImg}/>}/>
          <Route path='/auth-diseases' element={<Diseases link={"/auth-about"} img={FirstAuthImg} loading={loading} diseases={diseases}/>}/>
          <Route path='/auth-about' element={<AuthAbout link={"/auth-numbers"}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
