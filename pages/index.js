import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import data from '../data.js'
const Home = ()=>{
    const [count,setCount] = useState(0);
    const [text , setText ] = useState([]);
    const submitLoremText = (e)=>{
        e.preventDefault();
        let amount = Number(count);
        if(amount<=0){
            amount = 1;
        }
        if(amount > 8 ){
            amount = 8;
        }
        setText(data.slice(0,amount));
    }
    const fetchLoremText =  ()=>{
        setText(data);
    }
    useEffect(()=>{
        fetchLoremText();
    },[])
  return (
      <div className={styles.Home}>
          <h2>
            tried of boring lorem ipsum?
          </h2>
          <form className="lorem-form"
                onSubmit={submitLoremText}
          >
                <label>
                    Paragraph
                </label>
              <input type="number"
                     name="amount"
                     id="amount"
                     value={count}
                     onChange={(e)=>setCount(e.target.value)}
              />
              <button>
                  genrate
              </button>
          </form
          >
          <div className="Article">
              {
                  text.map((item,index)=>{
                     return (
                         <p key={index}>
                             {item}
                         </p>
                     )
                  })
              }
          </div>
      </div>
  )
}
export default Home
