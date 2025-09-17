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

const CodeEditor = ({ language, value, onChange, className }) => {
  const monacoLanguage = useMemo(() => LANGUAGE_TO_MONACO[language] || 'javascript', [language])

  return (
    <div className={className}>
      <div className="border border-[#3a3a3a] rounded-md overflow-hidden">
        <Editor
          className="code-editor"
          theme="vs-dark"
          height="320px"
          language={monacoLanguage}
          value={value}
          onChange={(val) => onChange?.(val || '')}
          options={themeOptions}
        />
      </div>
    </div>
  )
}

export default CodeEditor


