document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      img: "assets/pic/Ampika.png",
      short: "Ampika Pukam",
      full: "“It was the best thing that could have happened in the life of a hill-tribe girl like me. I thought I would not have an opportunity for a higher education. I do hope the Bangkok Post Foundation continues to give opportunities to needy students in this developing part of the country.”"
    },
    {
      img: "assets/pic/Anosorn.png",
      short: "Anusorn Pinsuwan",
      full: "“I’d like to thank the foundation. Without their support I would not be able to come to this point in my life. To fulfill the goals of the foundation, I am ready to offer my expertise by giving consultation on engineering and construction.”"
    },
    {
      img: "assets/pic/Kalyakorn.png",
      short: "Khatawut Wisreethippakorn",
      full: "“Whenever I have some problems, people from the foundation always suggested what to do. Those suggestions were good motivation. I felt like I want to put more effort on whatever I was doing and I didn’t just want to give up easily.”"
    },
    {
      img: "assets/pic/Nattapum.png",
      short: "Nattapum Saengprasit",
      full: "“I would like to express my gratitude to the foundation and all those who gave me a chance to stand on my own. This scholarship was the only opportunity I had. If I hadn’t received the scholarship, I would end up being a beggar or a lottery ticket seller.”"
    },
    {
      img: "assets/pic/Pornprom.png",
      short: "Kalyakorn Wongrak",
      full: "“The funds were a great help. My parents didn’t have to pay a baht during my years in university. I have come far beyond the dream of a typical country girl. I feel thankful to the people who have supported me and pushed me to this point in life.”"
    },
    {
      img: "assets/pic/Saharat.png",
      short: "Saharat Kluekij",
      full: "“I’m deeply grateful to the Bangkok Post Foundation, not only for the scholarship but also for the good advice and moral support throughout the years until I finished my degree. I want to give back to society, I want to see other disadvantaged youngsters get the same opportunities I had”"
    },
    {
      img: "assets/pic/Thundorn.png",
      short: "Thundron Parkminakom",
      full: "“The Bangkok Post Foundation provides scholarships to the less fortunate in society without asking for anything in return. I would like to do the same and give something back to society by providing voluntary nursing care to monks in remote parts of the Northeast.”"
    },
    {
      img: "assets/pic/Warin.png",
      short: "Dr Warin Yuyangket",
      full: "“The aim of the foundation is good. It gives an opportunity to poor people who may wish to help society but are short of funds. It allows them to use their knowledge to repay society.”"
    },

  ];

  const grid = document.getElementById("storiesGrid");

  data.forEach(item => {

    const card = document.createElement("div");
    card.className = "story-card";

    card.innerHTML = `
      <img src="${item.img}" alt="">
      <div class="overlay-text">${item.short}</div>
      <div class="overlay-full">
        <p>${item.full}</p>
      </div>
    `;

    card.addEventListener("click", function () {

      document.querySelectorAll(".story-card")
        .forEach(c => { if (c !== card) c.classList.remove("active"); });

      card.classList.toggle("active");

    });

    grid.appendChild(card);
  });

  const images = [
    "assets/card1.jpg",
    "assets/card2.png",
    "assets/card3.png",
    "assets/card4.png"
  ];

  const imageElement = document.getElementById("phudImage");
  const dots = document.querySelectorAll(".dot");

  dots.forEach(dot => {
    dot.addEventListener("click", function () {

      const index = this.dataset.index;

      imageElement.style.opacity = 0;

      setTimeout(() => {
        imageElement.src = images[index];
        imageElement.style.opacity = 1;
      }, 200);

      dots.forEach(d => d.classList.remove("active"));
      this.classList.add("active");

    });
  });



  const data2 = [
    {
      img: "assets/pic/Ampika.png",
      quote: "LOREMLOREMLOREM LOREMLOREMLOREM LOREMLOREMLOREM",
      name: "K. AMPIKA"
    },
    {
      img: "assets/pic/Anosorn.png",
      quote: "LOREMLOREMLOREM LOREMLOREMLOREM LOREMLOREMLOREM",
      name: "ANOSORN"
    },
    {
      img: "assets/pic/Kalyakorn.png",
      quote: "LOREMLOREMLOREM LOREMLOREMLOREM LOREMLOREMLOREM",
      name: "KALYAKORN"
    }
  ];

  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let current = 0;

  function renderSlides() {
    track.innerHTML = "";

    data2.forEach((item, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      if (index === current) slide.classList.add("active");

      slide.innerHTML = `
      <img src="${item.img}" />
      <div class="quote">
        “${item.quote}”<br/>
        <strong>${item.name}</strong>
      </div>
    `;

      track.appendChild(slide);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + data2.length) % data2.length;
    renderSlides();
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % data2.length;
    renderSlides();
  });

  renderSlides();


  const avatars = document.querySelectorAll(".avatar");

  avatars.forEach(avatar => {
    avatar.addEventListener("click", function () {

      avatars.forEach(a => a.classList.remove("active"));

      this.classList.add("active");

    });
  });



  const machine1 = new SlotMachine(
    document.getElementById('machine1'),
    { active: 0, delay: 300 }
  );

  const machine2 = new SlotMachine(
    document.getElementById('machine2'),
    { active: 0, delay: 300 }
  );

  const machine3 = new SlotMachine(
    document.getElementById('machine3'),
    { active: 0, delay: 300 }
  );

  const prizes = ["76 Logo", "Magazine", "Newspaper"];

  const spinBtn = document.getElementById("spin");
  const stopBtn = document.getElementById("stop");
  const resultText = document.getElementById("result");

  let isSpinning = false;
  let spinLoop1, spinLoop2, spinLoop3;

  spinBtn.addEventListener("click", function () {

    if (isSpinning) return;

    isSpinning = true;
    resultText.innerText = "Spinning...";

    spinLoop1 = setInterval(() => machine1.shuffle(1), 150);
    spinLoop2 = setInterval(() => machine2.shuffle(1), 150);
    spinLoop3 = setInterval(() => machine3.shuffle(1), 180);

  });

  stopBtn.addEventListener("click", async function () {

    if (!isSpinning) return;

    clearInterval(spinLoop1);
    clearInterval(spinLoop2);
    clearInterval(spinLoop3);

    const random1 = Math.floor(Math.random() * prizes.length);
    const random2 = Math.floor(Math.random() * prizes.length);
    const random3 = Math.floor(Math.random() * prizes.length);

    machine1.active = random1;
    machine2.active = random2;
    machine3.active = random3;

    const final1 = await machine1.stop();
    const final2 = await machine2.stop();
    const final3 = await machine3.stop();

    isSpinning = false;

    resultText.innerText =
      `You got: ${prizes[final1]} | ${prizes[final2]} | ${prizes[final3]}`;

  });



});
