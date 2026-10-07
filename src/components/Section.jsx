export default function Section({ id, title, intro, children, alt }) {
  return (
    <section id={id} className={`section${alt ? ' alt' : ''}`} aria-labelledby={`${id}-t`}>
      <div className="wrap">
        <header className="sec-head reveal"><h2 id={`${id}-t`}>{title}</h2>{intro && <p>{intro}</p>}</header>
        {children}
      </div>
    </section>
  )
}
