import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching } from '@codemirror/language';

import styles from './VariableEditor.module.css';

interface Props {
  variables: string;
  handleVariables: (data: string) => void;
}

export default function VariableEditor({ variables, handleVariables }: Props) {
  const editor = useRef<HTMLDivElement | null>(null);

  const onUpdate = EditorView.updateListener.of((v) => {
    const variablesData = v.state.doc.toString();
    handleVariables(variablesData);
  });

  useEffect(() => {
    const startState = EditorState.create({
      doc: variables,

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
  }, [editor]);

  return <div className={styles.editor} ref={editor}></div>;
}
