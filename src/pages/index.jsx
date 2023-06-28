import { Wrapper } from "../layout";
import HomeFiveMain from '../components/homes/home-5';
import SEO from "../components/seo";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Digital Cappuccino'} />
      <HomeFiveMain />
    </Wrapper>
  )
}
