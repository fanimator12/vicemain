import { Card, CardContent, Typography } from "@mui/material";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card>
    <CardContent style={{ textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        {icon}
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default FeatureCard;
