import React from 'react';

function RepoListEntry(props) {

	return <li> <span className="username"> {props.repo.username} :</span><a href={props.repo.repoURL} target="_blank"> {props.repo.name}</a><span className="forks">Forks: {props.repo.forks}</span></li>
}

export default RepoListEntry;