/* eslint-disable multiline-comment-style */
/* eslint-disable spaced-comment */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/// <reference types="vitest" />
// https://vitejs.dev/config/
export default defineConfig( {
  define : { "process.env": {} },
  plugins: [ react() ],
  resolve: { alias: { util: "util/" } },
  test   : { exclude: [ "**/node_modules/**" ] },
} );
