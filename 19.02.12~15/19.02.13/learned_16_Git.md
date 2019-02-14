# Git

## 1. Git이란?

> Git을 분산 버전 관리 시스템이며 분산 버전 관리 시스템을 쉽게 말하면, 여러명의 개발자(분산)가 특정 프로젝트를 자신의 컴퓨터로 **협업**하여 **개발**하면서 **버전을 관리**할 수 있는 시스템이다.

## 2. Git 명령어

- init : 로컬에 git을 생성
```
$ git init
```

- clone : 서버에서 로컬로 복제
```
$ git clone 주소
$ git clone 주소 폴더이름
```

- add . : 모든 내용 스테이징
```
$ git add .
```

- add . 파일이름 : 특정 파일 스테이징
```
$ git add .
```

- commit : 수정 내용 로컬에 저장(스테이징 후에 가능)
```
$ git commit -m "메세지내용"
```

- push : commit 된 내용 서버에 저장
```
$ git push origin 브랜치이름
```

- fetch : 서버에 있는 brunch 로컬로 가져오기(FETCH_HEAD로 임의지정)
```
$ git fetch origin 브렌치이름
```

- merge : bruch의 병합
```
$ git merge 브랜치이름
```

- pull : fetch + marge의 기능
```
$ git pull origin 브랜치이름
```

## 3. 참고 사이트

1. [GitHub SSH 키 생성 및 등록하여 사용하기](https://nickjoit.tistory.com/94)
2. [[Git] Git 명령어 정리](https://medium.com/@joongwon/git-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC-c25b421ecdbd)