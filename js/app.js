/**
 * Variables para obtener elementos HTML
 */

const generateHtml = document.querySelector('#generate-html');
const markdownInput = document.querySelector('#markdown-input');
const previewSection = document.querySelector('#preview-section');

markdownInput.addEventListener('select', function (event) {
	getSelectedText(event);
});

generateHtml.addEventListener('click', function () {
	getTextFromTextArea(convertToHtml);
});

// markdownInput.addEventListener('keydown', (e) => {
// 	if (e.key === 'Tab') {
// 		e.preventDefault();
// 		insertTabCharacter();
// 	}
// });

// /**
//  * https://phuoc.ng/collection/html-dom/indent-content-in-a-text-area-using-the-tab-key/
//  */
// const insertTabCharacter = () => {
// 	const { value, selectionStart, selectionEnd } = markdownInput;

// 	// Insert tab character
// 	markdownInput.value = `${value.substring(0, selectionEnd)}\t${value.substring(selectionEnd)}`;

// 	// Move cursor to new position
// 	markdownInput.selectionStart = markdownInput.selectionEnd = selectionEnd + 1;
// };
