var readMoreLink = document.querySelector('.read-more-link');
var readLessLink = document.querySelector('.read-less-link');
var longText = document.querySelector('.long-text');
var shortText = document.querySelector('.short-text');

readMoreLink.addEventListener('click', function(event) {
  event.preventDefault();
  longText.style.display = 'block';
  shortText.style.display = 'none';
  readMoreLink.style.display = 'none';
  readLessLink.style.display = 'inline';
});

readLessLink.addEventListener('click', function(event) {
  event.preventDefault();
  longText.style.display = 'none';
  shortText.style.display = 'block';
  readMoreLink.style.display = 'inline';
  readLessLink.style.display = 'none';
});
