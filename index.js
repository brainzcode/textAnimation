let index = 0,
	interval = 1000;

const magic = document.getElementsByClassName('magic-star');

const rand = (min, max) => Math.floor(Math.random() * (min - max + 1)) + min;

const animate = (star) => {
	star.style.setProperty('--star-left', `${rand(0, 100)}%`);
	star.style.setProperty('--star-top', `${rand(-20, 80)}`);

	star.style.animation = 'none';
	star.offsetHeight;
	star.style.animation = '';
};

for (const star of magic) {
	setTimeout(() => {
		animate(star);

		setInterval(() => animate(star), 1000);
	}, index++ * (interval / 3));
}
