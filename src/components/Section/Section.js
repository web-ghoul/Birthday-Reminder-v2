 import React,{useState,useEffect,useRef} from 'react'
import styles from './Section.module.css'
import Member from "../Member/Member"
import Form from "../Form/Form"
import Button from "../Button/Button"
import Header from "../Header/Header"



function Section() {
    let array=[]
    if(localStorage.getItem('data')){
        array=JSON.parse(localStorage.getItem('data'))
        array.map((arr,i)=>arr.id = i)
    }
    const [count , setCount] = useState(0)
    const [add , setAdd] = useState(true)
    const [data,setData] = useState([...array])
    const people =useRef()
    const deleteMember = (id) =>{
      const newData = data.filter((arr)=>arr.id !== id)
      setData(newData)
      if(newData.length>0){
        localStorage.setItem('data',JSON.stringify(newData))
      }
      else{
        localStorage.clear()
      }
    }

    const toggle = () =>{
        setAdd(!add)
        document.body.classList.toggle('preventScroll')
    }

    const formHandle = () => {
        setAdd(!add)
        window.scrollTo({
            behavior:'smooth',
            top:'0'
        })
        document.body.classList.add('preventScroll')
    }

    const clrAll = () =>{
        setData([])
        localStorage.clear()
    }

    const dataHandle = (arr)=>{
        setData(()=>[...arr])
    }
    
    useEffect(()=>{
        setCount(people.current.children.length)
    },[data])

    const members = data.map((arr,i)=>{
        return (<Member info={arr} key={i} deleteMember={deleteMember}/>)
    })
    return (
        <section className="reminder">
            <div className={styles.contain}>
                <Header count = {count}/>
                <div className={styles.members} ref={people}>
                    {members}
                </div>
                <Form toggle={toggle} dataHandle ={dataHandle} hide = {add}/>
                <div className={styles.btns}>
                    <Button text="Clear &#128533;" formHandle={clrAll} />
                    <Button text="Add &#128525;" formHandle={formHandle} />
                </div>
            </div>
        </section>
    )
}

export default Section
