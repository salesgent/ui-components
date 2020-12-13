import { Card } from 'antd';
import styled from 'styled-components';

const imageLayout = ({ layout: { image } }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: ${image.size}%;
  }
  margin-bottom: ${image.mb}px;
`;

const titleLayout = ({ layout: { title } }) => `
  margin-bottom: ${title.mb}px;
`;

const descriptionLayout = ({ layout: { detail } }) => `
  margin-bottom: ${detail.mb}px;
`;

export const StyledCardProductContainer = styled(Card)`
  text-align: center;

  .ant-card-cover {
    ${imageLayout}
  }

  .ant-card-body {
    padding: 15px;
    padding-top: 0px;
  }

  .ant-card-meta {
    margin-bottom: 6px;

    .ant-card-meta-title {
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-size: 14px;
      ${titleLayout}
    }

    .ant-card-meta-description {
      ${descriptionLayout};
    }
  }
`;
