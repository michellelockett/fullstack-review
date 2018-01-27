import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = (props) => (
  <div>
	<h3> Your top 25 Repos - the forking best of them! </h3>

	<ul>
	  {props.repos.map(repo => <RepoListEntry key={repo._id} repo={repo}/> )}
	</ul>
	
  </div>

);

export default RepoList;