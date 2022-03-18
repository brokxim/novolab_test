import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {postsType} from "../../types"
import {useSelector} from 'react-redux';

import { AiOutlineHome,AiFillHome } from 'react-icons/ai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss"

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const success = useSelector((state:postsType) =>state.posts.isSuccess);
  const countState = useSelector((state:postsType) =>state.posts.count);
  const lo_gin = useSelector((state:postsType) =>state.posts.login);
  let login:any = localStorage.getItem('user-login');
  let password:any=localStorage.getItem('user-password')
 
  const [scroll, setScroll] = useState(false);
  const [isHome,setIsHome] = useState(true);
  const [count,setCount] = useState(countState);
  
  let log= localStorage.getItem('Login');
  let pass= localStorage.getItem('Password');

  const onHome=()=>{
    setIsHome(true)
    setCount(-1)
  };
  const onNews=(id:number)=>{
    setIsHome(false);
    if(success && login===log && password===pass){
      setCount(id)
    }else{
      setCount(1)
    }
console.log('buu',log,login,id,success)
  }

 const list=[{id:0,text:'news'},{id:1,text:'login'}]
            
  const handleScroll = () => {
    let y = window.scrollY;
    if (y > 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  console.log(success,countState)
useEffect(() => {window.addEventListener('scroll', handleScroll)})

useEffect(() => {
  setCount(countState)
  if(success){
  setIsHome(false);
}
     
 },[login,password,success,countState,lo_gin])
return (
    <div
     className="navbar-m"
     style={{position: scroll ? 'fixed' :'relative'}}
     >
     <Container>
         <Row>
             <Col md='6' className="nav d-flex justify-content-center">
             <Link to='/' className={`nav__list_item_link_n_l mt-2 mb-2 ${isHome ? 'text-primary isLine ':''}`} onClick={onHome}>
             {isHome ? 
             <AiFillHome className={`aiFillHome`}  />
             :<AiOutlineHome className={`aiFillHome`} /> }
             </Link>
             <ul className="nav__list">
              {list.map((v:({
                  id: number;
                  text: string;
              }),i) => 
                <li key={i} className='nav__list_item ' onClick={()=>onNews(v.id)}>
                    <Link to={`/${v.text}`} className={`nav__list_item_link_n_l ${ count===i ? ' text-primary isLine':''}`}>
                      {v.text.toUpperCase()}
                    </Link>
                </li>
               )}
              </ul>
             </Col>
             <Col md='6' className="socials "
             > 
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-50"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="w-50"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="w-50"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="w-50"/>
                </a>
              </li>
            </ul>
          </Col>
         </Row>
     </Container>
    </div>
)}
export default Navbar;
