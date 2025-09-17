import React, { useMemo } from 'react'
import { Editor } from '@monaco-editor/react'

const LANGUAGE_TO_MONACO = {
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  java: 'java',
  cpp: 'cpp',
  c: 'c'
}

const themeOptions = {
  automaticLayout: true,
  minimap: { enabled: false },
  fontSize: 14,
  fontLigatures: false,
  smoothScrolling: true,
  scrollBeyondLastLine: false,
  wordWrap: 'on'
}

const CodeEditor = ({ language, value, onChange, className = "" }) => {
  const monacoLanguage = useMemo(() => LANGUAGE_TO_MONACO[language] || 'javascript', [language])

  return (
    <div className={`${className}`}>
      <Editor
        className="code-editor"
        theme="vs-dark"
        height="100%"
        language={monacoLanguage}
        value={value}
        onChange={(val) => onChange?.(val || '')}
        options={{
          ...themeOptions,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          lineNumbers: 'on',
          roundedSelection: false,
          scrollbar: {
            vertical: 'auto',
            horizontal: 'auto',
            useShadows: false,
            verticalHasArrows: false,
            horizontalHasArrows: false,
          },
          cursorStyle: 'line',
          cursorBlinking: 'blink',
          selectOnLineNumbers: true,
          renderLineHighlight: 'line',
          folding: true,
          foldingStrategy: 'indentation',
          showFoldingControls: 'always',
          bracketPairColorization: { enabled: true },
          guides: {
            bracketPairs: true,
            indentation: true,
          },
        }}
      />
    </div>
  )
}

export default CodeEditor


