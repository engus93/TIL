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

- branch : 로컬에 브랜치 목록 보기 
```
$ git branch

-r : 원격 목록 다 보기
-a : 로컬 원격 목록 다 보기
```

- branch : 브랜치 생성하기
```
$ git branch 브랜치명
```

- checkout : 브랜치를 이동
```
$ git checkout 브랜치명

※ $ git checkout -b 브랜치명    // 브랜치를 생성하면서 이동
```

- fetch : 서버에 있는 brunch 로컬로 가져오기(FETCH_HEAD로 임의지정)
```
$ git fetch origin 브렌치명
```

- merge : bruch의 병합
```
$ git merge 브랜치명
```

- pull : fetch + marge의 기능
```
$ git pull origin 브랜치명
```

## 3. Branch란?

> 브랜치란 독립적으로 어떤 작업을 진행하기 위한 개념입니다. 필요에 의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에, 여러 작업을 동시에 진행할 수 있습니다. 또한 이렇게 만들어진 브랜치는 다른 브랜치와 **병합(Merge)** 함으로써, 작업한 내용을 다시 새로운 하나의 브랜치로 모을 수 있습니다.

Ex) 기능별 버전별 관리에 유용

![branch](https://backlog.com/git-tutorial/kr/img/post/stepup/capture_stepup1_1_2.png)

## 4. 참고 사이트

1. [GitHub SSH 키 생성 및 등록하여 사용하기](https://nickjoit.tistory.com/94)
2. [[Git] Git 명령어 정리](https://medium.com/@joongwon/git-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC-c25b421ecdbd)
3. [누구나 쉽게 이해할 수 있는 Git 입문](https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html)
4. [Git 공식 문서](https://git-scm.com/book/ko/v2)