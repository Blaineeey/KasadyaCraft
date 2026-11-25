/**
 * Inline script rendered at the start of <body>: sets <html data-time> before
 * first paint so there is no flash.
 * - If the visitor picked day or night before (localStorage 'kc-time'), use it.
 * - Otherwise the sky follows their own clock: day from 06:00 to 17:59, night otherwise.
 * Must stay tiny and never throw (storage can be blocked). Server component on
 * purpose (no 'use client'), so React never re-renders the script on the client.
 * Owner: INTERACTIVITY ENGINEER.
 */
const KEY = 'kc-time' // keep in sync with TIME_STORAGE_KEY in TimeOfDay.tsx

const code = `(function(){var t=null;try{t=localStorage.getItem('${KEY}')}catch(e){}if(t!=='day'&&t!=='night'){var h=new Date().getHours();t=h>=6&&h<18?'day':'night'}document.documentElement.setAttribute('data-time',t)})()`

export default function TimeOfDayScript() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
