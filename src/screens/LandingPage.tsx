import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";
import PricingPlanCard from "../components/PricingPlanCard";
import TestimonialCard from "../components/TestimonialCard";
import { companies } from "../dummydata/companies";
import features from "../dummydata/features";
import steps from "../dummydata/steps";
import pricingPlans from "../dummydata/pricing";
import testimonials from "../dummydata/testimonials";
import Footer from "../components/Footer";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Parallax pages={isMobile ? 4 : 3}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          marginTop: isMobile ? "-4em" : "-8em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={isMobile ? 1 : 3}
          style={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Grid
            item
            sm={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: isMobile ? 20 : 50,
            }}
          >
            <Grid container spacing={isMobile ? 1 : 2}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontFamily: "Arsenal Regular",
                  fontSize: "4rem",
                  lineHeight: "1.2",
                  color: "#023E8A",
                }}
              >
                Building the Future, Maintaining the Present
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontFamily: "Arsenal Regular",
                  fontWeight: 200,
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                  color: "#023E8A",
                }}
              >
                Welcome to the ultimate platform where your construction
                projects transform into long-term success stories. Upload your
                building details, and let us craft a tailored maintenance plan,
                keeping your structures in prime condition. Stay organized, stay
                informed, and stay ahead with our smart calendar and timely
                notifications.
              </Typography>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  pt: 1.2,
                  pb: 1.2,
                  pl: 5,
                  pr: 5,
                  textTransform: "capitalize",
                  fontSize: "15px",
                }}
                variant="contained"
                id="contained-button"
              >
                Get Started
              </Button>
              <Button
                sx={{
                  pt: 1.2,
                  pb: 1.2,
                  pl: 5,
                  pr: 5,
                  textTransform: "capitalize",
                  fontSize: "15px",
                }}
                variant="outlined"
                id="outlined-button"
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginTop: isMobile ? "2em" : 0 }}>
            {[1, 2, 3, 4].map((num) => (
              <Card
                key={num}
                style={{ marginBottom: isMobile ? "5px" : "10px" }}
              >
                <CardContent>
                  <Typography variant="h5">Card Title {num}</Typography>
                  <Typography variant="body2">Card description...</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </ParallaxLayer>

      <ParallaxLayer
        offset={isMobile ? 0.3 : 0.1}
        speed={0.5}
        style={{
          marginTop: isMobile ? "8em" : 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          style={{
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {companies.map((company, index) => (
            <Grid
              item
              xs={12}
              sm={8}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
              key={index}
            >
              <Typography
                key={index}
                variant="h6"
                style={{
                  fontFamily: "Amiko Bold",
                  fontWeight: 200,
                  fontSize: "2rem",
                  lineHeight: "1.5",
                  color: "#023E8A",
                  opacity: 0.5,
                }}
              >
                {company}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </ParallaxLayer>

      <ParallaxLayer
        offset={isMobile ? 0.9 : 0.6}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", textAlign: "center" }}>
          <Typography
            id="gradient-title"
            sx={{ fontSize: isMobile ? 30 : 50 }}
            variant="h4"
            gutterBottom
          >
            What We Offer?
          </Typography>
          <Typography variant="body1" gutterBottom>
            a sophisticated Building Maintenance Management System <br /> Our
            system is expertly crafted to revolutionize the management and
            maintenance of buildings and construction projects.
          </Typography>

          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={isMobile ? 2 : 1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", textAlign: "center" }}>
          <Typography
            id="gradient-title"
            sx={{ fontSize: isMobile ? 30 : 50 }}
            variant="h4"
            gutterBottom
          >
            How It Works?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Upload your building or construction site PDFs. Our intelligent
            system extracts key details to create a detailed maintenance plan.
            This plan is then integrated into a custom calendar, keeping you on
            track with all your maintenance tasks.
          </Typography>

          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <StepCard title={step.title} description={step.description} />
              </Grid>
            ))}
          </Grid>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={isMobile ? 2.5 : 1.5}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", textAlign: "center" }}>
          <Typography
            id="gradient-title"
            sx={{ fontSize: isMobile ? 30 : 50 }}
            variant="h4"
            gutterBottom
          >
            Our Plans Scale with Your Product
          </Typography>

          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PricingPlanCard
                  plan={{
                    name: plan.name,
                    price: plan.price,
                    features: plan.features,
                    buttonVariant: plan.buttonVariant,
                    buttonText: plan.buttonText,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={isMobile ? 2.9 : 1.9}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", textAlign: "center" }}>
          <Typography
            id="gradient-title"
            sx={{ fontSize: isMobile ? 30 : 50 }}
            variant="h4"
            gutterBottom
          >
            What Our Clients Say About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations.
          </Typography>

          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <TestimonialCard
                  testimonial={{
                    opinion: testimonial.opinion,
                    name: testimonial.name,
                    location: testimonial.location,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={isMobile ? 3.2 : 2.2}
        speed={0.5}
        style={{
          backgroundColor: "#001D3D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Grid
            container
            spacing={2}
            style={{
              maxWidth: "1200px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              id="gradient-title"
              sx={{ fontSize: isMobile ? 30 : 50 }}
              variant="h4"
              gutterBottom
            >
              Social Media Its Ways Of Our Excellence.
            </Typography>

            <Grid item>
              <TextField
                label="Enter your Email"
                variant="outlined"
                style={{ marginRight: "10px", color: "#0085FF" }}
              />
              <Button id="contained-button" variant="contained">
                Get Started
              </Button>
            </Grid>
          </Grid>
          <Divider className="divider" />

          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default LandingPage;
