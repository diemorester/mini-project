import { FaGoogle, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

export default function ContinueWith() {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="divider">OR</div>
      <div className="flex flex-col items-center gap-6 w-full">
        <div>Continue with</div>
        <div className="flex justify-center gap-10 w-full">
          <FaGoogle />
          <FaFacebook />
          <FaTwitter />
          <FaDiscord />
        </div>
      </div>
    </div>
  );
}
