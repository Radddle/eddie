'use strict';
/* ===================================================================================================================== */
document.querySelectorAll('.qna__question-link').forEach((item) => {
	item.addEventListener('click', () => {
		event.preventDefault();
		document.addEventListener('keydown', closeOnEsc);
		document.addEventListener('mousedown', closeOnEsc);
		const parent = item.nextElementSibling;
		if (parent.classList.contains('hide')) {
			parent.classList.remove('hide');
		} else {
			document.querySelectorAll('.qna__answer-box').forEach((child) => child.classList.remove('hide'));
			parent.classList.toggle('hide');
		}
	});
});

/* ===================================================================================================================== */
const qAnswerCloseBtn = document.querySelectorAll('.qna__answer-close-btn').forEach((btnItem) => {
	btnItem.addEventListener('click', (event) => {
		event.preventDefault();
		const parent = btnItem.parentNode;
		const target = event.target;
		if (target.closest('.qna__answer-close-btn')) {
			parent.classList.remove('hide');
		}
	});
});
/* ===================================================================================================================== */
const closeOnEsc = event => {
	const code = event.code;
	const target = event.target;
	if (code === 'Escape') {
		document.querySelectorAll('.qna__answer-box').forEach((item) => item.classList.remove('hide'));
		document.addEventListener('keydown', closeOnEsc);
	} else if (!target.closest('.qna__answer-box')) {
		document.addEventListener('mousedown', closeOnEsc);
		document.querySelectorAll('.qna__answer-box').forEach((item) => item.classList.remove('hide'));
	}
};

/* ===================================================================================================================== */
/* ===================================================================================================================== */
/* ===================================================================================================================== */
/* ===================================================================================================================== */