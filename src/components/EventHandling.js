import React, { useState } from 'react'

const EventHandling = () => {

	const [upvotes, setUpvotes] = useState(0)
	const [mycolour, setMycolour] = useState('red')

	let likes = 0;

	const increaselikes = () => {
		likes++;
		console.log(likes);
	}

	const increaseUpvotes = () => {
		//upvotes++: ✖ wrong
		setUpvotes( upvotes+1); //✅ right
	}

	return (


		<div style={ {backgroundColor: mycolour,height:'100vh',padding:50}}>
			<h1>Event Handling </h1>
			<hr />

			<button className='btn btn-primary' onClick={() => { alert('Knock Knock!🤣🤣') }}>Click Event Handling </button>

			<br />
			<input type="text" onChange={(e) => { console.log(e.target.value) }} />

			<br />
			<input type="color" onChange={(e) => { setMycolour(e.target.value) }} />

			<br />

			<button className='btn btn-danger mt-4' onClick={increaselikes} >Add a Like</button>


			<h1> 👍 {likes} </h1>

			<button className='btn btn-danger mt-4' onClick={increaseUpvotes} >Add a Like</button>

			<h1>🔺 {upvotes} </h1>



		</div>
	)
}

export default EventHandling