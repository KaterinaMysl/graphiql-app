import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

import styles from './ResultEditor.module.css';

interface Props {
  results: string;
}

export default function ResultEditor({ results }: Props) {
  const editor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const startState = EditorState.create({
      doc: results,

      extensions: [
        javascript(),
        keymap.of([...defaultKeymap, indentWithTab]),
        oneDark,
      ],
    });

    const viewResult = new EditorView({
      state: startState,
      parent: editor.current as Element,
    });

    viewResult.contentDOM.contentEditable = 'false';

    return () => {
      viewResult.destroy();
    };
  }, [editor, results]);

  return <div className={styles.code} ref={editor}></div>;
}
