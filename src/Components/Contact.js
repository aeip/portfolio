import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
	const { register, handleSubmit, errors } = useForm();
	const [userName, setUserName] = useState([]);
	const [userEmail, setUserEmail] = useState([]);
	const [userMessage, setUserMessage] = useState([]);
	const sendFeedback = (serviceID, templateId, variables) => {
		window.emailjs
			.send(serviceID, templateId, variables)
			.then((res) => {
				console.log('Email successfully sent!');
			})
			.catch((err) =>
				console.error(
					'There has been an error.  Here some thoughts on the error that occured:',
					err
				)
			);
	};
	const onSubmit = (data, r) => {
		alert(`Thank you ${userName}, your email has been sent successfully.`);
		const templateId = 'template_7xg1rxu';
		const serviceID = 'service_tfl9zyn';
		sendFeedback(serviceID, templateId, {
			from_name: userName,
			message: userMessage,
			to_name: userEmail,
		});
		r.target.reset();
		setUserName('')
		setUserEmail('')
		setUserMessage('')
	};

	const handleName = (e) => {
		setUserName(e.target.value);
	};
	const handleEmail = (e) => {
		setUserEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setUserMessage(e.target.value);
	};

	return (
		<div className='ContactForm' id='contact'>
			<h2>Contact</h2>
			<pre>
				Say something...like "You're Hired"
			</pre>
			<br />
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className="contact-input"
					style={{ width: '70%' }}
					onChange={handleName}
					value={userName}
					required
					id='outlined-required'
					label='Name'
					variant='outlined'
					name='name'
					ref={register({
						required: 'Please enter your name',
						maxLength: {
							value: 20,
							message: 'Please enter a name with fewer than 20 characters',
						},
					})}
				/>
				<br />
				{errors.name && errors.name.message}
				<br />

				<TextField
					style={{ width: '70%' }}
					onChange={handleEmail}
					value={userEmail}
					required
					id='outlined-required'
					label='Email'
					variant='outlined'
					name='email'
					ref={register({
						required: 'Please enter an email',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'invalid email address',
						},
					})}
				/>
				<br />
				{errors.email && errors.email.message}
				<br />

				<TextField
					style={{ width: '70%' }}
					onChange={handleMessage}
					value={userMessage}
					required
					id='outlined-multiline-static'
					label='Message'
					multiline
					rows={5}
					variant='outlined'
					name='message'
					ref={register({
						required: true,
					})}
				/>
				<br />
				{errors.comment && 'oops, you forgot your message!'}
				<br />

				<TextField style={{ width: '70%' }} value='Send Email' type='submit' />
			</form>
		</div>
	);
};

export default Contact;
