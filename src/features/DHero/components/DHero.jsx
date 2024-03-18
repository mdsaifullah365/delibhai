import vehicles from "../../../data/vehicles";
import Categories from "../../../layouts/Categories";
import Container from "../../../layouts/Container";
import Title from "../../../layouts/Title";

export default function DHero() {
  return (
    <div className="bg-secondary min-h-screen">
      <Container>
        <Title color="white" title="ডেলিভাই বাহন" />
        <Categories categories={vehicles} />
      </Container>
    </div>
  );
}