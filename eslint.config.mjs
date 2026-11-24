import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __dirname = dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory: __dirname })

/** Standard Next.js 15 flat config (core-web-vitals includes jsx-a11y rules). */
const eslintConfig = [
  { ignores: ['.next/**', '.next-verify/**', 'node_modules/**', 'next-env.d.ts', 'scripts/**'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
