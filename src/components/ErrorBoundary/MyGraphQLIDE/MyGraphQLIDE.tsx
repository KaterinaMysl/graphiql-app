import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import styles from './MyGraphQLIDE.module.css';
import { oneDark } from '@codemirror/theme-one-dark';
// eslint-disable-next-line import/named
import { linter, Diagnostic } from '@codemirror/lint';
import { useEffect, useRef, useState } from 'react';
import {
  CompletionContext,
  autocompletion,
  closeBrackets,
} from '@codemirror/autocomplete';
import { bracketMatching, syntaxTree } from '@codemirror/language';
import { getData } from '../../../services/getData';
import { Schema } from '../../../utils/types';

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

export const apiUrl =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';

type Props = {
  endpoint: string;
  schema: Schema[];
};

export default function MyGraphQLEditor({ endpoint, schema }: Props) {
  const editor = useRef<HTMLDivElement | null>(null);
  const [code, setCode] = useState('');
  const [graphql] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setGraphqlResult] = useState<string | undefined>(undefined);

  const handleSubmit = async () => {
    try {
      const response = await getData(graphql, endpoint);
      if (response && response.data) {
        setGraphqlResult(JSON.stringify(response, null, 2));
      }
    } catch (error) {
      console.error('GraphQL Error:', error);
    }
  };
  const myCompletions = (context: CompletionContext) => {
    const word = context.matchBefore(/\w*/);
    if (word.from == word.to && !context.explicit) return null;
    /*
     const options: Completion[] = [
      { label: 'match', type: 'keyword' },
      { label: 'hello', type: 'variable', info: '(World)' },
      { label: 'magic', type: 'text', apply: '⠁⭒*.✩.*⭒⠁', detail: 'macro' },
    ];*/

    return {
      from: word.from,
      options: schema,
    };
  };

  const jsDocCompletions = javascriptLanguage.data.of({
    autocomplete: myCompletions,
  });

  const onUpdate = EditorView.updateListener.of((v) => {
    setCode(v.state.doc.toString());
  });

  useEffect(() => {
    const startState = EditorState.create({
      doc: 'Hello World',

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema]);

  return (
    <>
      <div className={styles.editor} ref={editor}></div>
      <div>code: {code}</div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
