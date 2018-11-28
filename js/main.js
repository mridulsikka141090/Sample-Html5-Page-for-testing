function Car(progressWidth = [], carName) {
    this.ProgressWidth = progressWidth;
    this.carName = carName;
    var total = 0;
    this.averageValue = function () {
        var total = 0;
        for (var i = 0; i < progressWidth.length; i++) {
            total += progressWidth[i];
        }
        return total / 5;
    }
}
var redCar = new Car([87, 64, 90, 78, 69], "Red");
var blueCar = new Car([91, 22, 54, 44, 28], "Blue");
var greyCar = new Car([66, 88, 54, 99, 55], "Grey");
var silverCar = new Car([44, 17, 66, 78, 87], "Silver");
var carNames = ['red', 'blue', 'grey', 'silver'];
var carRatings = ['8.3', '8.2', '8.0', '8.4'];
var blueAverage = blueCar.averageValue();
$('.right-progress h1').text(Math.round(blueAverage));
$('.needle').css('transform', 'rotate(' + Math.round(blueAverage + 45) + 'deg)');

for (var i = 0; i < 4; i++) {
    var content = '<div class="car-list"> <img src="assets/' + carNames[i] + '.jpg">' +
        '<p>Maruti Swift ' + carNames[i] + '</p>' +
        '<h1>' + carRatings[i] + '</h1> </div>';
    $('.bottom-content').append(content);
}

for (var i = 0; i < 5; i++) {
    var counter = i + 1;
    $('#progress' + counter).css('width', blueCar.ProgressWidth[i] + '%');
    $('#' + counter).text(blueCar.ProgressWidth[i]);
}
$('.button1').on('click', function () {
    $('#carImage').attr('src', 'assets/red.jpg');
    $('#carName').text(redCar.carName);
    for (var i = 0; i < 5; i++) {
        var counter = i + 1;
        $('#progress' + counter).css('width', redCar.ProgressWidth[i] + '%');
        $('#' + counter).text(redCar.ProgressWidth[i]);
    }
    var RedAverage = redCar.averageValue();
    $('.right-progress h1').text(Math.round(RedAverage));
    $('.needle').css('transform', 'rotate(' + Math.round(RedAverage + 45) + 'deg)');
});
$('.button2').on('click', function () {
    $('#carImage').attr('src', 'assets/blue.jpg');
    $('#carName').text(blueCar.carName);
    for (var i = 0; i < 5; i++) {
        var counter = i + 1;
        $('#progress' + counter).css('width', blueCar.ProgressWidth[i] + '%');
        $('#' + counter).text(blueCar.ProgressWidth[i]);
    }
    var blueAverage = blueCar.averageValue();
    $('.right-progress h1').text(Math.round(blueAverage));
    $('.needle').css('transform', 'rotate(' + Math.round(blueAverage + 45) + 'deg)');
});
$('.button3').on('click', function () {
    $('#carImage').attr('src', 'assets/grey.jpg');
    $('#carName').text(greyCar.carName);
    for (var i = 0; i < 5; i++) {
        var counter = i + 1;
        $('#progress' + counter).css('width', greyCar.ProgressWidth[i] + '%');
        $('#' + counter).text(greyCar.ProgressWidth[i]);
    }
    var GreyAverage = greyCar.averageValue();
    $('.right-progress h1').text(Math.round(GreyAverage));
    $('.needle').css('transform', 'rotate(' + Math.round(GreyAverage + 45) + 'deg)');
});
$('.button4').on('click', function () {
    $('#carImage').attr('src', 'assets/silver.jpg');
    $('#carName').text(silverCar.carName);
    for (var i = 0; i < 5; i++) {
        var counter = i + 1;
        $('#progress' + counter).css('width', silverCar.ProgressWidth[i] + '%');
        $('#' + counter).text(silverCar.ProgressWidth[i]);
    }
    var SilverAverage = silverCar.averageValue();
    $('.right-progress h1').text(Math.round(SilverAverage));
    $('.needle').css('transform', 'rotate(' + Math.round(SilverAverage + 45) + 'deg)');
});
$('.button').on('click', function () {
    $('.button').removeClass('button-active');
    $(this).addClass('button-active');
});