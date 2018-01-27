import React from 'react';

function RepoListEntry(props) {

	return <li className="list-group-item"> 
    <span className="username"> {props.repo.username} :</span>
    <span><a href={props.repo.repoURL} target="_blank"> {props.repo.name}</a></span>
    <span className="forks">Forks: {props.repo.forks}</span>
  </li>
}

export default RepoListEntry;