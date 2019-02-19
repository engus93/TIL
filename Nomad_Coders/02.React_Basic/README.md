# React Basic

## #1 시작하기

### 설치하기

#### 1. window에서 Windows Subsystem for Linux를 사용하여 Ubuntu 설치(bash)

##### 1-1. 들어가서 설치

https://blogs.msdn.microsoft.com/eva/?p=7633

![](https://msdnshared.blob.core.windows.net/media/2016/04/setting3.png)

##### 1-2. 위에 주소로 설치가 안된다면 아래 주소

https://webnautes.tistory.com/1170

업데이트까지 완료하고 끝

#### 2. npm & Node.js & Yarn 설치

##### 2-1. [npm & Node.js](https://github.com/nodesource/distributions/blob/master/README.md#deb)

```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

##### 2-2. [yarn](https://yarnpkg.com/en/docs/install#debian-stable)

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```

### React에 대해서

※ [TIL 정리 파일로 이동](/Learned/HandBook/03.LibraryEtc/learned_08_React.md)



## The history

- 19년 2월 19일 화요일 Start!