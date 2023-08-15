import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import reset from "styled-reset";
import ExpertList from "./pages/Expert/ExpertList";
import ExpertDetail from "./pages/Expert/ExpertDetail";
import { CardData } from "./pages/Expert/ExpertData";
import Nav from "./components/Layout/Nav/Nav";

/* 추가적인 리셋이나 스타일 조정을 여기에 추가할 수 있습니다. */
const GlobalStyleComponent = createGlobalStyle`
  ${reset}
  /* 추가적인 리셋이나 스타일 조정을 여기에 추가할 수 있습니다. */
  width: 1920px;
  height: 1080px;
  background-color: blue;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <>
      <GlobalStyleComponent />
      <Nav />
      <Routes>
        {/* <Route index element={<KMap />} /> */}
        {/* <Route index element={<Post />} />
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route index element={<KMap />} />
        {/* <Route index element={<Post />} /> */}
        {/* <Route path="/" element={<Layout />} /> */}
        {/* <Route index element={<Home />} /> */}
        {/* <Route index element={<KMap />} /> */}
        {/* <Route index element={<Signin />} /> */}
        {/* <Route index element={<Post />} /> */}
        {/* <Route index element={<Signup />}></Route> */}
        {/* <Route index element={<ExpertSignup />}></Route> */}
        {/* #4 변호사 페이지 렌더링 코드 */}
        <Route index element={<ExpertList />}>
          <Route
            path="detail/:Id"
            element={<ExpertDetail CardData={CardData} />}
          />
        </Route>
      </Routes>
    </>
  );
}
export default App;
