
  //first container***********************************
  var newsdata = [
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/334100/334162.6.jpg",
        name: "West Indies batsman Brian Lara has the highest individual score in Test cricket: he scored 400 not out against England in 2004 to surpass the innings of 380 by Matthew Hayden six months earlier.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/332900/332995.6.jpg",
        name: "The responsibility lies with the captains for ensuring that play is conducted within the spirit as described in The Preamble – The Spirit of Cricket, as well as within the Laws. The sole judges of fair and unfair play.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344797.6.jpg",
        name: "In cricket, if you catch the ball and then fall over the boundary, the batsman scores six runs and is not out. If a batsman hits the ball and it reaches the boundary of the field, he scores four runs immediately",

    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/333700/333782.6.jpg",
        name: "Typically, Test and first-class cricket matches are played over three to five days with, at least, six hours of cricket being played each day.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344770.6.jpg",
        name: "The Parsis were the first Indian civilian community to take to cricket. They set up the Oriental Cricket Club in Mumbai in 1848. It did a premature death, but the community then established the Young Zoroastrians Club in 1850.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/326400/326429.6.jpg",
        name: "Graeme Smith (left) holds the record for most Test matches as captain, as well as most Test wins. Steve Waugh (right) is the most successful Test captain, with a winning ratio of 72%",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344731.6.jpg",
        name: "Mithali ruled the 50-over format. At the time of her retirement, she ended as the most capped ODI player in women's cricket",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344500/344566.6.jpg",
      name: "Mithali ruled the 50-over format. At the time of her retirement, she ended as the most capped ODI player in women's cricket",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344767.6.jpg",
      name: "Graeme Smith (left) holds the record for most Test matches as captain, as well as most Test wins. Steve Waugh (right) is the most successful Test captain, with a winning ratio of 72%",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/308900/308967.8.jpg",
      name: "The Parsis were the first Indian civilian community to take to cricket. They set up the Oriental Cricket Club in Mumbai in 1848. It did a premature death, but the community then established the Young Zoroastrians Club in 1850.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/294100/294114.6.jpg",
      name: "Typically, Test and first-class cricket matches are played over three to five days with, at least, six hours of cricket being played each day.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/272700/272724.6.jpg",
      name: "In cricket, if you catch the ball and then fall over the boundary, the batsman scores six runs and is not out. If a batsman hits the ball and it reaches the boundary of the field, he scores four runs immediately",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344713.6.jpg",
      name: "The responsibility lies with the captains for ensuring that play is conducted within the spirit and traditions of the game, as described in The Preamble – The Spirit of Cricket, as well as within the Laws. The umpires shall be the sole judges of fair and unfair play.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344641.6.jpg",
      name: "West Indies batsman Brian Lara has the highest individual score in Test cricket: he scored 400 not out against England in 2004 to surpass the innings of 380 by Matthew Hayden six months earlier.",
    },
  ];
  // console.log(newsdata.length)

  newsdata.forEach(function (elem) {
    // console.log(elem);

    let box = document.createElement("div");

    let news_img = document.createElement("img");

    news_img.setAttribute("src", elem.image_url);

    let title = document.createElement("h1");
    title.innerText = elem.name;

    // let para = document.createElement("p");
    // para.innerText = elem.info;

    box.append(news_img, title);

    document.querySelector("#first").append(box);
  });

  //second container***********************************

  var readdata = [
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334000/334002.11.jpg",
      name: "The earliest reference to cricket is in South East England in the mid-16th century.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341100/341128.10.jpg",
      name: "The name may have been derived from the Middle Dutch krick(-e), meaning a stick. ",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/336800/336846.10.jpg",
      name: "Mithali ruled the 50-over format. At the time of her retirement, she ended as the most capped ODI. ",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/344400/344470.10.jpg",
      name: "Graeme Smith (left) holds the record for most Test matches as captain, as well as most Test wins.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/290700/290789.10.jpg",
      name: "Steve Waugh is arguably the greatest captain of the modern era. He won 41 Tests in 57 matches.",
    },
  ];

  readdata.forEach(function (ele) {
    let box = document.createElement("div");

    let news_img = document.createElement("img");
    news_img.setAttribute("src", ele.image_url);

    let title = document.createElement("h1");
    title.innerText = ele.name;

    box.append(news_img, title);
    document.querySelector("#sec").append(box);
  });

  var mostdata = [
    {
      name : "Osman Samiud",
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/103900/103930.1.jpg",
      
    },
    {
      name : "Siddarth  Monga",
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314662.png",
    },
    {
      name : "Alan Gardnerez",
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/178600/178647.gif",
    },
    {
      name : "Lan chappelelz",
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/103600/103657.gif",
    },
    {
      name : "Valkarie Baynes",
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314666.png",
    },
  ];

  mostdata.forEach(function (ele) {
    let box = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = ele.name;

    let news_img = document.createElement("img");
    news_img.setAttribute("src", ele.image_url);

    box.append( title,news_img);
    document.querySelector("#sec2").append(box);
  });

