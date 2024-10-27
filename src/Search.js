import React , {useState} from 'react';
function Search ({onSearch}) {
    const [username, setUsername] = useState('');
    const handleSearch =(e) =>{
        e.preventDefault();
        onSearch(username);
    };
    return (
        <form onSubmit={handleSearch} className="mb-4">
            <div className='input-group'>
            <input
            type="text"
            className="form-control"
            placeholder="Search GitHUb Username"
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button className="btn btn-primary" type="submit" >Search</button> 
            </div>
        </form>
    );
}
export default Search;
