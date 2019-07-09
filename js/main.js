jQuery(document).ready(function ($) {

	// Smooth scroll for the menu and links with .scrollto classes
	$('.smothscroll').on('click', function (e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {

				$('html, body').animate({
					scrollTop: target.offset().top 
				}, 1500, 'easeInOutExpo');
			}
		}
	});

	$('.carousel').carousel({
		interval: 3500
	});

	// JavaScript Chart
	var doughnutData = [{
			value: 85,
			color: "#1abc9c"
    },
		{
			value: 15,
			color: "#ecf0f1"
    }
  ];
	var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

	// Bootstrap Chart
	var doughnutData = [{
			value: 90,
			color: "#1abc9c"
  },
		{
			value: 10,
			color: "#ecf0f1"
  }
  ];
	var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

	// WordPress Chart
	var doughnutData = [{
			value: 70,
			color: "#1abc9c"
  },
		{
			value: 30,
			color: "#ecf0f1"
  }
  ];
	var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

	// HTML Chart
	var doughnutData = [{
			value: 70,
			color: "#1abc9c"
  },
		{
			value: 30,
			color: "#ecf0f1"
  }
  ];
	var myDoughnut = new Chart(document.getElementById("ruby").getContext("2d")).Doughnut(doughnutData);

	// Photoshop Chart
	var doughnutData = [{
			value: 65,
			color: "#1abc9c"
  },
		{
			value: 35,
			color: "#ecf0f1"
  }
  ];
	var myDoughnut = new Chart(document.getElementById("reactnative").getContext("2d")).Doughnut(doughnutData);

	// Illustrator Chart
	var doughnutData = [{
			value: 40,
			color: "#1abc9c"
  },
		{
			value: 60,
			color: "#ecf0f1"
  }
  ];
	var myDoughnut = new Chart(document.getElementById("flutter").getContext("2d")).Doughnut(doughnutData);
	
});
//固定TOPバーを後ろに隠す
$(".btn-lg").click(function(){
  $("#section-topbar").css({
        "z-index": "0",
    });
});
$(".btn-lg").click(function(){
  $("#smp-topbar").css({
        "z-index": "0",
    });
});

//固定TOPバーを前に出す
$(".btn-default").click(function(){
   $("#section-topbar").css({
        "z-index": "1",
    });
});
$(".close").click(function(){
   $("#section-topbar").css({
        "z-index": "1",
    });
});

$(".btn-default").click(function(){
   $("#smp-topbar").css({
        "z-index": "1",
    });
});
$(".close").click(function(){
   $("#smp-topbar").css({
        "z-index": "1",
    });
});
