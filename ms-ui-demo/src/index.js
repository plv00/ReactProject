import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const MyPage = () => (
  <Fabric>
    <DefaultButton
      text='Press Me'
      primary={ true }
    />
  </Fabric>
);

ReactDOM.render(<MyPage />, document.getElementById('root'));