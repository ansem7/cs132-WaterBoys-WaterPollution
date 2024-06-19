let articles = document.querySelectorAll('article');
let navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
	articles.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
			})
		}
	})
}


const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})


document.addEventListener('DOMContentLoaded', function() {
	var datasetSpan = document.querySelector('.data-text .heading-3:nth-child(1)');
	var dataCollectionSpan = document.querySelector('.data-text .heading-3:nth-child(2)');
  
	datasetSpan.addEventListener('click', function() {
	  window.location.href = 'https://docs.google.com/spreadsheets/d/1auabaGLLBjXaI2han7REbdkIAgDh2uaMG-06QUk0r54/edit?usp=sharing';
	});
  
	dataCollectionSpan.addEventListener('click', function() {
	  window.location.href = 'https://docs.google.com/document/d/1c37_VthTFFrEOM07BWynCfC3UG5pgBbFeN2cY3y89S4/edit?usp=sharing';
	});
  });
  

function toggleAccordionContent(element) {
	var content = element.nextElementSibling;
	while (content && !content.classList.contains('additional-content')) {
	  content = content.nextElementSibling;
	}
	
	// toggle accordion
	if (content && content.style.display === "none") {
	  content.style.display = "block";
	  element.innerHTML = "<i>See less</i>";
	} else if (content) {
	  content.style.display = "none";
	  element.innerHTML = "<i>See more</i>";
	}
}

  

