console.log(add(10, 20));

function add(x, y) { //메개변수는 자료형 없이 변수명만 주면된다.
    return x + y;
}

function sub(x, y) {
    return;
}

const printInfo = function() { // 함수를 정의해서 변수에다가 넣고 있음 변수명(printInfo)에다가 함수(function)를 대입
    console.log("정보 출력");
};

printInfo();

console.log(typeof(printInfo));

function callback(fx) {
    console.log("콜백 함수"); 
    fx();
}

callback(printInfo);

// 익명 함수
const fx1 = function(a) {
    console.log("a: " + a);
}

fx1(10);

// 화살표 함수(람다) 매개변수를 =>로 바꿔준다.
const fx2 = (b) => {
    console.log("b: " + b);
}

fx2(20);
