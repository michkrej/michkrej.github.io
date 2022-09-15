export const indexText = ['Hi,', "I'm Michelle"];

export const about = [
	`I'm Michelle, a fourth year computer science and engineering student 
    at Linköpings Universitet in Sweden. The summer of 2020 I discovered that 
    making websites is something I really, really enjoy. Since then I've spent 
    most of my spare time exploring the world of web development.`,
	`You can reach me on any of the places listed below, I'm always open to new opportunities.`,
];

export const contactInfo = {
	email: 'contact@michellekrejci.com',
	linkedin: 'https://www.linkedin.com/in/michelle-krejci/',
	github: 'https://github.com/michkrej',
};

export const projects = {
	Bokning: {
		desc: `At the end of 2021 I got the role 'Head of Introduction Weeks' at LinTek, which basically means that I am to coordinate the introduction weeks for the around 1200 new students studying at the technological faculity. This job includes a lot of making sure that bookings don't interfere with eachother - something that has earlier been checked manually in a excel sheet. I refused. Instead I build a web-based booking system that is currently being used by welcoming commitees on all faculties.`,
		frameworks:
			'React and Firebase. Firebase is used to allow future non-technical people in this role to manage the database',
		alt: 'Website Bokningsplanering',
		href: 'https://bokningsplanering.com/',
	},
	SOF: {
		desc: `A website for the biggest student-organized festival in Europe. 
      The general website was already created when I took over but I developed 
      several new systems such as check in for workers aswell as a system for 
      creating and scheduling work shifts.`,
		frameworks: 'React and Ruby on Rails',
		alt: 'Website studentorkesterfestivalen',
		href: 'https://www.sof.lintek.liu.se/',
	},
	TCV: {
		desc: `Developed the frontend for a 
      code-coverage visualization tool as my bachelor degree project. 
      The website displays code-coverage values from a database 
      in a bunch of different graphs. There is also a page for 
      editing and deleting databse entries `,
		frameworks: 'Vue.js',
		alt: 'Website Test Coverage Visualizer',
	},
};
