window.onload = () => {
    main();
}

function main() {
    var a = 10; // 변수 (사용x)
    let b = 20; // 변수
    const c = 30; // 상수

    console.log(a);
    console.log(b);
    console.log(c);
    
    var a = 40;
    console.log(a);
    b = 50;
    console.log(b);
    // c = 60;
    // console.log(c);

    let name = "김준일";
    let age = 30;
    let score = 80.5;
    let status = true;

    console.log("이름 : " + name + " - type(" + typeof(name) + ")");
    console.log("나이 : " + age + " - type(" + typeof(age) + ")");
    console.log("성적 : " + score + " - type(" + typeof(score) + ")");
    console.log("상태 : " + status + " - type(" + typeof(status) + ")");

    // 비교 연산자
    console.log("10" == 10); // == 값만 비교
    console.log("10" === 10); // === 값 + 자료형 비교
    console.log("10" != 10);
    console.log("10" !== 10);

    let count; // 변수 선언은 되었지만 초기화가 되지 않아 자료형이 결정되지 않으면
    // undefined;
    console.log(count);

    let count2 = null;
    console.log(count2);

    if(count === undefined || count === null || count === 0 || count === "") {
        console.log(true);
    }

    count = "";

    // 자바스크립트는 값이 (비어 있으면, 값이 없으면 :)undefined, null, 0, "" 이면 false의 결과를 반한환다. 
    if(!count) { // !(not)을 붙여주면 boolean값으로 된다. false 이어야 값이 나옴
        console.log("값이 없음");
    }

    if(!!count) { // false*false 가되어 true값이 나옴
        console.log("값이 있음");
    }
}