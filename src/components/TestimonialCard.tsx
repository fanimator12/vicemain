import { Card, CardContent, Typography } from "@mui/material";

interface TestimonialCardProps {
  testimonial: {
    opinion: string;
    name: string;
    location: string;
  };
}
const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{testimonial.opinion}</Typography>
      <br />
      <Typography variant="body2" gutterBottom>
        {testimonial.name}, {testimonial.location}
      </Typography>
    </CardContent>
  </Card>
);

export default TestimonialCard;
