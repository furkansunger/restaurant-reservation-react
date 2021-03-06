import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  padding: 10px 16px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 0.4s ease;
  }
`;

export const NormalButton = styled.button`
  padding: 10px 16px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: #e45826;
    transition: 0.4s ease;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 42px;
`;

export const PrimaryText = styled.p`
  font-size: 17px;
  font-weight: 300;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 7px;
  border-radius: 12px;
  border: 1px solid gray;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 7px;
  border-radius: 12px;
  border: 1px solid gray;
  outline: none;
`;

export const AddressLabel = styled.address`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
`;

export const PhoneEmailLabel = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

export const SocialMedia = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const SocialMediaItem = styled.li`
  font-size: 18px;
  margin: 0 7px;
  list-style: none;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;

  &:hover {
    color: #e45826;
    transition: 0.4s ease;
  }
`;
