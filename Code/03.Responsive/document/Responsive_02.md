# Responsive 02

## Media Query

### Media Query란?

> **Media Query**는 미디어 타입과 같이 폭, 높이, 색깔과 같이 디바이스의 특성을 이용해 스타일시트의 적용범위를 제한하는 하나이상의 식으로 구성되어 있습니다. CSS3에서 추가된 미디어쿼리를 사용하면 컨텐츠를 각 디바이스의 출력폭에 맞춰 표시하는것이 가능해, 컨텐츠들을 개별적으로 조정할 필요가 없습니다.

*※ 논리 연산으로 `and`, `not`, `only`가 있습니다.*

출처 : [MDN - CSS미디어 쿼리에 대해](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)

## CSS float과 clearfix

### CSS - float

> `float`은 뜨다라는 의미이며, `element`에 부유 속성을 줘 배치할 수 있는 방법

#### 설명

> left, right을 사용할 수 있으며 해당 위치에 떠있게 된다.  
→ display 속성과 함께 쓰면 display 속성은 무시되고 width, height 설정이 가능하다.

###### ※ 그러나 `float`로 컨텐츠를 띄울 시에는 다음 컨텐츠들이 앞으로 당겨져서 사라진 것처럼 보이게 된다. 이러한 현상을 해결하는 것이 `clearfix`이다.

### CSS - clearfix

> Clearfix에는 4가지 방법이 있다. 다음을 살펴보자

#### 1. 가상 요소 ::after 사용(권장)

> 우선 가상 클래스(class)와 가상 요소(element)를 편의상 함께 칭할 때 사용한다.  

###### ※ 참고로 정식 명칭은 아니다.

##### 가상 클래스(Pseudo-class)란?

> 가상 클래스(Pseudo-class)는 요소에 직접적으로 클래스를 부여하지는 않았지만,
요소의 상태에 따라서 클래스를 적용한 것처럼 효과를 다르게 줄 수있다.

**Ex) a태그의 효과를 바꾸기 위한 가상 클래스 `hover`, `link`**

```
a::hover    // :hover
a::link     // :link
```

##### 가상 요소(Pseudo-elements)란?

> 가상 요소(Pseudo-elements)는 말 그대로 가상의 요소를 만들고 내용을 넣어 출력하겠다는 것이다.

Ex) `::after`, `::before` 이 두가지를 자주 사용한다.

```
h1::before {content: '';}   // 앞
h1::after {content: '';}    // 뒤
```

###### ※ CSS2.1에서는 모두 싱글콜론(:)으로 사용했지만 CSS3 부터는 구분을 위해 가상 클래스는 싱글콜론(:), 가상 요소는 더블콜론(::)을 사용한다.

#### 2. overflow속성 사용

위와 마찬가지로 float 속성을 가진 요소의 부모 요소에

> 1. `overflow: hidden` 또는 `overflow: auto`를 적용시켜주면 된다.
> 2. `overflow: auto` 사용시 자식의 너비가 부모의 너비보다 크다면 가로 스크롤바가 생긴다.
> 3. `overflow: hidden` 의 경우 넘치는 부분이 잘리기 때문에 사용하지 않는것이 좋음.

#### 3. 빈 엘리먼트에 clear속성 적용

> 1번의 가상요소와 비슷한 방식이다. 조금 다른 것이 있다면 빈 태그를 만들어 클래스에 `clear: both; height: 0; overflow: hidden;`를 적용해 높이가 0인 보이지 않는 태그를 만들어 float을 해제하는 방법이다.

###### ※ 이 방식은 의미없는 태그를 만들어 사용하는 것이므로 사용하지 않는것이 좋음.

#### 4. float로 대응

> `float` 속성을 가진 자식요소의 부모요소에 똑같이 `float`을 적용해 주는 방법인데
반응형 웹에 적합하지 않으므로 사용하지 않는것이 좋다.

---

###### PS : 이 방식 말고 flex를 익혀서 사용하는 것도 좋은 방법일 것 같다.

## 참고 사이트

- [CSS float, float을 clear하는 네가지 방법(clearfix)](https://youtaekjung.github.io/2018/04/21/css/CSS-float-clearfix/)