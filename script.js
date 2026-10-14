document.getElementById('go').addEventListener('click', () => {
	
	alert('Welcome to the website!');
	
	
	const targetSection = document.getElementById('target-section');
	targetSection.scrollIntoView({ behavior: 'smooth' });
});
