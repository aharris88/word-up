var score = 0;
var highScore = 19;
var savedColors = [];

var svg = d3.select('#game')
	.append('svg')
	.attr({
		'height': 600,
		'width': 600
	});

var chart = svg.append("g")
	.chart('boggle-down');

var data = [
  {
    id: 0,
    value: 'W',
    row: 0,
    column: 0,
    color: getRandomColor(0)
  },
  {
    id: 1,
    value: 'O',
    row: 0,
    column: 1,
    color: getRandomColor(1)
  },
  {
    id: 2,
    value: 'T',
    row: 0,
    column: 2,
    color: getRandomColor(2)
  },
  {
    id: 3,
    value: 'Qu',
    row: 0,
    column: 3,
    color: getRandomColor(3)
  },
  {
    id: 4,
    value: 'L',
    row: 1,
    column: 0,
    color: getRandomColor(4)
  },
  {
    id: 5,
    value: 'S',
    row: 1,
    column: 1,
    color: getRandomColor(5)
  },
  {
    id: 6,
    value: 'R',
    row: 1,
    column: 2,
    color: getRandomColor(6)
  },
  {
    id: 7,
    value: 'A',
    row: 1,
    column: 3,
    color: getRandomColor(7)
  },
  {
    id: 8,
    value: 'Y',
    row: 2,
    column: 0,
    color: getRandomColor(8)
  },
  {
    id: 9,
    value: 'E',
    row: 2,
    column: 1,
    color: getRandomColor(9)
  },
  {
    id: 10,
    value: 'C',
    row: 2,
    column: 2,
    color: getRandomColor(10)
  },
  {
    id: 11,
    value: 'V',
    row: 2,
    column: 3,
    color: getRandomColor(11)
  },
  {
    id: 12,
    value: 'T',
    row: 3,
    column: 0,
    color: getRandomColor(12)
  },
  {
    id: 13,
    value: 'I',
    row: 3,
    column: 1,
    color: getRandomColor(13)
  },
  {
    id: 14,
    value: 'P',
    row: 3,
    column: 2,
    color: getRandomColor(14)
  },
  {
    id: 15,
    value: 'E',
    row: 3,
    column: 3,
    color: getRandomColor(15)
  },
  {
    id: 16,
    value: 'A',
    row: 4,
    column: 0,
    color: getRandomColor(16)
  },
  {
    id: 17,
    value: 'H',
    row: 4,
    column: 1,
    color: getRandomColor(17)
  },
  {
    id: 18,
    value: 'E',
    row: 4,
    column: 2,
    color: getRandomColor(18)
  },
  {
    id: 19,
    value: 'U',
    row: 4,
    column: 3,
    color: getRandomColor(19)
  },
  {
    id: 20,
    value: 'C',
    row: 5,
    column: 0,
    color: getRandomColor(20)
  },
  {
    id: 21,
    value: 'O',
    row: 5,
    column: 1,
    color: getRandomColor(21)
  },
  {
    id: 22,
    value: 'H',
    row: 5,
    column: 2,
    color: getRandomColor(22)
  },
  {
    id: 23,
    value: 'R',
    row: 5,
    column: 3,
    color: getRandomColor(23)
  }
];
var data2 = [
  {
    id: 0,
    value: 'W',
    row: 0,
    column: 0,
    color: getRandomColor(0)
  },
  {
    id: 1,
    value: 'O',
    row: 0,
    column: 1,
    color: getRandomColor(1)
  },
  {
    id: 2,
    value: 'T',
    row: 0,
    column: 2,
    color: getRandomColor(2)
  },
  {
    id: 3,
    value: 'Qu',
    row: 0,
    column: 3,
    color: getRandomColor(3)
  },
  {
    id: 4,
    value: 'L',
    row: 1,
    column: 0,
    color: getRandomColor(4)
  },
  {
    id: 5,
    value: 'S',
    row: 1,
    column: 1,
    color: getRandomColor(5)
  },
  {
    id: 6,
    value: 'R',
    row: 1,
    column: 2,
    color: getRandomColor(6)
  },
  {
    id: 7,
    value: 'A',
    row: 1,
    column: 3,
    color: getRandomColor(7)
  },
  {
    id: 8,
    value: 'Y',
    row: 2,
    column: 0,
    color: getRandomColor(8)
  },
  {
    id: 9,
    value: 'E',
    row: 2,
    column: 1,
    color: getRandomColor(9)
  },
  {
    id: 10,
    value: 'C',
    row: 2,
    column: 2,
    color: getRandomColor(10)
  },
  {
    id: 11,
    value: 'V',
    row: 2,
    column: 3,
    color: getRandomColor(11)
  },
  {
    id: 15,
    value: 'E',
    row: 3,
    column: 3,
    color: getRandomColor(15)
  },
  {
    id: 16,
    value: 'A',
    row: 3,
    column: 0,
    color: getRandomColor(16)
  },
  {
    id: 17,
    value: 'H',
    row: 3,
    column: 1,
    color: getRandomColor(17)
  },
  {
    id: 18,
    value: 'E',
    row: 3,
    column: 2,
    color: getRandomColor(18)
  },
  {
    id: 19,
    value: 'U',
    row: 4,
    column: 3,
    color: getRandomColor(19)
  },
  {
    id: 20,
    value: 'C',
    row: 4,
    column: 0,
    color: getRandomColor(20)
  },
  {
    id: 21,
    value: 'O',
    row: 4,
    column: 1,
    color: getRandomColor(21)
  },
  {
    id: 22,
    value: 'H',
    row: 4,
    column: 2,
    color: getRandomColor(22)
  },
  {
    id: 23,
    value: 'R',
    row: 5,
    column: 3,
    color: getRandomColor(23)
  },
  {
    id: 24,
    value: 'S',
    row: 5,
    column: 0,
    color: getRandomColor(24)
  },
  {
    id: 25,
    value: 'I',
    row: 5,
    column: 1,
    color: getRandomColor(25)
  },
  {
    id: 26,
    value: 'A',
    row: 5,
    column: 2,
    color: getRandomColor(26)
  }
];

