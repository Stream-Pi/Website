import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../assets/scss/fonts.scss";
import "../assets/scss/captcha.scss";
import "../assets/scss/loader.scss";
import "../assets/scss/theme.scss";
import "../assets/scss/App.scss";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import {
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faJava,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faEnvelope,
  faQuestionCircle,
  faComment,
  faMoon,
  faSun,
  faUser,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { useHashChange } from "@util";
import { setThemeConfig } from "@theme";
import { ExternalPaths } from "@helpers/ExternalHelper";
import StreamPiFooter from "@StreamPi/Footer";
import StreamPiNavbar from "@StreamPi/Navbar";
import StreamPiNavItem from "@StreamPi/NavItem";
import ThemeSwitch from "@components/ThemeSwitch";

library.add(
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faJava,
  faPatreon,
  faGlobe,
  faEnvelope,
  faQuestionCircle,
  faComment,
  faMoon,
  faSun,
  faUser,
  faDownload
);

declare global {
  namespace NodeJS {
    interface Global {
      isLightMode: boolean;
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [path, setPath] = useState("");
  const [theme, setTheme] = useState("dark");
  const router = useRouter();
  useHashChange();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setPath(router.asPath);
      setTheme(() => {
        const theme = localStorage.getItem("theme") || "dark";
        global.isLightMode = theme === "light";
        return theme;
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const theme = prev === "light" ? "dark" : "light";
      setThemeConfig(theme);
      global.isLightMode = theme === "light";
      return theme;
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="A robust opensource macro keyboard, the StreamPi is a full fledged software designed for the Raspberry Pi, built with JavaFX, and with a want to make better peripherals more accessible."
        />
        <meta
          property="og:description"
          content="A robust opensource macro keyboard, the StreamPi is a full fledged software designed for the Raspberry Pi, built with JavaFX, and with a want to make better peripherals more accessible."
        />
      </Head>
      {!ExternalPaths.has(path.replace(/\/+/gm, "")) && (
        <StreamPiNavbar navVariant={theme as "light" | "dark"}>
          <StreamPiNavItem to="/">Home</StreamPiNavItem>
          <StreamPiNavItem to="/about">About</StreamPiNavItem>
          <StreamPiNavItem to="/features">Features</StreamPiNavItem>
          <StreamPiNavItem to="/contact">Contact</StreamPiNavItem>
          <StreamPiNavItem to="/install">Install</StreamPiNavItem>
          <ThemeSwitch propClick={toggleTheme} theme={theme} />
        </StreamPiNavbar>
      )}
      <Container className="animate__animated animate__fadeIn" fluid>
        <Component {...pageProps} />
      </Container>
      <StreamPiFooter />
    </>
  );
}

export default MyApp;
