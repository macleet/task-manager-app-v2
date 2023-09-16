// import Icon from '@mui/material/Icon'
// import { css } from '@emotion/css';
import FolderIcon from '@mui/icons-material/Folder';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Search from '@mui/icons-material/Search';
import './App.css';

function SearchBar() {
	return (
		<div className="flex justify-end items-center w-full" >
			<TextField placeholder="Search a task..." size="small" className="w-1/2" />
			<Search className="m-2 mr-0"/>
		</div>
	);
}

function ControlPanel() {
  	return (
    	<div className="flex justify-between items-center mb-6" >
        	<FolderIcon fontSize="large" className="text-yellow-500" />
			<SearchBar />
    	</div>
  );
}

function FolderButtons() {
	return (
		<div className="text-gray-200 flex justify-evenly w-1/3">
    	    <button className="hover:text-amber-600">
    	        <i className="fa-pen-to-square fa-regular fa-lg" ></i>
    	    </button>
    	    <button className="hover:text-red-600">
    	        <i class="fa-trash fa-solid fa-lg" ></i>
    	    </button>
		</div>
	);
}

function FolderItem() {
	return (
		<li className="text-orange-900 w-full h-12 bg-orange-400 my-4 p-2 flex justify-between items-center rounded shadow-md">
			<input className="pl-2 font-bold w-1/2 bg-inherit" />
			<FolderButtons />
		</li>
	);
}

function FoldersList() {
  	return (
    	<div className="w-full h-full bg-orange-200 mb-12 rounded-md px-4 shadow-md overflow-y-auto hidden">
			<ul>
				<FolderItem />
			</ul>
    	</div>
  	);
}

function TaskButtons() {
	return (
		<div class="text-gray-200 h-full w-1/2 flex justify-evenly items-center">
    	    <button className="hover:text-orange-400">
    	        <i className="fa-pen-to-square fa-regular fa-lg" ></i>
    	    </button>
    	    <button className="hover:text-slate-700">
    	        <i className="fa-calendar fa-solid fa-lg" ></i>
    	    </button>
    	    <button className="hover:text-red-700">
    	        <i class="fa-trash fa-solid fa-lg" ></i>
    	    </button>
    	    <button  className="hover:text-yellow-500">
    	        <i className="fa-star fa-regular fa-lg" ></i>
    	    </button>
    	</div>
	);
	
}

function TaskItem() {
	return (
		<li className="text-gray-200 font-bold rounded bg-sky-600 h-12 my-4 flex justify-between items-center pl-2 shadow-md" >
			<input className="w-1/2 h-3/4 p-2 bg-inherit rounded-md" />
			<TaskButtons />
		</li>
	);
}

function TasksList() {
	return (
    	<div className="h-full w-full px-4 rounded-md bg-blue-300 mb-6 shadow-md overflow-y-auto" >
			<ul className="">
				<TaskItem />
			</ul>
    	</div>
  	);
}

function TaskManagerHeader() {
	return (
		<div className="w-full mb-8">
    		<h1 className="text-5xl" >task-manager-v2</h1>
		</div>
	);
}

function TaskManager() {
  	return (
    	<div className="h-screen w-screen p-6 bg-blue-100 flex flex-col justify-evenly">
			<TaskManagerHeader />
			<main className="h-5/6 flex flex-col justify-evenly">
				<ControlPanel />
				<FoldersList />
				<div className="flex flex-col h-full" >
					<TasksList />
					<TextField placeholder="Press Enter↵ to add task..." size="small" className="w-full" />
				</div>
			</main>
    	</div>
  );
}

function App() {
  	return(
  	  	<TaskManager />
  	);
}

export default App
