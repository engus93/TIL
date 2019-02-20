# React Basic

## #2 컴포넌트 그리고 Props

### 1. 컴포넌트란?

> 유저가 사용하는 시스템에 대한 조작장치를 이야기 한다. 통상 컨트롤(Control)이라고도 하고 UI라고도 한다. 또한 컴포넌트는 각각 독립된 모듈이라고도 한다.

출처 : [생활 코딩 - 컴포넌트(Component)](https://opentutorials.org/course/473/2512)

#### ※ 컴포넌트 설계

> 그래서 Component를 만들기 전에 어떻게 만들지 구상을 하고 Component별로 쪼개고 스케치 해보기

### 2. render()

> 컴포넌트는 React.createClass()에 render 메서드를 가진 리터럴 객체를 전달해 작성할 수 있습니다. 그러면서 render()는 컴포넌트를 하나만 반환해야 합니다. 아래 처럼 복수의 컴포넌트를 반환할 수 없습니다.

```
// NO
render() {
   return (
     <div>title</div>
     <div>contents</div>
   );
}

// OK
render() {
  return (
    <div>
      <div>title</div>
      <div>contents</div>
    </div>
  );
}
```

### 3. props & state

> 부모가 자식 Element에게 Data를 넘겨주기 위해서는 2가지 방법이 있는데 state와 props가 있다.

#### 3-1. props
> `props` 는 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용됩니다. `parent` 컴포넌트에서 `child` 컴포넌트로 데이터를 전할 때, `props` 가 사용됩니다.

#### 3-2. state

> 

### 4. map()

#### 4-1. map()의 기능

> `map()` 메소드는 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 프로세싱 하여 그 결과로 새로운 배열을 생성합니다.

#### 4-2. 문법
```
arr.map(callback, [thisArg])
```

#### ※ 파라미터
    callback 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가집니다.
    - currentValue 현재 처리되고 있는 요소
    - index 현재 처리되고 있는 요소의 index 값
    - array 메소드가 불려진 배열
    
    ※ thisArg (선택항목) callback 함수 내부에서 사용 할 this 값을 설정



### 참고 사이트

- [VELOPERT.LOG - 누구든지 하는 React](https://velopert.com/3613)
- 