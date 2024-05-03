import Nav from "./Nav";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function Layout(props: Props) {
  return (
    <div>
      <Nav />
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
}

export default Layout;
