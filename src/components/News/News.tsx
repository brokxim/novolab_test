import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import {getPosts,updateSuccess,updateCount,updateLoading} from '../../redux/post';
import {useDispatch,useSelector} from 'react-redux';
import './News.scss';
import {IoChevronDownCircleOutline} from 'react-icons/io5';
import {BsPlusCircle} from 'react-icons/bs';
import {FiMinusCircle} from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
import Login from '../Login/Login';
import {postsType} from "../../types";

function News() {
  const dispatch = useDispatch();
 
  const navigate = useNavigate();

  const data=useSelector((state:postsType) =>state.posts.posts);
  const success = useSelector((state:postsType) =>state.posts.isSuccess);
  const loading = useSelector((state:postsType)=>state.posts.loading);
  const ref=React.useRef<HTMLDivElement>(null);
  console.log(loading)
  let login:any  = localStorage.getItem('user-login');
  let password:any=localStorage.getItem('user-password')
  
  const[post,setPost]=useState(null)
  // const[loading,setLoading]=useState(false);
useEffect(() => {
  if(password && login){
    setPost(data)
    getPosts(dispatch)
    
    dispatch(updateSuccess(true))
    dispatch(updateCount(0))
    // updateLoading(dispatch)
  }
  else{navigate('/login')
}

}, [])
  const [show,setShow]=useState(false);
  console.log(data)

  const [id,setId]=useState(-1);
  function toggleShow(id:number){
    setId(id)
    setShow(p=>!p);
  }
 const[pageNumber,setPageNumber]=useState(0);
 const usersPerPage=4;
 const pagesVisited=pageNumber*usersPerPage;

 const pageCount=Math.ceil(data.length/usersPerPage);
 const changePage=({selected}:any)=>{
   setPageNumber(selected);
}

return <>
 { (password && login) ? 
   <div className='news'>
    {/* {loading ? 'load': <> */}
       
        <div>
          <h2 className='text-center pb-3'>News page</h2>
            <div className='p-5'>
                { 
                data.slice(pagesVisited,pagesVisited+usersPerPage)
                .map((v:any,index:number) => <div key={index} ref={ref} className="title" onClick={() =>toggleShow(index)}>
                    <div className='title_item' >
                      {v.title}
                    <IoChevronDownCircleOutline className={`title_item_plus ${show && index==id ? 'rotet':''} ? `}/>
                      </div>
                    { show && index==id ?  <div className="p-2 _show">
                          <p>{v.user_id}</p>
                          <p>{v.id}</p>
                          <span>{v.body}</span>
                       </div> :''}
                        </div>)
  }
                  <div className='react-paginate' onClick={()=>setShow(false)}>
                     <ReactPaginate
                      previousLabel={'Previous'}
                      nextLabel={'Next'}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={'paginationBttns'}
                      previousLinkClassName={'previousBttn'}
                      nextLinkClassName={'nextBttn'}
                      disabledClassName={'paginationDisabled'}
                      activeClassName={'paginationActive'}
                     />
                  </div> 
              </div>
        </div>
     {/* </>} */}
      </div>
    :<Login/>  
    }
  </>
}
export default News;