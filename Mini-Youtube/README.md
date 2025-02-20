# 유튜브 - 미니 프로젝트

(미니 프로젝트 - 유튜브 기능 명세서)

회원

- 로그인
- 회원 가입
- 마이 페이지
- 회원 탈퇴

회원은 계정 1개당 채널 100개

채널

- 채널 생성
- 채널 수정
- 채널 삭제

---

화면 설계하기

[회원]

로그인 페이지 (필요한 API - POST 로그인하기 위함)

<로그인>

id 입력란
pw 입력란
[로그인]

---

회원가입 페이지 (POST 회원가입을 하기 위함)

<회원가입>

id 입력란
pw 입력란
이름 입력란

---

마이 페이지 (Get 회원정보가 불러와짐 + delete 회원탈퇴)

id 데이터
이름 데이터

채널 관리(버튼)

회원탈퇴

---

[채널]

채널 생성 페이지 (채널 등록 POST)

채널 관리 페이지 (회원 전체 채널 조회 GET + 개별 채널 삭제 DELETE)

채널 수정 페이지 (회원 개별 채널 조회 및 수정 GET + put )

---

API 설계

[회원]

로그인) POST/login

- req.body : id , pw
- res : (성공시)마이 페이지로 이동
  (실패시)메시지

회원가입 ) POST/signup

- req.body : id , pw , name
- res : (성공시)로그인 페이지로 이동
  (실패시)메시지

마이페이지 ) GET(DELETE)/users/:id

GET

- req : (URL)id , name
- res : (성공시)회원 내용 출력
  (실패시)메시지

DELETE

- req : id , name
- res : (성공시)로그인 페이지로 이동
  (실패시)메시지

[채널]

- 채널 생성 POST/channels

  - req.body : channelTitle
  - res : 201(성공시)채널 페이지로 이동
    (실패시)메시지

- 채널 (개별)수정 PUT/channels/:id

  - req.body : (URL)id , body(channelTitle)
  - res : 200(성공시)수정 되었다 메시지 (old) -> (new)
    (실패시)메시지

- 채널 (개별)삭제 DELETE/channels/:id

  - req.body : id
  - res : 200(성공시)메시지
    (실패시)메시지

- 채널 조회 GET/channels

  - req : x
  - res : 200(성공시)메시지
    (실패시)메시지

- 채널 (개별)조회 GET/channels/:id

  - req.body : id
  - res : 200(성공시) ${채널명}메시지
    (실패시)메시지
