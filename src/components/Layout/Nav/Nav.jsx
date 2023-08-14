import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as S from "./Styled";
import LogoIcon from "../../../assets/images/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import HorizonLine from "../../Layout/Line";
import { BsChat } from "react-icons/bs";

export default function Nav() {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const nav1Ref = useRef(null);
  const nav2Ref = useRef(null);
  const nav3Ref = useRef(null);

  return (
    <S.NavContainer>
      <S.NavLogo>
        <S.NavLogoImage src={LogoIcon} alt="Logo" />
      </S.NavLogo>
      <IoIosSearch className="search" />
      <HorizonLine width="50%" marginTop="1rem" />
      <BsChat className="chat" />
      <HorizonLine width="50%" marginTop="1rem" />

      {/* <S.NavItem onClick={() => scrollToRef(nav1Ref)}>nav1</S.NavItem>
      <S.NavItem onClick={() => scrollToRef(nav2Ref)}>nav2</S.NavItem>
      <S.NavItem onClick={() => scrollToRef(nav3Ref)}>nav3</S.NavItem> */}
    </S.NavContainer>
  );
}
