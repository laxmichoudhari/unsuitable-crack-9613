
  //first container
  var teamsdata = [
    // first row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
      name: "India",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png",
      name: "Afganistan",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png",
      name: " Australia",
    },
    // second row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
      name: "Bangladesh",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
      name: "England",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png",
      name: "Ireland",
    },
    // third row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png",
      name: "New Zealand",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
      name: "Pakistan",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313150.logo.png",
      name: "Scotland",
    },
    // fourth row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
      name: "South Africa",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
      name: "Shri Lanka",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png",
      name: "United Arab Emirates",
    },
    // fifth row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
      name: "West Indies",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png",
      name: "Zimbabwe",
    },
  ];
  // console.log(mensData.length)

  teamsdata.forEach(function (elem) {
    // console.log(elem);

    let box = document.createElement("div");

    let team_img = document.createElement("img");

    team_img.setAttribute("src", elem.image_url);

    let title = document.createElement("h2");

    title.innerText = elem.name;

    box.append(team_img, title);

    document.querySelector("#box1").append(box);
  });

  //second container
  var teamsdata = [
    // first row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313309.logo.png",
      name: "India Women",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313225.logo.png",
      name: "Australia Women",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313261.logo.png",
      name: "England Women",
    },
    // second row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
      name: "Bangladesh Women",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313335.logo.png",
      name: "New Zealand Women",
    },
    {
      image_url:
        "hhttps://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313341.logo.png",
      name: "Pakistan Women",
    },
    // third row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313348.logo.png",
      name: "South Africa Women",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
      name: "Sri Lanka Women",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313402.logo.png",
      name: "Thailand Women",
    },
    // fourth row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
      name: "West indies Women",
    },
  ];
  // console.log(teamsdata.length)

  teamsdata.forEach(function (elem) {
    // console.log(elem);

    let box = document.createElement("div");

    let team_img = document.createElement("img");

    team_img.setAttribute("src", elem.image_url);

    let title = document.createElement("h2");

    title.innerText = elem.name;

    box.append(team_img, title);

    document.querySelector("#box2").append(box);
  });

  //third container
  var teamsdata = [
    // first row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png",
      name: "Chennai Super Kings",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png",
      name: "Delhi Capitals",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334700/334707.png",
      name: "Gujrat Titans",
    },
    // second row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png",
      name: "Kolkata Knight Riders",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/333800/333885.png",
      name: "Lakhnow Super Giants",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/344000/344062.png",
      name: "Mumbai Indians",
    },
    // third row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317000/317003.png",
      name: "Punjab Kings",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png",
      name: "Rajstan Royals",
    },
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png",
      name: "Royal Challengers Banglore",
    },
    // fourth row
    {
      image_url:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313480.logo.png",
      name: "Sunrisers Hyderabad",
    },
  ];
  // console.log(teamsdata.length)

  teamsdata.forEach(function (elem) {
    // console.log(elem);

    let box = document.createElement("div");

    let team_img = document.createElement("img");

    team_img.setAttribute("src", elem.image_url);

    let title = document.createElement("h2");

    title.innerText = elem.name;

    box.append(team_img, title);

    document.querySelector("#box3").append(box);
  });
