import React, { Component } from "react";
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
  console.log((Date.now() - whenCached) / 1000)
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
class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: '',
			eventName: '',
			eventDes: '',
			error                : false,
            status_code          : 200, 
            msg                  : '',
            form_errors          : null,
            results              : [],
            results_count        : 0,
            is_logged            : true,
            forced_login         : false
		};
	}


	componentDidMount() {
		// this._fetchEvents();
		let evtId = this.props.params.id;
		let evtApiUrl = `https://www.eventbriteapi.com/v3/events/${evtId}/?token=VN5HD67GPHGWMHLFMJLL`;
		// fetch(evtApiUrl)
		cachedFetch(evtApiUrl)
		.then( response => {
			
			if (!response.ok) {
				this.setState({error:true});
				throw Error('Network request failed');
			}
			return response;
		})
		.then( response => response.json())
		.then( response => {
			this.setState({event: response}, () => console.log(this.state.event));
		})
		.catch(err =>  {
		  console.log("Booo");
		  this.setState({error:true});
		});

	}
	render() {
		// let event = this.state.event;
		// console.log('hey: ' , event.id);
		// console.log('hey: ' , this.state.event);
		// return(
		// 	<div>
		// 		<h3>Event: {this.state.eventName}</h3>
		// 		<p>Event ID: {this.props.params.id}</p>
		// 		<p>{this.state.eventDes}</p>
		// 	</div>
		// );


		// if (this.props.route.disabled) return <pre>Temporary disabled.</pre>
		if (!this.state.event && !this.state.error) return <Loader />
		if (this.state.error) return <RequestFailed />
		return <ShowEvent event={this.state.event} />
	}

	_fetchEvents = () => {
	
		let evtId = this.props.params.id;
		let evtApiUrl = `https://www.eventbriteapi.com/v3/events/${evtId}`;

		fetch(evtApiUrl, {
			mode: 'no-cors',
			 headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    'Authorization': 'Bearer VN5HD67GPHGWMHLFMJLL'
			  }
		}).then( res => {
			return res.json();
		}).then( json => {
			const event = json;
			this.setState({
				event: event,
				eventName: event.name.text,
				eventDes: event.description.text,
			});
		}).catch(err =>  {
		  console.log("Booo");
		});
	}
	
}

export default Event;

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

const ShowEvent = ({event}) => {
	return(
		<div>
			<h3>Event: {event.name.text}</h3>
			<p>{event.description.text}</p>
		</div>
	);
}