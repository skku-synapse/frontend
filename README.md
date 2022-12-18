# One-class Learning Model Test Simulator (딥러닝 모델 평가 시뮬레이터)

CS-Flow 를 사용하여 렌즈 데이터셋, Flex 데이터셋, SMT 데이터셋에 대한 딥러닝 모델의 결과물을 확인할 수 있는 어플리케이션. 
<br />
데이터셋 이미지, 모델의 예측 결과, 실제 정상/비정상 여부를 시각적으로 확인할 수 있으며, score 계산 histogram, 예측 결과 표 등을 시각화 하여 확인해 볼 수 있다.



<br />

## Prerequisite

`react 18`

`axios (API 통신)`

- 기본적으로 fetch가 존재하나 부족한 부분이나 안정성이 결여되어 있어서 채택하였다.

`Material-UI`

- UI library는 mui를 활용하도록 한다.
- Styled-Components를 포함하고 있으며 emotion 도 동시에 활용가능하다
- 더불어 css-in-js 기능도 탁월하다


<br />

## Getting Started
### Source Repository
```shell script
$ git clone https://github.com/skku-synapse/frontend.git
$ cd frontend
```

### Run

### Local Environment
```shell script
$ npm run build
$ npm start
```

### Components

- ModelSelector.js
  - Deep Learning 모델을 선택할 수 있는 컴포넌트
  - 현재는 CS-Flow 로 고정 되어 있음

<br />

- DatasetSelector.js
  -  Lens, Flex, SMT 데이터 중 하나를 선택하는 컴포넌트

<br />

- Line.js
  - Model evaluation 시작 시 progress bar를 제공하는 컴포넌트

<br />

- Test.js
  - Test 시작, 중지를 컨트롤하는 버튼 컴포넌트
  - Test 시작이 되면 Line 컴포넌트가 작동하여 progress bar 제공


<br />

- Visulization.js
  - 모델의 예측 결과와 실제 정상/비정상 여부를 이미지로 제공하는 컴포넌트
  - image border 가 빨간색 : 예측이 잘못 되었음을 표시
  - 빨간색 채워진 박스 : 실제 비정상
  - 초록색 채워진 박스 : 실제 정상

<br />

- Analysis.js
  - 예측 결과 표, CS-Flow score histogram 이미지를 API 로 제공받아 표시하는 컴포넌트

