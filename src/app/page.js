
// export default function Page() {
//   return '...'
// }

import { Layout } from "@/partials";
// import './index.css'
import Header from "./home/header";
import Courses from "./home/courses";
import Chooseus from "./home/chooseus";
// import Testimony from "./home/testimony";
// import KnowledgeCenter from "./home/knowledge-center";
import Transform from "./home/transform";

export const metadata = {
  title: 'Mahorix',
}
export default function Home() {
  return (
    <div className="">
    <Layout className={'flex flex-col gap-[40px]'}  >
       <Header />
       <Courses />
       <Chooseus />
       {/* <Testimony /> */}
       {/* <KnowledgeCenter /> */}
       <Transform />
    </Layout>
   </div>
  );
}
