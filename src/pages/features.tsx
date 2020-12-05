import Head from "next/head";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { chunkedFeatures, chunkedPlanFeatures } from "@helpers/FeatureHelper";

const FeatureRow: React.FC = ({ children }) => {
  return (
    <Row className="pt-5 text-center animate__animated animate__fadeInUp">
      {children}
    </Row>
  );
};

const FeatureCol: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <Col md={4}>
      <h3>{title}</h3>
      <p>{children}</p>
    </Col>
  );
};

const StreamPiFeatures: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>StreamPi Features</title>
        <meta property="og:title" content="StreamPi Features" />
        <meta property="og:url" content="https://stream-pi.com/features" />
      </Head>
      {/* title */}
      <Row className="pt-3 animate__animated animate__fadeIn">
        <Col className="text-center">
          <h1>What makes the StreamPi Great?</h1>
        </Col>
      </Row>
      {/* existing features */}
      {chunkedFeatures.map((feat, idx) => (
        <FeatureRow key={`implementedRow${idx}`}>
          {feat.map((item, idxx) => (
            <FeatureCol key={`row${idx}Imp${idxx}`} title={item.title}>
              {item.desc}
            </FeatureCol>
          ))}
        </FeatureRow>
      ))}
      {/* planned features */}
      <Row className="pt-5">
        <Col className="text-center animate__animated animate__fadeInUp">
          <h1>Planned Features</h1>
          <p className="mb-0">If it has API we'll give it a try!</p>
        </Col>
      </Row>
      {chunkedPlanFeatures.map((feat, idx) => (
        <FeatureRow key={`planRow${idx}`}>
          {feat.map((item, idxx) => (
            <FeatureCol key={`row${idx}Plan${idxx}`} title={item.title}>
              {item.desc}
            </FeatureCol>
          ))}
        </FeatureRow>
      ))}
    </React.Fragment>
  );
};

export default StreamPiFeatures;
