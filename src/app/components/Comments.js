import React, { Component } from 'react';

class Comments extends Component {
   constructor(props) {
   	super(props);
   	this.state = {
   		comments: {},
   		email: 'default@yahoo.com',
   		content: 'lorem ipsum...',
   		rating: 5,
   	};

   	this._resetForm = this._resetForm.bind(this);
   	this._handleSubmit = this._handleSubmit.bind(this);
   }

   componentDidMount() {
   	let comments = {
  
	    "comment-id1486641850845": {
	      "rating": 5,
	      "email": "kjsiosan@gmail.com",
	      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
	    },
	    "comment-id1486641854204": {
	      "rating": 5,
	      "email": "userB@gmail.com",
	      "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	    }
  
	};

   	this.setState({comments}, () => console.log(Object.keys(this.state.comments)) );
   }

  

   render() {
      return (
         <div>
            <h1>Comments...</h1>
            <form onSubmit={this._handleSubmit}>
	            <input type='email' placeholder='Email' value={this.state.email} onChange={ event => this.setState({email:event.target.value}) }/><br />
	            <textarea placeholder='Your Comment' value={this.state.content} onChange={ event => this.setState({content: event.target.value}) } /><br />
	            <label>
	                      Rate :
	                      <select value={this.state.rating} onChange={event=>this.setState({rating:event.target.value})}>
	                        <option value="5">5</option>
	                        <option value="4">4</option>
	                        <option value="3">3</option>
	                        <option value="2">2</option>
	                        <option value="1">1</option>
	                      </select>
	                    </label><br/>
	            <button type='submit'>Submit</button>
            </form>

            <br />
            <br />
            <h4>Comments:</h4>
            {Object.keys(this.state.comments).map( id => <Comment key={id} comment={this.state.comments[id]} /> )}
         </div>
      )
   }

    _resetForm() {
    	// reset form after submitted
   }

    _handleSubmit(event) {
    	event.preventDefault();
    	let ts = new Date().getTime();
    	let comments = this.state.comments;
    	let newComment = {
    		rating: this.state.rating, 
    		email: this.state.email, 
    		content: this.state.content
    	};
    	comments[`comment-id${ts}`] = newComment;
    	this.setState({comments});
    }
}

export default Comments;

const Comment = props =>  {
	let comment = props.comment;
	let avatarUri = `https://api.adorable.io/avatars/60/${comment.email}.png`;
	// const like = (event) => {
	// 	alert('I like')
	// }
	return (
		<div>
			<img src={avatarUri}/>
			<h4>{comment.email} <small>{comment.content} <br/> Rated: {comment.rating}</small></h4>
			{/*<button onClick={like}>Like </button>*/}
		</div>
	);

}

