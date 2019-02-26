# React Basic #06

## #6 AJAX

### Ajax

#### Ajax란?

> Ajax는 JavaScript의 라이브러리중 하나이며 `Asynchronous Javascript And Xml(비동기식 자바스크립트와 xml)`의 약자입니다. 브라우저가 가지고있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법 이며 **Ajax를 한마디로 정의하자면 JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술이라고 할 수 있겠습니다.**

#### ※ 비동기(async)방식이란?  

> 비동기 방식은 웹페이지를 리로드하지 않고 데이터를 불러오는 방식입니다. 이 방식의 장점은 페이지 리로드의 경우 전체 리소스를 다시 불러와야하는데 이미지, 스크립트 , 기타 코드등을 모두 재요청할 경우 불필요한 리소스 낭비가 발생하게 되지만 비동기식 방식을 이용할 경우 필요한 부분만 불러와 사용할 수 있으므로 매우 큰 장점이 있습니다.

출처 : [[Ajax] Ajax란 무엇인가?](https://coding-factory.tistory.com/143)

### fetch

#### fetch란?

> fetch()는 네트워크 요청을 쉽게 활용할 수 있게 해주는 API이다.

**Ex) yts API를 이용한 fetch 예제**
```
fetch('https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=download_count')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
```

> **※ promise : 자바스크립트의 비동기 처리에 활용되는 객체**

#### Call Back

`Call Back`이란 간단하게 답신과 비슷한 말이다. 어떠한 일이 시작되어 끝날때에 알려주는 역할 같은 것이다. 마치 식당에 갔을 때에 예약을 하고 자신의 차례가 되기 전까지 다른 용무를 보다가 연락이 왔을 때에 가는 것 처럼 말이다.

**Ex) Call Back Hell**

```
mysql.query( ‘select 1’ , function( res ){
    console.log( 1 );

      mysql.query( ‘select 1’ , function( res ){
            console.log( 2 );

                  mysql.query( ‘select 1’ , function( res ){
                  console.log( 3 );

            });

      });

});
```

#### promise

> `promise`는 싱글쓰레드인 자바스크립트에서 비동기 처리를 위해서 콜백(callback)이 순차으로 진행되어야 할 처리까지 중첩시켜 표현하여 예외 처리가 어려워지고 중첩으로 인한 복잡도가 증가해서 나오게 되었다. 한마디로 promise 는 약속이다. **어떤 작업이 성공했을 때(resolve)를 promise 객체의 then() 함수에 넘겨진 파라미터(함수)를 단 한번만 호출하겠다는 약속입니다.**

![](https://joshua1988.github.io/images/posts/web/javascript/promise.svg)

```
_callApi = () => {
      return fetch('https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=download_count')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
}
```

출처: [기본기를 쌓는 정아마추어 코딩블로그](https://jeong-pro.tistory.com/128)

### async & await

`promise`의 기반이고, 목적 또한 promise 를 쉽게 쓰기 위함이라는 것을 생각하면 된다. 참고로 await 하는 것 또한 전부 Promise.resolve() 로 전달되기에, 안전하게 `promise` 를 `await` 할 수 있다.

```
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
```

참고 사이트  
- [자바스크립트 promise? 나도 써보자, 기본 개념부터~](https://www.youtube.com/watch?v=CA5EDD4Hjz4)
- [자바스크립트 async / await? 나도 써보자, 기본 개념부터~](https://www.youtube.com/watch?v=JzXjB6L99N4)
