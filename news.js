
  //first container***********************************
  var newsdata = [
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344778.6.jpg",
      name: "Stokes and Foakes build england's lead after Nortje's morning strikes South africa are now 61 runs behind ,with five wickets in the host's first innings still to pick  India is currently placed at number four with a win percentage of 52.08.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/244700/244741.8.jpg",
      name: "Sanjiv Gupta withdraws conflicts-of-intrest to safeguard health and life' sends email saying as much to supreme court, BCCI top brass and members of the india and india In the One Day Cup so far, Cheteshwar Pujara has smashed 614 runs in eight innings at an average of 102.33.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/333700/333781.6.jpg",
      name: "Straus reviews possiesses smaller shampionship tier 'revamped' 50 over competition consultation distrubated to counties to view with to voting in changes next month In the One Day Cup so far, Cheteshwar Pujara has smashed 614 runs in eight innings at an average",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/321500/321503.jpg",
      name: "The earliest reference to cricket is in South East England in the mid-16th century. It spread globally with the expansion of the British Empire, with the first international matches in the second half of the 19th century.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/329400/329423.6.jpg",
      name: "William Gilbert Grace MRCS LRCP (18 July 1848 – 23 October 1915) was an English amateur cricketer who was important in the development of the sport and is widely considered one of its greatest players..",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/326400/326429.6.jpg",
      name: "There is a consensus of expert opinion that cricket may have been invented during Saxon or Norman times by children living in the Weald, an area of dense woodlands and clearings in south-east England.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344762.6.jpg",
      name: "The name may have been derived from the Middle Dutch krick(-e), meaning a stick; or the Old English cricc or cryce meaning a crutch or staff, or the French word criquet meaning a wooden post.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344750.6.jpg",
      name: "Mithali ruled the 50-over format. At the time of her retirement, she ended as the most capped ODI player in women's cricket",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344755.jpg",
      name: "Graeme Smith (left) holds the record for most Test matches as captain, as well as most Test wins. Steve Waugh (right) is the most successful Test captain, with a winning ratio of 72%",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/330600/330686.6.jpg",
      name: "The Parsis were the first Indian civilian community to take to cricket. They set up the Oriental Cricket Club in Mumbai in 1848. It did a premature death, but the community then established the Young Zoroastrians Club in 1850.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344700/344752.6.jpg",
      name: "Typically, Test and first-class cricket matches are played over three to five days with, at least, six hours of cricket being played each day.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/336800/336846.6.jpg",
      name: "In cricket, if you catch the ball and then fall over the boundary, the batsman scores six runs and is not out. If a batsman hits the ball and it reaches the boundary of the field, he scores four runs immediately",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340200/340208.6.jpg",
      name: "The responsibility lies with the captains for ensuring that play is conducted within the spirit and traditions of the game, as described in The Preamble – The Spirit of Cricket, as well as within the Laws. The umpires shall be the sole judges of fair and unfair play.",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/293700/293764.6.jpg",
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

