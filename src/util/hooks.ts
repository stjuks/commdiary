import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

export const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

interface KeybindMap {
  [key: string]: () => any;
}

export const useHotkeys = (keyBinds: KeybindMap, deps: any[]) => {
  const [hotkeys, setHotkeys] = useState<KeybindMap>({});
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      const tempKeyString = [...pressedKeys, key].join('+');
      if (hotkeys[tempKeyString]) event.preventDefault();

      if (pressedKeys.indexOf(key) === -1) {
        setPressedKeys(keys => [...keys, key]);
      }
    },
    [pressedKeys]
  );

  useEffect(() => {
    const keyString = pressedKeys.join('+');

    if (hotkeys[keyString]) {
      hotkeys[keyString]();
    }
  }, [pressedKeys]);

  useEffect(() => {
    const hotkeyMap = {};

    Object.entries(keyBinds).forEach(([key, value]) => {
      key.split(',').forEach(bind => (hotkeyMap[bind.trim()] = value));
    });

    setHotkeys(hotkeyMap);
  }, deps);

  useEffect(() => {
    const clearPressedKeys = () => {
      if (pressedKeys.length !== 0) setPressedKeys([]);
    };

    window.addEventListener('keyup', clearPressedKeys);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', clearPressedKeys);
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
};
