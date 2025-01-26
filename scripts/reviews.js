const reviews = [
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/20200319_015103.jpg',
    reviewText: 'Jedna z pierwszych opinii o „Szeptach Przeszłości”.',
    link: 'https://maitiribooks.wordpress.com/2020/03/18/szepty-przeszlosci-milena-bres/'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/szepty.png',
    reviewText: 'Interesująca recenzja pewnej Pani psycholog.',
    link: 'https://kocieczytanie.blogspot.com/2020/04/cos-jest-ze-mna-nie-tak-nikt-mnie-nie.html'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/alif-caesar-rizqi-pratama-loulsoxl81c-unsplash-1.jpg?w=2048',
    reviewText: 'Czytelniczka Anna o „Szeptach Przeszłości”.',
    link: 'https://nakanapie.pl/recenzje/szepty-przeszlosci-szepty-przeszlosci'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/annie-spratt-gl7jooaabli-unsplash-1.jpg?w=2048',
    reviewText: 'Martyna ciekawie o mojej powieści.',
    link: 'https://nakanapie.pl/recenzje/szepty-szepty-przeszlosci'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/p1280627.jpg',
    reviewText: 'Recenzja Anny – mamy, żony – Kobiety…',
    link: 'https://nakanapie.pl/recenzje/szepty-przeszlosci-szepty-przeszlosci-83cb4b38-f4f4-4145-860a-66c7aa4bb9d7'

  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/fotografierende-rsge6ntntzo-unsplash.jpg?w=2048',
    reviewText: 'Opinia czytelniczki prowadzącej bookstagrama  o nazwie wciagam_ksiazki.',
    link: 'https://nakanapie.pl/recenzje/szepty-przeszlosci-szepty-przeszlosci-14c0b894-f460-49eb-a197-0479964f9bd1'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/john-mark-smith-p6uqpnyxci4-unsplash-1.jpg?w=2048',
    reviewText: 'Sylwia o „Szeptach Przeszłości”.',
    link: 'https://nakanapie.pl/recenzje/recenzja-ksiazki-szepty-przeszlosci-szepty-przeszlosci'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/116589959_1221642384845926_7754190678655842575_n.jpg',
    reviewText: 'Ewelina o mojej książce na stronie dlaLejdis.pl',
    link: 'https://dlalejdis.pl/artykuly/szepty_przeszlosci_recenzja'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/94592330_2731602736962703_4352101283138633728_n.jpg',
    reviewText: 'Recenzja powieści na blogu czytadeliczne.blogspot.com',
    link: 'https://czytadeliczne.blogspot.com/2020/04/szepty-przeszosci-milena-bres.html'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/116385004_2639534242977710_2968633751693179451_n.png',
    reviewText: 'Ewa z bloga Ewelina-czyta poleca „Szepty Przeszłości”.',
    link: 'https://ewelina-czyta.blogspot.com/2020/05/szepty-przeszosci.html'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/20200504_1257481.jpg?w=640',
    reviewText: 'Paula z bloga Turkusowa Kredka Czyta zachęca do przeczytania mojej ksiązki.',
    link: 'https://turkusowakredkaczyta.blogspot.com/2020/05/sze-pty-przeszosci-milena-bres.html'
  },
  {
    image: 'https://sheismilena.com/wp-content/uploads/2020/07/img_1961-1.jpeg',
    reviewText: 'Czytelniczka prowadząca blog Magia Słów pisze o „Szeptach Przeszłości”.',
    link: 'https://niezwykle-slowa.blogspot.com/2020/05/205-szepty-przeszosci.html'
  }
]

reviews.forEach((review) => {
  const reviewContainer = document.getElementById('review-container')
  const reviewCard = `
    <div class="review-card">
        <img class="review-image" src="${review.image}" alt="Szepty Book Cover">
        <div>
        <p>${review.reviewText}</p>
        <a href="${review.link}">Przeczytaj Recenzję</a>
        </div>
      </div>
      <div class="line"></div>
  `
  reviewContainer.innerHTML += reviewCard
})