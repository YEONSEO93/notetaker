
// // client/App.js

// import React from 'react';
// import Navigator from './navigator';
// import { AuthProvider } from './context/AuthContext';

// export default function App() {
//   return (
//     <AuthProvider>
//       <Navigator />
//     </AuthProvider>
//   );
// }


// client/App.js

import React from 'react';
import Navigator from './navigator';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}

