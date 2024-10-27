import React, { useState } from 'react'

function RepositoryList({repos}) {
    const [sortOption , setSortOption] = useState('stars');
    

    if (repos.length === 0){
        return <div>No Repositories found</div>
    }

    const sortRepos = (repos,option) =>{
        return repos.sort((a,b) =>{
            if( option === 'stars') {
                return b.staragzers_count - a.stargazers_count;

            }else if (option == 'forks'){
                return b.forks_count-a.forks_count;
            }else if  (option === 'updated'){
                return new Date(b.updated_at)- new Date(a.updated_at);
            }
            return repos;
        });
    }
    const sortedRepos = sortRepos([...repos],sortOption);
    
    
  return (
    <div>
        <h3>Repositories</h3>
        
        <select
        className="form-select mb-3"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Last Updated</option>

        </select>
        <ul className="list-group">
            {sortedRepos.map((repo) =>(
                <li key={repo.id} className="list-group-item">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="fw-bold">
                {repo.name}
                </a>
                <p>{repo.description}</p>
                <p> Stars: {repo.stargazers_count}</p>
                <p>Forks : {repo.forks_count}</p>
                
                </li>
            ))}
        </ul>

    </div>
  )
}

export default RepositoryList