import { Card, CardContent, Typography } from "@mui/material";

interface StepCardProps {
  title: string;
  description: string;
}
const StepCard = ({ title, description }: StepCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default StepCard;
