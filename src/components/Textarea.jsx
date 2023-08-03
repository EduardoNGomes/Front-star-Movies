import React, { useState } from 'react'

export function Textarea({ placeholder, ...rest }) {
  const [text, setText] = useState('')

  function autoresize(e) {
    e.target.style.height = `w-[${e.target.scrollHeight}px]`
  }

  return (
    <textarea
      className="mt-4 h-auto max-h-60 min-h-[20rem] w-full resize-none overflow-y-auto rounded-xl border border-solid border-mirage-950  bg-BG-900 p-5 text-gray-400"
      onInput={(e) => autoresize(e)}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  )
}
