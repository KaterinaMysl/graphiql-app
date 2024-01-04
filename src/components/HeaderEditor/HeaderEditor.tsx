import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching } from '@codemirror/language';

import styles from './HeaderEditor.module.css';

interface Props {
  handleHeaders: (data: string) => void;
}

export default function HeaderEditor({ handleHeaders }: Props) {
  const editor = useRef<HTMLDivElement | null>(null);

  const onUpdate = EditorView.updateListener.of((v) => {
    const headersData = v.state.doc.toString();
    handleHeaders(headersData);
  });

  useEffect(() => {
    const startState = EditorState.create({
      doc: '',

      extensions: [
        lineNumbers(),
        bracketMatching(),
        closeBrackets(),
        javascript(),
        keymap.of([...defaultKeymap, indentWithTab]),
        oneDark,
        onUpdate,
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editor.current as Element,
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  return (
    <div>
      <h2>Headers</h2>
      <div className={styles.editor} ref={editor}></div>;
    </div>
  );
}
