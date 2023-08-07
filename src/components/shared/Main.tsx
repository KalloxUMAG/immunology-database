import AsideLink from "./AsideLink";
import AsideTitle from "./AsideTitle";
import {ReactComponent as AlignmentIcon} from "../../assets/alignent.svg";
import {ReactComponent as HomeIcon} from "../../assets/home.svg";
import {ReactComponent as InteractionIcon} from "../../assets/interaction.svg";
import {ReactComponent as ListIcon} from "../../assets/list.svg";
import {ReactComponent as SummaryIcon} from "../../assets/summary.svg";
import {ReactComponent as SearchIcon} from "../../assets/search.svg";
import styles from "./Main.module.css";

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <AsideTitle title="Information" />
        <AsideLink to={"/"} Icon={HomeIcon} text="Home" />

        <AsideTitle title="Antibodies" />
        <AsideLink to={"/antibodies"} Icon={SummaryIcon} text="Summary" />
        <AsideLink to={"/antibodies/list"} Icon={ListIcon} text="List" />
        <AsideLink to={"/antibodies/search"} Icon={SearchIcon} text="Advanced Search" />

        <AsideTitle title="Antigens" />
        <AsideLink to={"/antigens"} Icon={SummaryIcon} text="Summary" />
        <AsideLink to={"/antigens/list"} Icon={ListIcon} text="List" />
        <AsideLink to={"/antigens/search"} Icon={SearchIcon} text="Advanced Search" />

        <AsideTitle title="Epitopes" />
        <AsideLink to={"/epitopes"} Icon={SummaryIcon} text="Summary" />
        <AsideLink to={"/epitopes/list"} Icon={ListIcon} text="List" />
        <AsideLink to={"/epitopes/search"} Icon={SearchIcon} text="Advanced Search" />

        <AsideTitle title="Tools" />
        <AsideLink to={"/tools/alignment"} Icon={AlignmentIcon} text="Alignment" />
        <AsideLink
          to={"/tools/interactions_predict"}
          Icon={InteractionIcon}
          text="Interaction Prediction"
        />
        <AsideLink to={"/tools/epitopes_predict"} Icon={SearchIcon} text="Epitope Prediction" />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Main;
