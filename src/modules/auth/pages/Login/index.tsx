import { LoginActionSection, LoginInfoSection } from "@auth/components";
import { Container } from "@common/components";

export const LoginPage = () => {
  return (
    <Container
      dots
      dotsColor="muted"
      className="grid min-h-screen w-full grid-cols-1 bg-primary lg:grid-cols-[minmax(0,1.1fr)_minmax(440px,0.9fr)]"
    >
      <LoginInfoSection />
      <LoginActionSection />
    </Container>
  );
};
