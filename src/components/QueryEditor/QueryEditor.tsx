import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import {
  CompletionContext,
  autocompletion,
  closeBrackets,
} from '@codemirror/autocomplete';
import { bracketMatching, syntaxTree } from '@codemirror/language';
// eslint-disable-next-line import/named
import { linter, Diagnostic } from '@codemirror/lint';
import { Schema } from '../../utils/types';

import styles from './QueryEditor.module.css';

interface Props {
  schema: Schema[];
  handleQuery: (query: string) => void;
}

const regexpLinter = linter((view) => {
  const diagnostics: Diagnostic[] = [];
  syntaxTree(view.state)
    .cursor()
    .iterate((node) => {
      if (node.name == 'RegExp')
        diagnostics.push({
          from: node.from,
          to: node.to,
          severity: 'warning',
          message: 'Regular expressions are FORBIDDEN',
          actions: [
            {
              name: 'Remove',
              apply(view, from, to) {
                view.dispatch({ changes: { from, to } });
              },
            },
          ],
        });
    });
  return diagnostics;
});

export default function QueryEditor({ schema, handleQuery }: Props) {
  const editor = useRef<HTMLDivElement | null>(null);

  const myCompletions = (context: CompletionContext) => {
    const word = context.matchBefore(/\w*/);
    if (word?.from == word?.to && !context.explicit) return null;

    return {
      from: word?.from || 0,
      options: schema,
    };
  };

  const jsDocCompletions = javascriptLanguage.data.of({
    autocomplete: myCompletions,
  });

  const onUpdate = EditorView.updateListener.of((v) => {
    const queryData = v.state.doc.toString();
    handleQuery(queryData);
  });

  useEffect(() => {
    const startState = EditorState.create({
      doc: '',

      extensions: [
        regexpLinter,
        lineNumbers(),
        bracketMatching(),
        closeBrackets(),
        javascript(),
        autocompletion({ override: [myCompletions] }),
        keymap.of([...defaultKeymap, indentWithTab]),
        oneDark,
        onUpdate,
      ],
    });
    startState.languageDataAt(jsDocCompletions, 0);

    const view = new EditorView({
      state: startState,
      parent: editor.current as Element,
    });

    return () => {
      view.destroy();
    };
  }, [schema, editor]);

  return <div className={styles.editor} ref={editor}></div>;
}