chart.draw(data);

setTimeout(function() {
  chart.draw(data2);
}, 1000);

setupScores();

chart.on('wordCreated', function(word, data) {
  var currentScore = getPointsForWord(word);
  addToScore(currentScore);
});

var isDragging = false;
var selectedLetters = [];
d3.selectAll('.letterGroup')
  .on('mousedown', function() {
    isDragging = true;
  })
  .on('mouseup', function() {
    isDragging = false;
  })
  .on('mouseenter', function(d) {
    if (isDragging) {
      selectedLetters.push(d.id);
      d3.select(this).classed('selected', true);
    }
  });

function getPointsForWord(word) {
  var points;

  switch(word.length) {
    case 3:
      points = 1;
      break;
    case 4:
      points = 1;
      break;
    case 5:
      points = 2;
      break;
    case 6:
      points = 3;
      break;
    case 7:
      points = 5;
      break;
  }

  if (word.length < 3) {
    points = 0;
  } else if (word.length > 7) {
    points = 11;
  }

  return points;
}

function getRandomColor(id) {
  var colors = ['#F75168', '#678FC1', '#b5577e', '#1DAD7C', '#F98D3F'];
  var randomIndex = Math.floor(Math.random() * colors.length);

  if (savedColors[id] === undefined) {
    savedColors[id] = colors[randomIndex];
  }
  return savedColors[id];
}

function addToScore(newScore) {
  score += newScore;
  d3.select('#score').html(score);
}

function addToHighScore(newScore) {
  highScore += newScore;
  d3.select('#highScore').html(highScore);
}

function setupScores() {
  d3.select('#score').html(score);
  d3.select('#highScore').html(highScore);
}
