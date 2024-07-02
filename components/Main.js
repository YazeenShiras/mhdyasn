/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Main.module.css";

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
              website or web application for an <span>advertising agency</span>,
              a <span>start-up</span> and a <span>huge corporation</span>.
            </p>
            <p>
              My main focus these days is building leading projects for my
              clients. In my free time I used to learn new things about coding
              and technologies from open source platforms.
            </p>
            <p>Currently located in Dubai, UAE.</p>
          </div>
          <div className={styles.right_bottom}>
            <div className={styles.right_bottom_experience}>
              <h3>EXPERIENCE</h3>
              <div className={styles.experience_card}>
                <div className={styles.experience_card_left}>
                  OCT 2021 - PRESENT
                </div>
                <div className={styles.experience_card_right}>
                  <h3>Freelance Web Developer</h3>
                  <p>
                    Developing and styling interactive web apps and websites.
                  </p>
                  <div className={styles.capsules_container_card}>
                    <div className={styles.capsule_card}>Next.js</div>
                    <div className={styles.capsule_card}>React.js</div>
                    <div className={styles.capsule_card}>Node.js</div>
                    <div className={styles.capsule_card}>Express.js</div>
                    <div className={styles.capsule_card}>Mongodb</div>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </div>
              <div className={styles.experience_card}>
                <div className={styles.experience_card_left}>
                  NOV 2021 - MAR 2024
                </div>
                <div className={styles.experience_card_right}>
                  <h3>Front-End Developer | Arclif Inc</h3>
                  <p>
                    Developing and designing interactive web apps and websites.
                    Provide leadership within technical department through close
                    collaboration, knowledge shares and mentorship.
                  </p>
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
                  <h3>Web Developer Trainee | Brototype </h3>
                  <p>
                    Looked at website development and designing. Explore various
                    web development technologies including MERN.
                  </p>
                  <div className={styles.capsules_container_card}>
                    <div className={styles.capsule_card}>React.js</div>
                    <div className={styles.capsule_card}>Node.js</div>
                    <div className={styles.capsule_card}>Express.js</div>
                    <div className={styles.capsule_card}>Mongodb</div>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_bottom_projects}>
              <h3>PROJECTS</h3>
              <Link
                target="_blank"
                href="https://linesandgrains.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/lng.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Lines and Grains</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Landing Page</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>Express</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>Mongodb</div>
                  </div>
                </div>
              </Link>

              <Link
                target="_blank"
                href="https://icebyyazn.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/ice.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Ice By Yazn</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>E-commerce web application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>Express</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>Mongodb</div>
                  </div>
                </div>
              </Link>

              <Link
                target="_blank"
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
                  <p>Money management web application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>Express</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>Mongodb</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Landing page</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>Next</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Landing page</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Landing page</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Web Application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Web Application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
                target="blank"
                href="https://avf.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/avf.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Ajith Vinayaka Films</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Landing page</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
                target="blank"
                href="https://recipe-app-yazn.vercel.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/Recipe.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Recipe Finder</h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Web application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Portfolio website</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>E-commerce web application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Web application</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>React</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Landing page</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Website</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
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
                  <p>Entertainment website</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>

              <Link
                target="blank"
                href="https://make-music-inyazn.web.app/"
                className={styles.right_project_card}
              >
                <div className={styles.right_project_card_image}>
                  <img src="/projects/Make Music.png" alt="" />
                </div>
                <div className={styles.right_project_card_details}>
                  <div className={styles.right_project_card_name}>
                    <h3>Make Music Beats </h3>
                    <Image
                      src="/arrow.svg"
                      width={25}
                      height={25}
                      alt="arrow"
                    />
                  </div>
                  <p>Entertainment website</p>
                  <div className={styles.right_project_card_capsules}>
                    <div className={styles.capsule_card}>HTML</div>
                    <div className={styles.capsule_card}>CSS</div>
                    <div className={styles.capsule_card}>JavaScript</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.left_top}>
            <div className={styles.left_one}>
              <h1>Muhammed Yaseen</h1>
            </div>
            <div className={styles.left_two}>
              <h2>Web Developer</h2>
              <h3>
                I build accessible, inclusive products and digital experiences
                for the web. I specialize in the MERN stack, a powerful
                combination of technologies for full-stack development.
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
            <Link href="tel:+971569325351">
              <Image src="/phone.svg" width={25} height={25} alt="phone" />
            </Link>
            <Link target="_blank" href="mailto:mhdyasnshiras@gmail.com">
              <Image src="/mail.svg" width={25} height={25} alt="whatsapp" />
            </Link>
            <Link target="_blank" href="https://github.com/YazeenShiras">
              <Image src="/github.svg" width={25} height={25} alt="github" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/inyazn">
              <Image
                src="/instagram.svg"
                width={25}
                height={25}
                alt="instagram"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/muhammed-yaseen-294889207/"
            >
              <Image
                src="/linkedin.svg"
                width={25}
                height={25}
                alt="linkedIn"
              />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=971569325351"
            >
              <Image
                src="/whatsapp.svg"
                width={25}
                height={25}
                alt="whatsapp"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer_container}>Thankyou!</div>
    </div>
  );
};

export default Main;
