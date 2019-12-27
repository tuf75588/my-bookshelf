import React from 'react';

function useIsMounted() {
  const mounted = React.useRef(false);
  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

function useCallbackStatus() {
  const isMounted = useIsMounted();
  const [{status, error}, setState] = React.useReducer(
    (s, a) => ({
      ...s,
      ...a
    }),
    {status: 'rest', error: null}
  );
}
