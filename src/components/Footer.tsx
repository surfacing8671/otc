import React from "react";
import { Flex, Text } from ".";
import { Link } from "react-router-dom";
import styled, { css, useTheme } from "styled-components";
import { Logo } from "./Navigation/styles";

const FooterContainer = styled.div`
  background: #7da9ff;
  padding-top: 10px;
  width: 100%;
`;

const CopyRight = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <Flex align="center" justify="space-between">
          <Logo to="/">
            <img src="/images/logo.png" />
          </Logo>

          <CopyRight>
            <Text size="20px" weight="600">
              Copyright 2023. VetMe
            </Text>
          </CopyRight>

          <Flex>
            <a href="https://twitter.com/VetmeToken?t=iydy_59nL4QSNB2YfQ8CIA&s=09">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2.5C10.3359 2.5 2.5 10.3359 2.5 20C2.5 29.6641 10.3359 37.5 20 37.5C29.6641 37.5 37.5 29.6641 37.5 20C37.5 10.3359 29.6641 2.5 20 2.5ZM28.4102 15.6914C28.4219 15.875 28.4219 16.0664 28.4219 16.2539C28.4219 21.9883 24.0547 28.5938 16.0742 28.5938C13.6133 28.5938 11.332 27.8789 9.41016 26.6484C9.76172 26.6875 10.0977 26.7031 10.457 26.7031C12.4883 26.7031 14.3555 26.0156 15.8438 24.8516C13.9375 24.8125 12.3359 23.5625 11.7891 21.8438C12.457 21.9414 13.0586 21.9414 13.7461 21.7656C12.7646 21.5662 11.8823 21.0331 11.2493 20.257C10.6162 19.4808 10.2714 18.5094 10.2734 17.5078V17.4531C10.8477 17.7773 11.5234 17.9766 12.2305 18.0039C11.6361 17.6078 11.1487 17.0711 10.8114 16.4415C10.4741 15.8119 10.2974 15.1088 10.2969 14.3945C10.2969 13.5859 10.5078 12.8477 10.8867 12.207C11.9762 13.5482 13.3357 14.6451 14.8768 15.4264C16.418 16.2078 18.1063 16.6561 19.832 16.7422C19.2188 13.793 21.4219 11.4062 24.0703 11.4062C25.3203 11.4062 26.4453 11.9297 27.2383 12.7734C28.2188 12.5898 29.1562 12.2227 29.9922 11.7305C29.668 12.7344 28.9883 13.582 28.0859 14.1172C28.9609 14.0234 29.8047 13.7812 30.5859 13.4414C29.9961 14.3086 29.2578 15.0781 28.4102 15.6914Z"
                  fill="black"
                />
              </svg>
            </a>
          </Flex>
        </Flex>
      </div>
    </FooterContainer>
  );
};

export default Footer;
