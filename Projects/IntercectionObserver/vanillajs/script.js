const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target);
  })
}, {
  threshold: 0.7
})

const lastCardObserver = new IntersectionObserver(entries => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCard()
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector('.card:last-child'));
}, {
  rootMargin: "100px"
})

lastCardObserver.observe(document.querySelector('.card:last-child'));

cards.forEach(card => {
  observer.observe(card)
})

function loadNewCard() {
  const card = document.createElement('div');
  card.textContent = 'New Card';
  card.classList.add('card');
  observer.observe(card);
  cardContainer.append(card);
}