import React, { Component } from "react";
import {Link} from 'react-router';

const cachedFetch = (url, options) => {
  let expiry = 5 * 60 // 5 min default
  if (typeof options === 'number') {
    expiry = options
    options = undefined
  } else if (typeof options === 'object') {
    // I hope you didn't set it to 0 seconds
    expiry = options.seconds || expiry
  }
  // Use the URL as the cache key to sessionStorage
  let cacheKey = url
  let cached = localStorage.getItem(cacheKey)
  let whenCached = localStorage.getItem(cacheKey + ':ts')
  if (cached !== null && whenCached !== null) {
    // it was in sessionStorage! Yay!
    // Even though 'whenCached' is a string, this operation
    // works because the minus sign converts the
    // string to an integer and it will work.
    let age = (Date.now() - whenCached) / 1000
    if (age < expiry) {
      let response = new Response(new Blob([cached]))
      return Promise.resolve(response)
    } else {
      // We need to clean up this old key
      localStorage.removeItem(cacheKey)
      localStorage.removeItem(cacheKey + ':ts')
    }
  }

  return fetch(url, options).then(response => {
    // let's only store in cache if the content-type is
    // JSON or something non-binary
    if (response.status === 200) {
      let ct = response.headers.get('Content-Type')
      if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
        // There is a .json() instead of .text() but
        // we're going to store it in sessionStorage as
        // string anyway.
        // If we don't clone the response, it will be
        // consumed by the time it's returned. This
        // way we're being un-intrusive.
        response.clone().text().then(content => {
          localStorage.setItem(cacheKey, content)
          localStorage.setItem(cacheKey+':ts', Date.now())
        })
      }
    }
    return response
  })
}

class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: '',
			events: '',
			requestFailed: false,
			error                : false,
            status_code          : 200, 
            msg                  : '',
            form_errors          : null,
            results              : '',
            results_count        : 0,
            is_logged            : true,
            forced_login         : false

		};
	}
	
	componentDidMount() {
	
		let evtApiUrl = 'https://www.eventbriteapi.com/v3/events/?token=VN5HD67GPHGWMHLFMJLL'
		// fetch('http://codepen.io/jobs.json').then( res => {
		// fetch(evtApiUrl).then( response => {
		cachedFetch(evtApiUrl).then( response => {
			if(!response.ok) {

				this.setState({
					error: true,
				})

				throw Error('Network request failed');
			} 
			return response;
		})
		.then( response => response.json())
		.then( response => {
	
			this.setState({
				results: response,
				events: response.events
			});

			// const jobs = json.jobs;
			// this.setState({
			// 	jobs: jobs
			// })
		}).catch(err =>  {
			console.log("Something went wrong.");
			this.setState({
				error: true,
			})
		});
	}

	render() {
		if (this.props.route.disabled) return <pre>Temporary disabled.</pre>
		if (!this.state.results && !this.state.error) return <Loader />
		if (this.state.error) return <RequestFailed />
		return <EventsList events={this.state.events} />
	}
}

export default Events;

const RequestFailed = props => {
	return (
		<div className='alert alert-warning'>
			<p>Request Failed</p>
		</div>
	)
}

const Loader = props => {
	return (
		<div className='alert alert-info'>
			<p><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</p>
		</div>
	)
}

const EventsList = ({events}) => {
	return(
		<div>
			<h3>Events</h3>
			{events.map(event => 
				<li key={event.id}>
					<Link to={`/events/${event.id}`}>{event.name.text}</Link>
				</li>
			)}
			
		</div>
	);
}