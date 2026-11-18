"use client"

import { useEffect, useRef, useState } from "react"

const MAX_WAIT_MS = 5000 // if the GIF is slow or fails, don't hold the page hostage

/**
 * Intro GIF shown on every page load. The dark overlay is in the server HTML so it
 * covers the page immediately; the play/fade timing (globals.css) only starts once
 * the GIF has actually loaded, so visitors always see the whole clip before the
 * slow fade into the site. Skip / click jumps to a quicker fade.
 */
export default function IntroOverlay() {
  const imgRef = useRef<HTMLImageElement>(null)
  const [playing, setPlaying] = useState(false)
  const [skipped, setSkipped] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // The GIF may already have loaded before React hydrated.
    if (imgRef.current?.complete) setPlaying(true)
    const fallback = window.setTimeout(() => setPlaying(true), MAX_WAIT_MS)
    return () => window.clearTimeout(fallback)
  }, [])

  if (done) return null

  return (
    <div
      className={`intro ${playing ? "intro--playing" : ""} ${skipped ? "intro--skipped" : ""}`}
      onClick={() => setSkipped(true)}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setDone(true)
      }}
      aria-hidden="true"
    >
      <div className="intro__frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          className="intro__media"
          src="/intro.gif"
          alt=""
          fetchPriority="high"
          onLoad={() => setPlaying(true)}
          onError={() => setPlaying(true)}
        />
      </div>
      <div className="intro__progress" />
      <button
        type="button"
        className="intro__skip"
        onClick={(event) => {
          event.stopPropagation()
          setSkipped(true)
        }}
      >
        Skip
      </button>
    </div>
  )
}
