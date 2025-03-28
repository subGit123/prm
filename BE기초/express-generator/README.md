# Express-generator 프로젝트 구조

- bin/www : 포트 번호 등과 같은 웹 서버를 구축하는데에 필요한 설정 데이터가 정의되어 있는 파일

  => .env 설정 값을 가지고 에러 처리 , 기타 추가 설정을 해주는 파일

- node_moulues : Node.js , Express에 필요한 모듈들이 설치되는 폴더

- public : 정적 파일들이 모여있는 폴더

- routes : 각 경로들 담당하는 모듈들이 들어있는 폴더

  => 라우팅 로직을 구현하는 모듈들

- views : 클라이언트에게 html 코드로 화면을 보내는 파일

- app.js : 서버의 시작점 (URL에 따라 라우팅)

- package.json : 프로젝트에 설치된 모듈
