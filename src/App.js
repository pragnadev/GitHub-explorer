import React , { useState  }from 'react' ;
import Search from './Search';
import UserProfile from './UserProfile';
import RepositoryList from './RepositoryList';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  const [theme,setTheme] = useState(null);
  const [user,setUser] = useState(null);
  const [repos,setRepos] = useState([]);
  const [loading,setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    try{
    const userResponse = await fetch(` https://api.github.com/users/${username}`);
    const  userData = await userResponse.json();
    setUser(userData);

    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await reposResponse.json();
    setRepos(reposData);
    }catch(error){
      console.error('Error fetching data:', error);
    alert('Failed to fetch user data. Please try again.');
    }finally{
      setLoading(false);
    }

  };

  const toggleTheme = () =>{
    setTheme((prevTheme)=>(prevTheme === 'light'? 'dark' :'light'));
  }
  return(
    <div className={`container mt-5 ${theme}`}>
      <h1 className="text-center">GitHub Repository Explorer</h1>
      <button className="btn btn-secondary mb-4" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light' } Mode

      </button>
      <Search onSearch={handleSearch}></Search>
      {loading ?(
        <p>Loading...</p>
      ): (
        <>
        <UserProfile user={user}></UserProfile>
        <RepositoryList repos={repos}></RepositoryList>
        </>
      )}
      
    </div>
  )



}
export default App;