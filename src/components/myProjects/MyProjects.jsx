import React from "react";
import styles from "./MyProjects.module.css";
import Card from "../Card/Card";
import sociops from "../../images/Sociops.png";
import admin from "../../images/admin.png";
import seesight from "../../images/seesight.png";
import meals from "../../images/meals.jpg";
function MyProjects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.projectHeader}>Projects</h2>
        <p>
          These are some of the projects that I worked on durig my learning
          process
        </p>
      </div>
      <div className={styles.projectWrapper}>
        <div className={styles.cardsWrapper}>
          <Card
            desc={`This is my idea of touristic agency site with tours to most beautifle locations in Bosnia. This application uses Next.js for frontend and Node.js for backend. `}
            url={seesight}
            pageLink="https://seesight-next.vercel.app/"
            gitHub="https://github.com/ElDez28/Sightsee-Travel"
            two={true}
          ></Card>

          <Card
            desc={`This is a social network app with authentization, ablility to add posts
        along with pictures, with like, dislike, follow and unfollow
        funcionality and with fully functional chat. It's built with Node.js and React.js`}
            url={sociops}
            pageLink="https://sociopsapp.web.app"
            gitHub="https://github.com/ElDez28/SOCIOPS.git"
          ></Card>
          <Card
            desc={`This is a food ordering app that has the following funcionalities: Adding products to the cart, ordering products, paying for products using paypal, and updating and adding new products. It's build with Next.js and it uses SSR`}
            url={meals}
            pageLink="https://pizza-ordering-app-pink.vercel.app"
            gitHub="https://github.com/ElDez28/pizza-ordering-app"
          ></Card>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
