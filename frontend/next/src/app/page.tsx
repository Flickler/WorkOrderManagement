import { Footer } from "@/components/footer";
import { LoginForm } from "@/components/login-form";
import { Modal } from "@/components/modal";

export default function Home() {
  return (
    <>
      <br />
      <Modal>
        <LoginForm/>
      </Modal>
      <Footer/>
    </>
  );
}