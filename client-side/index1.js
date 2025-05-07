console.log("I am Running")

const hackathons = [
    {
      img: 'assets/milan-logo.jpeg',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum magnam qui similique labore iusto enim architecto officiis rem quas?'
    },
    {
      img: 'assets/milan-logo.jpeg',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum magnam qui similique labore iusto enim architecto officiis rem quas?'
    },
    {
      img: 'assets/milan-logo.jpeg',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum magnam qui similique labore iusto enim architecto officiis rem quas?'
    },
  ];
  
  const container = document.getElementById('hackathon-container');
  
  hackathons.forEach(hackathon => {
    const block = document.createElement('div');
    block.classList.add('hackathon-block');
  
    block.innerHTML = `
      <img src="${hackathon.img}" />
      <div>
        <h1>${hackathon.title}</h1>
        <p>${hackathon.description}</p>
        <button class="animated-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span class="text">E N T R Y</span>
          <span class="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
      </div>
    `;
  
    container.appendChild(block);
  });
  