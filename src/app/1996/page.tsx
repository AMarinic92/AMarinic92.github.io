import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import "./retro.css";
import {
  CursorTrail,
  HitCounter,
  MidiPlayer,
} from "@/components/retro-effects";
import {
  site,
  profile,
  education,
  experience,
  projects,
  skills,
  hobbies,
  kommandosPhotos,
  coffinYouTubeId,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "★·.·´¯`·.·★ ANDREW'S KOOL HOME PAGE ★·.·´¯`·.·★",
  description: "Welcome 2 my corner of the World Wide Web!!",
  robots: { index: false },
};

// The konami page: same résumé data, rendered like it's hosted on
// Geocities/Area51/8042. Reached with ↑↑↓↓←→←→ B A Enter.
export default function Retro() {
  return (
    <div className="geo">
      <CursorTrail />

      <div className="geo-marquee">
        <span>
          ★彡 WELCOME 2 ANDREW&apos;S HOME PAGE!!! 彡★ · U R VISITOR NUMBER
          MANY · THIS SITE IS BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 AT
          800×600 · SIGN MY GUESTBOOK!!! · NEW!! NEW!! NEW!! · 彡★
        </span>
      </div>

      <h1>{site.name}</h1>
      <p className="geo-blink" style={{ color: "#ff0000", fontWeight: "bold" }}>
        ~*~ {site.tagline} ~*~
      </p>
      <p>
        <span className="geo-construction">🚧</span> THIS PAGE IS UNDER
        CONSTRUCTION <span className="geo-construction">🚧</span>
      </p>
      <p>
        <MidiPlayer />
        <Link href="/" className="geo-btn">
          🚪 ESCAPE TO 2026
        </Link>
      </p>

      <hr />

      <div className="geo-cols">
        <aside>
          <div className="geo-box">
            <h2>Visitors</h2>
            <p style={{ textAlign: "center" }}>
              <HitCounter />
              <br />
              <small>peeple have been here!!</small>
            </p>
          </div>

          <div className="geo-box">
            <h2>Kool Links</h2>
            <ul>
              <li>
                <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                  My GitHub
                </a>
              </li>
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  Sign my guestbook
                </a>
              </li>
              <li>
                <Link href="/resume">Résumé (boring ver.)</Link>
              </li>
              <li>
                <Link href="/portfolio">Photo album</Link>
              </li>
            </ul>
          </div>

          <div className="geo-box">
            <h2>Web Ring</h2>
            <p style={{ textAlign: "center" }}>
              ◄ prev &nbsp;|&nbsp; <span className="geo-blink">RANDOM</span>{" "}
              &nbsp;|&nbsp; next ►
              <br />
              <small>The Guys Who Solder Ring</small>
            </p>
          </div>

          <div className="geo-box">
            <h2>Hobbys</h2>
            <p>
              {hobbies.map((h) => (
                <span key={h} className="geo-badge">
                  {h}
                </span>
              ))}
            </p>
          </div>
        </aside>

        <main>
          <div className="geo-box">
            <h2>About Me!!</h2>
            <p>{profile}</p>
          </div>

          <div className="geo-box">
            <h2>My Projekts</h2>
            {projects.map((p) => (
              <div key={p.title}>
                <h3>
                  ► {p.title}{" "}
                  <small style={{ color: "#00ffff" }}>[{p.period}]</small>
                </h3>
                <p>
                  <em>{p.subtitle}</em>
                  <br />
                  {p.description}
                  {p.href && (
                    <>
                      {" "}
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        &lt;&lt; CLICK HERE &gt;&gt;
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="geo-box">
            <h2>Where I Have Worked</h2>
            <dl>
              {experience.map((e) => (
                <div key={e.role}>
                  <dt>
                    ★ {e.role} — {e.org} <small>({e.period})</small>
                  </dt>
                  <dd>{e.blurb}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="geo-box">
            <h2>Skool</h2>
            <dl>
              {education.map((ed) => (
                <div key={ed.school}>
                  <dt>
                    ★ {ed.degree} <small>({ed.period})</small>
                  </dt>
                  <dd>
                    {ed.detail}
                    <br />
                    {ed.school}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="geo-box">
            <h2>Stuff I Kan Do</h2>
            {skills.map((group) => (
              <p key={group.label}>
                <strong style={{ color: "#ffff00" }}>{group.label}:</strong>
                <br />
                {group.items.map((s) => (
                  <span key={s} className="geo-badge">
                    {s}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="geo-box">
            <h2>My Multimedia Zone</h2>
            <p style={{ textAlign: "center" }}>
              <Image
                src="/portfolio/sword.gif"
                alt="A sword modelled and animated in Blender"
                width={220}
                height={276}
                unoptimized
                className="geo-frame"
              />
              <br />
              <small>*~* made in Blender, 100% by me *~*</small>
            </p>
            <h3>The Coffin (animatronik!)</h3>
            <p>
              A small animatronic I built for Halloween on the SAME51 dev board,
              driving pneumatic relays and a piston. Randomly timed for maximum
              spookyness!!
            </p>
            <p style={{ textAlign: "center" }}>
              <iframe
                className="geo-frame geo-video"
                width={400}
                height={225}
                src={`https://www.youtube.com/embed/${coffinYouTubeId}`}
                title="The Coffin animatronic"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </p>
            <h3>Warhammer 40K: Kommandos</h3>
            <p>A squad of Orks I painted, model by model.</p>
            <div className="geo-gallery">
              {kommandosPhotos.slice(0, 6).map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="A painted Ork Kommando mini"
                  width={104}
                  height={104}
                />
              ))}
            </div>
            <p style={{ textAlign: "center" }}>
              <Link href="/portfolio">*** MORE PIX ON PAGE 2!!! ***</Link>
            </p>
          </div>
        </main>
      </div>

      <hr />

      <footer>
        <p>
          <span className="geo-blink">NEW!!</span> Last updated 96/12/25 ·
          Made with Notepad · <a href="mailto:andrew.marinic92@gmail.com">E-mail me!</a>
        </p>
        <p>
          <small>
            © 1996 {site.name}. This page has been optimized for a 28.8k modem.
          </small>
        </p>
      </footer>
    </div>
  );
}
