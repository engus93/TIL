# React

## 1. React란?

![react picture](https://cdn-images-1.medium.com/max/800/1*weUJDeO1uAcuDj3NHT_6Bw.png)

> React는 Angular같은 Framework가 아니라 **Library**입니다. Router처럼 웹을 만드는데 꼭 필요한 도구들이 기본적으로 포함되어있지 않습니다. 그 대신 가볍습니다. 무엇보다 훨씬 빠르게 배울 수 있습니다. 더불어 개발자들의 창의성을 자극하는 매력이 있습니다.

## 2. React의 장점

###

#### 1. Component

React는 **UI를 만드는 Javascript 라이브러리**입니다. 페이스북이 자사 서비스의 UI를 효율적으로 만들기 위해 탄생한 라이브러리로서, 쉽게 말하면 화면에 보이는 버튼이나 텍스트 상자 등을 쉽게 만들 수 있는 코드묶음입니다. 즉 버튼, 입력창, 표, 텍스트 표시, 섹션A, 섹션B 등 여러 화면에 사용되고 표시될 요소들을 만든 뒤, 이를 조합해서 화면을 구성하게 됩니다. 이렇게 하면 **여러 화면에서 재사용되는 코드를 반복적으로 입력할 필요가 없게 되어 효율**적이게 됩니다. 

##### Ex) HTML
```
<head>
  <title>Hello World</title>
</head>
<body>
  <form>
    <input />
    <button type="submit">Submit</button>
  </form>

  <table>
    <tr>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tr>
      <td>Hello</td>
      <td>Message</td>
    </tr>
  <table>
<body>
```

###

##### Ex) React Component
```
class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>Hello</td>
          <td>Message</td>
        </tr>
      <table>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Table />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

#### 2. Virtual DOM

React는 가상의 DOM, 즉, **Virtual DOM**을 만들고, 변경사항이 있을 때마다 전체가 아닌 해당 부분만 진짜 DOM에 반영하는 방식으로 작업을 수행하여 앱의 효율성과 속도를 높이게 됩니다. React가 View를 여러 Component로 쪼갠 이유도 이렇게 **DOM을 부분적으로 업데이트할 수 있도록 하기 위함**입니다.

> 문서의 DOM을 직접 조작하는 것이 아니라 ‘**인-메모리**’에 존재하는 DOM을 조작하는 것이기 때문에 효율적이고 빠름

#### 3. One-Way-Data-Binding

React에선 데이터가 단방향으로 전송되기 때문에 데이터를 추적하기 쉽고 디버깅을 상대적으로 쉽게 된다는 장점이 있고, 이러한 특징을 살려서 [Flux](/19.02.12~15/19.02.12/learned_13_flux.md) 패턴을 사용한 [Redux](/19.02.12~15/19.02.12/learned_12_Redux.md) 라이브러리를 많이 활용함

Ex) 

- 2 ways data binding : **Angular.js**
- 1 ways data binding : **React.js**

![data biding](https://i.stack.imgur.com/iz4Hs.png)

#### 4. JSX

JSX는 JavaScript XML의 약자로서 외형상 자바스크립트 코드 내 작성된 html나 xml처럼 보입니다. JSX는 Babel을 통해서 html을 만들어내는 자바스크립트 코드인 React.createElement()로 변환됩니다. 즉, JSX → JavaScript → html이 되는 것입니다. 아래는 JSX와 이를 React.createElement()로 변환한 예시입니다.

```
// ES6 JSX
const element = <h1>Hello, world!</h1>;
```

```
// ES5
const element = React.createElement(
  "h1",
  null,
  "Hello, world!"
);
```

## 참고자료

1. [디자인패턴 MVC, MVP, MVVM 비교](https://beomy.tistory.com/43)
2. [React: #1 React의 탄생배경과 특징](https://medium.com/@RianCommunity/react%EC%9D%98-%ED%83%84%EC%83%9D%EB%B0%B0%EA%B2%BD%EA%B3%BC-%ED%8A%B9%EC%A7%95-4190d47a28f)
3. [React.js를 이해하다](https://blog.coderifleman.com/2015/06/23/learning-react-1/)
4. [React 공부 정리](http://blog.weirdx.io/post/29628)