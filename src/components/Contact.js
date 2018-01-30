import React from 'react'

class Contact extends React.PureComponent {
	constructor(props){
		super(props);

		this.state = {
			fields: {},
			errors: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleChange = (field) => (e) => {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({fields});
	}

	handleFormSubmit(e) {
    e.preventDefault()
		console.log(this.state)

  }

	render() {
    return (
			<div className="Contact">
				<div className="Contact-bg">
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
				<h1>Kontakt</h1>
				<div className="Contact-content">
          <div className="Contact-inner-div">
            <div className="Contact-companyName">
              Arbovert
            </div>
            <div>
              Lukáš Kačer
            </div>
            <div>
              <b>739 969 933</b><br/>
              <b>lukaaskacer@gmail.com</b>
            </div>
          </div>
          <div className="Contact-inner-div">
            Ulice<br/>
            Mesto<br/>
            PSC
          </div>
				</div>
		  </div>)
	}
}

export default Contact