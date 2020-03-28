ext = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


particlesJS('particles', ext, function() {
  console.log('callback - particles.js config loaded');
});



function navbar_font() {
  if (!$('#navbarTogglerDemo02').is(":hidden")) {
    $('.nav-link').removeClass('nav-link-mobile')
    $('.navbar-brand').removeClass('navbar-brand-mobile')
  } else {
    $('.nav-link').addClass('nav-link-mobile')
    $('.navbar-brand').addClass('navbar-brand-mobile')
  }
}



function aboutme() {
  $('#name-row').removeClass('name-row-scroll');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-10 col-md-10 col-sm-8 col-lg-4' id='about-sum'> <p> <h2 id='about-title-h2'>Hi, I'm Anjali </h2> I'm a A1 piece of shit and I don't know what I'm currently doing with my life. I love irritating my friends and I currently specialize in making giraffe noises. I also am perpetually high and think that my toy monkey is a living thing. </p><p> I give creepy looks to everyone. I don't understand why but i like doing this. Honestly, if i just did my ECS homework <u> myself </u> and didn't take help [make Mihir do the homework], I would do way better :) </p><p> But despite this, I'm actually a really nice person at heart, and I'm always there for my friends whenever they need me. </p><p> <h2 id='about-title-h2'>Also I'm turning 19 today !!</h2> </p></div><div class='col'></div>"
}

function profile() {
  $('#name-row').removeClass('name-row-scroll');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-10 col-sm-10 col-md-8 col-lg-3'><div class='container' id='name-box'><img src='public/img/Avatar.jpeg' id='avatar' class='mx-auto d-block'><h2 id='name'>Sampriti Sivarajan</h2><h6 id='name-des'>Queen of the thots and making bad decisions</h6><h2 class='row' id='icon-row'><div class='col'></div><div class='col-3'><a class='fa fa-linkedin' aria-hidden='true' href='https://www.linkedin.com/in/anjaligns/'></a></div><div class='col-3'><a class='fa fa-github' aria-hidden='true' href='https://github.com/curiouserandcuriouser01'></a></div><div class='col'></div></h2></div></div><div class='col'></div></div>"
}

