import React,{useEffect,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {updateCount} from '../../redux/post';
import News from '../News/News';
import './Login.scss';
function Login() {
     const navigate= useNavigate();
  const[login,setLogin]=useState('');
  const[password,setPassword]=useState('');
  const[flag,setFlag]=useState(false);

 const dispatch = useDispatch();

  
  const submitUser=(e:any)=>{
    localStorage.setItem('Login',('admin'));
    localStorage.setItem('Password',('admin123'));
   e.preventDefault();
   let log= localStorage.getItem('Login');
   let pass= localStorage.getItem('Password');
   
   if(!login || !password){
    setFlag(false);
     alert('Please enter login or password')
    }else if(login!==log || password !==pass){
      setFlag(false);
      alert('login or password invalid')
    }else{
      dispatch(updateCount(0))
      setFlag(true);
      navigate('/news')
     }
    }
    
  return <>
  {!flag ?
   <div className="wrapper">
    <div className='mt-3'>
       <h2 className='text-center'>Login page</h2>
         <div className="wrapper_item">
           <div className="wrapper_item_registration">
             <div className="wrapper_item_registration_form">
               <h4 className="enter">Log in</h4>
               <form onSubmit={submitUser} >
                 <input type="text" placeholder="Login" onChange={(e:any)=>setLogin(e.target.value)} required/>
                 <input type="password" placeholder="Parol" onChange={(e:any)=>setPassword(e.target.value)} required/>
                 <button type='submit' className="kirish"><span>Enter</span></button>
                 <button type='reset' className="reset">reset</button>
               </form>
             </div>
           </div>
         </div>
       </div>
    </div>
  :<News />  
  }
  </>
}
export default Login;