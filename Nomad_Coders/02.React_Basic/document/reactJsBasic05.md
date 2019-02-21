# React Basic #05

## #5 Stateless Functional Components

### 1. 함수 기반 vs 클래스 기반

#### 1-1. 클래스 기반

- React.Component
- React.PureComponent (React.Component의 shouldComponentUpdate의 적용 버전)

##### React.Component

> `React.Component`를 확장(extends)해서 컴포넌트를 만들 때, `shouldComponentUpdate` 메쏘드를 별도로 선언하지 않았다면, 컴포넌트는 `props`, `state` 값이 변경되면 **무조건적 리렌더링(re-render)** 하도록 되어 있다.

##### React.PureComponent

> `React.PureComponent`를 확장해서 컴포넌트를 만들면, `shouldComponentUpdate` 메쏘드를 다뤄준다. 또한 `PureComponent` 내부에서 `props`와 `state`를 `shallow level` 안에서 비교 하여, **변경된 값이 있을 시에만 리렌더링(re-render)** 하도록 되어 있다.

#### 1-2. 함수 기반

- Functional Stateless Component

> 라이프 사이클 메소드(componetDidMount, shouldComponentUpdate 등등..)와 ref 콜백을 사용 할 수 없다는데 있다.

#### ※ `Functional Stateless Component`가 클래스 컴포넌트의 퍼포먼스보다 우위에 있다고 하기엔 어렵다. 그 이유는 함수형 컴포넌트도 결국엔 클래스 기반 컴포넌트로 래핑(wrapping)되기 때문이다.

#### 결론

> `PureComponent`는 `shallow level`로만 데이터를 비교하기 때문에, `nested` `object` 등의 변경된 데이터는 감지하지 못하기 때문에 `React.Component`의 `shouldComponentUpdate` 직접 다뤄야 한다. 클래스 컴포넌트(state, lifecycle, ref)가 필요한 상황이 아니라면 항상 컴포넌트는 함수형으로 만드는게 좋고 부족한 부분은 유틸로써 충족 시키는 것이 더 낫다.

출처 : [Component vs PureComponent vs Functional Component](https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-react-%EC%9D%B4%ED%95%B4-%EA%B8%B0%EC%B4%88-component-vs-purecomp)