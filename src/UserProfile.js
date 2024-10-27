import React from 'react'

function UserProfile({user}) {
  if (!user) {
    return <div className="alert alert-warning">No user found</div>
  }
  
  
    return (
    <div className="card mb-4">
        <div className="card-body text-center">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="img-fluid rounded-circle" width="100"></img>
        <h2 className="card-title">{user.name}</h2>
        <p className="card-title">@{user.login}</p>
        <p>{user.bio}</p>
        <p>Followers:{user.followers}</p>
        <p>Following: {user.following}</p>
        </div>
    </div>
  )
}

export default UserProfile
