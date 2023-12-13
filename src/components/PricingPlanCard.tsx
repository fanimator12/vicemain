import { Card, CardContent, Typography, Button } from "@mui/material";

interface PricingPlanCardProps {
  plan: {
    name: string;
    price: string;
    features: string[];
    buttonVariant: "text" | "outlined" | "contained" | undefined;
    buttonText: string;
  };
}
const PricingPlanCard = ({ plan }: PricingPlanCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {plan.name}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {plan.price}
      </Typography>
      {plan.features.map((feature, idx) => (
        <Typography key={idx} variant="body2">
          {feature}
        </Typography>
      ))}
      {plan.buttonVariant == "contained" ? (
        <Button
          variant={plan.buttonVariant}
          style={{ marginTop: "10px", width: "100%" }}
          id="button"
        >
          {plan.buttonText}
        </Button>
      ) : (
        <Button
          variant={plan.buttonVariant}
          color="primary"
          style={{ marginTop: "10px", width: "100%" }}
        >
          {plan.buttonText}
        </Button>
      )}
    </CardContent>
  </Card>
);

export default PricingPlanCard;
