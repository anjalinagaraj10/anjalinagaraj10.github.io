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
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-lg-8 col-sm-10 col-md-10 col-12' id='resume'><h2 id='cv-title'><b>Happy Birthday!</b></h2><h6 id='cv-email'><i>cake emoji.cake emoji.party pooper emoji</i></h6><hr><div class='row'><div class='col'><iframe id='vp1mCNfw' title='Video Player' width='360' height='360' frameborder='0' src='https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1573356343&f=mCNfwTY0CdZZsg70kRLkiA&d=0&m=p&r=360p&volume=100&start_res=undefined&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=' allowfullscreen></iframe></div></div><hr><div class='row' style='text-align:left'><div class='col-12 col-md-12 col-sm-12 col-lg-6'><ul><li><h5 id='cv-h5'><b>Tanisha</b></h5><p id='cv-p'>Happy Birthday Sam!You’re a super fun and entertaining person and spending time with you is always nice.Looking forward to many more movie nights,party planning adventures,riding on the scooter and hopefully one day getting our nails done together.🤍We’ll try throwing you another surprise party where we’ll get someone better than Sachin to dress up as a clown and actually scares you 🤡.Have a super fun day quarantining at home and eating lots and lots of yummy foodLove youTanishaaaaaaa</p></li><li><h5 id='cv-h5'><b>Nayanika</b></h5><p id='cv-p'>Hii,HAPPY BIRTHDAY sampriti.I suck at writing but anyway here goesI really miss hanging out with you guysI love how you make lame stories sound interesting.I miss hearing your explanations 😂.There literally isn’t a time where I haven’t laughed with you around.I am so happy that we finally have the same taste in music,like literally I’m just I’m looking forward to coming back and listening to new music with you.Thanks for always having my back.Also don’t worry you don’t have corona.Theres so much more that I want to say,but I do not know howTo put it into words.Anyways have a great day,love ya.Also watch this video(hope your happier than Tyler is,on your birthday)-https:</p></li><li><h5 id='cv-h5'><b>Sadiya</b></h5><p id='cv-p'>Happiest birthday Sampriti!!You are such a beautiful person-inside and out.You radiate positivity and make the people around you smile!Have a great great birthday at home 🤪 see you real sooon</p></li><li><h5 id='cv-h5'><b>Aruna</b></h5><p id='cv-p'>Heyy Sam ❤ Happy Birthdayy ❤ It's been forever since we met 😥 I miss ganging up against Anju, movie nights, and being the worst helpers when Anju cooks 😂 Ahhh so many memories that I can't put into a single message,so let's get together soon and make Anju cook some nice dish for us :P Love you man ❤ </p></li></ul> <hr> </h4> <hr> </div><div class='col-12 col-md-12 col-sm-12 col-lg-6'> <ul> <li> <h5 id='cv-h5'><b>Subbu</b></h5> <p id='cv-p'> Happy birthday Sam. You're already 19!I hope this virus thingy gets better quicker,So that we can have some liquor,with our favourite female nigger.-slim shady 2k20</p></li><li><h5 id='cv-h5'><b>Nitin</b></h5><p id='cv-p'>Hey sam,happy birthday!Dont be a fucking simp.Be good 🙂Lorem ipsum dolor sit amet,consectetur adipiscing elit.Etiam vel lacus sed erat mattis eleifend.Curabitur ullamcorper purus sit amet massa tempus,sed faucibus odio tincidunt.Nulla sit amet nibh sit amet dolor tristique molestie quis ullamcorper nulla.In finibus.</p></li><li><h5 id='cv-h5'><b>Malavika</b></h5><p id='cv-p'>The 2001 baby finally turns 19!Happy happy happy birthday Sampritiii!Its been almost 4 years since that really awkward first meeting in school and I’m still very thankful to Sishya for introducing you into my life.Despite me constantly making fun of you,I hope you know that I think you are one of the smartest,strongest and most independent people that I’ve met.Though we’re opposites in many ways I definitely have a lot to learn from you when it comes to not taking oneself too seriously,being kinder to people around me and just handling life in general.Thanks for all the laughs(both at and with you:)),school memories,Frankie talks and also for willing to get your feet wet at the beach everytime:));you’re a beautiful person-inside and out.</p></li></ul><hr></h4><hr></div></div></div><div class='col'></div>"
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
