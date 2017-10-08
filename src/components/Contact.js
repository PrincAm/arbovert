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
					<form onSubmit={this.handleFormSubmit}>
						<div>
							<label htmlFor="firstName">Jméno</label>
							<input type="text" id="firstName" onChange={this.handleChange('firstName')} />
							<label htmlFor="lastName">Příjmení</label>
							<input type="text" id="lastName" onChange={this.handleChange('lastName')} />
						</div>
						<div>
							<label htmlFor="email">E-mail</label>
							<input type="email" id="email" onChange={this.handleChange('email')} />
						</div>
						<div>
							<label htmlFor="phone">Telefon</label>
							<input type="text" id="phone" onChange={this.handleChange('phone')} />
						</div>
						<div>
							<label htmlFor="msg">Zpráva</label>
							<textarea id="msg" onChange={this.handleChange('msg')} />
						</div>
						<button type="submit">Odeslat</button>
					</form>
					<div className="Contact-info">
						<div>
							Jmeno Prijmeni
						</div>
						<div>
							<b>Telefon</b><br/>
							<b>E-Mail</b>
						</div>
						<div>
							Ulice<br/>
							Mesto<br/>
							PSC
						</div>
					</div>
				</div>
		  </div>)
	}
}

export default Contact