# React Basic #04

## #4 State

### 1. setTime()

> 일정 시간 후에 특정 코드, 함수를 의도적으로 **지연**한 뒤 실행하고 싶을 때 사용하는 함수로 `setTimeout()`을 사용합니다.

Ex)
```
setTimeout(function() { // Code here }, delay)
```

### 2. Arrow function / () => {}

> 화살표 함수(Arrow function)는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다. 하지만 모든 경우 화살표 함수를 사용할 수 있는 것은 아니다.

- [Can i use 연결하기](https://caniuse.com/#search=arrow%20function)

#### ※ Arrow function의 사용 이유?

> 모든 것이 arrow function으로 가능하지가 않는데 그럼에도 Arrow function을 사용하는 이유에 대해서는 `this`에 숨어있다. `this`라는 개념을 알기 전에 먼저 `bind()`의 개념을 익혀야 한다. 다음을 보자

- `bind()` : bind 함수는 바인드하는 함수에서 사용하는 `this`의 대상을 지정해주는 역할을 합니다.

**Ex) bind 예제**

```
const objA = {
  name: 'a',
  aFunc: function() {
    console.log(this.name)
  },
}

const objB = {
  name: 'b',
}

objA.aFunc()    // => "a"
objA.aFunc.bind(objB)   // => "b"
const foo = objA.aFunc.bind(objB)
foo()
4   // => "b"
```

#### this

> 객체지향 언어에서의 일반적인 `this`의 의미(현재 객체를 지칭)와는 달리 자바스크립트의 `this`는 실행시의 `context`를 말하죠. 아래 예제를 보면,

**Ex) 잘못된 예제**

```
const thisTest = function() {
  console.log(this.value)
}
thisTest.value = 'I am this'
thisTest()  // => "undefined"
```

**Ex) 정확한 예제**

```
const thisTest = function() {
  console.log(this.value)
}
thisTest.value = 'I am this'
thisTest.func = function() {
  console.log(this.value)
}
thisTest.func() // => "I am this"
```

**Ex) arrow function bind 예제**

```
import React from 'react'

class BindTest extends React.Component {
  handleClick = () => {
    console.log(this)
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Goodbye bind
      </button>
    )
  }
}
export default BindTest
```

> arrow function 의 `this` 는 부모 함수의 `this` 를 상속

출처 : [Arrow function](https://poiemaweb.com/es6-arrow-function)

