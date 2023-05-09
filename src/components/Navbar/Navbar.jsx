import { SimpleGrid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsFillFolderFill } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
const Navbar = () => {
  const tabsArr = [
    {
      name: "Experience",
      icon: <AiOutlineRise />,
      url: "/",
      activeClass: "active__exp",
    },
    {
      name: "Projects",
      icon: <BsFillFolderFill />,
      url: "/projects",
      activeClass: "active__proj",
    },
    {
      name: "Blogs",
      icon: <MdLibraryBooks />,
      url: "/blogs",
      activeClass: "active__blog",
    },
  ];
  return (
    <>
      <SimpleGrid columns={{ md: 3, sm: 1 }} spacing={"10px"} width={"100%"}>
        {tabsArr.map((tab) => (
          <NavLink
            to={tab.url}
            key={tab.name}
            className={({ isActive }) =>
              isActive ? `active link__gray` : "link__gray"
            }
          >
            {tab.icon}&nbsp; {tab.name}
          </NavLink>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Navbar;
