import Content from "../../components/Content";
import ContentExtra from "../../components/ContentExtra";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { API_URL, site } from "../../config";

export default function MainPage() {
  return (
    <div className="">
      <Header />

      <Content />

      <ContentExtra />

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query: { adminId, posterId } }) {
  const url = `${API_URL}/${site}/${adminId}/${posterId}`;

  // console.log(url);

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
