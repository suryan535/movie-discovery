import React,{useState,useEffect} from "react";
import Logo from './assets/logo.png';
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import './App.css';

function App() {
  const [movies,setMovies]=useState({
    searchText:"Most Recent Movies",
    data:[]
  });

  const [modal,setModal]=useState({
    isModal:0,
    data:null
  });

  useEffect(()=>
  {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`).then(
      res=>res.json()
    ).then(
      (result)=>
      {
        setMovies({searchText:"Most Recent Movies",data:result.results});
      }
    )
  },[]);
  
  const handleSearchTerm=(e)=>
  {
    if(e.key==="Enter")
    {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`).then(
      res=>res.json()
    ).then(
      (result)=>
      {
        setMovies({searchText:e.target.value,data:result.results});
      }
    )
    }
  }

  const handleModalOpener=(data,image)=>
  {
     const newModal={...modal};
     newModal.isModal=1;
     newModal.data=data;
     newModal.data.image=image;

     setModal(newModal);
  }

  const handleModalCloser=()=>
  {
    const newModal={...modal};
    newModal.isModal=0;

    setModal(newModal);
  }


  return (
    <div className="App">
      <div className="topBar">
        <div className="topBarElements">
         <img src={Logo}></img>
        </div>
        <div className="topBarElements">
          <input type="search"
          placeholder="Search for a Movie"
          onKeyDown={handleSearchTerm}
          >
          </input>
        </div>
      </div>
      <hr style={{width:"90%",border:"1px solid #C0C4CC;"}}/>
      <div className="contentBar">
        <div className="contentBarHeading">
          Result : {movies.searchText}
          {modal.isModal?<Modal data={modal.data} modalCloser={handleModalCloser}/>:null}
        </div>
        <div className="contentBarDisplay">
          {movies.data.map((movie)=>
          <Card 
          key={movie["id"]}
          data={movie}
          modalOpener={handleModalOpener}
          />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
