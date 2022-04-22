import React from "react";
import styled from "styled-components";
import { themeColors } from "../../data/appColors";

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  max-height: 655px;
  background: ${({ theme }) => theme.black_80};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  .img {
    overflow: hidden;
  }
  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s linear;
    height: 200px;

    :hover {
      transform: scale(1.2);
    }
  }

  .content {
    padding: 1.3rem 1.9rem;
  }

  .light {
    font-size: 14px;
    color: ${({ theme }) => theme.white_30};
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  .heading {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: ${({ theme }) => theme.white_90};
    margin-bottom: 14px;
    text-transform: capitalize;
  }

  .content-top {
    margin-bottom: 10px;
  }
  .content-bottom {
    display: flex;
    flex-direction: column;

    & > a {
      margin-right: auto;
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    text-transform: capitalize;
  }

  .tag {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: ${({ theme }) => theme.white_80};
    text-transform: capitalize;
    margin: 0 7px 5px 0;
    border: 1px ${({ theme }) => theme.black_60} solid;
    border-radius: 9px;
    padding: 3px 5px;
    background: ${({ theme }) => theme.black_40};
  }
  .primary {
    color: ${({ theme }) => theme.secondary};
    text-transform: capitalize;
    border: 1px ${({ theme }) => theme.secondary}aa solid;
    border-radius: 9px;
    padding: 3px 15px;
    background: ${({ theme }) => theme.secondary}21;
    transition: all ease 0.3s;

    :hover {
      background: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.black_80};
    }
  }
  .project-action {
    display: flex;
    justify-content: space-between;
  }
`;

const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  color: ${({ theme }) => theme.white_60};
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
const ImgCard = ({ img, title, tags, link, type, desc, demo }) => {
  return (
    <Card className="image-card">
      <div className="img">
        <img
          src={
            img ||
            `https://images.unsplash.com/photo-1592179900370-57ae776846a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`
          }
          alt="card"
        />
      </div>
      <div className="content">
        <div className="content-top">
          <p className="light">{type || "Item"}</p>
          <p className="heading">{title || "Title"}</p>
          <DescriptionText className="thin description">{desc}</DescriptionText>
        </div>
        <div className="content-bottom">
          <div className="tags">
            {tags.map((tag, key) => (
              <p className="normal tag" key={key}>
                {tag}
              </p>
            ))}
          </div>

          <div className="project-action">
            <a href={link} className="link primary">
              Code
            </a>
            {demo && (
              // eslint-disable-next-line
              <a href={demo} target="_blank" className="link primary">
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ImgCard;
