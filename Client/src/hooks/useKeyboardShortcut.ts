import { useCallback, useEffect } from "react";

type ShortcutKeys = {
  key: string;
  /**
   * @default false
   */
  altKey?: true;
  /**
   * @default false
   */
  ctrlKey?: true;
  /**
   * @default false
   */
  metaKey?: true;
  /**
   * @default false
   */
  shiftKey?: true;
};

const useKeyboardShortcut = (
  shortcutKeys: ShortcutKeys,
  callback: () => void
) => {
  const handleKey = useCallback(
    (event: any) => {
      if (
        event.ctrlKey === (shortcutKeys.ctrlKey || false) &&
        event.shiftKey === (shortcutKeys.shiftKey || false) &&
        event.altKey === (shortcutKeys.altKey || false) &&
        event.key === shortcutKeys.key.toLowerCase()
      ) {
        event.preventDefault(); // preventDefault here helps to override the browser shortcuts. NOTE: Ctrl+R cannot be replaced.
        callback();
      }
    },
    [shortcutKeys, callback]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    }; // return removeListener
  }, [handleKey]);
};

export default useKeyboardShortcut;
