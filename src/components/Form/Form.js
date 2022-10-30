import React,{useRef,useState} from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'
import Choose from '../ChooseImage/Choose'
import Swal from "sweetalert2";  


function Form({hide,toggle,dataHandle}) {
  const [choose,setChoose] = useState(true)
  const [type , setType] = useState('')
  const [src,setSrc]=useState('')
  const name = useRef()
  const gender = useRef()
  const age = useRef()
  let array=[]

  const chooseImageHandle = (e) =>{
    e.preventDefault()
    if(e.target.getAttribute('src')){
      setSrc(e.target.getAttribute('src'))
    }
    setChoose(!choose)
  }

  const ageCalc = (age) =>{
    let birth = age.split('-')
    let arr = [birth[1],birth[2],birth[0]]
    let now = new Date()
    let day = now.getDate()
    let year = now.getFullYear()
    let month = now.getUTCMonth()+1
    let currentAge = Math.round(Math.abs(new Date(`${month}/${day}/${year}`).getTime() - new Date(arr.join("/")).getTime())/(1000*60*60*24*365.25))
    return currentAge
  }

  const submitHandle = (e) =>{
    e.preventDefault()
    let data={}
    if(!name.current.value || !age.current.value){
      Swal.fire({  
        title: 'error',  
        type: 'error',  
        text: 'please enter Name and Age',  
      });  
      return;
    }
    if(!src){
      if(gender.current.value === 'male'){
        let img= "data:image/png;base64,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"
        data = {name:name.current.value,age:ageCalc(age.current.value),gender:gender.current.value,src:img}
      }
      else{
        let img= "static/media/Pfp%20icon.aee718e93133a470db2e.png"
        data = {name:name.current.value,age:ageCalc(age.current.value),gender:gender.current.value,src:img}
      }
    }
    else{
      data = {name:name.current.value,age:ageCalc(age.current.value),gender:gender.current.value,src:src}
    }
    console.log(src)
    if(localStorage.getItem('data')){
      array=JSON.parse(localStorage.getItem('data'))
      array.push(data)
      localStorage.setItem('data',JSON.stringify(array))
    }
    else{
      array.push(data)
      localStorage.setItem('data',JSON.stringify(array))
    }
    toggle()
    array.map((arr,i)=>arr.id = i)
    dataHandle(array)
    e.preventDefault()
    name.current.value=''
    age.current.value=''
    setSrc('')
    document.body.classList.remove('preventScroll')
  }

  return (
    <div className={hide ? styles.hide : styles.form}>
        <div className={styles.overlay} onClick={toggle}></div>
        <form onSubmit={submitHandle}>
            <div className={styles.head}>Add Your Friend's Birthday</div>
            <input type="text" ref = {name} required placeholder="Enter Your Friend's Name" />
            <select ref={gender} required onChange={()=>setType(gender.current.value)}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <div className={styles.date}>
              <label htmlFor="">Birthday :</label>
              <input type="date" ref={age} required/>
            </div>
            <div className={styles.choose_img} >
              <span>Choose Image : </span>
              <div onClick={chooseImageHandle}>&#128247;</div>
            </div>
            <div className={styles.btns}>
              <Button Class={true} formHandle={submitHandle} text = "Add &#128540;"/>
            </div>
        </form>
        <Choose chooseImageHandle={chooseImageHandle} gender = {type} hideChoose={choose}/>
    </div>
  )
}

export default Form