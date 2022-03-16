import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import {getPosts,updateSuccess,updateCount} from '../../redux/post';
import {useDispatch,useSelector} from 'react-redux';
import './News.scss';
import {BsPlusCircle} from 'react-icons/bs';
import {FiMinusCircle} from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
import Login from '../Login/Login';


function News() {
  const dispatch = useDispatch();
 
  const navigate = useNavigate();

  const data=useSelector((state:any) =>state.posts.posts);
  const success = useSelector((state:any) =>state.posts.isSuccess);
  
  console.log(data)
  console.log(success)
  const ref=React.useRef<HTMLDivElement>(null);
  
  let log= localStorage.getItem('Login');
  let pass= localStorage.getItem('Password');

useEffect(() => {
  if(pass && log){getPosts(dispatch)
    dispatch(updateSuccess(true))
    dispatch(updateCount(0))

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
 { pass && log ?
   <div className='p-5 news'>
       <h2 className='text-center pb-3'>News page</h2>
        <div className='news_item'>
          {data
          .slice(pagesVisited,pagesVisited+usersPerPage)
          .map((v:any,index:number) => <div ref={ref} className="title" onClick={() =>toggleShow(index)}>
              <div className='title_item' >
                {v.title}
              {show && index==id ? <FiMinusCircle className='title_item_plus'/>:<BsPlusCircle className='title_item_plus'/>}
                </div>
              { show && index==id ?  <div className="p-2 _show">
                    <p>{v.user_id}</p>
                    <p>{v.id}</p>
                    <span>{v.body}</span>
                 </div> :''}
                  </div>)}
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
    :<Login/>  
    }
  </>
}

export default News;