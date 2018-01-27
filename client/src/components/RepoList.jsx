import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = (props) => (
  <div>

	<ul className="list-group">
    <li className="list-group-item">
      <span className="username"> Username</span>
      <span className="repo"> Repo </span>
      <span className="forks"> Forks </span>
    </li>
	  {props.repos.map(repo => <RepoListEntry key={repo._id} repo={repo}/> )}
	</ul>
	
  </div>

);

export default RepoList;