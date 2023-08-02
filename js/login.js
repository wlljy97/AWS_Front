// window.onload = () => { // 무엇무엇 .을 찍으면 .앞은 객체
// }

// 싱글톤
const signinButtonOnClickHandle = () => {
    AccountService.getInstance().signin();
};

class AccountService {

    authUsername = "aaa";
    authPassword = "1234";


    // 변수명 앞에 #을 붙이면 private 접근지정자
    static #instance = null;

    // 생성자에는 접근지정자를 붙이지 못한다.

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AccountService();
        }
        return this.#instance;
    }

    signin() {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        const username = usernameInput.value;
        const password = passwordInput.value;

        if(username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요.");
            return;
        }
        
        alert("로그인 성공");
    }


}