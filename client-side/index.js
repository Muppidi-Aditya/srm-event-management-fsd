console.log("I am running")

const imgArr = [
    "assets/img---1.jpeg",
    "assets/img---2.jpeg",
    "assets/img----3.jpeg",
    "assets/img----4.jpeg",
    "assets/img-----5.jpeg",
    "assets/img-----6.jpeg",
    "https://lh5.googleusercontent.com/p/AF1QipNNOXk2BgMx6ipdrF4h_OpU5EE16no8W6h91ZUO=w203-h270-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOh6oXIyzNrLEkQEwtrRmHwitfOhnlQMlwfZX7u=s812-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPios2qpBPg4HbOfTlP5f-6m-CMcsEWEHK_mDtx=s871-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN5LWsvmeLA-PsHU6bMcIxv2fF5K9meAEMR0xQG=s1016-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNezWf6Q5ShLm93w_sJOc6S5kBihYdQh7SKi1er=s1354-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOoce3kHQMIC_r0pfmmqeKa_shU0SquS_PRsSfl=s1354-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNsECPCzTc8tEN_ACEwAXEooM0ra2vctZBrPzz8=s809-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOoC7CldKbyTK45Si7CXd7NJEyQnR2eR7HODWby=s812-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN5SFgs2a_va4I4JdrnR5BTeDmhK5-7pZCDv9Y2=s901-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO5lfKx4ZI8p-m_lNcq9NTefxy1FSLyzWSl_2GV=s870-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPLJvisKhbbVM8HtwjDcAliPR1KatH7TEfoLlVq=s870-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOetE8moXdLFdP5sW6mK-8lXl-B5yx33NOi9C4J=s812-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNYFslrMhV4SupHGJddXAJ0CAFUqmUUtMM63jrO=s1013-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOzTz3fXCOVUb6Dt_zX0EipU5qHdusnTnlCdYXD=s870-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPIZLXW8tudRVj1yB1g9KjZU0ceoCkBLlJdyTJT=s901-k-no"
];

const imageContainer = document.getElementById("image-container");

        imgArr.forEach((imgSrc) => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = imgSrc;
            figure.appendChild(img);
            imageContainer.appendChild(figure);
});