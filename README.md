<div align="center">
  <a href="https://github.com/tomma5o/react-score-indicator">
    <img src="http://mantovanig.it/media/react-score-indicator.png" />
  </a>
  <h1>React Score Indicator</h1>
  <p>
    <em>React component to display a score with a steps chart</em>
  </p>
  <p>
    <a href="https://github.com/tomma5o/react-score-indicator/commits/master">
      <img src="https://img.shields.io/github/last-commit/tomma5o/react-score-indicator.svg" />
    </a>
    <a href="https://www.npmjs.com/package/react-score-indicator">
      <img src="https://img.shields.io/npm/v/react-score-indicator.svg" />
    </a>
    <a href="https://standardjs.com">
      <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" />
    </a>
  </p>
  <br>
  <a href="https://tomma5o.github.io/react-score-indicator"><b>Demo</b></a>
</div>


## Install

```bash
npm install --save react-score-indicator
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactStoreIndicator from 'react-score-indicator'

class Example extends Component {
  render () {
    return (
      <ReactStoreIndicator
        value={30}
        maxValue={100}
      />
    )
  }
}
```

## Props

|    Name    |  Type  |   Default  |                         Description                         | Required |
|:----------:|:------:|:----------:|:-----------------------------------------------------------:|:--------:|
| value      | number |            | Value of score                                              | yes      |
| maxValue   | number |            | Value of max total score                                    | yes      |
| width      | number | 200        | Width of component                                          | no       |
| stepColors | array  | view below | Array with 8 hex colors corresponding to steps in the chart | no       |
| style      | object | {}         | Style to customize the component wrapper                    | no       |
| textStyle  | object | {}         | Style to customize the score value text inside the chart    | no       |

**DEFAULT COLOR PALETTE**
```js
[
  '#d12000',
  '#ed8d00',
  '#f1bc00',
  '#84c42b',
  '#53b83a',
  '#3da940',
  '#3da940',
  '#3da940',
]
```

## License

MIT © [tomma5o](https://github.com/tomma5o)
