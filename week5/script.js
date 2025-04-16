function checkweather() {
    const myTemp = document.querySelector('#myTemp');
    console.log(myTemp.value);
    const body = document.querySelector('body');

    if(myTemp.value < 10) {
        console.log('it is freezing');
        body.style.backgroundColor='grey';
        outer.style.backgroundColor='limegreen';
    }else if (myTemp.value >=10 && myTemp.value <20) {
        console.log("it is pleasant weather");
        body.style.backgroundColor='pink';
        outer.style.backgroundColor='yellow';
    }else if (myTemp.value >= 20 && myTemp.value <30) {
        console.log("it is sunny");
        body.style.backgroundColor='coral';
        outer.style.backgroundColor='red';
    }else if (myTemp.value >=30) {
        console.log("it is burning hot");
        body.style.backgroundColor='crimson';
        outer.style.backgroundColor='blue';
    }
}