function cv() { 
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-lg-8 col-sm-10 col-md-10 col-12' id='resume'><h2 id='cv-title'><b>Happy Birthday!</b></h2><h6 id='cv-email'><i>cake emoji.cake emoji.party pooper emoji</i></h6><hr><div class='row'><div class='col'><iframe id='vp1mCNfw' title='Video Player' width='360' height='360' frameborder='0' src='https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1573356343&f=mCNfwTY0CdZZsg70kRLkiA&d=0&m=p&r=360p&volume=100&start_res=undefined&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=' allowfullscreen></iframe></div></div><hr><div class='row' style='text-align:left'><div class='col-12 col-md-12 col-sm-12 col-lg-6'><ul><li><h5 id='cv-h5'><b>Tanisha</b></h5><p id='cv-p'>Happy Birthday Sam!You’re a super fun and entertaining person and spending time with you is always nice.Looking forward to many more movie nights,party planning adventures,riding on the scooter and hopefully one day getting our nails done together.🤍We’ll try throwing you another surprise party where we’ll get someone better than Sachin to dress up as a clown and actually scares you 🤡.Have a super fun day quarantining at home and eating lots and lots of yummy foodLove youTanishaaaaaaa</p></li><li><h5 id='cv-h5'><b>Nayanika</b></h5><p id='cv-p'>Hii,HAPPY BIRTHDAY sampriti.I suck at writing but anyway here goesI really miss hanging out with you guysI love how you make lame stories sound interesting.I miss hearing your explanations 😂.There literally isn’t a time where I haven’t laughed with you around.I am so happy that we finally have the same taste in music,like literally I’m just I’m looking forward to coming back and listening to new music with you.Thanks for always having my back.Also don’t worry you don’t have corona.Theres so much more that I want to say,but I do not know howTo put it into words.Anyways have a great day,love ya.Also watch this video(hope your happier than Tyler is,on your birthday)-https:</p></li><li><h5 id='cv-h5'><b>Sadiya</b></h5><p id='cv-p'>Happiest birthday Sampriti!!You are such a beautiful person-inside and out.You radiate positivity and make the people around you smile!Have a great great birthday at home 🤪 see you real sooon</p></li><li><h5 id='cv-h5'><b>Aruna</b></h5><p id='cv-p'>Heyy Sam ❤ Happy Birthdayy ❤ It's been forever since we met 😥 I miss ganging up against Anju, movie nights, and being the worst helpers when Anju cooks 😂 Ahhh so many memories that I can't put into a single message,so let's get together soon and make Anju cook some nice dish for us :P Love you man ❤ </p></li><li> <h5 id='cv-h5'><b>Srikumar</b></h5> <p id='cv-p'> I know you are scared to read what I will be writing about, but don’t worry what comes ahead is not that bad. You are one of the most sweet, caring and hilarious people I know, and the smartest girl in the while world. When someone tells that to you don’t believe them cuz they are bullshitting you right on your face. This is the truth and you need to accept it. But seriously, you a very nice, sweet and crazy. I personally think you are very talented because you put up with my bullshit like every day. You do annoy the shit out of me sometimes but that’s fine I know I did the same to you. You need to know that when I mean I will leak your passwords I don’t mean it. FYI: I am more south Indian than you are and far cooler than you. Also, u should stop third wheeling in my dates, LOL!!!!! HAPPY 19TH BIRTHDAY FIONA AND I HOPE YOUR SHREK APRROACHES YOU SOON 😉 </p></li><li> <h5 id='cv-h5'><b>Mihir</b></h5> <p id='cv-p'> <h2 id='about-title-h2'>Bitch, I made this. Appreciate. </h2> <p id='cv-p'>But in all seriousness, thank you for being such an amazing friend, supporting me everytime I talked about life being shit and stressful. Kearney 3 wasn't Kearney 3 without you.Be it doing webworks just before class or getting screwed by Porquet together,[OR ME DOING YOUR HW],its been an amazing one yearknowing you.Thank you.</p></p></li><li><h5 id='cv-h5'><b>Reesha</b></h5><p id='cv-p'>Hey Anjali,HAPPY BIRTHDAY!!!I hope your last day as an 18 year old was as lit as you wantedit to be.It’s crazy how you never get high no matter what you take because you are naturallyon that level always smiling and giggling.Have a great one:)</p></li></ul><hr></h4><hr></div><div class='col-12 col-md-12 col-sm-12 col-lg-6'><ul><li><h5 id='cv-h5'><b>Subbu</b></h5><p id='cv-p'>Happy birthday Sam.You're already 19! I hope this virus thingy gets better quicker, So that we can have some liquor, with our favourite female nigger. -slim shady 2k20 </p></li><li> <h5 id='cv-h5'><b>Nitin</b></h5> <p id='cv-p'> Hey sam, happy birthday! Dont be a fucking simp. Be good 🙂Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel lacus sed erat mattis eleifend. Curabitur ullamcorper purus sit amet massa tempus, sed faucibus odio tincidunt. Nulla sit amet nibh sit amet dolor tristique molestie quis ullamcorper nulla. In finibus. </p></li><li> <h5 id='cv-h5'><b>Rushi</b></h5> <p id='cv-p'> So I devoted much of my time today retrospecting on the Shrek series. Specifically, I ruminated over a matter of contention between us on who the true protagonist of this classic trilogy is; Donkey or Shrek. On the one hand, as you pointed out, all three movies do focus on consecutive stages of Shrek’s life, with the plot of each movie essentially being a hero’s journey in which Shrek overcomes a challenge and in the process experiences personal growth. Again, as you pointed out the series is also named after him. On the other hand, I argued for Donkey being the protagonist because I felt like disagreeing with you in the moment and I’m stubborn. After much deliberation, and careful reflection on the movies themselves and the facts you presented, I concede to you that Shrek is the protagonist of the Shrek movies. </p><p id='cv-p'> Now that this matter of importance is out of the way, I also wanted to wish you a Happy Birthday. Being a whole two years older than you, I consider it my obligation to share with you the vast reservoirs of wisdom my seniority has endowed me. However, my reservoirs are too vast for the space Mihir has allotted me on this page, so I guess I will have to enlighten you another time. Besides, I get the feeling you have what it takes to handle life as a nineteen year old just fine without my wisdom. You are one of the funniest people I know and have the magical ability of brightening up a room like nobody I’ve met before, Even though you sometimes act dumb, you are actually really smart, and most importantly, even though you repeatedly deny it, you are an amazing dancer! It has been great being your friend and spending time with you over the past year. I really, really hope we can plan a hike soon. Here’s to you turning nineteen! May this be the year you finally do a proper unassisted push-up. </p></li><li> <h5 id='cv-h5'><b>Yuga</b></h5> <p id='cv-p'> Happy Birthday Anjali!!! You were my first friend in davis!!( honestly i never thought we would vibe, but we bonded over our stupidity i guess??) There are a few things that i appreciate about you as a friend and i wouldn't tell them to you if it weren't your bday, so there you go, Whenever i've come to you with a problem,i didn't get a solution,but your humor (which i do get btw) definitely lightened my mood and that is exactly what i needed at that time, so thank you. Your storytelling skills are on point, and i'm not even kidding but your hiking stories have actuallyinspired me to achieve more in life😂.I believe you can give a ted talk someday,and that's why stay my friend cause i need free tickets to the event. Thank you for being here and listening to my Ted talk and i wish you a very happy birthday. </p></li></ul> <hr> </h4> <hr> </div></div></div><div class='col'></div>"
  $('#name-row').addClass('name-row-scroll');
}


function startup() {
  navbar_font();
  profile();
}

window.onload = startup();

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  $(".navbar-brand").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
})
