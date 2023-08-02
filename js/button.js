const plus = () => {
    const resultObj = document.querySelector(".result"); // querySelector 선택자
    let oldNumber = parseInt(resultObj.innerHTML); // 숫자롤 바꿔서 변수에 더함

    resultObj.innerHTML = oldNumber + 1;
}

const minus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);

    resultObj.innerHTML = oldNumber - 1;
}