"use client";

import { useEffect, useState } from "react";

import styles from "./Main.module.css";
import Image from "next/image";

const Main = () => {
  const [nav, setNav] = useState("about");

  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setScrollVal(window.scrollY);
      },
      { passive: true }
    );
  });

  useEffect(() => {
    if (scrollVal >= 280) {
      setNav("experience");
    } else {
      setNav("about");
    }

    if (scrollVal >= 1080) {
      setNav("projects");
    }
  }, [scrollVal]);

  const aboutClick = () => {
    document.documentElement.scrollTop = 0;
  };

  const experienceClick = () => {
    document.documentElement.scrollTop = 280;
  };

  const projectClick = () => {
    document.documentElement.scrollTop = 1080;
  };

  return (
    <div className={styles.main_inner}>
      <div className={styles.main_inner_container}>
        <div className={styles.right}>
          <div className={styles.right_top}>
            <h3>ABOUT</h3>
            <p>
              Back in 2021, I decided to try my hand at creating website UI and
              turned into the rabbit hole of coding and web development.
              Fast-forward to today, and I’ve had the privilege of building
              software for an <span>advertising agency</span>, a{" "}
              <span>start-up</span> and a <span>huge corporation</span>.
            </p>
            <p>
              My main focus these days is building products and leading projects
              for my clients. In my free time I used to learn new things about
              coding and technologies from open source platforms.
            </p>
            <p>
              When I’m not at the computer, Is usually travel or hanging out
              with friends.
            </p>
          </div>
          <div className={styles.right_bottom}>
            <div className={styles.right_bottom_experience}>
              <h3>EXPERIENCE</h3>
              <div className={styles.experience_card}>
                <div className={styles.experience_card_left}>
                  OCT 2021 - PRESENT
                </div>
                <div className={styles.experience_card_right}>
                  <h3>Freelance Developer</h3>
                  <p>
                    Developing and styling interactive web apps and websites.
                  </p>
                  <div className={styles.links_container_card}>
                    <a target="blank" href="https://www.pazherigroup.in/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>Pazheri Group</p>
                    </a>
                    <a target="blank" href="https://avf.vercel.app/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>avf</p>
                    </a>
                  </div>
                  <div className={styles.capsules_container_card}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                  </div>
                </div>
              </div>
              <div className={styles.experience_card}>
                <div className={styles.experience_card_left}>
                  NOV 2021 - MAY 2023
                </div>
                <div className={styles.experience_card_right}>
                  <h3>Front-End Developer | Arclif Inc</h3>
                  <p>
                    Developing and designing interactive web apps and websites.
                    Provide leadership within engineering department through
                    close collaboration, knowledge shares and mentorship.
                  </p>
                  <div className={styles.links_container_card}>
                    <a target="blank" href="https://www.arclif.com/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>ARCLIF</p>
                    </a>
                    <a target="blank" href="https://agriha.com/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>AGRIHA</p>
                    </a>
                    <a target="blank" href="https://rone-demo.vercel.app/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>rONE</p>
                    </a>
                    <a
                      target="blank"
                      href="https://yazeenshiras.github.io/AITA/"
                    >
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>AITA</p>
                    </a>
                  </div>
                  <div className={styles.capsules_container_card}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                  </div>
                </div>
              </div>
              <div className={styles.experience_card}>
                <div className={styles.experience_card_left}>
                  JAN 2021 - AUG 2021
                </div>
                <div className={styles.experience_card_right}>
                  <h3>Front-End Developer Intern | Symptots </h3>
                  <p>
                    Looked at website development and designing. Explore various
                    Front-End technologies.
                  </p>
                  <div className={styles.links_container_card}>
                    <a target="blank" href="https://faxon-inyazn.web.app/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>FAXON</p>
                    </a>
                    <a target="blank" href="https://picsearch-inyazn.web.app/">
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>PICSEARCH</p>
                    </a>
                    <a
                      target="blank"
                      href="https://covid-19-tracker-4404c.web.app/"
                    >
                      <Image
                        src="/link.svg"
                        width={25}
                        height={25}
                        alt="link"
                      />
                      <p>COVID TRACKER</p>
                    </a>
                  </div>
                  <div className={styles.capsules_container_card}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_bottom_projects}>
              <h3>PROJECTS</h3>
              <a
                target="blank"
                href="https://www.pazherigroup.in/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/pazheri.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Pazheri Group</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    Website of pazheri group for tracking business and money
                    management
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://www.arclif.com/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/arclif.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Arclif(v4)</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    Landing page of Arclif - online architecture and housing
                    platform.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://rone-demo.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/rone.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>rONE</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Webapp for rone - real one.</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://search-architect-arclif.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/searchArchitect.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Search Architect</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Website of Arclif for find Architects.</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://arclif-landingpage.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/arclifv3.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Arclif(v3)</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    Landing page of Arclif - online architecture and housing
                    platform.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://avf.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/avf.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>avf</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Landing page for avf - Ajith Vinayaka Films.</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://yazeenshiras.github.io/AITA/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/AITA.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>AITA</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    Landing page of AITA - Arclif India Thesis Awards, conducted
                    by Arclif inc.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://yazeenshiras.github.io/inyazn/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/inyazn.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Muhammed Yaseen(v2)</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    An old portfolio site build with HTML,CSS and JavaScript
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://faxon-inyazn.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/Faxon.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>FAXON</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    An e-commerce app which has product as clothing for
                    different categories.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://covid-19-tracker-4404c.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/covid-19.jpeg" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>COVID-19 TRACKER</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    Live COVID-19 TRACKER web application. This app provides the
                    covid-19 live statistics in Worldwide.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://furni-shop-inyazn.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/furni.shop.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>furni.shop</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    Landing page which has product as furnitures. This is a
                    sample frontend design of the app.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://picsearch-inyazn.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/PicSearch.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>PicSearch</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    An image search website. search what you want with this
                    site, made with unsplash API.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://tic-tac-toe-yazn.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/tic-tac-toe.jpeg" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>tic-tac-toe</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    This is Tic Tac Toe game. The goal of the game is for
                    players to position their marks so that they make a
                    continuous line of three cells vertically, horizontally, or
                    diagonally.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>

              <a
                target="blank"
                href="https://make-music-inyazn.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/Make Music.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Make Music</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>
                    This is a music making app. You can produce beats by
                    clicking those pads.
                  </p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.left_top}>
            <div className={styles.left_one}>
              <h1>Muhammed Yaseen</h1>
            </div>
            <div className={styles.left_two}>
              <h2>Front-End Developer</h2>
              <h3>
                I build accessible, inclusive products and <br /> digital
                experiences for the web.
              </h3>
            </div>
            <div className={styles.left_three}>
              {nav === "about" ? (
                <div className={styles.nav_active}>
                  <span></span>
                  <p>ABOUT</p>
                </div>
              ) : (
                <div className={styles.nav_inactive} onClick={aboutClick}>
                  <span></span>
                  <p>ABOUT</p>
                </div>
              )}

              {nav === "experience" ? (
                <div className={styles.nav_active}>
                  <span></span>
                  <p>EXPERIENCE</p>
                </div>
              ) : (
                <div className={styles.nav_inactive} onClick={experienceClick}>
                  <span></span>
                  <p>EXPERIENCE</p>
                </div>
              )}

              {nav === "projects" ? (
                <div className={styles.nav_active}>
                  <span></span>
                  <p>PROJECTS</p>
                </div>
              ) : (
                <div className={styles.nav_inactive} onClick={projectClick}>
                  <span></span>
                  <p>PROJECTS</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.left_four}>
            <a href="tel:8075748492">
              <Image src="/phone.svg" width={25} height={25} alt="github" />
            </a>
            <a target="blank" href="https://github.com/YazeenShiras">
              <Image src="/github.svg" width={25} height={25} alt="github" />
            </a>
            {/* <a target="blank" href="https://www.instagram.com/mhd.yasnn/">
            <Image src="/instagram.svg" width={25} height={25} alt="instagram" />
          </a> */}
            <a
              target="blank"
              href="https://www.linkedin.com/in/muhammed-yaseen-294889207/"
            >
              <Image
                src="/linkedin.svg"
                width={25}
                height={25}
                alt="linkedIn"
              />
            </a>
            <a target="blank" href="https://wa.link/tv4jxm">
              <Image
                src="/whatsapp.svg"
                width={25}
                height={25}
                alt="whatsapp"
              />
            </a>
            <a target="blank" href="mailto:mhdyasndev@gmail.com">
              <Image src="/mail.svg" width={25} height={25} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
